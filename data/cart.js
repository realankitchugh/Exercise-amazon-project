export const cart = [
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