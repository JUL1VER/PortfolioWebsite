import React from 'react';
import linkedin from '../../img/linkedin.png';
import whatsapp from '../../img/whatsapp.png';
import twitter from '../../img/twitter.png';
import gmail from '../../img/gmail.png';
import github from '../../img/github.png';
import './footer.css';

const Footer = () => {
    return (
        <div className='Footer_wrapper'>
            <p className='Footer_linksText'>My social media links:</p>
            <div className='Footer_linksBlock'>
                <a href="https://github.com/JUL1VER">
                    <img src={linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/JUL1VER">
                    <img src={whatsapp} alt="whatsapp" />
                </a>
                <a href="https://github.com/JUL1VER">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="https://github.com/JUL1VER">
                    <img src={gmail} alt="gmail" />
                </a>
            </div>
            <p className='Footer_projectsText'>More projects I've worked on</p>
            <a href="https://github.com/JUL1VER" className='Footer_githubBlock'>
                <img src={github} alt="github" className='Footer_githubBlock_img'/>
                <p className='Footer_githubBlock_text'>@<e className='Footer_githubBlock_text_name'>john-doe</e> on github</p>
            </a>
        </div>
    );
};

export default Footer;