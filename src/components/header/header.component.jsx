import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import './header.styles.scss';

const Header = ({currentUser}) => {
    
    let showSignIn = false;

    

    console.log(currentUser);
    return(
        <div className="header">
            <Link to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="options" to='/shop'>SHOP</Link>
                <Link className="options" to='/contact'>CONTACT</Link>
                <button onClick={() => {console.log(currentUser, showSignIn)}}>User?</button>
            
                {
                    
                    currentUser ?
                    showSignIn = false
                    :
                    showSignIn = true
                }

                {

                    showSignIn ?
                        <Link className='option' to='/signin'>SIGN IN</Link>

                        :
                        <div className='option' onClick={() => {auth.signOut()}}> SIGN OUT</div>
                }
            
            </div>
        </div>
    )
}

export default Header;