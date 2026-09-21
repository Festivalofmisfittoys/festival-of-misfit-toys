/* =========================================================
   FESTIVAL OF MISFIT TOYS
   MASTER JAVASCRIPT
   ========================================================= */


/* =========================================================
   FOMT LINEUP STATUS
   ========================================================= */

/*
   Bands marked revealed: true
   will appear immediately.

   Bands marked revealed: false
   will remain locked until you manually
   change them to revealed: true.
*/


/* =========================================================
   ARTIST DATA
   ========================================================= */

const bandData = [

    {
        id: "01",
        name: "408",
        bio: "Orlando-based alt/pop punk/electronic band.",
        image: "images/408.jpg",
        instagram: "https://www.instagram.com/408music",
        website: "",
        spotify: "https://open.spotify.com/artist/1m2wYIvVYvhEnvdaOJbIfT",
        revealed: false
    },

    {
        id: "02",
        name: "FELICITY",
        bio: "Orlando’s FELICITY are redefining what pop punk and emo can sound like in 2026: stadium sized hooks built for chaos, catharsis, and community.",
        image: "images/felicity.jpg",
        instagram: "https://www.instagram.com/wearefelicity",
        website: "https://www.wearefelicity.com/",
        spotify: "https://open.spotify.com/artist/2aqSgJBj7gtdClLx6SQ1mK",
        revealed: true
    },

    {
        id: "03",
        name: "DONEFOR",
        bio: "With their unique blend of genres one can only describe as “ADHD-CORE”, DONEFOR polarizes the music scene with their genre bending sounds, insane stage antics and active social media presence. Hailing from SWFL.",
        image: "images/donefor.jpg",
        instagram: "https://www.instagram.com/donefor_band",
        website: "https://doneforband.com/",
        spotify: "https://open.spotify.com/artist/26nddmSfHAIsObi8F1kkKn",
        revealed: false
    },

    {
        id: "04",
        name: "We're Wolves",
        bio: "Step into the world of We're Wolves — a musical force that blends alternative, hard rock, and metalcore. Hailing from West Palm Beach, Florida.",
        image: "images/werewolves.jpg",
        instagram: "https://www.instagram.com/werewolves_fl",
        website: "https://www.werewolvesfl.com/",
        spotify: "https://open.spotify.com/artist/73hZY77xQYtJsTrslIzy7v",
        revealed: true
    },

    {
        id: "05",
        name: "LIVING DEAD GIRL",
        bio: "Orlando-based metal band LIVING DEAD GIRL exploded onto the alternative music scene with their debut album “Exorcism” in 2021. Created by vocalist and songwriter Molly Rennick, produced by Mitchell Marlow, and mastered by Howie Weinberg.",
        image: "images/livingdeadgirl.jpg",
        instagram: "https://www.instagram.com/livingdeadgirlofficial/",
        website: "https://www.livingdeadgirl.ca/",
        spotify: "https://open.spotify.com/artist/3ahU0zmYd7h1xTDBGGiDur",
        revealed: true
    },

    {
        id: "06",
        name: "Create Control",
        bio: "Emerging from the vibrant tapestry of Central Florida's music scene, Create Control is a five-piece melodic metalcore band that deftly intertwines the raw intensity of nu-metal and the evocative spirit of alternative rock.",
        image: "images/createcontrol.jpg",
        instagram: "https://www.instagram.com/crtctrlbandfl",
        website: "https://www.createcontrolband.com/",
        spotify: "https://open.spotify.com/artist/55t0fVUZ1q3pR2EFXorJif",
        revealed: true
    },

    {
        id: "07",
        name: "INDEBTED",
        bio: "Nü-Core from Florida.",
        image: "images/indebted.jpg",
        instagram: "https://www.instagram.com/indebtedmusic",
        website: "https://indebtedmusic.com/",
        spotify: "https://open.spotify.com/artist/5IQnFzOZeFYHYkiwwhRsbh",
        revealed: false
    },

    {
        id: "08",
        name: "INSITE",
        bio: "INSITE is a rising rock and heavy metal vocalist who first gained widespread attention through his viral cover performances on social media and his breakout appearance on American Idol in 2025.",
        image: "images/insite.jpg",
        instagram: "https://www.instagram.com/insiteofmind/",
        website: "https://www.insiteofmind.com/",
        spotify: "https://open.spotify.com/artist/2h05fxb5Yu4afnOaI8FxOq",
        revealed: true
    },

    {
        id: "09",
        name: "Bay Street",
        bio: "If pop culture met pop punk with breakdowns Bay Street would be the product. A DIY heavy pop punk band hailing from Apopka, FL. With chugging breakdowns that are reminiscent of 2011 metalcore, choruses that you can’t help but be carried away by.",
        image: "images/baystreet.jpg",
        instagram: "https://www.instagram.com/baystreetfl/",
        website: "",
        spotify: "https://open.spotify.com/artist/56ypHZ2F0QC0Qq3aCYrWMG",
        revealed: true
    },

    {
        id: "10",
        name: "ENAMORED",
        bio: "Enamored is a 5-piece Post-Hardcore/Metalcore band from SWFL. Leading the 2000s revival into a modern twist. They attack with melodic tanking riffs, clean soaring vocals and neck breaking screams.",
        image: "images/enamored.jpg",
        instagram: "https://www.instagram.com/enamoredband/",
        website: "",
        spotify: "https://open.spotify.com/artist/44Mko7AxnBDJKBCs6KAbAd?si=U8W7ko6lR3eFciZqaLh1Cg",
        revealed: true
    },

    {
        id: "11",
        name: "WICKED PLAYGROUND",
        bio: "Wicked Playground is an Alternative Nu-Metal band based out of Miami, FL. Influenced by many bands such as Korn, Rammstein, Deftones, Slipknot, etc.; Wicked Playground is known for blending genres and putting on a hell of a show.",
        image: "images/wicked.jpg",
        instagram: "https://www.instagram.com/wickedplaygroundmusic/",
        website: "",
        spotify: "https://open.spotify.com/artist/0R6cpc6UNLQMDhmpxLAjy1?si=TaWsw230SAStloKmRJNz_w",
        revealed: true
    }

];


