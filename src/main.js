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
  })

fetch('src/components/items-card/items-card.html')
.then(response => response.text())
.then(data => {
  const slides = document.querySelectorAll('.slide');

  slides.forEach((slide) => {
    for (let i = 0; i < 5; i++) {
      slide.innerHTML += data;
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