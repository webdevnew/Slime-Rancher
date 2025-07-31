document.addEventListener("DOMContentLoaded", () => {
    const statCounts = {
        ben: 0,
        rhys: 0,
        draws: 0,
    };

    // Loop through all weeks
    document.querySelectorAll('.week').forEach(week => {
        const winnerHeading = week.querySelector('.winner');
        if (!winnerHeading) return;

        const winner = winnerHeading.textContent.trim().toLowerCase();

        if (winner === "ben") {
            statCounts.ben++;
        } else if (winner === "rhys") {
            statCounts.rhys++;
        } else {
            statCounts.draws++;
        }
    });

    // Display the updated stats
    document.getElementById("benWins").textContent = statCounts.ben;
    document.getElementById("rhysWins").textContent = statCounts.rhys;
    document.getElementById("draws").textContent = statCounts.draws;
});
