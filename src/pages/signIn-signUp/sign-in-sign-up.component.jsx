import React from 'react';
import SignIn from '../../components/signIn/signIn.component'
import SignOut from '../../components/signOut/sign-out.component'
import './sign-in-sign-up.styles.scss'
const signInSignUp = () =>{
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignOut/>
        </div>

    )
}

export default signInSignUp;