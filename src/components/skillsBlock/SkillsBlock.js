import React from 'react';
import './skillsBlock.css';
import skillsImg from '../../img/skillsImg.png';
import skillsImg_large from '../../img/skillsImg_large.png';
import css from '../../img/css3.png';
import js from '../../img/js.png';
import html from '../../img/html5.png';
import bootstrap from '../../img/bootstrap.png';
import SkillIcon from '../skillIcon/SkillIcon';

const SkillsBlock = () => {
    const technologies = [
        {id: 1, imgprop: css},
        {id: 2, imgprop: html},
        {id: 3, imgprop: js},
        {id: 4, imgprop: bootstrap}
    ]

    const content = technologies.map(techno => 
        <SkillIcon imgprop={techno.imgprop} key={techno.id}/>
    )

    return (
        <div className='SkillsBlock_wrapper'>
            <h3 className='SkillsBlock_header'>Skills</h3>
            <div className='SkillsBlock_content'>
                <picture className='SkillsBlock_imgPic'>
                    <source 
                        className='SkillsBlock_img'
                        media='(min-width: 500px)'
                        srcSet={skillsImg_large}/>
                    <img src={skillsImg} alt="skillsImg" className='SkillsBlock_img'/>
                </picture>
                <div className='SkillsBlock_skillsAndLogos'>
                    <p className='SkillsBlock_text'>I have a vast experience in the following web technologies:</p>
                    <div className='SkillsBlock_logoWrapper'>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default SkillsBlock;