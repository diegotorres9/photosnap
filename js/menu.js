const menuIcon = document.querySelector(".menu-icon");
console.log(menuIcon);
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobileMenu = document.querySelector(".close-menu-icon");
const overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-anim");
    closeMobileMenu.style.display = "block";
    menuIcon.style.display = "none";
    overlay.style.height = "100%";
})
closeMobileMenu.addEventListener("click", () => {
    menuIcon.style.display = "block";
    closeMobileMenu.style.display = "none";
    mobileMenu.classList.toggle("mobile-anim");
    overlay.style.height = "0";
})