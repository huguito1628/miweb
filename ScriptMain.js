let list = document.querySelectorAll(".navegacion li");

function activateLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => {
    item.addEventListener("mouseover", activateLink);
});

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navegacion = document.querySelector(".navegacion");
let principal= document.querySelector(".principal");

toggle.onclick = function() {
    navegacion.classList.toggle("active");
    principal.classList.toggle("active");
};
