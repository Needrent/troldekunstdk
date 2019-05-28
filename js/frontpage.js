console.log("We are connected");

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
menuBtns.onclick = function() {
   console.log("clicked");
}
console.log(menuBtns);
