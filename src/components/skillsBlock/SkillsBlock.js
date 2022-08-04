import React from 'react';
import './skillsBlock.css';
import skillsImg from '../../img/skillsImg.png';
import skillsImg_large from '../../img/skillsImg_large.png';
import css from '../../img/csslogo.png';
import js from '../../img/jslogo.png';
import html from '../../img/htmllogo.png';
import react from '../../img/reactlogo.png';
import SkillIcon from '../skillIcon/SkillIcon';

const SkillsBlock = () => {
    const technologies = [
        {id: 1, imgprop: css, title: 'CSS'},
        {id: 2, imgprop: html, title: 'HTML'},
        {id: 3, imgprop: js, title: 'JS'},
        {id: 4, imgprop: react, title: 'React'}
    ]

    const content = technologies.map(techno => 
        <SkillIcon imgprop={techno.imgprop} key={techno.id} title={techno.title}/>
    )

    return (
        <div className='SkillsBlock_wrapper'>
            <h2 className='SkillsBlock_header' id='SkillsPart'>Skills</h2>
            <div className='SkillsBlock_content'>
                <picture className='SkillsBlock_imgPic'>
                    <source 
                        className='SkillsBlock_img'
                        media='(min-width: 500px)'
                        srcSet={skillsImg_large}/>
                    <img src={skillsImg} alt="skillsImg" className='SkillsBlock_img'/>
                </picture>
                <div className='SkillsBlock_skillsAndLogos'>
                    <p className='SkillsBlock_text'>I have a solid experience in the following web technologies:</p>
                    <div className='SkillsBlock_logoWrapper'>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default SkillsBlock;