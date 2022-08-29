const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector(".product-detail");

const toggleDesktopMenu = () => {
  const isAsideClosed = aside.classList.contains("inactive");

  if(!isAsideClosed) {
    aside.classList.add("inactive")
  }

  desktopMenu.classList.toggle("inactive");
}

const toggleMobileMenu = () => {
  const isAsideClosed = aside.classList.contains("inactive");

  if(!isAsideClosed) {
    aside.classList.add("inactive")
  }

  mobileMenu.classList.toggle("inactive");
}

const cartTogle = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if(!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive")
  }

  if(!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");

}

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', cartTogle);