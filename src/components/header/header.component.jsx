import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import './header.styles.scss';

const Header = ({ currentUser }) => {

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="options" to='/shop'>SHOP</Link>
        <Link className="options" to='/contact'>CONTACT</Link>
        <button onClick={() => auth.signOut()}>OUT</button>

        {
          currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
              <Link className="option" to='/signin'>
                SIGN IN
              </Link>
            )
        }

      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUSer
})

export default connect(mapStateToProps)(Header);