let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;
let counter = document.getElementById('counter');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        if (i === index) {
            slide.style.display = 'block';
        }
    });
    counter.textContent = `${index + 1} / ${totalSlides}`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000); // Change image every 3 seconds
}

// Show the first image and update counter initially
showSlide(slideIndex);

// Start automatic slideshow
autoSlide();
