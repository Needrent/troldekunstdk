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
/* reused and edited from the Huset-Kbh project */
let myLink = "http://keawp.needrent.dk/wp-json/wp/v2/db_troldekunst?_embed";
let myCatLink = "http://keawp.needrent.dk/wp-json/wp/v2/tk_category";
const template = document.querySelector("#tempContent").content;
const parent = document.querySelector("#portContainer");
const menuBtn = document.querySelector("#bntContainer");

function loadData(link) {
    fetch(link).then(e => e.json()).then(data => show(data));
}

function loadMenuData(link) {
    fetch(link).then(e => e.json()).then(data => showMenu(data));
}

/* Button menu */
function showMenu(data) {
    data.forEach(object => {
        if (object.count != 0) {
            //console.log(object)

            let newBtn = document.createElement("button"); // create element
            let fillBtn = object.name;

            newBtn.textContent = fillBtn; // fill the created element
            newBtn.setAttribute('onClick', "filterSelection('" + object.name + "')");
            newBtn.setAttribute('class', 'btn');

            // Add active class to the current button (highlight it) /* W3Schools */
            var btnContainer = document.getElementById("bntContainer");
            var btns = btnContainer.getElementsByClassName("btn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function () {
                    var current = document.getElementsByClassName("active");
                    current[0].className = current[0].className.replace(" active", "");
                    this.className += " active";
                });
            }

            //console.log(newBtn);
            menuBtn.appendChild(newBtn);
        }
    });
}
/* W3Schools */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

loadMenuData(myCatLink);


function show(data) {
    data.forEach(object => {
            console.log(object);
            // clone the template
            const clone = template.cloneNode(true);

            // populate the template
            clone.querySelector("img").src = object._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url;
            clone.querySelector("img").setAttribute('class', 'filterDiv ' + object._embedded['wp:term']['0']['0'].name + ' show');

            // append to the DOM
            parent.appendChild(clone);

    });

}
loadData(myLink);
