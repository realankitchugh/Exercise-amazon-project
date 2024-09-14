export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},
{
  productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
  quantity: 1
}
];

export function addToCart(productId, quantitySelector){
  let matchingItem;
  cart.forEach((cartItem) => {
    if(cartItem.productId === productId){
      matchingItem = cartItem;
    }
  });
  
  if(matchingItem){
    matchingItem.quantity+=Number(quantitySelector.value);
  }
  else{
    cart.push({
      productId,
      quantity: Number(quantitySelector.value)
    });
  }
}

export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });
  cart = newCart;  
}