import React from 'react';
import linkedin from '../../img/linkedin.svg';
import telegram from '../../img/telegram.svg';
import twitter from '../../img/twitter.svg';
import google from '../../img/google.svg';
import github from '../../img/github.svg';
import FooterLink from '../footerLink/FooterLink';
import GlitchText from 'react-glitch-effect/core/GlitchText';

import './footer.css';


const Footer = () => {

    const links = [
        {id: 1, imgprop: linkedin, src: 'https://linkedin.com/in/vladJ1'},
        {id: 2, imgprop: telegram, src: 'https://t.me/JUL1VER'},
        {id: 3, imgprop: twitter, src: 'https://twitter.com/jul1ver'},
        {id: 4, imgprop: google, src: 'mailto:jul1v3r@gmail.com'}
    ]

    const content = links.map((link) => 
        <FooterLink imgprop={link.imgprop} src={link.src} key={link.id}/>
    )

    return (
        <div className='Footer_wrapper'>
            <div className='Footer_media'>
                <p className='Footer_linksText'>Follow me in my social networks:</p>
                <div className='Footer_linksBlock'>
                    {content}
                </div>
            </div>
            <div className="Footer_github">
                <p className='Footer_linksText'>Take a look at my new projects:</p>
                <div className='Footer_githubBlock'>
                    <FooterLink imgprop={github} src='https://github.com/JUL1VER'/>
                    <a href='https://github.com/JUL1VER' className='Footer_githubBlock_text'>@<GlitchText component='span' onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' className='Footer_githubBlock_text_name'>jul1ver</GlitchText> on github</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;