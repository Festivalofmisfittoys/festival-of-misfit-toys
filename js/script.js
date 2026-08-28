/* =========================================================
   FOMT COUNTDOWN
========================================================= */

const countdown = document.getElementById("countdown");
const revealDate = new Date("September 8, 2026 00:00:00").getTime();

function updateCountdown() {

    if (!countdown) return;

    const now = Date.now();
    const distance = revealDate - now;

    if (distance <= 0) {
        countdown.textContent = "LINEUP REVEALED";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    countdown.textContent =
        `${days}D ${hours}H ${minutes}M ${seconds}S`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* =========================================================
   FOMT ARTIST CARDS + MODAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".artist-card");

    const modal = document.getElementById("artist-modal");

    const modalTitle =
        document.getElementById("artist-modal-title");

    const modalBio =
        document.getElementById("artist-modal-bio");

    const closeElements =
        document.querySelectorAll("[data-close-modal]");

    const learnMoreButtons =
        document.querySelectorAll(".learn-more-btn");

    /* ==========================================
       MOBILE CARD FLIP
    ========================================== */

    cards.forEach(card => {

        card.addEventListener("click", function (e) {

            if (
                e.target.closest(".learn-more-btn")
            ) {
                return;
            }

            if (
                window.matchMedia("(hover: none)").matches
            ) {
                card.classList.toggle("is-flipped");
            }

        });

    });

    /* ==========================================
       MODAL OPEN
    ========================================== */

    learnMoreButtons.forEach(btn => {

        btn.addEventListener("click", function (e) {

            e.stopPropagation();

            const artistNumber =
                btn.dataset.artist || "";

            if (!modal) return;

            modal.classList.add("is-open");

            modal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.classList.add(
                "modal-open"
            );

            if (modalTitle) {
                modalTitle.textContent =
                    `ARTIST ${artistNumber}`;
            }

            if (modalBio) {
                modalBio.textContent =
                    "This artist is currently locked away. The official Festival of Misfit Toys lineup will be revealed September 8.";
            }

        });

    });

    /* ==========================================
       CLOSE MODAL
    ========================================== */

    function closeModal() {

        if (!modal) return;

      modal.classList.remove("is-open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }

    closeElements.forEach(el => {

        el.addEventListener(
            "click",
            closeModal
        );

    });

    document.addEventListener(
        "keydown",
        function (e) {

            if (e.key === "Escape") {
                closeModal();
            }

        }
    );

});
