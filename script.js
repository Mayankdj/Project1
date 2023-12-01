let currentIndex = 0;
const carousel = document.getElementById('product-carousel');
const totalItems = document.querySelectorAll('.item').length;

function updateCarousel() {
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

// Automatic rotation (every 3 seconds)
setInterval(nextSlide, 3000);
