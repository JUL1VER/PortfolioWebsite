import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import skillsHead from '../../img/skillsHead.png';
import skillsHead_large from '../../img/skillsHead_large.png';
import projectLogo from '../../img/projectImg.png';
import projectLogo_large from '../../img/projectImg_large.png';
import contactmeLogo from '../../img/contactme_Logo.png';
import contactmeLogo_large from '../../img/contactme_Logo_large.png';

import './header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

    const closeMenuOnScroll = () => {
        setIsActive(false);
    }

    return (
        <div className="Header">
            <div className="Header_wrapper">
                <button 
                    type='button'
                    className={`Header_burgerBlock ${isActive ? 'active' : ''}`}
                    onClick={ toggleActiveClass }>
                    <span></span>
                </button>
                <nav className={`Header_navbar ${isActive ? 'active' : ''}`}>
                    <Link  
                        className='Header_navbar_navLinks'
                        to='SkillsPart'
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={closeMenuOnScroll}>
                        <p className="Header_navbar_text">
                            Skills
                        </p>
                        <picture className="Header_navbar_logos">
                            <source
                                className='Header_navbar_logo'
                                media='(min-width: 1280px)'
                                srcSet={skillsHead_large}/> 
                            <img src={skillsHead} alt="gears" className="Header_navbar_logo"></img>
                        </picture>
                    </Link>
                    <Link  
                        className='Header_navbar_navLinks'
                        to='ProjectsPart'
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={closeMenuOnScroll}>
                        <p className="Header_navbar_text">
                            Projects
                        </p>
                        <picture className="Header_navbar_logos">
                            <source
                                className='Header_navbar_logo'
                                media='(min-width: 1280px)'
                                srcSet={projectLogo_large}/> 
                            <img src={projectLogo} alt="gears" className="Header_navbar_logo"></img>
                        </picture>
                    </Link>
                    <Link 
                        className='Header_navbar_navLinks'
                        to='ContactmePart'
                        smooth={true}
                        offset={-80}
                        duration={500}
                        onClick={closeMenuOnScroll}>
                        <p className="Header_navbar_text">
                            Contact me
                        </p>
                        <picture className="Header_navbar_logos">
                            <source
                                className='Header_navbar_logo'
                                media='(min-width: 1280px)'
                                srcSet={contactmeLogo_large}/> 
                            <img src={contactmeLogo} alt="gears" className="Header_navbar_logo"></img>
                        </picture>
                    </Link>
                </nav>
                <div className={`Header_overlay ${isActive ? 'active' : ''}`} onClick={ toggleActiveClass }></div>
            </div>
        </div>
    );
};

export default Header;