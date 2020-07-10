import React from 'react';
import SignIn from '../../components/sign-in/signIn.component';
import './sign-in-and-sign-up.scss';

import SignUp from '../../components/sign-up/sign-up.component';


const SignInAndSignUpPage= () => (

    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>

)

export default SignInAndSignUpPage;