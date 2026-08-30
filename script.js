// Target Date: December 10, 2026, at 4:00 PM
const targetDate = new Date("2026-12-10T16:00:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    } else {
        document.getElementById("countdown").innerHTML = `
            <div style="grid-column: span 4; font-family: var(--font-cursive); font-size: 2rem; color: var(--rose-name); padding: 5px;">
                Mubarak! Today We Celebrate
            </div>
        `;
    }
}

// Spawns petals with randomized paths, natural sways, and distributed starting points
function initPetals() {
    const container = document.getElementById("petals");
    const count = 14;

    const lightPinkThemes = [
        "radial-gradient(circle, #ffeef1 25%, #f6bcc5 90%)",
        "radial-gradient(circle, #fde2e7 25%, #f3b0bb 90%)",
        "radial-gradient(circle, #fae6e9 30%, #eea3af 85%)",
        "radial-gradient(circle, #ffffff 10%, #f9cbd3 85%)"
    ];

    for (let i = 0; i < count; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";

        // Balanced sizing (11px to 18px)
        const size = 11 + Math.random() * 7;
        petal.style.width = size + "px";
        petal.style.height = (size * 1.35) + "px";

        // Even distribution across screen width to avoid clustering
        const sectionWidth = 100 / count;
        const leftPos = (i * sectionWidth) + (Math.random() * (sectionWidth * 0.8));
        petal.style.left = leftPos + "vw";

        petal.style.background = lightPinkThemes[Math.floor(Math.random() * lightPinkThemes.length)];

        // Dynamic, randomized left-right sways and wind drift
        const sway1 = (Math.random() * 60 - 30) + "px";
        const sway2 = (Math.random() * 70 - 35) + "px";
        const sway3 = (Math.random() * 60 - 30) + "px";
        const driftEnd = (Math.random() * 80 - 40) + "px";

        petal.style.setProperty("--sway-1", sway1);
        petal.style.setProperty("--sway-2", sway2);
        petal.style.setProperty("--sway-3", sway3);
        petal.style.setProperty("--drift-end", driftEnd);

        // Natural floating speeds (8s to 14s)
        petal.style.animationDuration = (8 + Math.random() * 6) + "s";

        // Negative delay ensures petals are already drifting when page opens
        petal.style.animationDelay = (-Math.random() * 12) + "s";

        container.appendChild(petal);
    }
}

updateTimer();
setInterval(updateTimer, 1000);
initPetals();
