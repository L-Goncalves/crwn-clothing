import React from 'react';
import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) =>{
    return(
        <div className="group">
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
            // If label exists then render a label otherwise renders nothing
           label ?
           (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}>
               {label}
           </label>)
           : null
            }
        </div>
    )
}

export default FormInput;