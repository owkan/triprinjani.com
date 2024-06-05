// Header
// => Show & Hide Header
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll ke atas
    if (scrollTop > header.offsetHeight) {
      header.style.transform = 'translateY(-70px)';
    } else {
      header.style.transform = 'translateY(0)';
    }
  } else {
    // Scroll ke bawah
    header.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Untuk menghindari bug pada mobile
});

// user control element
// ambil selector option (titik tiga di sebelah kanan atas)
const userControl = document.querySelector('.user-controls');

// jika option di klik maka, munculkan user control
document.querySelector('#ellipsis-btn').addEventListener('click', () => {
  userControl.classList.add('user-controls-active');
});

// jika tombol X (di pojok kanan atas user control) maka, sembunyikan user control
document.querySelector('.close-user-control').addEventListener('click', () => {
  userControl.classList.remove('user-controls-active');
});
// -----------------------------------------------------------

// Slider Carousel ---------------------
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

// Float Button - cart------------------
// -------------------------------------

// const floatButton = document.querySelector('.float-btn.cart-btn');
// const cartList = document.querySelector('.list-cart');

// floatButton.addEventListener('click', (e) => {
//   cartList.classList.add('list-cart-active');
//   floatButton.style.right = '120px';

//   if (e.target == floatButton.classList.contains('cart-btn')) {
//     cartList.classList.remove('list-cart-active');
//   } else if (!e.target == floatButton.classList.contains('cart-btn')) {
//   }
// });

// Footer-------------------------------
// -------------------------------------
const curentYearCopyright = () => {
  let yearElement = document.getElementById('copyRight-year');
  let curentYear = new Date().getFullYear();
  yearElement.textContent = curentYear;
};
curentYearCopyright();
