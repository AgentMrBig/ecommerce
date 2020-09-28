import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';





import './header.styles.scss';


const Header = ({ currentUser, hidden }) => {

  const signOut = () => {
    auth.signOut();
    return (
      <Redirect to="/" />
    )
  }

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="options" to='/shop'>SHOP</Link>
        <Link className="options" to='/contact'>CONTACT</Link>

        {currentUser ? (
          <div className="options" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
            <Link className="options" to='/signin'>
              SIGN IN
            </Link>
          )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);