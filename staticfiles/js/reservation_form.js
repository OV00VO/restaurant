// References:
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
// https://www.w3schools.com/js/js_validation.asp
// https://regex101.com/r/TGpiRb/1/codegen?language=python
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/...
// .../Reference/Regular_expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/...
// .../Reference/Global_Objects/Date
// https://www.w3schools.com/js/js_dates.asp
// https://formvalidation.io/guide/validators/
// https://jqueryvalidation.org
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
        return Number.isInteger
        (numGuests) && numGuests >= 1 && numGuests <= 100;
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
        return hour.toString().padStart
        (2, "0") + ":" + minute.toString().padStart(2, "0");
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
                    generateTimeSlots
                    ("00:00", minutesToTime(endMinutes % (24 * 60)))
                );
            } else {
                availableSlots = availableSlots.concat
                (generateTimeSlots(start, end));
            }
        });
        return availableSlots;
    }

    function isBookingAllowed(time, dayOfWeek) {
        const availableSlots = getAvailableTimeSlots(dayOfWeek);
        const bookingMinutes = timeToMinutes(time);

        if (timeToMinutes("13:30") <= bookingMinutes &&
            bookingMinutes <= timeToMinutes("13:30")) {
            return { allowed: false, message: "This time is not bookable " +
                    "as it is too close to our closing hours for lunch." };
        }

        const eveningEndTime = "22:00";
        if (dayOfWeek !== 5 && timeToMinutes(eveningEndTime) < bookingMinutes) {
            return { allowed: false, message: "This time is not bookable " +
                    "as it is too close " +
                    "to our closing hours for the evening." };
        }

        if (dayOfWeek === 5 || dayOfWeek === 6) {
            const nightEndTime = "02:00";
            if (timeToMinutes(nightEndTime) < bookingMinutes) {
                return { allowed: false, message:
                        "This time is not bookable as it is too close " +
                        " to our closing hours for the night shift." };
            }
        }

        if (!availableSlots.includes(time)) {
            return { allowed: false, message:
                    "This time is not available for booking." };
        }

        return { allowed: true, message: "" };
    }

    function adjustTime(selectedTime, selectedDate) {
        if (!selectedTime) {
            return { time: null, date: selectedDate };
        }
        const dayOfWeek = selectedDate.getDay();
        const availableTimeSlots = getAvailableTimeSlots(dayOfWeek);
        if (!availableTimeSlots.length) {
            let nextAvailableDate = new Date(selectedDate);
            do {
                nextAvailableDate.setDate(nextAvailableDate.getDate() + 1);
                nextAvailableDate.setHours(11, 30, 0, 0);
            } while (nextAvailableDate.getDay() === 0 ||
                getAvailableTimeSlots(nextAvailableDate.getDay()).length === 0);
            const nextAvailableTimeSlot =
                  getAvailableTimeSlots(nextAvailableDate.getDay())[0];
            return { time: nextAvailableTimeSlot, date: nextAvailableDate };
        }
        const selectedMinutes = timeToMinutes(selectedTime);
        const closingTime = availableTimeSlots.slice(-1)[0];
        const closingMinutes = timeToMinutes(closingTime);
        if (selectedMinutes >= closingMinutes - 60) {
            let nextAvailableDate = new Date(selectedDate);
            do {
                nextAvailableDate.setDate(nextAvailableDate.getDate() + 1);
                nextAvailableDate.setHours(11, 30, 0, 0);
            } while (nextAvailableDate.getDay() === 0 ||
                getAvailableTimeSlots(nextAvailableDate.getDay()).length === 0);
            const nextAvailableTimeSlot =
                  getAvailableTimeSlots(nextAvailableDate.getDay())[0];
            return { time: nextAvailableTimeSlot, date: nextAvailableDate };
        }
        if (isBookingAllowed(selectedTime, dayOfWeek).allowed) {
            return { time: selectedTime, date: selectedDate };
        }
        const nextAvailableSlot = availableTimeSlots.find(slot =>
            timeToMinutes(slot) > selectedMinutes);
        if (nextAvailableSlot) {
            return { time: nextAvailableSlot, date: selectedDate };
        }
        return { time: availableTimeSlots[0], date: selectedDate };
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

        const name = document.getElementById("id_name").value;
        const email = document.getElementById("id_email").value;
        const phone = document.getElementById("id_phone_number").value;
        const numGuests = parseInt(document.getElementById
                                   ("id_number_of_guests").value, 10);
        const selectedDate = new Date(document.getElementById("id_date").value);
        const selectedTime = document.getElementById("id_time").value;
        const occasion = document.getElementById("id_occasion").value;

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
            validationMessages.push("Please enter a number of guests " +
                                    "between 1 and 100.");
            isValid = false;
        }

        if (!isValid) {
            alert("Please verify that your information " +
                  "is correct:\n" + validationMessages.join("\n"));
            return;
        }

        const result = adjustTime(adjustedTime, adjustedDate);
        adjustedTime = result.time;
        adjustedDate = result.date;
        document.getElementById("id_time").value = adjustedTime;

        const generalOpeningHours = getWeeklyOpeningHours();
        const message = `Reservation Details:
Note: We Have Adjusted Date: ${adjustedDate.toDateString()} ${adjustedTime}
--> Do you want to confirm this reservation? <--

>>> Opening Hours for ${dayNames[adjustedDate.getDay()]}:
${OPENING_HOURS[adjustedDate.getDay()].map
        (period => period.start + " - " + period.end).join(", ")}

>>> Your Current Reservation:
Name: ${name}
Email: ${email}
Phone: ${phone}
Number of Guests: ${numGuests}
Date: ${adjustedDate.toDateString()}
Time: ${adjustedTime}
Occasion: ${occasion}

>>> General Opening Hours for the Week:
${generalOpeningHours}`;

        if (confirm(message)) {
            form.submit();
        }
    });
});

