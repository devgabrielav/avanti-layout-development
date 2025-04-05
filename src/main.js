const searchResult = () => {
  const header = document.querySelector('header');
  const children = header.children;
  const searchInput = document.querySelector('#top-input-search');
  const searchResultSpan = document.createElement('h3');
  const searchResultDiv = document.createElement('div');
  searchResultDiv.className = 'search-result-div';

  searchResultSpan.innerHTML = `"Você buscou por: ${ searchInput.value }"`;

  header.insertBefore(searchResultDiv, children[children.length - 1]);
  searchResultDiv.appendChild(searchResultSpan);
}

fetch('src/components/header/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    const header = document.querySelector('.dropdown-content');
    
    function addDropdownContent() {
      for (let index = 0; index < 10; index += 1) {
        const link = document.createElement('a');
        link.href = '#';
        link.innerHTML = 'Departamento           >';
        header.appendChild(link);
      }
    }
    
    addDropdownContent();

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
