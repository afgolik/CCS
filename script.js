window.onload = function () {
    const body = document.querySelector('body');
    const preloader = document.querySelector('#preloader');

    body.classList.remove('load');
    preloader.style.display = 'none';

    const mySlider = document.querySelector('#my-slider');
    const sliderValue = document.querySelector('#slider-value');

    mySlider.addEventListener('input', slider);

    function slider() {
        sliderValue.textContent = mySlider.value;
    }

    slider();

    const select = document.querySelector('.select');
    const selectView = document.querySelector('.select__view span');
    const selectInput = document.querySelector('.select__view input');
    const options = document.querySelectorAll('.select__option');

    select.addEventListener('click', (e) => {
        e.stopPropagation();
        select.classList.toggle('select-active');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selectView.innerText = option.innerText;
            selectInput.value = option.innerText;
        });
    });

    body.addEventListener('click', () => {
        select.classList.remove('select-active');
    });

    const burgerBtn = document.querySelector('#open-menu');
    const menu = document.querySelector('.navigate');
    const menuItems = document.querySelectorAll('.navigate__item');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('burger-active');
        menu.classList.toggle('navigate-active');
    })

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', () => {
            burgerBtn.classList.remove('burger-active');
            menu.classList.remove('navigate-active');
        })
    })
}
