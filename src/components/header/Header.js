import './header.css';
import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import question from '../descriptionBlock/img/question.png';
import skillsHead from '../skillsBlock/img/skillsHead.png';
import projectLogo from '../projectsBlock/img/projectImg.png';
import contactmeLogo from '../contactmeBlock/img/contactmeLogo.png';
import Vlogo from './img/V_logo_44.svg';
import Vlogo_large from './img/V_logo_88.svg';
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
            <div className="Header__wrapper">
                <a href="https://jul1ver.github.io/PortfolioWebsite/" className='Header__logoBlock'>
                    <picture className="Header__Vlogo-pic">
                        <source
                            className='Header__Vlogo'
                            media='(min-width: 1024px)'
                            srcSet={Vlogo_large}/>
                        <img src={Vlogo} alt="Vlogo" className="Header__Vlogo"></img>
                    </picture>
                </a>
                <button
                    type='button'
                    className={classNames('Header__burgerBlock', {'active': isActive})}
                    onClick={ toggleActiveClass }>
                    <span></span>
                </button>
                <div className="Header__navbar-block">
                    <nav className={classNames('Header__navbar', {'active': isActive})}>
                        <Link
                            className='Header__navbar-navLinks'
                            to='WhoAmI'
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMenuOnScroll}>
                            <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='Header__navbar-glitch'>
                                <div className='Header__navbar-glitch_inside'>
                                    <p className="Header__navbar-text">
                                        Who Am I
                                    </p>
                                    <img src={question} alt="Question" className="Header__navbar-logo"></img>
                                </div>
                            </GlitchText>
                        </Link>
                        <Link
                            className='Header__navbar-navLinks'
                            to='SkillsPart'
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMenuOnScroll}>
                            <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='Header__navbar-glitch'>
                                <div className='Header__navbar-glitch_inside'>
                                    <p className="Header__navbar-text">
                                        Skills
                                    </p>
                                    <img src={skillsHead} alt="Neo" className="Header__navbar-logo"></img>
                                </div>
                            </GlitchText>
                        </Link>
                        <Link
                            className='Header__navbar-navLinks'
                            to='ProjectsPart'
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMenuOnScroll}>
                            <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='Header__navbar-glitch'>
                                <div className='Header__navbar-glitch_inside'>
                                    <p className="Header__navbar-text">
                                        Projects
                                    </p>
                                    <img src={projectLogo} alt="Projects" className="Header__navbar-logo"></img>
                                </div>
                            </GlitchText>
                        </Link>
                        <Link
                            className='Header__navbar-navLinks'
                            to='ContactmePart'
                            smooth={true}
                            offset={-100}
                            duration={500}
                            onClick={closeMenuOnScroll}>
                            <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='Header__navbar-glitch'>
                                <div className='Header__navbar-glitch_inside'>
                                    <p className="Header__navbar-text">
                                        Contact me
                                    </p>
                                    <img src={contactmeLogo} alt="Phone" className="Header__navbar-logo"></img>
                                </div>
                            </GlitchText>
                        </Link>
                    </nav>
                    <div className={classNames('Header__overlay', {'active': isActive})} onClick={ toggleActiveClass }></div>
                </div>
            </div>
        </div>
    );
};

export default Header;