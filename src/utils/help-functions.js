export const searchResult = () => {
  const header = document.querySelector('header');
  const children = header.children;
  const searchInput = document.querySelector('.top-input-search');
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
  searchInput.value = '';
}

export const addCategories = () => {
  const categoriesDivs = document.querySelectorAll('.categories-tags-div');

  categoriesDivs.forEach((catDiv) => {
    for(let index = 0; index < 8; index += 1) {
      const categorieEl = document.createElement('a');
      categorieEl.innerHTML = 'Categoria';

      catDiv.appendChild(categorieEl);
    }
  });
}

export const addDropdownContent = (tags) => {
  for (let index = 0; index < 10; index += 1) {
    const link = document.createElement('a');
    link.href = '#';
    link.innerHTML = `
      <span>Departamento</span>
      <span class='arrow-tag'>></span>
    `;
    tags.appendChild(link);
  }
}

export const paragraphConditions = (screenSize) => {
  if (screenSize < 600) {
    return [
      `
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec quam felis, ultricies nec,
        pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
      `,
      `
        Cras dignissim est et pellentesque tincidunt.Praesent bibendum quis velit a aliquam.
        Ut vestibulum turpis eget mi iaculis ullamcorper.Curabitur nec metus sed tortor sollicitudin porta nec eu enim.
        Ut fermentum scelerisque tortor mollis volutpat.Mauris iaculis magna nisl, vel porttitor augue placerat et.
      `
    ]
  }
  return [
    `
      Duis consectetur metus nec lacus auctor dignissim.
      Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra.
      Cras efficitur volutpat dui, in lobortis metus lacinia sit amet.
      Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a.
      Maecenas fringilla porttitor tortor eget lacinia.
      Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum.
      Fusce sagittis elit a libero commodo egestas efficitur id augue.   
    `,
    `
      Duis consectetur metus nec lacus auctor dignissim.
      Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra.
      Cras efficitur volutpat dui, in lobortis metus lacinia sit amet.
      Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a.
      Maecenas fringilla porttitor tortor eget lacinia.
      Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum.
      Fusce sagittis elit a libero commodo egestas efficitur id augue.     
    `
  ]
}

export const footerParagraphConditions = (screenSize) => {
  if (screenSize < 600) {
    return `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud exerci.
    `
  }
  return `
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
      vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
  `
}