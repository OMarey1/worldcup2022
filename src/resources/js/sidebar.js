const toggleBtn = document.getElementById("side_menu_toggle");
const sidebar = document.getElementById("left_section");
const selector = document.getElementById("selector");
// const homeBtn = document.getElementById("home_li");
// const scheduleBtn = document.getElementById("schedule_li");
// const videoBtn = document.getElementById("video_li");
// const cupBtn = document.getElementById("cup_li");
const links = sidebar.querySelectorAll("li");
const links_IDs = ["home", "schedule", "video", "cup"];
var NAVIGATION_IFRAME;
setTimeout(() => {
    NAVIGATION_IFRAME = document.getElementById("main_iframe");
}, 100);


toggleBtn.addEventListener("click", () => {
    if (sidebar.style.width == "100px") {
        sidebar.style.width = "0px";
        selector.style.opacity = "0";
    } else if (sidebar.style.width == "0px") {
        sidebar.style.width = "100px";
        selector.style.opacity = "1";
    } else {
        sidebar.style.width = "0px";
        selector.style.opacity = "0";
    }
});

links.forEach(link => {
    link.addEventListener("click", (e) => {
        link.classList.add("selected");
        let link_ID = e.target.id.split("_li")[0];
        selector.classList.add(`${link_ID}`);
        NAVIGATION_IFRAME.src = `./src/resources/html/${link_ID}.html`;
        links_IDs.forEach(id => {
            if (id != link_ID) {
                selector.classList.remove(`${id}`);
            }
        });

        links.forEach(otherLink => {
            if (otherLink != link) {
                otherLink.classList.remove("selected");
            }
        });
    });
});