/* =========================================================
   BUILD SOCIAL LINKS
   ========================================================= */

function buildSocialLinks(data) {

    const links = [];

    if (data.instagram) {

        links.push(`
            <a
                href="${data.instagram}"
                target="_blank"
                rel="noopener noreferrer">
                INSTAGRAM
            </a>
        `);

    }

    if (data.website) {

        links.push(`
            <a
                href="${data.website}"
                target="_blank"
                rel="noopener noreferrer">
                WEBSITE
            </a>
        `);

    }

    if (data.spotify) {

        links.push(`
            <a
                href="${data.spotify}"
                target="_blank"
                rel="noopener noreferrer">
                SPOTIFY
            </a>
        `);

    }

    return links.join("");
}


/* =========================================================
   REVEAL ARTIST CARDS
   ========================================================= */

function revealArtists() {

    const cards =
        document.querySelectorAll(".artist-card");

    cards.forEach(card => {

        const numberElement =
            card.querySelector(".artist-number");

        if (!numberElement) return;

        const artistNumber =
            numberElement.textContent.trim();

        const data =
            bandData.find(
                band => band.id === artistNumber
            );

        if (!data) return;


        /* =====================================================
           LOCKED CARD
           ===================================================== */

        if (!data.revealed) {

            const frontStatus =
                card.querySelector(
                    ".artist-front-info .artist-status"
                );

            const frontTitle =
                card.querySelector(
                    ".artist-front-info h3"
                );

            const learnMore =
                card.querySelector(
                    ".learn-more-btn"
                );

            if (frontStatus) {

                frontStatus.textContent =
                    "ARTIST REVEAL";

            }

            if (frontTitle) {

                frontTitle.textContent =
                    "COMING SOON";

            }

            if (learnMore) {

                learnMore.disabled = true;

            }

            return;
        }


        /* =====================================================
           FRONT
           ===================================================== */

        const frontImage =
            card.querySelector(".artist-image");

        const frontStatus =
            card.querySelector(
                ".artist-front-info .artist-status"
            );

        const frontTitle =
            card.querySelector(
                ".artist-front-info h3"
            );


        if (frontImage) {

            frontImage.classList.remove(
                "mystery-image"
            );

            frontImage.style.backgroundImage =
                `url("${data.image}")`;

            frontImage.style.backgroundSize =
                "cover";

            frontImage.style.backgroundPosition =
                "center";


            const mysterySymbol =
                frontImage.querySelector(
                    ".mystery-symbol"
                );

            if (mysterySymbol) {

                mysterySymbol.style.display =
                    "none";

            }

        }


        if (frontStatus) {

            frontStatus.textContent =
                "FESTIVAL ARTIST";

        }


        if (frontTitle) {

            frontTitle.textContent =
                data.name;

        }


        /* =====================================================
           BACK
           ===================================================== */

        const back =
            card.querySelector(
                ".artist-card-back"
            );

        if (!back) return;


        const backTitle =
            back.querySelector("h3");

        const backBio =
            back.querySelector("p");

        const socials =
            back.querySelector(
                ".artist-socials"
            );

        const learnMore =
            back.querySelector(
                ".learn-more-btn"
            );


        if (backTitle) {

            backTitle.textContent =
                data.name;

        }


        if (backBio) {

            backBio.textContent =
                data.bio;

        }


        if (socials) {

            socials.innerHTML =
                buildSocialLinks(data);

        }


        if (learnMore) {

            learnMore.disabled =
                false;

        }


        card.classList.add(
            "is-revealed"
        );

    });


    /* =====================================================
       SECRET NOTE
       ===================================================== */

    const secretNote =
        document.querySelector(
            ".lineup-secret-note"
        );

    if (secretNote) {

        secretNote.textContent =
            "THE LINEUP IS HERE. MORE ARTISTS TO BE REVEALED.";

    }

}


