document.addEventListener("DOMContentLoaded", function () {
    const buttonOpenCategories = document.getElementById('header-button-mobile');
    const buttonOpenCategories2 = document.getElementById('header-button-mobile2');

    function openMenu () {
        const nav = document.getElementById('header-nav');
        nav.classList.toggle('menu-active');
        const button = document.getElementById('header-button-mobile3');
        button.classList.toggle('menu-desactive');
    }

    buttonOpenCategories.addEventListener('click', openMenu);
    buttonOpenCategories2.addEventListener('click', openMenu);
});