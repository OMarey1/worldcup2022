const spinerBG = document.getElementById('loader');
const Spiner = document.getElementById('spiner');

document.addEventListener('readystatechange', (e) => {
    if (document.getElementById("view_news_btn")) {
        var I_Hate_This_Element = document.getElementById("view_news_btn");
    }
    document.getElementById("highestElement").scrollIntoView(true);
    spinerBG.style.transition = "all 0.8s cubic-bezier(1,-0.01, 0.88, 0.04)"
    spinerBG.style.opacity = "0";
    let hide = setInterval(() => {
        if (spinerBG.style.opacity == "0") {
            setTimeout(() => {
                spinerBG.style.display = "none";
                I_Hate_This_Element.style.opacity = "1";
            }, 810);
            clearInterval(hide);
        }
    }, 10);
});
