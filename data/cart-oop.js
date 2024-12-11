function Cart(localStorageKey){
  const cart = {
    cartItems : undefined,
    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
      if(!this.cartItems){
        this.cartItems=[{
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
    },
    saveToStorage(){
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
  
    addToCart(productId, quantity){
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingItem = cartItem;
        }
      });
      if(matchingItem){   
        matchingItem.quantity+=Number(quantity);
      }
      else{
        this.cartItems.push({
          productId,
          quantity: Number(quantity),
          deliveryOptionId: '1'
        });
      }
      this.saveToStorage();
    },
    removeFromCart(productId){
      const newCart=[];
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        }
      });
      this.cartItems = newCart;  
      this.saveToStorage();
    },
    updateDeliveryOption(productId, deliveryOptionId){
      let matchingItem;
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingItem = cartItem;
        }
      });
      matchingItem.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    },
    totalCartQuantity(){
      let finalQuantity=0;
      this.cartItems.forEach((cartItem) => {
        finalQuantity += cartItem.quantity;
      });
      return finalQuantity;
    },
    updateQuantity(productId, newQuantity){
      let matchingItem;
      this.cartItems.forEach((item) => {
        if(productId === item.productId){
          matchingItem = item;
        }
      });
      matchingItem.quantity = newQuantity;
      this.saveToStorage();
    }
  };
  return cart;
}

const cart = Cart('cart-oop');
const businessCart=Cart('cart-business');



cart.loadFromStorage();
businessCart.loadFromStorage();
console.log(cart);
console.log(businessCart);
