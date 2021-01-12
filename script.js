const body = document.body;
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.nav__toggle');

function toggleMobileNav() {
  header.classList.toggle('mobile-nav--active');
}

function disableScroll() {
  body.classList.toggle('disable-scroll');
}

menuBtn.addEventListener('click', () => {
  toggleMobileNav();
  disableScroll();
});