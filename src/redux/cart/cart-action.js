import CART_TYPES from './cart-types'

export const setToggleCartHidden = () => ({
  type: CART_TYPES.TOGGLE_CART_HIDDEN,
})


export const addItem = (item) => ({
  type: CART_TYPES.ADD_ITEM,
  payload: item
})


export const removeItem = itemId => ({
  type: CART_TYPES.REMOVE_ITEM,
  payload: itemId
})

export const DecreaseItemQuantity = itemId => ({
  type: CART_TYPES.DECREASE_ITEM_QUANTITY,
  payload: itemId
})