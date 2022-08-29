import './header.css';
import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import question from '../../img/question_large.png';
import skillsHead from '../../img/skillsHead_large.png';
import projectLogo from '../../img/projectImg_large.png';
import contactmeLogo from '../../img/contactmeLogo_large.png';
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

    const [position, setPosition] = useState(window.pageYOffset)
    const [visible, setVisible] = useState(true) 

    useEffect(() => {
        const handleScroll = () => {
           let moving = window.pageYOffset
           
           setVisible(position > moving);
           setPosition(moving)
        };
        if (!isActive) {
            window.addEventListener("scroll", handleScroll);
        }
        return(() => {
           window.removeEventListener("scroll", handleScroll);
        })
    })

    const headerVision = visible ? "visible" : "hidden";

    return (
        <div className={classNames("Header", headerVision)}>
            <div className="Header_wrapper">
                <picture className="Header_VlogoPic">
                    <source
                        className='Header_Vlogo'
                        media='(min-width: 1280px)'
                        srcSet={Vlogo_large}/>
                    <img src={Vlogo} alt="Vlogo" className="Header_Vlogo"></img>
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
                            <img src={question} alt="Question" className="Header_navbar_logo"></img>
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
                            <img src={skillsHead} alt="gears" className="Header_navbar_logo"></img>
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
                            <img src={projectLogo} alt="gears" className="Header_navbar_logo"></img>
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
                            <img src={contactmeLogo} alt="gears" className="Header_navbar_logo"></img>
                        </Link>
                    </nav>
                    <div className={classNames('Header_overlay', {'active': isActive})} onClick={ toggleActiveClass }></div>
                </div>
            </div>
        </div>
    );
};

export default Header;