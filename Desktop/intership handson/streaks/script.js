document.addEventListener("DOMContentLoaded", function () {
    let streakCount = parseInt(localStorage.getItem("streak")) || 0;
    let lastDate = localStorage.getItem("lastDate") || null;
    const streakDisplay = document.getElementById("streak-count");

    function updateStreakAutomatically() {
        let today = new Date().toDateString(); // Get today's date in string format

        if (lastDate === today) {
            console.log("Streak already updated today.");
            return;
        }

        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        let yesterdayStr = yesterday.toDateString();

        if (lastDate === yesterdayStr) {
            streakCount++; // Continue streak
        } else {
            streakCount = 1; // Reset streak if missed a day
        }

        localStorage.setItem("streak", streakCount);
        localStorage.setItem("lastDate", today);
        streakDisplay.textContent = streakCount;
    }

    updateStreakAutomatically(); // Run function when user visits
    streakDisplay.textContent = streakCount; // Display streak count
});
