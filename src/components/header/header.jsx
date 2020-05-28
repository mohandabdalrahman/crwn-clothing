import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/4.2 crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selector';
const Header = ({ currentUser, isHidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          shop
        </Link>
        <Link className="option" to="/contact">
          contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/sign">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {isHidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
