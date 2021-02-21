import React from 'react';
import './custom-button.styles.scss'

const CustomButton =  ({children, signInWithGoogle, isGoogleSignIn,  ...otherProps}) =>{
    return(
        <div>
            <button 
                onClick={signInWithGoogle} 
                className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
                {...otherProps}
                >

                {children}
            </button>
        </div>

    )
}

export default CustomButton