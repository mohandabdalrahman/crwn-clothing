import React from 'react';
import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/11.1 shopping-bag.svg';
import { connect } from 'react-redux';
import { setToggleCartHidden } from '../../redux/cart/cart-action';
import { selectCartItemsCount } from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ setToggleCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={() => setToggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setToggleCartHidden: () => dispatch(setToggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
