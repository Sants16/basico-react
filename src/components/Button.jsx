import React from 'react';
import './Button.css'
const Button = ({children, função}) => {
    return ( 
        <button className='button' onClick={função}>
            {children}
        </button>
     );
}
 
export default Button;