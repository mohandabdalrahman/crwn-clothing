export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};


export const removeCartItem = (cartItems, itemId) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemId)
  if (existingCartItem) {
    return cartItems.filter(cartItem => cartItem.id !== itemId)
  }
  return [...cartItems]
};


export const DecreaseItemQuantity = (cartItems, itemId) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemId)
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemId)
  }
  else if (existingCartItem && existingCartItem.quantity >= 1) {
    return cartItems.map(cartItem =>
      cartItem.id === itemId
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
  return [...cartItems]
}