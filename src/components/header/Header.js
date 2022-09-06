import './header.css';
import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import question from '../../img/question.png';
import skillsHead from '../../img/skillsHead.png';
import projectLogo from '../../img/projectImg.png';
import contactmeLogo from '../../img/contactmeLogo.png';
import Vlogo from '../../img/V_logo_44.svg';
import Vlogo_large from '../../img/V_logo_88.svg';
import classNames from 'classnames';
import GlitchText from 'react-glitch-effect/core/GlitchText';

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
                <a href="https://jul1ver.github.io/PortfolioWebsite/" className='Header_logoBlock'>
                    <picture className="Header_VlogoPic">
                        <source
                            className='Header_Vlogo'
                            media='(min-width: 1280px)'
                            srcSet={Vlogo_large}/>
                        <img src={Vlogo} alt="Vlogo" className="Header_Vlogo"></img>
                    </picture>
                </a>
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
                            <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='Header_navbar_glitch'>
                                <div className='Header_navbar_glitch_inside'>
                                    <p className="Header_navbar_text">
                                        Who Am I
                                    </p>
                                    <img src={question} alt="Question" className="Header_navbar_logo"></img>
                                </div>
                            </GlitchText>
                        </Link>
                        <Link  
                            className='Header_navbar_navLinks'
                            to='SkillsPart'
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMenuOnScroll}>
                            <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='Header_navbar_glitch'>
                                <div className='Header_navbar_glitch_inside'>
                                    <p className="Header_navbar_text">
                                        Skills
                                    </p>
                                    <img src={skillsHead} alt="Neo" className="Header_navbar_logo"></img>
                                </div>
                            </GlitchText>
                        </Link>
                        <Link  
                            className='Header_navbar_navLinks'
                            to='ProjectsPart'
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMenuOnScroll}>
                            <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='Header_navbar_glitch'>
                                <div className='Header_navbar_glitch_inside'>
                                    <p className="Header_navbar_text">
                                        Projects
                                    </p>
                                    <img src={projectLogo} alt="Projects" className="Header_navbar_logo"></img>
                                </div>
                            </GlitchText>
                        </Link>
                        <Link 
                            className='Header_navbar_navLinks'
                            to='ContactmePart'
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMenuOnScroll}>
                            <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='Header_navbar_glitch'>
                                <div className='Header_navbar_glitch_inside'>
                                    <p className="Header_navbar_text">
                                        Contact me
                                    </p>
                                    <img src={contactmeLogo} alt="Phone" className="Header_navbar_logo"></img>
                                </div>
                            </GlitchText>
                        </Link>
                    </nav>
                    <div className={classNames('Header_overlay', {'active': isActive})} onClick={ toggleActiveClass }></div>
                </div>
            </div>
        </div>
    );
};

export default Header;