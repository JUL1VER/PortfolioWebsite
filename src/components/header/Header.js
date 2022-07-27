import React from 'react';
import gears from '../../img/gears.png';
import './header.css';

const Header = () => {
    return (
        <div className="Header">
            <button className="Header_burgerBlock"></button>
            <nav className="Header_navbar">
                <a href="https://github.com/JUL1VER" className='Header_navbar_skills'>Skills</a>
                <a href="https://github.com/JUL1VER" className='Header_navbar_Projects'>
                    <p className="Header_navbar_Projects_text">Projects</p>
                    <img src={gears} alt="gears" className="Header_navbar_gears"></img>
                </a>
                <a href="https://github.com/JUL1VER" className='Header_navbar_Contactme'>Contact me</a>
            </nav>
        </div>
    );
};

export default Header;