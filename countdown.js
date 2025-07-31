document.addEventListener("DOMContentLoaded", () => {
    const targetHour = 0;
    const targetMinute = 0;
    const targetSecond = 0;

    function getNextFriday() {
        const now = new Date();
        const result = new Date(now);

        // Get to Friday
        const currentDay = now.getDay(); // Sunday = 0, Friday = 5
        const daysUntilFriday = (5 - currentDay + 7) % 7 || 7;

        result.setDate(now.getDate() + daysUntilFriday);
        result.setHours(targetHour, targetMinute, targetSecond, 0);

        return result;
    }

    let nextFriday = getNextFriday();

    setInterval(() => {
        const now = new Date();
        const timeDiff = nextFriday - now;

        if (timeDiff <= 0) {
            // If we've hit or passed this Friday, get next week's Friday
            nextFriday = getNextFriday();
            return;
        }

        const totalSeconds = Math.floor(timeDiff / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const daysLabel = days === 1 ? "Day" : "Days";
        const hoursLabel = hours === 1 ? "Hour" : "Hours";
        const minutesLabel = minutes === 1 ? "Minute" : "Minutes";
        const secondsLabel = seconds === 1 ? "Second" : "Seconds";

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
        document.getElementById("daysLabel").textContent = daysLabel;
        document.getElementById("hoursLabel").textContent = hoursLabel;
        document.getElementById("minutesLabel").textContent = minutesLabel;
        document.getElementById("secondsLabel").textContent = secondsLabel;
    }, 1000);
});