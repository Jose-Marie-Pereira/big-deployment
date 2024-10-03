import React from 'react';
import './_navbar.scss';
import logo from './nav-img/badan geospasial 1.svg';
import stock from './nav-img/stock-avatar.svg';
import menu from './nav-img/Menu.svg';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className='logo'>
                    <img src={logo} alt='BIG Logo'></img>
                </div>
                <div className='nav-content'>
                    <p className='nav-item'>Analyst</p>
                    <img src={stock} alt='Stock Avatar'></img>
                    <img src={menu} className='menu' alt='Menu' style={{ width: '2rem', height: '2rem' }}></img>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;