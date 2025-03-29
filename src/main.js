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

const carrossel = document.querySelector('.carrossel-itens');

function addCarrosselContent() {
  const carrossel = document.querySelector(".carrossel-itens");

  if (!carrossel) {
    console.error("Erro: Carrossel não encontrado.");
    return;
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 15; i++) {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item-div";

    itemDiv.innerHTML = `
      <img class="item-image" src="src/assets/default-product.png" alt="Produto">
      <h3 class="item-title">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h3>
      <div class="values-div">
        <div class="prices-div">
          <p class="original-price">R$ 100,00</p>
          <p class="discount-price">R$ 79,90</p>
        </div>
        <span class="discount-percent">10% OFF</span>
      </div>
      <span class="start-payment-type">Ou em até</span>
      <span class="payment-type">10x de R$ 7,90</span>
      <button class="buy-button">Comprar</button>
    `;

    fragment.appendChild(itemDiv);
  }

  carrossel.appendChild(fragment);
}

addCarrosselContent();
