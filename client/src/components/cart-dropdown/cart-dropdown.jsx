import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom.button';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart-selector';
import { createStructuredSelector } from 'reselect';
import {setToggleCartHidden} from '../../redux/cart/cart-action'
const CartDropDown = ({ cartItems, history, dispatch}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        history.push('/checkout')
        dispatch(setToggleCartHidden());
      }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, null)(CartDropDown));
