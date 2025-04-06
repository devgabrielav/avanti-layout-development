const searchResult = () => {
  const header = document.querySelector('header');
  const children = header.children;
  const searchInput = document.querySelector('#top-input-search');
  const existingSearchResult = document.querySelector('.search-result-div');
  
  if (existingSearchResult) {
    existingSearchResult.remove();
  }
  
  const searchResultDiv = document.createElement('div');
  const searchResultSpan = document.createElement('h3');
  searchResultDiv.className = 'search-result-div';
  
  if (searchInput.value.trim().length === 0) {
    searchResultSpan.innerHTML = `"Digite algo para buscar."`;
  } else {
    searchResultSpan.innerHTML = `"Você buscou por: ${ searchInput.value }"`;
  }
  
  header.insertBefore(searchResultDiv, children[children.length - 1]);
  searchResultDiv.appendChild(searchResultSpan);
}

const addCategories = () => {
  const categoriesDivs = document.querySelectorAll('.categories-tags-div');

  categoriesDivs.forEach((catDiv) => {
    for(let index = 0; index < 8; index += 1) {
      const categorieEl = document.createElement('a');
      categorieEl.innerHTML = 'Categoria';

      catDiv.appendChild(categorieEl);
    }
  });
}

fetch('src/components/header/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    const departmentTags = document.querySelector('#main-tags');
    
    function addDropdownContent() {
      for (let index = 0; index < 10; index += 1) {
        const link = document.createElement('a');
        link.href = '#';
        link.innerHTML = `
          <span>Departamento</span>
          <span class='arrow-tag'>></span>
        `;
        departmentTags.appendChild(link);
      }
    }
    
    addDropdownContent();

    addCategories();

    const searchButton = document.getElementById('top-button-search');

    searchButton.addEventListener('click', (event) => {
      event.preventDefault();
      
      searchResult();
    });
});

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
    `
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
