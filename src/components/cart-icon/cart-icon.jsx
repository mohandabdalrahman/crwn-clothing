import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/11.1 shopping-bag.svg';
import { connect } from 'react-redux';
import {setToggleCartHidden} from '../../redux/cart/cart-action';
const CartIcon = ({ setToggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={() => setToggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setToggleCartHidden: () => dispatch(setToggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
