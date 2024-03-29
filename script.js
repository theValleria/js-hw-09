// -------Завдання 1---------------
const sliderInput = document.querySelector(".slider__input");
const sliderImage = document.querySelector(".slider__image");

sliderInput.addEventListener("click", _.debounce(() => {
    let imageWidth = sliderInput.value + "%";
    sliderImage.style.width = imageWidth;
}, 400)
);

// -------Завдання 2---------------
let box = document.querySelector("#box");

document.addEventListener("mousemove", _.debounce((event) => {
    box.style.left = event.clientX + 'px';
    box.style.top = event.clientY + 'px';
}, 100)
);