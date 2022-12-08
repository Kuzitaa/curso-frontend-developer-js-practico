const menuEmail = document.querySelector('.navbar-email')
const burguerMenu = document.querySelector('.menu')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const orderMenu = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleOrderMenu)


function toggleDesktopMenu() {
    orderMenu.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    orderMenu.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleOrderMenu() {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    orderMenu.classList.toggle('inactive')
}