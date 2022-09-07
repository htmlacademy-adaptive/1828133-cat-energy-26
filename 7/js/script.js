let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let mainNavWpapper = document.querySelector('.main-nav__wrapper')

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    mainNavWpapper.classList.remove('main-nav__wrapper--closed');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened')
    mainNavWpapper.classList.add('main-nav__wrapper--closed');
  }
});
