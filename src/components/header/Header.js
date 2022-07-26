import React from 'react';
import burgermenu from '../../img/burgermenu.png';
import './header.css';

const Header = () => {
    return (
        <div className="Header">
            <img src={burgermenu} alt="burger" className="Header_burger"></img>
        </div>
    );
};

export default Header;