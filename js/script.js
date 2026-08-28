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
/* =========================================================
   FOMT ARTIST FLIP CARDS + BIO MODAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const artistCards = document.querySelectorAll(".artist-card");
    const artistModal = document.getElementById("artist-modal");
    const modalTitle = document.getElementById("artist-modal-title");
    const modalBio = document.getElementById("artist-modal-bio");

    if (!artistCards.length) {
        return;
    }


    /* ==========================================
       FLIP CARDS
       ========================================== */

    artistCards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            /*
             * Don't flip when someone clicks
             * a button on the back.
             */

            if (event.target.closest("button")) {
                return;
            }

            card.classList.toggle("is-flipped");

        });


        /*
         * Keyboard accessibility
         */

        card.addEventListener("keydown", function (event) {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                card.classList.toggle("is-flipped");

            }

        });

    });


    /* ==========================================
       LEARN MORE
       ========================================== */

    const learnMoreButtons =
        document.querySelectorAll(".learn-more-btn");


    learnMoreButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const artistNumber =
                button.dataset.artist;


            /*
             * These are intentionally generic
             * until the lineup is revealed.
             *
             * We'll replace these with the
             * actual band data later.
             */

            const artistData = {

                "01": {
                    title: "ARTIST REVEAL",
                    bio: "This artist's official biography will appear here when the Festival of Misfit Toys lineup is revealed."
                },

                "02": {
                    title: "ARTIST REVEAL",
                    bio: "This artist's official biography will appear here when the Festival of Misfit Toys lineup is revealed."
                },

                "03": {
                    title: "ARTIST REVEAL",
                    bio: "This artist's official biography will appear here when the Festival of Misfit Toys lineup is revealed."
                },

                "04": {
                    title: "ARTIST REVEAL",
                    bio: "This artist's official biography will appear here when the Festival of Misfit Toys lineup is revealed."
                },

                "05": {
                    title: "ARTIST REVEAL",
                    bio: "This artist's official biography will appear here when the Festival of Misfit Toys lineup is revealed."
                },

                "06": {
                    title: "ARTIST REVEAL",
                    bio: "This artist's official biography will appear here when the Festival of Misfit Toys lineup is revealed."
                },

                "07": {
                    title: "ARTIST REVEAL",
                    bio: "This artist's official biography will appear here when the Festival of Misfit Toys lineup is revealed."
                },

                "08": {
                    title: "ARTIST REVEAL",
                    bio: "This artist's official biography will appear here when the Festival of Misfit Toys lineup is revealed."
                },

                "09": {
                    title: "ARTIST REVEAL",
                    bio: "This artist's official biography will appear here when the Festival of Misfit Toys lineup is revealed."
                }

            };


            const artist =
                artistData[artistNumber];


            if (!artist) {
                return;
            }


            modalTitle.textContent =
                artist.title;

            modalBio.textContent =
                artist.bio;


            artistModal.classList.add("is-open");

            artistModal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.classList.add(
                "modal-open"
            );

        });

    });


    /* ==========================================
       CLOSE MODAL
       ========================================== */

    const closeModalElements =
        artistModal.querySelectorAll(
            "[data-close-modal]"
        );


    closeModalElements.forEach(function (element) {

        element.addEventListener(
            "click",
            closeArtistModal
        );

    });


    function closeArtistModal() {

        artistModal.classList.remove(
            "is-open"
        );

        artistModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }


    /* ==========================================
       ESCAPE KEY
       ========================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                artistModal.classList.contains("is-open")
            ) {

                closeArtistModal();

            }

        }
    );

});
