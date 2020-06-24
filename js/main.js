const menuBtn = document.querySelector('.menu-btn');
const btnBurger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', toggleMunu);

function toggleMunu() {
    btnBurger.classList.toggle('open');

    if (btnBurger.classList.contains('open')) {
        nav.classList.add('open');
        navMenu.classList.add('open');
    } else {
        nav.classList.remove('open');
        navMenu.classList.remove('open');
    }
}