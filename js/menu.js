const menuIcon = document.querySelector(".menu-icon");
console.log(menuIcon);
const mobileMenu = document.querySelector(".mobile-menu");

menuIcon.addEventListener("click", () => {
    // if(mobileMenu.style.display === "none") {
    //     mobileMenu.style.display = "flex";
    // } else {
    //     mobileMenu.style.display = "none";
    // }
    mobileMenu.classList.toggle("mobile-anim");
})