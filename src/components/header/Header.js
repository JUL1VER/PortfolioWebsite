import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import gears from '../../img/gears.png';
import gears_large from '../../img/gears_large.svg';

import './header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };

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
                        className='Header_navbar_skills'
                        to='SkillsPart'
                        smooth={true}
                        offset={-80}
                        duration={500}>
                            Skills
                    </Link>
                    <Link  
                        className='Header_navbar_projects'
                        to='ProjectsPart'
                        smooth={true}
                        offset={-80}
                        duration={500}>
                        <p className="Header_navbar_Projects_text">
                            Projects
                        </p>
                        <picture className="Header_navbar_gearsImg">
                            <source
                                className='Header_navbar_gears'
                                media='(min-width: 1440px)'
                                srcSet={gears_large}/> 
                            <img src={gears} alt="gears" className="Header_navbar_gears"></img>
                        </picture>
                    </Link>
                    <Link 
                        className='Header_navbar_contactme'
                        to='ContactmePart'
                        smooth={true}
                        offset={-80}
                        duration={500}>
                            Contact me
                    </Link>
                </nav>
                <div className={`Header_overlay ${isActive ? 'active' : ''}`} onClick={ toggleActiveClass }></div>
            </div>
        </div>
    );
};

export default Header;