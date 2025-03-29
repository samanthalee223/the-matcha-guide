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

