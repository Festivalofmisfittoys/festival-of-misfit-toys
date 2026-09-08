```js
/* =========================================================
   FESTIVAL OF MISFIT TOYS
   MASTER JAVASCRIPT
   PARTIAL ARTIST REVEAL
   ========================================================= */


/* =========================================================
   CONFIGURATION
   ========================================================= */

const REVEAL_DATE = new Date("2026-09-08T00:00:00").getTime();

/*
   ONLY THESE ARTISTS ARE CURRENTLY REVEALED

   02 = FELICITY
   04 = WE'RE WOLVES
   05 = LIVING DEAD GIRL
   06 = CREATE CONTROL
*/

const REVEALED_ARTIST_IDS = [
    "02",
    "04",
    "05",
    "06"
];


/* =========================================================
   ARTIST DATA
   ========================================================= */

const bandData = [
    {
        id: "02",
        name: "FELICITY",
        bio: "Orlando’s FELICITY are redefining what pop punk and emo can sound like in 2026: stadium sized hooks built for chaos, catharsis, and community.",
        image: "images/felicity.jpg",
        instagram: "https://www.instagram.com/wearefelicity",
        website: "https://www.wearefelicity.com/",
        spotify: "https://open.spotify.com/artist/2aqSgJBj7gtdClLx6SQ1mK"
    },

    {
        id: "04",
        name: "WE'RE WOLVES",
        bio: "Step into the world of We're Wolves — a musical force that blends alternative, hard rock, and metalcore. Hailing from West Palm Beach, Florida.",
        image: "images/werewolves.jpg",
        instagram: "https://www.instagram.com/werewolves_fl",
        website: "https://www.werewolvesfl.com/",
        spotify: "https://open.spotify.com/artist/73hZY77xQYtJsTrslIzy7v"
    },

    {
        id: "05",
        name: "LIVING DEAD GIRL",
        bio: "Orlando-based metal band LIVING DEAD GIRL exploded onto the alternative music scene with their debut album “Exorcism” in 2021. Created by vocalist and songwriter Molly Rennick, produced by Mitchell Marlow, and mastered by Howie Weinberg.",
        image: "images/livingdeadgirl.jpg",
        instagram: "https://www.instagram.com/livingdeadgirlofficial/",
        website: "https://www.livingdeadgirl.ca/",
        spotify: "https://open.spotify.com/artist/3ahU0zmYd7h1xTDBGGiDur"
    },

    {
        id: "06",
        name: "CREATE CONTROL",
        bio: "Emerging from the vibrant tapestry of Central Florida's music scene, Create Control is a five-piece melodic metalcore band that deftly intertwines the raw intensity of nu-metal and the evocative spirit of alternative rock.",
        image: "images/createcontrol.jpg",
        instagram: "https://www.instagram.com/crtctrlbandfl",
        website: "https://www.createcontrolband.com/",
        spotify: "https://open.spotify.com/artist/55t0fVUZ1q3pR2EFXorJif"
    }
];


/* =========================================================
   COUNTDOWN
   ========================================================= */

function updateCountdown() {

    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    const now = Date.now();
    const distance = REVEAL_DATE - now;

    if (distance <= 0) {
        countdown.textContent = "FIRST ARTISTS REVEALED";
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

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    countdown.textContent =
        `${days}D ${hours}H ${minutes}M ${seconds}S`;
}


/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

function lineupIsRevealed() {
    return Date.now() >= REVEAL_DATE;
}


function isArtistRevealed(artistId) {
    return (
        lineupIsRevealed() &&
        REVEALED_ARTIST_IDS.includes(artistId)
    );
}


function getArtistData(artistId) {
    return bandData.find(
        artist => artist.id === artistId
    );
}


/* =========================================================
   SOCIAL LINKS
   ========================================================= */

function buildSocialLinks(artist) {

    if (!artist) return "";

    let links = "";

    if (artist.instagram) {
        links += `
            <a
                href="${artist.instagram}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="${artist.name} Instagram"
            >
                INSTAGRAM
            </a>
        `;
    }

    if (artist.website) {
        links += `
            <a
                href="${artist.website}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="${artist.name} Website"
            >
                WEBSITE
            </a>
        `;
    }

    if (artist.spotify) {
        links += `
            <a
                href="${artist.spotify}"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="${artist.name} Spotify"
            >
                SPOTIFY
            </a>
        `;
    }

    return links;
}


/* =========================================================
   REVEAL ARTISTS
   ========================================================= */

function revealArtists() {

    const cards = document.querySelectorAll(".artist-card");

    if (!cards.length) return;

    cards.forEach(card => {

        const numberElement =
            card.querySelector(".artist-number");

        if (!numberElement) return;

        const artistId =
            numberElement.textContent.trim();

        /*
           If this artist isn't part of the partial reveal,
           leave the card completely untouched.
        */

        if (!REVEALED_ARTIST_IDS.includes(artistId)) {
            return;
        }

        const artist = getArtistData(artistId);

        if (!artist) return;


        /* -------------------------------------------------
           FRONT OF CARD
           ------------------------------------------------- */

        const front =
            card.querySelector(".artist-card-front");

        if (front) {

            const image =
                front.querySelector(".artist-image");

            if (image && artist.image) {

                image.classList.remove("mystery-image");

                image.style.backgroundImage =
                    `url("${artist.image}")`;

                image.style.backgroundSize = "cover";
                image.style.backgroundPosition = "center";
            }


            const mysterySymbol =
                front.querySelector(".mystery-symbol");

            if (mysterySymbol) {
                mysterySymbol.style.display = "none";
            }


            const status =
                front.querySelector(".artist-status");

            if (status) {
                status.textContent = "FESTIVAL ARTIST";
            }


            const frontTitle =
                front.querySelector(".artist-front-info h3");

            if (frontTitle) {
                frontTitle.textContent = artist.name;
            }
        }


        /* -------------------------------------------------
           BACK OF CARD
           ------------------------------------------------- */

        const back =
            card.querySelector(".artist-card-back");

        if (back) {

            const backTitle =
                back.querySelector("h3");

            if (backTitle) {
                backTitle.textContent = artist.name;
            }


            const bio =
                back.querySelector("p");

            if (bio) {
                bio.textContent = artist.bio;
            }


            const socials =
                back.querySelector(".artist-socials");

            if (socials) {
                socials.innerHTML =
                    buildSocialLinks(artist);
            }


            const learnMore =
                back.querySelector(".learn-more-btn");

            if (learnMore) {

                learnMore.disabled = false;

                learnMore.dataset.artist =
                    artist.id;

                learnMore.removeAttribute("aria-disabled");
            }
        }


        /* -------------------------------------------------
           MARK CARD AS REVEALED
           ------------------------------------------------- */

        card.classList.add("is-revealed");
    });


    /* -----------------------------------------------------
       UPDATE SECRET MESSAGE
       ----------------------------------------------------- */

    const secretNote =
        document.querySelector(".lineup-secret-note");

    if (secretNote) {
        secretNote.textContent =
            "PHASE 1 REVEAL. MORE TO COME.";
    }
}


/* =========================================================
   ARTIST MODAL
   ========================================================= */

function setupArtistModal() {

    const modal =
        document.getElementById("artist-modal");

    if (!modal) return;


    const modalTitle =
        document.getElementById("artist-modal-title");

    const modalBio =
        document.getElementById("artist-modal-bio");

    const modalImage =
        modal.querySelector(".artist-modal-image");

    const modalLinks =
        modal.querySelector(".artist-modal-links");

    const closeButtons =
        modal.querySelectorAll("[data-close-modal]");


    /* -----------------------------------------------------
       OPEN MODAL
       ----------------------------------------------------- */

    function openModal(artist) {

        if (!artist) return;


        if (modalTitle) {
            modalTitle.textContent =
                artist.name;
        }


        if (modalBio) {
            modalBio.textContent =
                artist.bio;
        }


        if (modalLinks) {
            modalLinks.innerHTML =
                buildSocialLinks(artist);
        }


        if (modalImage && artist.image) {

            modalImage.classList.remove("mystery-image");

            modalImage.style.backgroundImage =
                `url("${artist.image}")`;

            modalImage.style.backgroundSize =
                "cover";

            modalImage.style.backgroundPosition =
                "center";

            const questionMark =
                modalImage.querySelector("span");

            if (questionMark) {
                questionMark.style.display =
                    "none";
            }
        }


        modal.classList.add("is-open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );
    }


    /* -----------------------------------------------------
       CLOSE MODAL
       ----------------------------------------------------- */

    function closeModal() {

        modal.classList.remove("is-open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );
    }


    /* -----------------------------------------------------
       LEARN MORE BUTTONS
       ----------------------------------------------------- */

    document.addEventListener(
        "click",
        function(event) {

            const button =
                event.target.closest(
                    ".learn-more-btn"
                );

            if (!button) return;

            event.preventDefault();
            event.stopPropagation();


            const artistId =
                button.dataset.artist;

            if (!artistId) return;

            if (!isArtistRevealed(artistId)) {
                return;
            }


            const artist =
                getArtistData(artistId);

            if (!artist) return;

            openModal(artist);
        }
    );


    /* -----------------------------------------------------
       CLOSE BUTTONS
       ----------------------------------------------------- */

    closeButtons.forEach(button => {

        button.addEventListener(
            "click",
            closeModal
        );
    });


    /* -----------------------------------------------------
       ESCAPE KEY
       ----------------------------------------------------- */

    document.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Escape") {
                closeModal();
            }
        }
    );
}


/* =========================================================
   MOBILE ARTIST CARD FLIPPING
   ========================================================= */

function setupArtistCards() {

    const cards =
        document.querySelectorAll(
            ".artist-card"
        );

    if (!cards.length) return;


    const isTouchDevice =
        window.matchMedia(
            "(hover: none) and (pointer: coarse)"
        );


    cards.forEach(card => {

        card.addEventListener(
            "click",
            function(event) {

                /*
                   Don't flip when clicking:
                   - Learn More
                   - social links
                */

                if (
                    event.target.closest(
                        ".learn-more-btn"
                    )
                ) {
                    return;
                }

                if (
                    event.target.closest(
                        ".artist-socials a"
                    )
                ) {
                    return;
                }


                /*
                   Only use JavaScript flipping
                   on touch/mobile devices.

                   Desktop continues using
                   the CSS hover rule.
                */

                if (!isTouchDevice.matches) {
                    return;
                }


                card.classList.toggle(
                    "is-flipped"
                );
            }
        );


        /* -------------------------------------------------
           KEYBOARD SUPPORT
           ------------------------------------------------- */

        card.addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key !== "Enter" &&
                    event.key !== " "
                ) {
                    return;
                }


                if (!isTouchDevice.matches) {
                    return;
                }


                event.preventDefault();

                card.classList.toggle(
                    "is-flipped"
                );
            }
        );
    });
}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function setupNavigation() {

    const toggle =
        document.getElementById("nav-toggle");

    const menu =
        document.getElementById("nav-menu");

    if (!toggle || !menu) return;


    /* -----------------------------------------------------
       TOGGLE MENU
       ----------------------------------------------------- */

    toggle.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            const isOpen =
                menu.classList.toggle(
                    "is-open"
                );

            toggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            toggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );
        }
    );


    /* -----------------------------------------------------
       CLOSE AFTER CLICKING A NAV LINK
       ----------------------------------------------------- */

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener(
            "click",
            function() {

                menu.classList.remove(
                    "is-open"
                );

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                toggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            }
        );
    });


    /* -----------------------------------------------------
       CLOSE WHEN CLICKING OUTSIDE
       ----------------------------------------------------- */

    document.addEventListener(
        "click",
        function(event) {

            if (
                !menu.contains(event.target) &&
                !toggle.contains(event.target)
            ) {

                menu.classList.remove(
                    "is-open"
                );

                toggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                toggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );
            }
        }
    );
}


/* =========================================================
   WEB3FORMS CONTACT FORM
   ========================================================= */

function setupContactForm() {

    const form =
        document.getElementById(
            "contact-form"
        );

    if (!form) return;


    const result =
        document.getElementById(
            "result"
        );

    const submitButton =
        form.querySelector(
            'button[type="submit"]'
        );


    form.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();


            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent =
                    "SENDING...";
            }


            if (result) {
                result.textContent = "";
            }


            const formData =
                new FormData(form);


            try {

                const response =
                    await fetch(
                        "https://api.web3forms.com/submit",
                        {
                            method: "POST",
                            body: formData
                        }
                    );


                const data =
                    await response.json();


                if (data.success) {

                    if (result) {
                        result.textContent =
                            "MESSAGE SENT. THANK YOU!";
                    }

                    form.reset();

                } else {

                    if (result) {
                        result.textContent =
                            data.message ||
                            "Something went wrong. Please try again.";
                    }
                }

            } catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );

                if (result) {
                    result.textContent =
                        "Something went wrong. Please try again.";
                }

            } finally {

                if (submitButton) {

                    submitButton.disabled = false;

                    submitButton.textContent =
                        "SEND MESSAGE";
                }
            }
        }
    );
}


/* =========================================================
   INITIALIZE EVERYTHING
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* Countdown */
        updateCountdown();

        setInterval(
            updateCountdown,
            1000
        );


        /* Reveal artists */
        if (lineupIsRevealed()) {
            revealArtists();
        }


        /* Artist cards */
        setupArtistCards();


        /* Artist modal */
        setupArtistModal();


        /* Navigation */
        setupNavigation();


        /* Contact form */
        setupContactForm();
    }
);
```
