document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservation-form");
    const submitButton = document.getElementById("submit-btn");
    const termsCheckbox = document.getElementById("id_agreed_to_terms");
    const isUpdatePage = window.location.href.includes("update_reservation");

    const OPENING_HOURS = {
        0: [], // Sunday
        1: [ // Monday
            { start: "11:30", end: "14:00" },
            { start: "18:00", end: "23:00" }
        ],
        2: [ // Tuesday
            { start: "11:30", end: "14:00" },
            { start: "18:00", end: "23:00" }
        ],
        3: [ // Wednesday
            { start: "11:30", end: "14:00" },
            { start: "18:00", end: "23:00" }
        ],
        4: [ // Thursday
            { start: "11:30", end: "14:00" },
            { start: "18:00", end: "23:00" }
        ],
        5: [ // Friday
            { start: "11:30", end: "14:00" },
            { start: "18:00", end: "03:00" }
        ],
        6: [ // Saturday
            { start: "18:00", end: "03:00" }
        ]
    };

    const dayNames = ["Sunday", "Monday", "Tuesday",
                      "Wednesday", "Thursday", "Friday", "Saturday"];
    const MIN_GUESTS = 1;
    const MAX_GUESTS = 100;
    const MANAGER_CONTACT = "Contact our Food and Beverage " +
        "Manager for bookings over 100 guests at " +
        "fob@restaurantfinedine.com or call us at " +
        "(0200) restaurant-fine-dine.";
    const LUNCH_LATEST_BOOKING = 30;
    const DINNER_LATEST_BOOKING = 60;

    const BLOCKED_TIMES = [
        { start: "13:01", end: "14:01" },
        { start: "02:01", end: "03:01" }
    ];

    function trimInput(input) {
        return input.trim();
    }

    function validateName(name) {
        const trimmedName = trimInput(name);
        const nameParts = trimmedName.split(" ");
        const validNamePattern = /^[A-Za-zÀ-ÿ\-"\s]+$/;
        return nameParts.length >= 2 &&
               nameParts.every(part => part.length >= 2 &&
               validNamePattern.test(part));
    }

    function validatePhone(phone) {
        return /^\+?[0-9]{10,15}$/.test(phone);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateGuests(numGuests) {
        return Number.isInteger(numGuests) &&
               numGuests >= MIN_GUESTS && numGuests <= MAX_GUESTS;
    }

    function validateDate(selectedDate) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDateStart = new Date(selectedDate);
        selectedDateStart.setHours(0, 0, 0, 0);
        const dayOfWeek = selectedDateStart.getDay();
        return selectedDateStart > today && dayOfWeek !== 0;
    }

    function validateOccasion(occasion) {
        return trimInput(occasion).length >= 3;
    }

    function timeToMinutes(time) {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    }

    function minutesToTime(minutes) {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        return hour.toString().padStart(2, "0") + ":" +
               minute.toString().padStart(2, "0");
    }

    function generateTimeSlots(start, end) {
        const slots = [];
        let minutes = timeToMinutes(start);
        const endMinutes = timeToMinutes(end);
        while (minutes <= endMinutes) {
            slots.push(minutesToTime(minutes));
            minutes += 15;
        }
        return slots;
    }

    function getAvailableTimeSlots(dayOfWeek) {
        const periods = OPENING_HOURS[dayOfWeek];
        if (periods.length === 0) return [];
        let availableSlots = [];
        periods.forEach(({ start, end }) => {
            let endMinutes = timeToMinutes(end);
            const startMinutes = timeToMinutes(start);
            if (endMinutes < startMinutes) {
                endMinutes += 24 * 60;
                availableSlots = availableSlots.concat(
                    generateTimeSlots(start, "23:59"),
                    generateTimeSlots("00:00",
                        minutesToTime(endMinutes % (24 * 60)))
                );
            } else {
                availableSlots = availableSlots.concat(
                    generateTimeSlots(start, end));
            }
        });
        return availableSlots.filter(slot => {
            const slotMinutes = timeToMinutes(slot);
            return !BLOCKED_TIMES.some(({ start, end }) => {
                const blockStartMinutes = timeToMinutes(start);
                const blockEndMinutes = timeToMinutes(end);
                if (blockEndMinutes < blockStartMinutes) {
                    return slotMinutes >= blockStartMinutes ||
                           slotMinutes < blockEndMinutes;
                }
                return slotMinutes >= blockStartMinutes &&
                       slotMinutes < blockEndMinutes;
            });
        });
    }

    function isBookingAllowed(time, dayOfWeek) {
        const availableSlots = getAvailableTimeSlots(dayOfWeek);
        const bookingMinutes = timeToMinutes(time);
        const periods = OPENING_HOURS[dayOfWeek];
        let allowed = true;
        let message = "";

        BLOCKED_TIMES.forEach(({ start, end }) => {
            const blockStartMinutes = timeToMinutes(start);
            const blockEndMinutes = timeToMinutes(end);

            if (blockEndMinutes < blockStartMinutes) {
                if (bookingMinutes >= blockStartMinutes ||
                    bookingMinutes < blockEndMinutes) {
                    allowed = false;
                    message = "This time is not bookable as it falls " +
                        "within a blocked period.";
                }
            } else {
                if (bookingMinutes >= blockStartMinutes &&
                    bookingMinutes < blockEndMinutes) {
                    allowed = false;
                    message = "This time is not bookable as it falls " +
                        "within a blocked period.";
                }
            }
        });

        if (!availableSlots.includes(time)) {
            allowed = false;
            message = "This time is not available for booking.";
        }

        return { allowed, message };
    }

    function adjustTime(selectedTime, selectedDate) {
        if (!selectedTime) {
            return { time: null, date: selectedDate };
        }

        const dayOfWeek = selectedDate.getDay();
        const availableTimeSlots = getAvailableTimeSlots(dayOfWeek);

        if (availableTimeSlots.includes(selectedTime)) {
            return {
                time: selectedTime,
                date: selectedDate
            };
        }
        const nearestQuarter = availableTimeSlots.find(
            slot => timeToMinutes(slot) >= timeToMinutes(selectedTime));
        if (nearestQuarter) {
            return {
                time: nearestQuarter,
                date: selectedDate
            };
        }

        let nextAvailableDate = new Date(selectedDate);
        do {
            nextAvailableDate.setDate(nextAvailableDate.getDate() + 1);
            nextAvailableDate.setHours(11, 30, 0, 0);
        } while (nextAvailableDate.getDay
                 () === 0 ||
                 getAvailableTimeSlots
                 (nextAvailableDate.getDay()).length === 0);

        const nextAvailableTimeSlot = getAvailableTimeSlots(
            nextAvailableDate.getDay())[0];
        return { time: nextAvailableTimeSlot, date: nextAvailableDate };
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

    function getWeeklyOpeningHours() {
        return Object.entries(OPENING_HOURS)
            .filter(([ , hours]) => hours.length > 0)
            .map(([day, periods]) => {
                const formattedHours = periods.map(({ start, end }) =>
                    start + " - " + end).join(", ");
                return dayNames[parseInt(day, 10)] + ": " + formattedHours;
            })
            .join("\n");
    }

    termsCheckbox.addEventListener("change", updateSubmitButton);
    resetCheckboxIfUpdatePage();

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = trimInput(document.getElementById("id_name").value);
        const email = trimInput(document.getElementById("id_email").value);
        const phone = trimInput
        (document.getElementById("id_phone_number").value);
        const numGuests = parseInt
        (document.getElementById("id_number_of_guests").value, 10);
        const selectedDate = new Date(document.getElementById("id_date").value);
        const selectedTime = document.getElementById("id_time").value;
        const occasion = trimInput
        (document.getElementById("id_occasion").value);

        let adjustedDate = selectedDate;
        let adjustedTime = selectedTime;
        let isValid = true;
        const validationMessages = [];

        if (!validateName(name)) {
            validationMessages.push("Please enter a valid full name.");
            isValid = false;
        }
        if (!validateEmail(email)) {
            validationMessages.push("Please enter a valid email address.");
            isValid = false;
        }
        if (!validatePhone(phone)) {
            validationMessages.push("Please enter a valid phone number.");
            isValid = false;
        }
        if (!validateDate(selectedDate)) {
            validationMessages.push("Please enter a future date.");
            adjustedDate = new Date();
            adjustedDate.setHours(11, 30, 0, 0);
            if (adjustedDate.getDay() === 6) {
                adjustedDate.setDate(adjustedDate.getDate() + 2);
            } else {
                adjustedDate.setDate(adjustedDate.getDate() + 1);
            }
            if (adjustedDate.getDay() === 0) {
                adjustedDate.setDate(adjustedDate.getDate() + 1);
            }
            document.getElementById
            ("id_date").value = adjustedDate.toISOString().split("T")[0];
            adjustedTime = "11:30";
        }
        if (!validateOccasion(occasion)) {
            validationMessages.push("Please describe your occasion.");
            isValid = false;
        }
        if (!validateGuests(numGuests)) {
            validationMessages.push("Please enter a number of guests between " +
            MIN_GUESTS + " and " + MAX_GUESTS + ". " + MANAGER_CONTACT);
            isValid = false;
        }

        if (!isValid) {
            alert("Please verify that your information is correct:\n" +
                  validationMessages.join("\n"));
            return;
        }

        const bookingAllowed = isBookingAllowed
        (selectedTime, adjustedDate.getDay());
        if (!bookingAllowed.allowed) {
            const result = adjustTime(selectedTime, adjustedDate);
            adjustedTime = result.time;
            adjustedDate = result.date;
            document.getElementById
            ("id_date").value = adjustedDate.toISOString().split("T")[0];
            document.getElementById("id_time").value = adjustedTime;
        }

        const generalOpeningHours = getWeeklyOpeningHours();
        const message = `Reservation Details:
Note: We Have Adjusted Your Reservation to ${adjustedDate.toDateString
        ()} at ${adjustedTime}. Do you want to confirm this reservation?
        ---
Opening Hours for ${dayNames[adjustedDate.getDay()]}:
${OPENING_HOURS[adjustedDate.getDay()].map(period =>
    period.start + " - " + period.end).join(", ")}
---
Your Current Reservation:
Name: ${name}
Email: ${email}
Phone: ${phone}
Number of Guests: ${numGuests}
Date: ${adjustedDate.toDateString()}
Time: ${adjustedTime}
Occasion: ${occasion}
---
General Opening Hours for the Week:
${generalOpeningHours}
Sunday: Closed`;

        if (confirm(message)) {
            form.submit();
        }
    });
});
