import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom.button';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps, null)(CartDropDown);
