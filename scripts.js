const slides = 
document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 6000; // change slide every 3 seconds

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === 
    index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % 
    slides.length;
    showSlide(currentSlide);
}

// Auto-slide function 
setInterval(nextSlide, slideInterval);

// Optionally, show the first slide on page load 
showSlide(currentSlide);