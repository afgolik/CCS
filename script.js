window.onload = function() {
    const body = document.querySelector('body');
    const preloader = document.querySelector('#preloader');

    body.classList.remove('load');
    preloader.style.display = 'none';

    const mySlider = document.getElementById('my-slider');
    const sliderValue = document.getElementById('slider-value');

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
}
