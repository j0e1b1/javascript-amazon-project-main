//put all imports at top
//for modules to work use live server
//import { cart as myCart } from '../data/cart.js' avoids naming conflict
import { cart,addToCart,updateCartQuantity, findCartQuantity } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrecy } from './utils/money.js';

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrecy(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart" data-product-name="${product.name}"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

//This is a data attribute: data-product-name="${product.name}"

document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    //Conversion from kebab-case to camelCase
    const productId = button.dataset.productId;
    let productQuantity = parseInt(button.closest('.product-container').querySelector('select').value);
    addToCart(productId,productQuantity);
    updateCartQuantity();
  });
});

document.querySelector('.js-cart-quantity').innerHTML = findCartQuantity();