import './header.css';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import question from '../../img/question.png';
import question_large from '../../img/question_large.png';
import skillsHead from '../../img/skillsHead.png';
import skillsHead_large from '../../img/skillsHead_large.png';
import projectLogo from '../../img/projectImg.png';
import projectLogo_large from '../../img/projectImg_large.png';
import contactmeLogo from '../../img/contactme_Logo.png';
import contactmeLogo_large from '../../img/contactme_Logo_large.png';
import Vlogo from '../../img/V_logo_44.svg';
import Vlogo_large from '../../img/V_logo_88.svg';
import classNames from 'classnames';

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
                <picture className="Header_VlogoPic">
                    <source
                        className='Header_Vlogo'
                        media='(min-width: 1280px)'
                        srcSet={Vlogo_large}/>
                    <img src={Vlogo} alt="gears" className="Header_Vlogo"></img>
                </picture>
                <button 
                    type='button'
                    className={classNames('Header_burgerBlock', {'active': isActive})}
                    onClick={ toggleActiveClass }>
                    <span></span>
                </button>
                <div className="Header_navbarBlock">
                    <nav className={classNames('Header_navbar', {'active': isActive})}>
                        <Link  
                            className='Header_navbar_navLinks'
                            to='WhoAmI'
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMenuOnScroll}>
                            <p className="Header_navbar_text">
                                Who Am I
                            </p>
                            <picture className="Header_navbar_logos">
                                <source
                                    className='Header_navbar_logo'
                                    media='(min-width: 1280px)'
                                    srcSet={question_large}/> 
                                <img src={question} alt="gears" className="Header_navbar_logo"></img>
                            </picture>
                        </Link>
                        <Link  
                            className='Header_navbar_navLinks'
                            to='SkillsPart'
                            smooth={true}
                            offset={-100}
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
                            offset={-100}
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
                            offset={-100}
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
                    <div className={classNames('Header_overlay', {'active': isActive})} onClick={ toggleActiveClass }></div>
                </div>
            </div>
        </div>
    );
};

export default Header;