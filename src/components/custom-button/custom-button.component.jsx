import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, SignInWithGoogle, ...otherProps }) => (
  <button onClick={SignInWithGoogle ? SignInWithGoogle : null}
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps} 
  >
    {children}
  </button>
);

export default CustomButton;
