import { searchResult, addCategories, addDropdownContent, paragraphConditions, footerParagraphConditions } from "./utils/help-functions";

fetch(`src/components/header/header.html`)
  .then(response => response.text())
  .then(data => document.querySelector('header').innerHTML = data);

  const chairImage = document.querySelector('.chair-image');
  const selectedSpan = document.querySelector('.selected-span');
  

  const updateImageSrc = () => {
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 500) {
      chairImage.src = '/src/assets/mobile-chair.png';
      selectedSpan.innerHTML = 'Selected items up to';
    } else {
      chairImage.src = '/src/assets/chair.png';
      selectedSpan.innerHTML = 'Itens selecionados com até';
    }
  };

  updateImageSrc();
  
  window.addEventListener('resize', updateImageSrc);

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

fetch('src/components/items-carousel/items-carousel.html')
  .then(response => response.text())
  .then(data => {
    const myItems = document.querySelectorAll('.items');

    myItems.forEach((item) => {
      item.innerHTML = `
      <div class="carousel-texts">
        <h3>Lançamentos</h3>
        <a href="#">Ver mais</a>
      </div>
      ${data}
    `;

    const carouselLinks = document.querySelectorAll('.carousel-texts a');

    carouselLinks.forEach((link) => {
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

    const updateItemsContainer = () => {
      const screenWidth = window.innerWidth;

      containers.forEach((container) => {
        container.innerHTML = '';

        const itemCount = screenWidth < 500 ? 2 : 5;

        for (let i = 0; i < itemCount; i++) {
          container.innerHTML += data;
        }
      });
    };

    updateItemsContainer();

    window.addEventListener('resize', updateItemsContainer);
  });


fetch('src/components/mug-banner/mug-banner.html')
.then(response => response.text())
.then(data => {
  const mugBanners = document.querySelectorAll('.mug-banner');

  mugBanners.forEach((banner) => {
    banner.innerHTML = data
  })
  const updateMugParagraphs = () => {
    const mugParagraphs = document.querySelectorAll('.mug-banner-paragraphs');
  
    const screenWidth = window.innerWidth;
    
    mugParagraphs.forEach((paragraph, index) => {
      const paragraphData = paragraphConditions(screenWidth);
          if (index ===  0 || index === 2) {
            paragraph.innerHTML = paragraphData[0];
          } else {
            paragraph.innerHTML = paragraphData[1]
          }
      });
  }
  
  updateMugParagraphs();
    
  window.addEventListener('resize', updateMugParagraphs);
});



fetch('src/components/footer/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;

    const handleResponsiveChanges = () => {
      const screenWidth = window.innerWidth;

      const flagsImg = document.querySelector('.flags-img');
      if (flagsImg) {
        flagsImg.src = screenWidth < 500 ? '/src/assets/flags-mobile.png' : '/src/assets/flags.png';
      }

      const footerParagraph = document.querySelector('.main-text-second-half-footer');
      footerParagraph.innerHTML = footerParagraphConditions(screenWidth);

      if (screenWidth < 500) {
        const headers = document.querySelectorAll('.info-divs h4');

        headers.forEach((header) => {
          header.addEventListener('click', () => {
            const parentDiv = header.parentElement;
            parentDiv.classList.toggle('open');
          });
        });
      }
    };

    handleResponsiveChanges();

    window.addEventListener('resize', handleResponsiveChanges);
  });