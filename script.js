const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".nav");

menuIcon.addEventListener(`click`, () => {
    navbar.classList.toggle("change")
});
