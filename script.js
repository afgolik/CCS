const mySlider = document.getElementById('my-slider');
const sliderValue = document.getElementById('slider-value');

function slider() {
    sliderValue.textContent = mySlider.value;
}

slider();

const select = document.querySelector('.select');
const selectView = document.querySelector('.select__view span');
const options = document.querySelectorAll('.select__option');
const body = document.querySelector('body');

select.addEventListener('click', (e) => {
    e.stopPropagation();
    select.classList.toggle('select-active');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        selectView.innerText = option.innerText;
    });
});

body.addEventListener('click', () => {
    select.classList.remove('select-active');
});
