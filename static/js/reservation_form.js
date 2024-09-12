document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservation-form");
    const submitButton = document.getElementById("submit-btn");
    const termsCheckbox = document.getElementById("id_agreed_to_terms");
    const isUpdatePage = window.location.href.includes("update_reservation");

    const openingHours = {
        "0": "closed",  // Sunday
        "1": "11:30-13:00,18:00-22:00",  // Monday
        "2": "11:30-13:00,18:00-22:00",  // Tuesday
        "3": "11:30-13:00,18:00-22:00",  // Wednesday
        "4": "11:30-13:00,18:00-22:00",  // Thursday
        "5": "11:30-13:00,18:00-02:00",  // Friday
        "6": "18:00-02:00"  // Saturday
    };

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                      "Thursday", "Friday", "Saturday"];

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
               numGuests >= 1 && numGuests <= 100;
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
        return `${hour.toString().padStart
        (2, "0")}:${minute.toString().padStart(2, "0")}`;
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
        const periods = openingHours[dayOfWeek];
        if (periods === "closed") {
            return [];
        }

        let availableSlots = [];
        periods.split(",").forEach(function (period) {
            const [start, end] = period.split("-");
            let endMinutes = timeToMinutes(end);
            const startMinutes = timeToMinutes(start);

            if (endMinutes < startMinutes) {
                endMinutes += 24 * 60;
                availableSlots = availableSlots.concat(
                    generateTimeSlots(start, "23:59"),
                    generateTimeSlots("00:00", end)
                );
            } else {
                availableSlots = availableSlots.concat(
                    generateTimeSlots(start, end)
                );
            }
        });

        return availableSlots;
    }

    function adjustTime(selectedTime, dayOfWeek) {
        if (!selectedTime) {
            return null;
        }

        const availableTimeSlots = getAvailableTimeSlots(dayOfWeek);
        if (!availableTimeSlots.length) {
            return selectedTime;
        }

        const selectedMinutes = timeToMinutes(selectedTime);

        if (availableTimeSlots.includes(selectedTime)) {
            return selectedTime;
        }

        const nextAvailableSlot = availableTimeSlots.find
        (slot => timeToMinutes(slot) > selectedMinutes);

        if (nextAvailableSlot) {
            return nextAvailableSlot;
        }

        let nextDay = (dayOfWeek + 1) % 7;
        let nextAvailableSlots = getAvailableTimeSlots(nextDay);
        if (nextAvailableSlots.length) {
            return nextAvailableSlots[0];
        }

        return null;
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

    termsCheckbox.addEventListener("change", updateSubmitButton);
    resetCheckboxIfUpdatePage();

    function getWeeklyOpeningHours() {
        return Object.entries(openingHours)
            .filter(([, hours]) => hours !== "closed")
            .map(([day, hours]) => `${dayNames[parseInt(day, 10)]}: ${hours}`)
            .join("\n");
    }

    form.addEventListener("submit", function (event) {
        const name = document.getElementById("id_name").value;
        const email = document.getElementById("id_email").value;
        const phone = document.getElementById("id_phone_number").value;
        const numGuests = parseInt(document.getElementById
                                   ("id_number_of_guests").value, 10);
        const selectedDate = new Date(document.getElementById("id_date").value);
        const selectedTime = document.getElementById("id_time").value;
        const occasion = document.getElementById("id_occasion").value;
        const dayOfWeek = selectedDate.getDay();
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

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDateStart = new Date(selectedDate);
        selectedDateStart.setHours(0, 0, 0, 0);

        let adjustmentMessage = "";
        let nextAvailableDate = new Date(today);
        let closestAvailableTimeSlot = "11:30";

        if (!validateDate(selectedDate)) {
            const formattedDate = selectedDateStart.toDateString();

            if (selectedDateStart <= today) {
                if (today.getDay() === 6) {
                    nextAvailableDate.setDate(today.getDate() + 2);
                } else {
                    nextAvailableDate.setDate(today.getDate() + 1);
                }
                nextAvailableDate.setHours(11, 30, 0, 0);
                closestAvailableTimeSlot = "11:30";

                if (nextAvailableDate.getDay() === 0) {
                    nextAvailableDate.setDate(nextAvailableDate.getDate() + 1);
                }
            } else if (dayOfWeek === 0) {
                nextAvailableDate.setDate(selectedDate.getDate() + 1);
                nextAvailableDate.setHours(11, 30, 0, 0);
            }

            const generalOpeningHours = getWeeklyOpeningHours();

            adjustmentMessage =
                `The selected date (${formattedDate}) is either in the past ` +
                `or on a Sunday, so booking is not possible.\n\n` +
                `The closest available date is ` +
                `${nextAvailableDate.toDateString()} ` +
                `at ${closestAvailableTimeSlot}.\n\n` +
                `Here are the opening hours for ${dayNames[dayOfWeek]}:\n` +
                `${openingHours[dayOfWeek].split
            (",").map(period => period.trim()).join("\n")}\n\n` +
                `Here are the general opening hours for the week:\n` +
                `${generalOpeningHours}\n\n` +
                `Would you like to proceed with this adjusted date and time?`;

            const proceed = confirm(adjustmentMessage);

            if (proceed) {
                document.getElementById("id_date").value = nextAvailableDate
                    .toISOString().split("T")[0];
                document.getElementById
                ("id_time").value = closestAvailableTimeSlot;
            } else {
                event.preventDefault();
                return;
            }

            isValid = false;
        }

        if (!validateOccasion(occasion)) {
            validationMessages.push("Please describe your occasion.");
            isValid = false;
        }

        if (!validateGuests(numGuests)) {
            validationMessages.push("Please enter a valid number of guests.");
            isValid = false;
        }

        if (!termsCheckbox.checked) {
            validationMessages.push("You must accept the terms.");
            isValid = false;
        }

        if (!isValid) {
            alert(validationMessages.join("\n"));
            event.preventDefault();
            return;
        }

        const adjustedTime = adjustTime(selectedTime, dayOfWeek);

        if (adjustedTime && adjustedTime !== selectedTime) {
            const formattedDate = selectedDate.toDateString();
            const timeAdjustmentMessage =
                `Your selected time (${formattedDate} at ${selectedTime})` +
                ` is outside our opening hours.\n\n` +
                `We've moved your reservation ` +
                `to the closest available time:\n` +
                `${formattedDate} at ${adjustedTime}.\n\n` +
                `If you would like to change it, press Cancel.` +
                ` Otherwise, press OK to confirm the adjusted time.`;

            if (!confirm(timeAdjustmentMessage)) {
                event.preventDefault();
            } else {
                document.getElementById("id_time").value = adjustedTime;
            }
        }
    });
});
