const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", iniciarSlide);

function iniciarSlide() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 6000);
    }
}

function mostrarSlide(index) {
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[index].classList.add("displaySlide");

    slideIndex = index;
}

function prevSlide() {
    mostrarSlide(slideIndex - 1);
}

function nextSlide() {
    mostrarSlide(slideIndex + 1);
}
