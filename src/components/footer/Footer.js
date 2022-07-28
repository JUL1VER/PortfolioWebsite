import React from 'react';
import linkedin from '../../img/linkedin.png';
import linkedin_large from '../../img/linkedin_large.svg';
import whatsapp from '../../img/whatsapp.png';
import whatsapp_large from '../../img/whatsapp_large.svg';
import twitter from '../../img/twitter.png';
import twitter_large from '../../img/twitter_large.svg';
import gmail from '../../img/gmail.png';
import gmail_large from '../../img/gmail_large.svg';
import github from '../../img/github.png';
import github_large from '../../img/github_large.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className='Footer_wrapper'>
            <div className='Footer_media'>
                <p className='Footer_linksText'>My social media links:</p>
                <div className='Footer_linksBlock'>
                    <a href='https://github.com/JUL1VER' target='_blank' rel='noreferrer'>
                        <picture className='Footer_linksBlock_imgsPic'>
                            <source
                                className='Footer_linksBlock_imgs'
                                media='(min-width: 1440px)'
                                srcset={linkedin_large}/> 
                            <img src={linkedin} alt="linkedin" className='Footer_linksBlock_imgs'/>
                        </picture>
                    </a>
                    <a href="https://github.com/JUL1VER" target="_blank" rel='noreferrer'>
                        <picture className="Footer_linksBlock_imgsPic">
                            <source
                                className='Footer_linksBlock_imgs'
                                media='(min-width: 1440px)'
                                srcset={whatsapp_large}/> 
                            <img src={whatsapp} alt="whatsapp" className='Footer_linksBlock_imgs'/>
                        </picture>
                    </a>
                    <a href="https://github.com/JUL1VER" target="_blank" rel='noreferrer'>
                        <picture className='Footer_linksBlock_imgsPic'>
                            <source 
                                className='Footer_linksBlock_imgs'
                                media='(min-width: 1440px)'
                                srcset={twitter_large}/>
                            <img src={twitter} alt="twitter" className='Footer_linksBlock_imgs'/>
                        </picture>
                    </a>
                    <a href="https://github.com/JUL1VER" target="_blank" rel='noreferrer'>
                        <picture className='Footer_linksBlock_imgsPic'>
                            <source 
                                className='Footer_linksBlock_imgs'
                                media='(min-width: 1440px)'
                                srcset={gmail_large}/>
                            <img src={gmail} alt="linkedin" className='Footer_linksBlock_imgs'/>
                        </picture>
                    </a>
                </div>
            </div>
            <div className="Footer_github">
                <p className='Footer_projectsText'>More projects I've worked on</p>
                <a href="https://github.com/JUL1VER" className='Footer_githubBlock' target="blank">
                    <picture className='Footer_githubBlock_imgPic'>
                        <source 
                            className='Footer_githubBlock_img'
                            media='(min-width: 1440px)'
                            srcset={github_large}/>
                        <img src={github} alt="linkedin" className='Footer_githubBlock_img'/>
                    </picture>
                    <p className='Footer_githubBlock_text'>@<e className='Footer_githubBlock_text_name'>john-doe</e> on github</p>
                </a>
            </div>
        </div>
    );
};

export default Footer;