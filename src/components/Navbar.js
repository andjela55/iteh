import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import { Button } from './Button';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };


    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        ENVRMT   &nbsp;

                        <i class="fa fa-globe" aria-hidden="true"></i>

                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fac fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/informations' className='nav-links' onClick={closeMobileMenu}>
                                Informations
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/actions' className='nav-links' onClick={closeMobileMenu}>
                                Actions
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>

            </nav>
        </>
    )
}

export default Navbar
