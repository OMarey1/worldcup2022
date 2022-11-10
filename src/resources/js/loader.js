const spinerBG = document.getElementById('loader');
const Spiner = document.getElementById('spiner');

const toggleThemeBtnImg = document.getElementById("color_theme").getElementsByTagName('img')[0];

const ThemeCSSLink = document.getElementById("theme-css");
let COLOR_THEME = localStorage.getItem("color_theme");

if (COLOR_THEME == "Dark") {
    toggleThemeBtnImg.src = "./src/resources/icons/sun.png";
} else if (COLOR_THEME == "Light") {
    toggleThemeBtnImg.src = "./src/resources/icons/moon.png";
}

// Spiner.style.animationDuration = "3s";
// Spiner.style.animationPlayState = "running";


document.addEventListener('readystatechange', (e) => {
    document.getElementById("highestElement").scrollIntoView(true);
    spinerBG.style.transition = "all 1.7s cubic-bezier(1,-0.01, 0.88, 0.04)"
    spinerBG.style.opacity = "0";
    let hide = setInterval(() => {
        if (spinerBG.style.opacity == "0") {
            setTimeout(() => {
                spinerBG.style.display = "none";
            }, 1750);
            clearInterval(hide);
        }
    }, 10);
});











// spinerBG.style.width = "100vw";
// spinerBG.style.height = "100vh";
// spinerBG.style.position = "fixed";
// spinerBG.style.zIndex = "999999";
// spinerBG.style.background = "var(--white_clr)";
// spinerBG.style.opacity = "1";
// spinerBG.style.transition = "0.3s ease-in-out"
