const lenis = new Lenis();

lenis.on("scroll", (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const space1mt = document.getElementById("space1mt");

const element = document.querySelector(".navbarouter");
const heightOffset = element.offsetHeight;
space1mt.style.height = heightOffset + "px";

const navButtons = document.getElementById("navButtonsInner");
const openNavSymbol = document.getElementById("navopensymbol");

let state = false;
function toggleNav() {
    if (state === false) {
        state = !state;
        navButtons.style.opacity = "1";
        navButtons.style.pointerEvents = "all";
        console.log("navbar state:" + state);
        openNavSymbol.style.rotate = "-180deg";
    } else if (state === true) {
        state = !state;
        navButtons.style.opacity = "0";
        navButtons.style.pointerEvents = "none";
        console.log("navbar state: " + state);
        openNavSymbol.style.rotate = "0deg";
    }
}
