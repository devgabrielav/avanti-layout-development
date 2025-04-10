import { searchResult, addCategories, addDropdownContent } from "./utils/help-functions";

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

if (screenWidth > 390) {
  fetch(`src/components/header/header.html`)
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data);
  
  fetch('src/components/dropdown-content/dropdown-content.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.dropdown-content').innerHTML = data
    
      const departmentTags = document.querySelector('.main-tags');
      
      addDropdownContent(departmentTags);
  
      const searchButton = document.querySelector('.top-button-search');
  
      searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        
        searchResult();
      });
  });
  
  fetch('src/components/dropdown-content/dropdown-content-dep.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('.dropdown-content-dep').innerHTML = data;
      
      addCategories();
  });
} else {
  fetch(`src/components/header/mobile-header.html`)
    .then(response => response.text())
    .then(data => document.getElementById('header-placeholder').innerHTML = data);
}


fetch('src/components/items-carrossel/items-carrossel.html')
  .then(response => response.text())
  .then(data => {
    const myItems = document.querySelectorAll('.items');

    myItems.forEach((item) => {
      item.innerHTML = `
      <div class="carrossel-texts">
        <h3>Lançamentos</h3>
        <a href="#">Ver mais</a>
      </div>
      ${data}
    `;

    const carrosselLinks = document.querySelectorAll('.carrossel-texts a');

    carrosselLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const discountLinks = document.querySelectorAll('.discount-percent');

        discountLinks.forEach((discountLink) => {
          discountLink.classList.add('blink');

          setTimeout(() => {
            discountLink.classList.remove('blink');
          }, 500);
        });
      });
    });
});

    const body = document.querySelector('body');

const swiperScript = document.createElement('script');

swiperScript.innerHTML = `
  var swiper = new Swiper(".mySwiper", {
  direction: 'horizontal',
slidesPerView: 1,
spaceBetween: 30,
loop: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});
`

body.appendChild(swiperScript);
  })

fetch('src/components/items-card/items-card.html')
.then(response => response.text())
.then(data => {
  const containers = document.querySelectorAll('.items-container');
  containers.forEach((container) => {
    for (let i = 0; i < 5; i++) {
      container.innerHTML += data;
    }
  });
})


fetch('src/components/mug-banner/mug-banner.html')
.then(response => response.text())
.then(data => {
  const mugBanners = document.querySelectorAll('.mug-banner');

  mugBanners.forEach((banner) => {
    banner.innerHTML = data
  })
});

fetch('src/components/footer/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });