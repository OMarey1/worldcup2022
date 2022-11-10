const colorThemeToggle = document.getElementById("color_theme");
// console.log(document.body.style[0] = "#222")
setTimeout(() => {
    // colorThemeToggle.getElementsByTagName('img')[0].src = "./src/resources/icons/moon.png";
}, 5000);

let COLOR_THEME_STATE = localStorage.getItem("color_theme");
// console.log(COLOR_THEME);

colorThemeToggle.addEventListener('click', () => {
    if (COLOR_THEME_STATE == "Light") {
        localStorage.setItem("color_theme", "Dark");
        COLOR_THEME_STATE = localStorage.getItem("color_theme");
        changeTheme("Dark");
    } else if (COLOR_THEME_STATE == "Dark") {
        localStorage.setItem("color_theme", "Light");
        COLOR_THEME_STATE = localStorage.getItem("color_theme");
        changeTheme("Light");
    } else {
        localStorage.setItem("color_theme", "Dark");
        COLOR_THEME_STATE = localStorage.getItem("color_theme");
        changeTheme("Dark");
    }
});
var Main_Iframe;
setTimeout(() => {
    Main_Iframe = document.getElementById("main_iframe");
    // var iframeInnerDoc = Main_Iframe.contentDocument || Main_Iframe.contentWindow.document;
}, 100);
/**
 *
 * @param {String} theme - "Light" | "Dark"
 */
function changeTheme(theme) {
    let iframeInnerDoc = Main_Iframe.contentWindow.document;
    let iframeBody = iframeInnerDoc.body

    document.body.style.transition = "all 0.2s ease-in-out";
    document.getElementsByTagName("header")[0].style.transition = "all 0.2s ease-in-out";
    document.getElementsByTagName("nav")[0].style.transition = "all 0.2s ease-in-out";
    document.getElementById("side_menu_toggle").style.transition = "all 0.2s ease-in-out";
    document.getElementById("searchbar").style.transition = "all 0.2s ease-in-out";
    document.getElementById("searchbar_input").style.transition = "all 0.2s ease-in-out";
    iframeBody.style.transition = "all 0.2s ease-in-out";

    if (theme == "Light") {
        body.classList.add("light");
        iframeBody.classList.add("light");
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
        }
        if (iframeBody.classList.contains("dark")) {
            iframeBody.classList.remove("dark");
        }
        toggleThemeBtnImg.src = "./src/resources/icons/moon.png";
    } else if (theme == "Dark") {
        body.classList.add("dark");
        iframeBody.classList.add("dark");
        if (body.classList.contains("light")) {
            body.classList.remove("light");
        }
        if (iframeBody.classList.contains("light")) {
            iframeBody.classList.remove("light");
        }
        toggleThemeBtnImg.src = "./src/resources/icons/sun.png";
    }

    setTimeout(() => {
        document.body.style.transition = "all 0s ease-in-out";
        document.getElementsByTagName("header")[0].style.transition = "all 0s ease-in-out";
        document.getElementsByTagName("nav")[0].style.transition = "all 0s ease-in-out";
        document.getElementById("side_menu_toggle").style.transition = "all 0s ease-in-out";
        document.getElementById("searchbar").style.transition = "all 0s ease-in-out";
        document.getElementById("searchbar_input").style.transition = "all 0s ease-in-out";
        iframeInnerDoc.body.style.transition = "all 0s ease-in-out";
    }, 5050);
}
// /**
//  *
//  * @param {String} theme - "Light" | "Dark"
//  */
// function changeTheme(theme) {
//     let iframeInnerDoc = Main_Iframe.contentWindow.document;
//     let iframeThemeCSSLink = iframeInnerDoc.getElementById("iframe-theme-css");

//     document.body.style.transition = "all 0.2s ease-in-out";
//     iframeInnerDoc.body.style.transition = "all 0.2s ease-in-out";

//     ThemeCSSLink.href = `./src/resources/css/${theme}_theme.css`;
//     iframeThemeCSSLink.href = `../css/${theme}_theme.css`;
//     if (theme == "Light") {
//         colorThemeToggle.getElementsByTagName('img')[0].src = "./src/resources/icons/moon.png";
//     } else if (theme == "Dark") {
//         colorThemeToggle.getElementsByTagName('img')[0].src = "./src/resources/icons/sun.png";
//     }

//     setTimeout(() => {
//         document.body.style.transition = "all 0s ease-in-out";
//         iframeInnerDoc.body.style.transition = "all 0s ease-in-out";
//     }, 5050);
// }