document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body"),
          lightToggle = document.querySelector(".light-mode-toggle"),
          darkMode = localStorage.getItem("darkMode");
          darkToggle = document.querySelector(".dark-mode-toggle");

    lightToggle.addEventListener("click", () => {
        body.classList.remove("dark");
        localStorage.setItem("darkMode", "disabled");
    });

    darkToggle.addEventListener("click", () => {
        body.classList.add("dark");
        localStorage.setItem("darkMode", "enabled");
    });

    if(darkMode === "enabled") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }
});