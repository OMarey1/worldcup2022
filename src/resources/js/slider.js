import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const slider_wrapper = document.getElementById("slider_wrapper");

var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: false,
    pagination: {
        el: ".pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".btn_next",
        prevEl: ".btn_prev",
    },
});


/**
 *
 * @param {string} title - The main title of the silde
 * @param {string} paragraph - The paragraph written under the title
 * @param {string} link - The url of the "Read more" button
 * @param {string} btnText - The text writen inside the button
 */
function createNewSlide(title, paragraph, link, btnText) {
    // let id = `slide${(slider_wrapper.childElementCount - 2) + 1}`;
    let id = `slide${parseInt(slider_wrapper.lastElementChild.id.split("slide")[1]) + 1}`;
    let slide = document.createElement("div");
    slide.id = id;
    slide.classList.add("slide");
    slide.classList.add("swiper-slide");

    let img = document.createElement("img");
    img.src = "../img/bg.png"
    img.classList.add("bg");

    let slide_left_content = document.createElement("div");
    slide_left_content.classList = "slide_left_content";

    let slide_right_content = document.createElement("div");
    slide_right_content.classList = "slide_right_content";

    let h2 = document.createElement("h2");
    h2.textContent = title;

    let p = document.createElement("p");
    p.innerHTML = paragraph;

    let a = document.createElement("a");
    a.href = link;
    a.draggable = false;
    a.textContent = btnText


    slide.appendChild(img);
    slide_left_content.appendChild(h2);
    slide_left_content.appendChild(p);
    slide_left_content.appendChild(a);
    slide.appendChild(slide_left_content);
    slide.appendChild(slide_right_content);
    slider_wrapper.appendChild(slide);

    return document.getElementById(id);
}

let developerSlide = createNewSlide("Omar Ramadan Marey", "Frontend, Backend,<br> Full Stack and Desktop Developer", "#", "Hire me");
developerSlide.style.background = "radial-gradient(#BD2F5A,#7A1130)";
developerSlide.style.boxShadow = "box-shadow: inset 0px 0px 20px rgba(52, 52, 52, 0.2)";

// let id = `slide${parseInt(slider_wrapper.lastChild.id.split("slide")[1]) + 1}`;