export let cart;
loadFromStorage();
export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart){
    cart=[{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      },
      {
        productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
        quantity: 1,
        deliveryOptionId: '2'
      }
      ];
  }
}

export function addToCart(productId, quantity){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(cartItem.productId === productId){
      matchingItem = cartItem;
    }
  });
  if(matchingItem){   
    matchingItem.quantity+=Number(quantity);
  }
  else{
    cart.push({
      productId,
      quantity: Number(quantity),
      deliveryOptionId: '1'
    });
  }
  saveToStorage();
}

export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;  
  saveToStorage();
}

export function totalCartQuantity(){
  let finalQuantity=0;
  cart.forEach((cartItem) => {
    finalQuantity += cartItem.quantity;
  });
  return finalQuantity;
}

export function updateQuantity(productId, newQuantity){
  let matchingItem;
  cart.forEach((item) => {
    if(productId === item.productId){
      matchingItem = item;
    }
  });
  matchingItem.quantity = newQuantity;
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(cartItem.productId === productId){
      matchingItem = cartItem;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}