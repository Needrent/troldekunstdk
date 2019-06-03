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

/* Reuse and modified from Huset-KBH assignment */
const priceUl = document.querySelector("#price");

const selectForm = document.querySelector("select");

const baseLink = "http://keawp.needrent.dk/wp-json/wp/v2/tk_contact";

function loadPageData(link){
    fetch(link).then(e=>e.json()).then(data=>insetPrices(data));
}
function insetPrices(data){
    data.forEach(object => {
        console.log(object);

    /* Create list */
    let newLi = document.createElement("li");

    /* Create select options */
    let newOption = document.createElement("OPTION");

    let labelName = object.contact_name;
    let labelInfo = object.contact_price;

    if(labelInfo == ""){
        newLi.textContent = labelName;
        newOption.textContent = labelName;
    }
    else{
        newLi.textContent = labelName + ": " + labelInfo;
        newOption.textContent = labelName + ' (' + labelInfo + ')';
    }
    newOption.value = labelName.toLowerCase();

    /* Post results */
    priceUl.appendChild(newLi);
    selectForm.appendChild(newOption);
})
}
loadPageData(baseLink);
