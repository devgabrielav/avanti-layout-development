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