import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline']

const SIZES=['btn--medium','button--large']

const ROUTES=['/sign-up','/trailer']

export const Button = 
({children, type, onClick,buttonStyle,buttonSize,route}) =>{
    const checkButtonStyle=STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0];

     const checkButtonSize = SIZES.includes(buttonSize) 
     ? buttonSize 
     : SIZES[0];
     const checkButtonRoute = ROUTES.includes(route) 
     ? route 
     : ROUTES[0];

     return (
        <Link to={checkButtonRoute} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonRoute}`}
            onClick={onClick} type={type}>
                {children}
            </button>
         </Link>
     )
         

     
};