export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){  
  cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliveryOptionId: "1"
  }, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliveryOptionId: "2"
  }];
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

function getCartItem(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  return matchingItem;
}

export function addToCart(productId,productQuantity){
  let matchingItem = getCartItem(productId);

  if(matchingItem){
    matchingItem.quantity += productQuantity;
  }else{
    cart.push({
      productId: productId,
      quantity: productQuantity,
      deliveryOptionId: "1" // Default delivery option
    });
  }
  saveToStorage();
}

export function updateCartQuantity(){
  let cartQuantity = 0; 

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

  saveToStorage();
}

export function findCartQuantity() {
  let cartQuantity = 0; 

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })
  return cartQuantity;
}

export function removeFromCart(productId) {
  cart = cart.filter((cartItem) => cartItem.productId !== productId);
  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
  getCartItem(productId).deliveryOptionId = deliveryOptionId;
  saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
  getCartItem(productId).quantity = newQuantity;

  saveToStorage();
}
