const navToggle = document.querySelector(".nave-toggle");
const navMenu = document.querySelector(".navegador-2");

navToggle.addEventListener("click", ()=> {
    navMenu.classList.toggle("nav-menu_visible");
});