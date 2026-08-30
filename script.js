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

// Generate Ambient Falling Petals
function initPetals() {
    const container = document.getElementById("petals");
    const count = 18;

    for (let i = 0; i < count; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        
        const size = 10 + Math.random() * 12;
        petal.style.width = size + "px";
        petal.style.height = (size * 1.3) + "px";
        petal.style.left = (Math.random() * 100) + "%";
        petal.style.animationDuration = (7 + Math.random() * 6) + "s";
        petal.style.animationDelay = (Math.random() * 7) + "s";
        
        container.appendChild(petal);
    }
}

updateTimer();
setInterval(updateTimer, 1000);
initPetals();
