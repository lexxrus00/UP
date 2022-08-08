

const burgerMenu = document.querySelector('.header__burger');
const menuNav = document.querySelector('.header__nav');

burgerMenu.addEventListener("click", function (e) {
    burgerMenu.classList.toggle('_active');
    menuNav.classList.toggle('_active');
});

const headerLinks = document.querySelectorAll('.header__link');
headerLinks.forEach(function (headerLink) {
    headerLink.addEventListener("click", function (e) {
        burgerMenu.classList.remove('_active');
        menuNav.classList.remove('_active');
    });
});


const questionsItems = document.querySelector('.questions__question');
const answerItem = document.querySelector('.questions__answer');

questionsItems.addEventListener("click", function (e) {
    answerItem.classList.toggle('_active');
    questionsItems.classList.toggle('_active');
})