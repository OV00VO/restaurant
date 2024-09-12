document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservation-form");
    const submitButton = document.getElementById("submit-btn");
    const termsCheckbox = document.getElementById("id_agreed_to_terms");
    const isUpdatePage = window.location.href.includes("update_reservation");

    const openingHours = {
        "0": "closed",                   // Sunday
        "1": "11:30-14:00,18:00-23:00", // Monday
        "2": "11:30-14:00,18:00-23:00", // Tuesday
        "3": "11:30-14:00,18:00-23:00", // Wednesday
        "4": "11:30-14:00,18:00-23:00", // Thursday
        "5": "11:30-14:00,18:00-03:00", // Friday
        "6": "18:00-03:00"              // Saturday
    };

    function validateName(name) {
    const trimmedName = name.trim();
    const nameParts = trimmedName.split(" ");
    const validNamePattern = /^[A-Za-zÀ-ÿ\-"\s]+$/;

    return nameParts.length >= 2 &&
           nameParts.every
    (part > part.length >= 2 && validNamePattern.test(part));
}

    function validatePhone(phone) {
        const phoneNumberPattern = /^\+?[0-9]{10,15}$/;
        return phoneNumberPattern.test(phone);
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateGuests(numGuests) {
        return Number.isInteger(numGuests) && numGuests >= 1
                                           && numGuests <= 100;
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
        const parts = time.split(":").map(Number);
        return parts[0] * 60 + parts[1];
    }

    function minutesToTime(minutes) {
        const hour = Math.floor(minutes / 60);
        const minute = minutes % 60;
        return `${hour.toString().padStart(2, "0")}:
        ${minute.toString().padStart(2, "0")}`;
    }

    function generateTimeSlots(start, end) {
        const slots = [];
        const startMinutes = timeToMinutes(start);
        const endMinutes = timeToMinutes(end);
        let minutes = startMinutes;

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

    let availableTimeSlots = [];
    periods.split(",").forEach(period => {
        const parts = period.split("-");
        const start = parts[0];
        const end = parts[1];
        const startMinutes = timeToMinutes(start);
        const endMinutes = timeToMinutes(end);

        if (endMinutes < startMinutes) {
            availableTimeSlots = availableTimeSlots.concat(
                generateTimeSlots(start, "23:59"),
                generateTimeSlots("00:00", end)
            );
        } else {
            availableTimeSlots = availableTimeSlots.concat
            (generateTimeSlots(start, end));
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
        openingHours[dayOfWeek].split(",").forEach(period => {
            const [start, end] = period.split("-");
            let closingTimeMinutes = timeToMinutes(end);
            if (closingTimeMinutes < timeToMinutes(start)) {
                closingTimeMinutes += 24 * 60;
            }
            lastAcceptableSlotMinutes = Math.min
            (lastAcceptableSlotMinutes, closingTimeMinutes - 60);
        });

        const closestValidSlot = availableTimeSlots.reduce((closest, slot) => {
            const slotMinutes = timeToMinutes(slot);
            const diff = Math.abs(selectedMinutes - slotMinutes);
            if (slotMinutes <= lastAcceptableSlotMinutes &&
                (closest === null || diff < Math.abs
                 (selectedMinutes - timeToMinutes(closest)))) {
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

    termsCheckbox.addEventListener("change", updateSubmitButton);

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
        const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"][dayOfWeek];

        let isValid = true;
        const validationMessages = [];

        if (!validateName(name)) {
            validationMessages.push
            ("Please enter a valid full name with a surname.");
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
            validationMessages.pus
            h(`Reservation date cannot be in the past, today, or on a Sunday.`+
              `${selectedDate.toDateString()} is a ${dayName}.`);
            isValid = false;
        }

        if (!validateOccasion(occasion)) {
            validationMessages.push
            ("Please describe your occasion with at least 3 characters.");
            isValid = false;
        }

        if (!validateGuests(numGuests)) {
            validationMessages.push
            ("Please enter a valid number of guests between 1-100.");
            isValid = false;
        }

        if (!termsCheckbox.checked) {
            validationMessages.push
            ("You must accept the terms and conditions before submitting.");
            isValid = false;
        }

        if (!isValid) {
            alert(validationMessages.join("\n"));
            event.preventDefault();
        } else {
            const adjustedTime = adjustTime(selectedTime, dayOfWeek);
            document.getElementById("id_time").value = adjustedTime;

            const openingHoursText = openingHours[dayOfWeek]
                .split(",")
                .map(period => period.trim())
                .join("\n");

            const weeklyOpeningHours = getWeeklyOpeningHours();

            const adjustmentMessage = "Your selected time has been adjusted" +
                  "to the closest available timeslot: " +
                adjustedTime + ".\n\nHere are the opening hours for " +
                dayName + ":\n" + openingHoursText +
                  "\n\nIf you are satisfied with this time, " +
                  "you can keep the reservation. Otherwise, " +
                  "please select a different time " +
                  "from our opening hours:\n\n" +
                weeklyOpeningHours;

            if (!confirm(adjustmentMessage)) {
                event.preventDefault();
            }
        }
    });

    function getWeeklyOpeningHours() {
        return Object.entries(openingHours)
            .filter(([day, hours]) => hours !== "closed")
            .map(([day, hours]) => {
                const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday",
                                 "Thursday", "Friday", "Saturday"][day];
                return `${dayName}: ${hours}`;
            })
            .join("\n");
    }

    updateSubmitButton();
    resetCheckboxIfUpdatePage();
});
