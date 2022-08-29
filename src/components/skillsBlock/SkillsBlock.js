import React, { useEffect } from 'react';
import skillsHead from '../../img/skillsHead_large.png';
import skillsImg from '../../img/skillsImg.png';
import skillsImg_large from '../../img/skillsImg_large.png';
import css from '../../img/csslogo.png';
import js from '../../img/jslogo.png';
import html from '../../img/htmllogo.png';
import react from '../../img/reactlogo.png';
import redux from '../../img/reduxlogo.png';
import ts from '../../img/tslogo.png';
import SkillIcon from '../skillIcon/SkillIcon';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './skillsBlock.css';

const SkillsBlock = () => {
    const technologies = [
        {id: 1, imgprop: html, title: 'HTML'},
        {id: 2, imgprop: css, title: 'CSS'},
        {id: 3, imgprop: js, title: 'JS'},
        {id: 4, imgprop: ts, title: 'TS'},
        {id: 5, imgprop: react, title: 'React'},
        {id: 6, imgprop: redux, title: 'Redux'}
    ]

    const content = technologies.map(techno => 
        <SkillIcon imgprop={techno.imgprop} key={techno.id} title={techno.title}/>
    )

    useEffect(() => {
        Aos.init({duration: 2500});
    }, [])
    return (
        <div className='SkillsBlock_wrapper'>
            <div data-aos='fade-down' data-aos-delay='400' data-aos-once='true' className='SkillsBlock_header' id='SkillsPart'>
                <h2 className='SkillsBlock_header_text'>Skills</h2>
                <img src={skillsHead} alt="Neo" className="SkillsBlock_header_logo"/>
            </div>
            <div className='SkillsBlock_content'>
                <picture data-aos='fade-up' data-aos-delay='400' data-aos-once='true' className='SkillsBlock_imgPic'>
                    <source 
                        className='SkillsBlock_img'
                        media='(min-width: 500px)'
                        srcSet={skillsImg_large}/>
                    <img src={skillsImg} alt="skillsImg" className='SkillsBlock_img'/>
                </picture>
                <div data-aos='fade-up' data-aos-delay='400' data-aos-once='true' className='SkillsBlock_skillsAndLogos'>
                    <p className='SkillsBlock_text'>I have solid experience in the following web technologies:</p>
                    <div className='SkillsBlock_logoWrapper'>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}; 

export default SkillsBlock;