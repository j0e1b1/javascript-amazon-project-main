import { cart, findCartQuantity } from '../../data/cart.js';

export function renderCheckoutHeader() {
  const quantity = findCartQuantity();
  let itemText = '';
  if(quantity === 1) {
    itemText = '1 item';
  }else if(quantity > 1){
    itemText = `${quantity} items`;
  }else{
    itemText = 'No items';
  }

  const cartHeader = `
  Checkout (<a class="return-to-home-link"
    href="amazon.html">${itemText}</a>)
  `;
  document.querySelector('.js-checkout-header').innerHTML = cartHeader;
}