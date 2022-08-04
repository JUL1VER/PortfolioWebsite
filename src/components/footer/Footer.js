import React from 'react';
import linkedin from '../../img/linkedin.png';
import linkedin_large from '../../img/linkedin_large.svg';
import telegram from '../../img/telegram.svg';
import telegram_large from '../../img/telegram_large.svg';
import twitter from '../../img/twitter.png';
import twitter_large from '../../img/twitter_large.svg';
import gmail from '../../img/gmail.png';
import gmail_large from '../../img/gmail_large.svg';
import github from '../../img/github.png';
import github_large from '../../img/github_large.svg';
import FooterLink from '../footerLink/FooterLink';

import './footer.css';


const Footer = () => {

    const links = [
        {id: 1, imgprop: linkedin, img_largeprop: linkedin_large, src: 'https://linkedin.com/in/vladJ1'},
        {id: 2, imgprop: telegram, img_largeprop: telegram_large, src: 'https://t.me/JUL1VER'},
        {id: 3, imgprop: twitter, img_largeprop: twitter_large, src: 'https://twitter.com/jul1ver'},
        {id: 4, imgprop: gmail, img_largeprop: gmail_large, src: 'mailto:jul1v3r@gmail.com'}
    ]

    const content = links.map((link) => 
        <FooterLink imgprop={link.imgprop} img_largeprop={link.img_largeprop} src={link.src} key={link.id}/>
    )

    return (
        <div className='Footer_wrapper'>
            <div className='Footer_media'>
                <p className='Footer_linksText'>My social media links:</p>
                <div className='Footer_linksBlock'>
                    {content}
                </div>
            </div>
            <div className="Footer_github">
                <p className='Footer_linksText'>More projects I've worked on</p>
                <div className='Footer_githubBlock'>
                    <FooterLink imgprop={github} img_largeprop={github_large} src='https://github.com/JUL1VER'/>
                    <a href='https://github.com/JUL1VER' className='Footer_githubBlock_text'>@<b className='Footer_githubBlock_text_name'>jul1ver</b> on github</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;