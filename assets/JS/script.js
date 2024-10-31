let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `translateX(${-slideIndex * 100}%)`;
    }
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlides();
}

setInterval(nextSlide, 3000);
