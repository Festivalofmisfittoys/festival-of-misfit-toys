const countdown = document.getElementById("countdown");

const revealDate = new Date("September 8, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = revealDate - now;

    if (distance <= 0) {

        countdown.innerHTML = "LINEUP ANNOUNCED!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    countdown.innerHTML =
        days + " DAYS • " +
        hours + " HOURS • " +
        minutes + " MINUTES";
}

updateCountdown();

setInterval(updateCountdown, 1000);
