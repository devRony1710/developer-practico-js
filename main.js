const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenuIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle("inactive")
}

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("inactive")
}

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);