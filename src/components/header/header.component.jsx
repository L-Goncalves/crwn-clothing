// REMEMBER TO ADD SVG IMPORT

import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
        
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
            currentUser!=null ?
            <div  className='option'>
            <span className="welcome-user">Welcome {currentUser.displayName}!</span>
            <div onClick={() =>{
                auth.signOut()
            }}>SIGN OUT</div>
            </div>
            :
            <Link className='option' to='/signIn'>
                SIGN IN
            </Link>
        }
        </div>
    </div>
)


export default Header;