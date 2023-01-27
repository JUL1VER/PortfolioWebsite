import React from 'react';
import linkedin from '../../img/linkedin.svg';
import telegram from '../../img/telegram.svg';
import twitter from '../../img/twitter.svg';
import google from '../../img/google.svg';
import github from '../../img/github.svg';
import linkedin_large from '../../img/linkedin_large.svg';
import telegram_large from '../../img/telegram_large.svg';
import twitter_large from '../../img/twitter_large.svg';
import google_large from '../../img/google_large.svg';
import github_large from '../../img/github_large.svg';
import FooterLink from '../footerLink/FooterLink';
import GlitchText from 'react-glitch-effect/core/GlitchText';

import './footer.css';


const Footer = () => {

    const links = [
        {id: 1, imgprop: linkedin, imgprop_large: linkedin_large, src: 'https://linkedin.com/in/vladJ1'},
        {id: 2, imgprop: telegram, imgprop_large: telegram_large, src: 'https://t.me/JUL1VER'},
        {id: 3, imgprop: twitter, imgprop_large: twitter_large, src: 'https://twitter.com/jul1ver'},
        {id: 4, imgprop: google, imgprop_large: google_large, src: 'mailto:jul1v3r@gmail.com'}
    ]

    const content = links.map((link) => 
        <FooterLink imgprop={link.imgprop} imgprop_large={link.imgprop_large} src={link.src} key={link.id}/>
    )

    return (
        <div className='Footer__wrapper'>
            <div className='Footer__media'>
                <p className='Footer__links-text'>Follow me in my social networks:</p>
                <div className='Footer__links-block'>
                    {content}
                </div>
            </div>
            <div className="Footer_github">
                <p className='Footer__links-text'>Take a look at my new projects:</p>
                <div className='Footer__github-block'>
                    <FooterLink imgprop={github} imgprop_large={github_large} src='https://github.com/JUL1VER'/>
                    <a href='https://github.com/JUL1VER' className='Footer__githubBlock-text'>@<GlitchText component='span' onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' className='Footer__githubBlock-text-name'>jul1ver</GlitchText> on github</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;