document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll('.week-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const currentWeek = toggle.closest('.week');
            const currentSpan = currentWeek.querySelector('span');

            // Close all other spans
            document.querySelectorAll('.week span').forEach(span => {
                if (span !== currentSpan) {
                    span.style.maxHeight = null;
                    span.classList.remove('open');
                }
            });

            // Toggle current one
            if (currentSpan.classList.contains('open')) {
                currentSpan.style.maxHeight = null;
                currentSpan.classList.remove('open');
            } else {
                currentSpan.style.maxHeight = currentSpan.scrollHeight + "px";
                currentSpan.classList.add('open');
            }
        });
    });
});