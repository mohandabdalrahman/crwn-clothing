import React from 'react';
// import './header.scss';
import { ReactComponent as Logo } from '../../assets/4.2 crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { selectCartHidden } from '../../redux/cart/cart-selector';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv
} from './header.styles';

const Header = ({ currentUser, isHidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          shop
        </OptionLink>
        <OptionLink to="/contact">
          contact
        </OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>
            Sign Out
          </OptionDiv>
        ) : (
          <OptionLink to="/sign">
            Sign In
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {isHidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
