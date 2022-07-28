import React from 'react';
import './skillsBlock.css';
import skillsImg from '../../img/skillsImg.png';
import skillsImg_large from '../../img/skillsImg_large.png';
import css from '../../img/css3.png';
import js from '../../img/js.png';
import html from '../../img/html5.png';
import bootstrap from '../../img/bootstrap.png';

const SkillsBlock = () => {
    return (
        <div className='SkillsBlock_wrapper'>
            <h3 className='SkillsBlock_header'>Skills</h3>
            <div className='SkillsBlock_content'>
                <picture className='SkillsBlock_imgPic'>
                    <source 
                        className='SkillsBlock_img'
                        media='(min-width: 500px)'
                        srcset={skillsImg_large}/>
                    <img src={skillsImg} alt="skillsImg" className='SkillsBlock_img'/>
                </picture>
                <div className='SkillsBlock_skillsAndLogos'>
                    <p className='SkillsBlock_text'>I have a vast experience in the following web technologies:</p>
                    <div className='SkillsBlock_logoWrapper'>
                        <div className='SkillsBlock_css'>
                            <img src={css} alt="css" />
                        </div>
                        <div className='SkillsBlock_js'>
                            <img src={js} alt="js" />
                        </div>
                        <div className='SkillsBlock_html'>
                            <img src={html} alt="html" />
                        </div>
                        <div className='SkillsBlock_bootstrap'>
                            <img src={bootstrap} alt="bootstrap" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default SkillsBlock;