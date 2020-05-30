import React from 'react';
import './checkout-item.scss';
import { connect } from 'react-redux';
import {
  removeItem,
  DecreaseItemQuantity,
  addItem
} from '../../redux/cart/cart-action';
const CheckoutItem = ({
  cartItem,
  removeItem,
  DecreaseItemQuantity,
  addItem
}) => {
  const { name, price, quantity, imageUrl, id } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => DecreaseItemQuantity(id)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => removeItem(id)} className="remove-button">
        &#9747;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: itemId => dispatch(removeItem(itemId)),
  addItem: cartItem => dispatch(addItem(cartItem)),
  DecreaseItemQuantity: itemId => dispatch(DecreaseItemQuantity(itemId))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
