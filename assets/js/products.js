function createProductCard(product) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('col', 'md-3', 'mb-3');
  
  const card = document.createElement('div');
  card.classList.add('card', 'text-center');
  
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  
  const image = document.createElement('img');
  image.src = product.image;
  image.style.width = '150px';
  image.classList.add('card-img-top', 'rounded', 'w-100', 'mb-3');
  
  const title = document.createElement('h3');
  title.classList.add('card-title');
  title.textContent = product.name;
  
  const ingredients = document.createElement('p');
  ingredients.classList.add('card-subtitle', 'mb-3');
  ingredients.textContent = product.ingredients.join(', ');
  
  const size = document.createElement('p');
  size.classList.add('card-subtitle', 'mb-3');
  size.textContent = product.size;
  
  const allergens = document.createElement('p');
  allergens.classList.add('text-secondary');
  allergens.textContent = 'Allergének: ' + product.allergens.join(', ');
  
  const price = document.createElement('p');
  price.classList.add('fw-bold');
  price.textContent = product.price;
  
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-primary');
  button.innerHTML = `<i class="bi bi-basket2-fill"></i> Kosárba`
  
  cardBody.appendChild(image);
  cardBody.appendChild(title);
  cardBody.appendChild(ingredients);
  cardBody.appendChild(size);
  cardBody.appendChild(allergens);
  cardBody.appendChild(price);
  cardBody.appendChild(button);
  
  card.appendChild(cardBody);
  cardDiv.appendChild(card);
  
  return cardDiv;
}

async function loadProducts(jsonFile, targetElementId) {
  try {
    const response = await fetch(jsonFile);
    const data = await response.json();

    const productCards = document.getElementById(targetElementId);

    if (productCards) {
      for (const key in data) {
        const productCard = createProductCard(data[key]);
        productCards.appendChild(productCard);
      }
    } else {
      console.error('Target element not found:', targetElementId);
    }

  } catch (error) { 
    console.error('Error fetching or parsing data:', error);
  }
}

function getActivePage() {
  var x = window.location.pathname.split("/")[2].split(".")[0];
  var currentElement = document.getElementById(x)
  currentElement.classList.add('active')
  return x;
}

window.onload = async () => {
  getActivePage();
  const currentPage = getActivePage();
  if (currentPage == 'cakes') {
    await loadProducts('assets/js/json/cakes.json', 'cakeCards');
  } else if (currentPage == 'desserts') {
      await loadProducts('assets/js/json/desserts.json', 'dessertCards');
  } else if (currentPage == 'drinks') {
      await loadProducts('assets/js/json/drinks.json', 'drinkCards');
  } else if (currentPage == 'coffees') {
      await loadProducts('assets/js/json/coffees.json', 'coffeeCards');
  } else if (currentPage == 'icecreams') {
      await loadProducts('assets/js/json/ice_creams.json', 'icecreamCards');
  }
};