//javaScript for the responsive navigation bar and hamburger menu//

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector(".header")

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () =>{
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");

}))

// javaScript for hamburger menu icon changing when clicked

const menuButton = document.getElementById('menu-button');
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

let menuOpen = false;

menuButton.addEventListener('click', () => {
menuOpen = !menuOpen;

// Toggle the menu icon
menuIcon.src = menuOpen ? 'images/hamburger-menu-open.svg' : 'images/hamburger-menu.svg';

// Show/hide the mobile menu
mobileMenu.classList.toggle('hidden');
});