/* =========================================================
   LINEUP STATUS
   ========================================================= */

function lineupIsRevealed() {

    return true;

}


/* =========================================================
   ARTIST CARDS + MODAL
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const cards =
            document.querySelectorAll(
                ".artist-card"
            );

        const modal =
            document.getElementById(
                "artist-modal"
            );

        const modalImage =
            document.querySelector(
                ".artist-modal-image"
            );

        const modalKicker =
            document.querySelector(
                ".artist-modal-kicker"
            );

        const modalTitle =
            document.getElementById(
                "artist-modal-title"
            );

        const modalBio =
            document.getElementById(
                "artist-modal-bio"
            );

        const modalLinks =
            document.querySelector(
                ".artist-modal-links"
            );

        const closeElements =
            document.querySelectorAll(
                "[data-close-modal]"
            );

        const learnMoreButtons =
            document.querySelectorAll(
                ".learn-more-btn"
            );


        /* =====================================================
           INITIAL ARTIST STATE
           ===================================================== */

        revealArtists();


        /* =====================================================
           MOBILE CARD FLIP
           ===================================================== */

        cards.forEach(card => {

            card.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target.closest(
                            ".learn-more-btn"
                        )
                    ) {

                        return;

                    }


                    if (
                        window.matchMedia(
                            "(hover: none)"
                        ).matches
                    ) {

                        card.classList.toggle(
                            "is-flipped"
                        );

                    }

                }
            );


            /* =================================================
               KEYBOARD SUPPORT
               ================================================= */

            card.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();


                        if (
                            window.matchMedia(
                                "(hover: none)"
                            ).matches
                        ) {

                            card.classList.toggle(
                                "is-flipped"
                            );

                        }

                    }

                }
            );

        });


        /* =====================================================
           LEARN MORE
           ===================================================== */

        learnMoreButtons.forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();

                        if (!modal) return;


                        const artistNumber =
                            button.dataset.artist || "";


                        const data =
                            bandData.find(
                                band =>
                                    band.id ===
                                    artistNumber
                            );


                        if (
                            !data ||
                            !data.revealed
                        ) {

                            return;

                        }


                        /* =====================================
                           MODAL CONTENT
                           ===================================== */

                        if (modalKicker) {

                            modalKicker.textContent =
                                "FESTIVAL ARTIST";

                        }


                        if (modalTitle) {

                            modalTitle.textContent =
                                data.name;

                        }


                        if (modalBio) {

                            modalBio.textContent =
                                data.bio;

                        }


                        if (modalLinks) {

                            modalLinks.innerHTML =
                                buildSocialLinks(data);

                        }


                        /* =====================================
                           MODAL IMAGE
                           ===================================== */

                        if (modalImage) {

                            modalImage.classList.remove(
                                "mystery-image"
                            );

                            modalImage.style.backgroundImage =
                                `url("${data.image}")`;

                            modalImage.style.backgroundSize =
                                "cover";

                            modalImage.style.backgroundPosition =
                                "center";


                            const mysterySpan =
                                modalImage.querySelector(
                                    "span"
                                );


                            if (mysterySpan) {

                                mysterySpan.style.display =
                                    "none";

                            }

                        }


                        /* =====================================
                           OPEN MODAL
                           ===================================== */

                        modal.classList.add(
                            "is-open"
                        );

                        modal.setAttribute(
                            "aria-hidden",
                            "false"
                        );

                        document.body.classList.add(
                            "modal-open"
                        );

                    }
                );

            }
        );


        /* =====================================================
           CLOSE MODAL
           ===================================================== */

        function closeModal() {

            if (!modal) return;

            modal.classList.remove(
                "is-open"
            );

            modal.setAttribute(
                "aria-hidden",
                "true"
            );

            document.body.classList.remove(
                "modal-open"
            );

        }


        closeElements.forEach(
            function (element) {

                element.addEventListener(
                    "click",
                    closeModal
                );

            }
        );


        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeModal();

                }

            }
        );

    }
);


