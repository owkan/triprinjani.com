// -------------------------------------
// Slider Carousel
// -------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.sub-container-a');
  const cards = document.querySelectorAll('.card-a');
  let currentIndex = 0;

  function moveToNextCard() {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function moveToPreviousCard() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = cards.length - 1;
    }
    updateCarousel();
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    const rightNav = document.getElementById('right-nav');
    const leftNav = document.getElementById('left-nav');

    if (currentIndex === cards.length - 1) {
      rightNav.style.opacity = '0.5'; // Menurunkan opacity ketika di card terakhir
      rightNav.style.transition = '0.3s'; // Menurunkan opacity ketika di card terakhir
    } else {
      rightNav.style.opacity = '1'; // Mengembalikan opacity normal ketika tidak di card terakhir
    }

    if (currentIndex === 0) {
      leftNav.style.opacity = '0.5'; // Menurunkan opacity ketika di card pertama
      leftNav.style.transition = '0.3s'; // Menurunkan opacity ketika di card pertama
    } else {
      leftNav.style.opacity = '1'; // Mengembalikan opacity normal ketika tidak di card pertama
    }
  }

  document.getElementById('right-nav').addEventListener('click', function () {
    moveToNextCard();
  });
  document.getElementById('left-nav').addEventListener('click', function () {
    moveToPreviousCard();
  });
});
