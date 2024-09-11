document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reservation-form');
    const submitButton = document.getElementById('submit-btn');
    const termsCheckbox = document.getElementById('id_agreed_to_terms');
    const isUpdatePage = window.location.href.includes('update_reservation');

    const openingHours = {
        1: '11:30-14:00,18:00-23:00', // Monday
        2: '11:30-14:00,18:00-23:00', // Tuesday
        3: '11:30-14:00,18:00-23:00', // Wednesday
        4: '11:30-14:00,18:00-23:00', // Thursday
        5: '11:30-14:00,18:00-02:00', // Friday
        6: '18:00-02:00',             // Saturday
        0: 'closed'                   // Sunday
    };

    function validateName(name) {
        name = name.trim();
        const nameParts = name.split(' ');
        if (nameParts.length < 2) {
            return false;
        }
        const validNamePattern = /^[A-Za-zÀ-ÿ\-'\s]+$/;
        return nameParts.every(part => part.length >= 2 && validNamePattern.test(part));
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

    function timeToMinutes(time) {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    }

    function minutesToTime(minutes) {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    }

    function generateTimeSlots(start, end) {
        const slots = [];
        const startMinutes = timeToMinutes(start);
        const endMinutes = timeToMinutes(end);
        for (let minutes = startMinutes; minutes <= endMinutes; minutes += 15) {
            slots.push(minutesToTime(minutes));
        }
        return slots;
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

    function adjustTime(selectedTime, dayOfWeek) {
        const availableTimeSlots = getAvailableTimeSlots(dayOfWeek);
        const selectedMinutes = timeToMinutes(selectedTime);

        if (availableTimeSlots.includes(selectedTime)) {
            return selectedTime;
        }

        let lastAcceptableSlotMinutes = Infinity;
        openingHours[dayOfWeek].split(',').forEach(period => {
            const [start, end] = period.split('-');
            let closingTimeMinutes = timeToMinutes(end);
            if (closingTimeMinutes < timeToMinutes(start)) {
                closingTimeMinutes += 24 * 60;
            }
            lastAcceptableSlotMinutes = Math.min(lastAcceptableSlotMinutes, closingTimeMinutes - 60);
        });

        const closestValidSlot = availableTimeSlots.reduce((closest, slot) => {
            const slotMinutes = timeToMinutes(slot);
            const diff = Math.abs(selectedMinutes - slotMinutes);
            if (slotMinutes <= lastAcceptableSlotMinutes && (closest === null || diff < Math.abs(selectedMinutes - timeToMinutes(closest)))) {
                return slot;
            }
            return closest;
        }, null);

        if (selectedMinutes < timeToMinutes(availableTimeSlots[0])) {
            return availableTimeSlots[0];
        }

        return closestValidSlot || minutesToTime(lastAcceptableSlotMinutes);
    }

    function updateSubmitButton() {
        submitButton.disabled = !termsCheckbox.checked;
    }

    function resetCheckboxIfUpdatePage() {
        if (isUpdatePage) {
            termsCheckbox.checked = false;
            updateSubmitButton();
        }
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
        const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];

        let isValid = true;
        const validationMessages = [];

        if (!validateName(name)) {
            validationMessages.push('\nPlease enter a valid full name with a surname.');
            isValid = false;
        }

        if (!validateEmail(email)) {
            validationMessages.push('\nPlease enter a valid email address for instance: info@finedine.com.');
            isValid = false;
        }

        if (!validatePhone(phone)) {
            validationMessages.push('\nPlease enter a valid phone number.');
            isValid = false;
        }

        if (!validateDate(selectedDate)) {
            validationMessages.push(`\nReservation date cannot be in the past, today, or on a Sunday and that specific date ${selectedDate.toDateString()} is a ${dayName}.\n`);
            isValid = false;
        }

        if (!validateOccasion(occasion)) {
            validationMessages.push('\nPlease describe your occasion with at least 3 characters, be as specific as possible e.g. Lunch Meeting, Dinner, Bar Table or Birthday Party.');
            isValid = false;
        }

        if (!validateGuests(numGuests)) {
            if (isNaN(numGuests)) {
                validationMessages.push('\nPlease enter a valid number of guests between 1-100 guest.');
            } else if (numGuests < 1) {
                validationMessages.push('\nNumber of guests must be at least 1 person.');
            } else if (numGuests > 100) {
                validationMessages.push('\nWe can only accommodate up to 100 guests when you are booking online. Do not hesitate to call us at (0200) restaurant-fine-dine or info@restaurantfinedine.com for larger companies.');
            }
            isValid = false;
        }

        if (dayOfWeek === 0) {
            validationMessages.push(`\nThe restaurant is closed on Sunday. Here are the opening hours for the week:\n\n${getWeeklyOpeningHours()}\n`);
            isValid = false;
        } else {
            const adjustedTime = adjustTime(selectedTime, dayOfWeek);
            if (!adjustedTime) {
                validationMessages.push(`\nReservations are only available during the restaurant's opening hours. Here are the opening hours for ${dayName}:\n${openingHours[dayOfWeek]}\n\nThis is our opening hours for the week:\n${getWeeklyOpeningHours()}`);
                isValid = false;
            } else {
                document.getElementById('id_time').value = adjustedTime;
            }
        }

        if (!termsCheckbox.checked) {
            validationMessages.push('You must accept the terms and conditions before submitting.');
            isValid = false;
        }

        if (!isValid) {
            alert(validationMessages.join('\n'));
            event.preventDefault();
        } else {
            const adjustmentMessage = `Your selected time has been adjusted to our closest timeslot availiable: ${document.getElementById('id_time').value}.\n\nHere are the opening hours for ${dayName}, ${selectedDate.toDateString()}:\n${openingHours[dayOfWeek].split(',').map(period => period.trim()).join('\n')}\n\nIf you are satisfied with this time, you can keep the reservation. Otherwise, please select a differnt time from our opening hours:\n\n${getWeeklyOpeningHours()}`;

            const userConfirmation = confirm(`${adjustmentMessage}\n\nPlease confirm your reservation details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${selectedDate.toDateString()}\nTime: ${document.getElementById('id_time').value}\nOccasion: ${occasion}\nNumber of Guests: ${numGuests}\n\nClick OK to confirm or Cancel to make changes.`);
            if (!userConfirmation) {
                event.preventDefault();
            }
        }
    });

    function getWeeklyOpeningHours() {
        return Object.entries(openingHours)
            .filter(([day, hours]) => hours !== 'closed')
            .map(([day, hours]) => {
                const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
                return `${dayName}: ${hours}`;
            })
            .join('\n');
    }

    updateSubmitButton();
    resetCheckboxIfUpdatePage();
});