/* =========================================================
   HAMBURGER NAVIGATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const navToggle =
            document.getElementById(
                "nav-toggle"
            );

        const navMenu =
            document.getElementById(
                "nav-menu"
            );


        if (!navToggle || !navMenu) {

            return;

        }


        navToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    navMenu.classList.toggle(
                        "is-open"
                    );


                navToggle.classList.toggle(
                    "is-open",
                    isOpen
                );


                navToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );


                navToggle.setAttribute(
                    "aria-label",
                    isOpen
                        ? "Close navigation"
                        : "Open navigation"
                );

            }
        );


        navMenu
            .querySelectorAll("a")
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            navMenu.classList.remove(
                                "is-open"
                            );

                            navToggle.classList.remove(
                                "is-open"
                            );

                            navToggle.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                            navToggle.setAttribute(
                                "aria-label",
                                "Open navigation"
                            );

                        }
                    );

                }
            );

    }
);


/* =========================================================
   WEB3FORMS CONTACT FORM
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const contactForm =
            document.getElementById(
                "contact-form"
            );

        const contactResult =
            document.getElementById(
                "contact-result"
            );

        const contactSubmit =
            document.getElementById(
                "contact-submit"
            );


        if (!contactForm) return;


        contactForm.addEventListener(
            "submit",
            async function (event) {

                event.preventDefault();


                if (contactSubmit) {

                    contactSubmit.disabled =
                        true;

                    contactSubmit.textContent =
                        "SENDING...";

                }


                if (contactResult) {

                    contactResult.textContent =
                        "";

                    contactResult.className =
                        "contact-result";

                }


                const formData =
                    new FormData(
                        contactForm
                    );


                try {

                    const response =
                        await fetch(
                            "https://api.web3forms.com/submit",
                            {
                                method: "POST",
                                body: formData
                            }
                        );


                    const result =
                        await response.json();


                    if (result.success) {

                        if (contactResult) {

                            contactResult.textContent =
                                "MESSAGE SENT — THANK YOU FOR REACHING OUT!";

                            contactResult.classList.add(
                                "success"
                            );

                        }


                        contactForm.reset();


                        if (contactSubmit) {

                            contactSubmit.textContent =
                                "MESSAGE SENT";

                        }


                        setTimeout(
                            function () {

                                if (contactSubmit) {

                                    contactSubmit.disabled =
                                        false;

                                    contactSubmit.textContent =
                                        "SEND MESSAGE";

                                }

                            },
                            4000
                        );


                    } else {

                        if (contactResult) {

                            contactResult.textContent =
                                result.message ||
                                "SOMETHING WENT WRONG. PLEASE TRY AGAIN.";

                            contactResult.classList.add(
                                "error"
                            );

                        }


                        if (contactSubmit) {

                            contactSubmit.disabled =
                                false;

                            contactSubmit.textContent =
                                "SEND MESSAGE";

                        }

                    }


                } catch (error) {

                    console.error(
                        "Web3Forms error:",
                        error
                    );


                    if (contactResult) {

                        contactResult.textContent =
                            "UNABLE TO SEND MESSAGE. PLEASE TRY AGAIN.";

                        contactResult.classList.add(
                            "error"
                        );

                    }


                    if (contactSubmit) {

                        contactSubmit.disabled =
                            false;

                        contactSubmit.textContent =
                            "SEND MESSAGE";

                    }

                }

            }
        );

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const countdown =
            document.getElementById(
                "countdown"
            );

        if (countdown) {

            countdown.textContent =
                "LINEUP REVEALED";

        }

    }
);
