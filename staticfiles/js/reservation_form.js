<script>
      document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('reservation-form');
        const submitButton = document.getElementById('submit-btn');
        const termsCheckbox = document.getElementById('id_agreed_to_terms');
    
        const openingHours = {
            1: '11:30-14:00,18:00-23:00', // Monday
            2: '11:30-14:00,18:00-23:00', // Tuesday
            3: '11:30-14:00,18:00-23:00', // Wednesday
            4: '11:30-14:00,18:00-23:00', // Thursday
            5: '11:30-14:00,18:00-02:00', // Friday
            6: '18:00-02:00',             // Saturday
            0: 'closed'                  // Sunday
        };
    
        function validateName(name) {
            return name.trim().split(' ').length >= 2;
        }
    
        function validatePhone(phone) {
            const phoneNumberPattern = /^\+?[0-9]{10,15}$/;
            return phoneNumberPattern.test(phone);
        }
    
        function validateEmail(email) {
            const emailPattern = /^[^\s@]{2,}@([^\s@]+\.)+[^\s@]{2,}$/;
            return emailPattern.test(email);
        }
    
        function validateGuests(numGuests) {
            return !isNaN(numGuests) && numGuests >= 1 && numGuests <= 100;
        }
    
        function validateDate(selectedDate) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return selectedDate > today && selectedDate.getDay() !== 0;
        }
    
        function validateOccasion(occasion) {
            return occasion.trim().length >= 3;
        }
    
        function generateTimeSlots(start, end) {
            const slots = [];
            const startMinutes = timeToMinutes(start);
            const endMinutes = timeToMinutes(end);
            for (let minutes = startMinutes; minutes <= endMinutes; minutes += 15) {
                const hour = Math.floor(minutes / 60);
                const minute = minutes % 60;
                slots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
            }
            return slots;
        }
    
        function timeToMinutes(time) {
            const [hour, minute] = time.split(':').map(Number);
            return hour * 60 + minute;
        }
    
        function minutesToTime(minutes) {
            const hour = Math.floor(minutes / 60);
            const minute = minutes % 60;
            return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        }
    
        function getAvailableTimeSlots(dayOfWeek) {
            const periods = openingHours[dayOfWeek];
            if (!periods || periods === 'closed') return [];
    
            let availableTimeSlots = [];
            periods.split(',').forEach(period => {
                const [start, end] = period.split('-');
                const startMinutes = timeToMinutes(start);
                const endMinutes = timeToMinutes(end);
                if (endMinutes < startMinutes) {
                    availableTimeSlots = availableTimeSlots.concat(generateTimeSlots(start, '23:59'));
                    availableTimeSlots = availableTimeSlots.concat(generateTimeSlots('00:00', end));
                } else {
                    availableTimeSlots = availableTimeSlots.concat(generateTimeSlots(start, end));
                }
            });
    
            return availableTimeSlots;
        }
    
        function validateTime(selectedTime, dayOfWeek) {
            const availableTimeSlots = getAvailableTimeSlots(dayOfWeek);
            const selectedMinutes = timeToMinutes(selectedTime);
    
            if (availableTimeSlots.includes(selectedTime)) {
                return selectedTime;
            }
    
            let closestTimeSlot = null;
            let minDifference = Infinity;
    
            availableTimeSlots.forEach(slot => {
                const slotMinutes = timeToMinutes(slot);
                const difference = Math.abs(selectedMinutes - slotMinutes);
                if (difference < minDifference) {
                    minDifference = difference;
                    closestTimeSlot = slot;
                }
            });
    
            let lastAcceptableSlotMinutes = Infinity;
            openingHours[dayOfWeek].split(',').forEach(period => {
                const [start, end] = period.split('-');
                let closingTimeMinutes = timeToMinutes(end);
                if (closingTimeMinutes < timeToMinutes(start)) {
                    closingTimeMinutes += 24 * 60;
                }
                lastAcceptableSlotMinutes = Math.min(lastAcceptableSlotMinutes, closingTimeMinutes - 60);
            });
    
            if (selectedMinutes > lastAcceptableSlotMinutes) {
                closestTimeSlot = availableTimeSlots.filter(slot => timeToMinutes(slot) <= lastAcceptableSlotMinutes).pop() || null;
            }
    
            return closestTimeSlot && timeToMinutes(closestTimeSlot) <= lastAcceptableSlotMinutes ? closestTimeSlot : null;
        }
    
        function updateSubmitButton() {
            submitButton.disabled = !termsCheckbox.checked;
        }
    
        termsCheckbox.addEventListener('change', updateSubmitButton);
    
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('id_name').value;
            const email = document.getElementById('id_email').value;
            const phone = document.getElementById('id_phone_number').value;
            const numGuests = parseInt(document.getElementById('id_number_of_guests').value, 10);
            const selectedDate = new Date(document.getElementById('id_date').value);
            const selectedTime = document.getElementById('id_time').value;
            const occasion = document.getElementById('id_occasion').value;
            const dayOfWeek = selectedDate.getDay();
    
            let isValid = true;
            const validationMessages = [];
    
            if (!validateName(name)) {
                validationMessages.push('Please enter a valid full name with a surname.');
                isValid = false;
            }
    
            if (!validateEmail(email)) {
                validationMessages.push('Please enter a valid email address.');
                isValid = false;
            }
    
            if (!validatePhone(phone)) {
                validationMessages.push('Please enter a valid phone number.');
                isValid = false;
            }
    
            if (!validateDate(selectedDate)) {
                validationMessages.push('Reservation date cannot be in the past, today, or on a Sunday.');
                isValid = false;
            }
    
            if (!validateOccasion(occasion)) {
                validationMessages.push('Please describe your occasion with at least 3 characters.');
                isValid = false;
            }
    
            if (!validateGuests(numGuests)) {
                if (isNaN(numGuests)) {
                    validationMessages.push('Please enter a valid number of guests.');
                } else if (numGuests < 1) {
                    validationMessages.push('Number of guests must be at least 1 person.');
                } else if (numGuests > 100) {
                    validationMessages.push('We can only accommodate up to 100 guests for booking online.\n\nFor larger parties, please call (0200) restaurant-fine-dine or email us at info@restaurantfinedine.com.');
                }
                isValid = false;
            }
    
            const closestTimeSlot = validateTime(selectedTime, dayOfWeek);
            if (!closestTimeSlot) {
                validationMessages.push('Reservations are only available during the restaurant open hours and cannot be booked within the last hour before closing time.\n\nIf you would like to make a reservation, please contact us directly at (0200) restaurant-fine-dine.\n\nNote: Please do not send an email or form request. This ensures we can guarantee your reservation and have a nice table set for you at arrival.');
                isValid = false;
            } else {
                document.getElementById('id_time').value = closestTimeSlot;
            }
    
            if (!termsCheckbox.checked) {
                validationMessages.push('You must accept the terms and conditions before submitting.');
                isValid = false;
            }
    
            if (!isValid) {
                alert(validationMessages.join('\n'));
                event.preventDefault();
            } else {
                const userConfirmation = confirm(`Your selected time has been adjusted to the closest available time slot: ${closestTimeSlot}.\n\nPlease confirm your reservation details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${selectedDate.toDateString()}\nTime: ${closestTimeSlot}\nGuests: ${numGuests}\nOccasion: ${occasion}\n\nClick "OK" to confirm or "Cancel" to adjust the details.`);
    
                if (!userConfirmation) {
                    event.preventDefault();
                }
            }
        });
    
        updateSubmitButton();
    });  
     
</script>