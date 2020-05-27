export const addItemToCart = (cartItems, cartItem) => {
  const existingCartItem = cartItems.find(item => item.id === cartItem.id)
  if (existingCartItem) {
    return cartItems.map(item => item.id === cartItem.id ? { ...cartItem, quantity: +cartItem.quantity + 1 } : cartItem)
  }

  return [...cartItems, { ...cartItem, quantity: 1 }]
}