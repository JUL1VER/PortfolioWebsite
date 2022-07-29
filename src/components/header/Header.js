import React from 'react';
import gears from '../../img/gears.png';
import gears_large from '../../img/gears_large.svg';
import './header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header_wrapper">
                <button className="Header_burgerBlock" type='button'/>
                <nav className="Header_navbar">
                    <a href="https://github.com/JUL1VER" className='Header_navbar_skills'>Skills</a>
                    <a href="https://github.com/JUL1VER" className='Header_navbar_projects'>
                        <p className="Header_navbar_Projects_text">Projects</p>
                        <picture className="Header_navbar_gearsImg">
                            <source
                                className='Header_navbar_gears'
                                media='(min-width: 1440px)'
                                srcSet={gears_large}/> 
                            <img src={gears} alt="gears" className="Header_navbar_gears"></img>
                        </picture>
                    </a>
                    <a href="https://github.com/JUL1VER" className='Header_navbar_contactme'>Contact me</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;