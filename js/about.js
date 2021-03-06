const burgerMenuBtn = document.querySelector("#burger-menu");
const burgerMenuSpan = document.querySelectorAll("#burger-menu span");
const menuCon = document.querySelector("#menu");
const menuBtns = document.querySelectorAll("#menu a");

burgerMenuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    burgerMenuSpan[1].classList.toggle("middel");

    setTimeout(crossIn, 0);

    function crossIn() {
    burgerMenuSpan[0].classList.toggle("topX");

    burgerMenuSpan[2].classList.toggle("bottomX");
    setTimeout(menuIn, 0);

    function menuIn() {
        menuCon.classList.toggle("opened");
    }
}
}
// Video
const videoBtn = document.querySelector("#movie-btn");
const videoContainer = document.querySelector(".embed-container");
const video = document.querySelector("video");


videoBtn.addEventListener("click", openVideo);

function openVideo(){
    videoContainer.classList.toggle("hide");
    video.play();

    const closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", closeVideo);

    function closeVideo(){
    videoContainer.classList.toggle("hide");
    closeBtn.removeEventListener("click", closeVideo);
        video.pause();
        video.currentTime = 0;
}
}

/* Reuse and modified from Huset-KBH assignment */
const main = document.querySelector("main");
const banner = document.querySelector(".imageCrop img");
const header = document.querySelector("h1");
const tagline = document.querySelector("h3");

const baseLink = "http://keawp.needrent.dk/wp-json/wp/v2/tk_about/174?_embed";

function loadPageData(link){
    fetch(link).then(e=>e.json()).then(data=>showMenu(data));
}
function showMenu(object){
    header.innerHTML = object.title.rendered;
    banner.src = object._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
    tagline.innerHTML = object.tagline;
    main.innerHTML = object.content.rendered;
}
loadPageData(baseLink);
