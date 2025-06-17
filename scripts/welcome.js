const header = document.getElementById("header");
const IText = document.getElementById("I");
const IImg = document.getElementById("IImg");

let scrolled = false;
let scrollTimeout;

window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (window.scrollY === 0) {
            header.style.animation = "headerTransparencyActive 0.5s linear forwards";
            IText.style.animation = "welcomeTransparencyTextActive 0.5s linear forwards";
            IImg.style.animation = "welcomeTransparencyImgActive 0.5s linear forwards";
        } else {
            header.style.animation = "headerTransparencyInactive 0.5s linear forwards";
            IText.style.animation = "welcomeTransparencyTextInactive 0.5s linear forwards";
            IImg.style.animation = "welcomeTransparencyImgInactive 0.5s linear forwards";
        }

        if (window.scrollY < window.innerHeight && window.scrollY > 1) {
            if (!scrolled) {
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                scrolled = true;
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                scrolled = false;
            }
        }
    }, 200);
});
