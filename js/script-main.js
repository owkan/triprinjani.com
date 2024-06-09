// -------------------------------------
// Header
// -------------------------------------
// => Show & Hide Header
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll ke atas
    if (scrollTop > header.offsetHeight) {
      header.style.transform = 'translateY(-85px)';
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

// -------------------------------------
// User control
// -------------------------------------
const customerService = document.querySelector('#cs');
const customerServiceContain = document.querySelector('.cs-ol');

customerService.addEventListener('click', () => {
  customerServiceContain.classList.toggle('cs-ol-active');
});

// -------------------------------------
// Auto Load content
// -------------------------------------
const offerCardWrapper = document.querySelector('#wrp1');
const topCardWrapper = document.querySelector('#wrp2');
const privateTripWrapper = document.querySelector('#wrp3');
const otherTripWrapper = document.querySelector('#wrp4');
let offerCardWrapperContain = [];
let topRinjaniProgrames = [];
let privateProgrames = [];
let otherProgrames = [];

// => HTML cards builder
const addToOfferCard = () => {
  if (offerCardWrapperContain.length > 0) {
    offerCardWrapperContain.forEach((e1) => {
      let cardA = document.createElement('a');
      cardA.classList.add('card-a');
      cardA.setAttribute('href', `${e1.url}`);
      cardA.innerHTML = `<div class="card-a-img">
      <img src="${e1.img}" alt="">
  </div>
  <div class="card-a-inf">
      <h4 class="h4 h4-card-a">${e1.titile}</h4>
      <p class="p2">${e1.location}</p>
      <ul>                            
          <li><i class="fa-solid fa-percent"></i> ${e1.discount}</li>
          <li><i class="fa fa-car"></i> ${e1.include1}</li>
          <li><i class="fa fa-home"></i> ${e1.include2}</li>
          <li><i class="fa fa-bowl-food"></i> ${e1.include3}</li>
      </ul>
      <div class="rate">
        <span>${e1.stars} ${e1.usd}</span>
      </div>
  </div>`;
      offerCardWrapper.appendChild(cardA);
    });
  }
};

const addTopProgrames = () => {
  if (topRinjaniProgrames.length > 0) {
    topRinjaniProgrames.forEach((e2) => {
      let cardB = document.createElement('a');
      cardB.classList.add('card-b');
      cardB.setAttribute('href', `${e2.url2}`);
      cardB.innerHTML = `<div class="card-b-img">
                        <img src="${e2.img2}" alt="">
                    </div>
                    <div class="card-b-inf">
                        <h4 class="h4 h4-card-a">${e2.name2}</h4>
                        <span class="span1"><i class="fa-solid fa-location-dot"></i> ${e2.location2}</span>
                    </div>
                    <div class="rate">
                      <span>${e2.stars2} ${e2.usd2}</span>
                    </div>`;
      topCardWrapper.appendChild(cardB);
    });
  }
};

const addPrivateProgrames = () => {
  if (privateProgrames.length > 0) {
    privateProgrames.forEach((e3) => {
      let cardB = document.createElement('a');
      cardB.classList.add('card-b');
      cardB.setAttribute('href', `${e3.url3}`);
      cardB.innerHTML = `<div class="card-b-img">
                        <img src="${e3.img3}" alt="">
                    </div>
                    <div class="card-b-inf">
                        <h4 class="h4 h4-card-a">${e3.name3}</h4>
                        <span class="span1"><i class="fa-solid fa-location-dot"></i> ${e3.location3}</span>
                    </div>
                    <div class="rate">
                      <span>${e3.stars3} ${e3.usd3}</span>
                    </div>`;
      privateTripWrapper.appendChild(cardB);
    });
  }
};

const addOtherProgrames = () => {
  if (otherProgrames.length > 0) {
    otherProgrames.forEach((e4) => {
      let cardC = document.createElement('a');
      cardC.classList.add('card-c');
      cardC.setAttribute('href', `${e4.tohUrl}`);
      cardC.innerHTML = `<div class="card-c-img">
                    <img src="${e4.tohImg}" alt="">
                </div>
                <div class="card-c-inf">
                    <h4 class="h4 h4-card-a">${e4.tohTitle}</h4>
                    <span class="span1"><i class="fa-solid fa-location-dot"></i> ${e4.tohLocation}</span>
                </div>`;
      otherTripWrapper.appendChild(cardC);
    });
  }
};

// => json parse
const initApp1 = (database) => {
  fetch(database)
    .then((response) => response.json())
    .then((dataName) => {
      offerCardWrapperContain = dataName;
      addToOfferCard();
    });
};
initApp1('./json/offer.json');

const initApp2 = (database) => {
  fetch(database)
    .then((response) => response.json())
    .then((dataName) => {
      topRinjaniProgrames = dataName;
      addTopProgrames();
    });
};
initApp2('./json/top-rinjani.json');

const initApp3 = (database) => {
  fetch(database)
    .then((response) => response.json())
    .then((dataName) => {
      privateProgrames = dataName;
      addPrivateProgrames();
    });
};
initApp3('./json/private.json');

const initApp4 = (database) => {
  fetch(database)
    .then((response) => response.json())
    .then((dataName) => {
      otherProgrames = dataName;
      addOtherProgrames();
    });
};
initApp4('./json/other-inf.json');

// -------------------------------------
// Push up info
// -------------------------------------

// -------------------------------------
// Footer
// -------------------------------------
const curentYearCopyright = () => {
  let yearElement = document.getElementById('copyRight-year');
  let curentYear = new Date().getFullYear();
  yearElement.textContent = curentYear;
};
curentYearCopyright();
