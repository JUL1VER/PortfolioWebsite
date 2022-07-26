import React from 'react';
import './skillsBlock.css';
import skillsImg from '../../img/skillsImg.png';
import css from '../../img/css3.png';
import js from '../../img/js.png';
import html from '../../img/html5.png';
import bootstrap from '../../img/bootstrap.png';
// import cssLogo from '../../img/cssLogo.png';
// import jsLogo from '../../img/jsLogo.png';
// import htmlLogo from '../../img/htmlLogo.png';
// import bootstrapLogo from '../../img/bootstrapLogo.png';
// import borderLogo from '../../img/borderLogo.png';

const SkillsBlock = () => {
    return (
        <div className='SkillsBlock_wrapper'>
            <h3 className='SkillsBlock_header'>Skills</h3>
            <img src={skillsImg} alt="skillsImg" className='SkillsBlock_img'/>
            <p className='SkillsBlock_text'>I have a vast experience in the following web technologies:</p>
            <div className='SkillsBlock_logoWrapperUp'>
                <div className='SkillsBlock_css'>
                    <img src={css} alt="css" />
                </div>
                <div className='SkillsBlock_js'>
                    <img src={js} alt="js" />
                </div>
            </div>
            <div className='SkillsBlock_logoWrapperDown'>
                <div className='SkillsBlock_html'>
                    <img src={html} alt="html" />
                </div>
                <div className='SkillsBlock_bootstrap'>
                    <img src={bootstrap} alt="bootstrap" />
                </div>
            </div>
        </div>
    );
};

export default SkillsBlock;


            // <div className='SkillsBlock_logoWrapperUp'>
            //     <div className='SkillsBlock_css'>
            //         <img src={cssLogo} alt="cssLogo" className='SkillsBlock_cssLogo'/>
            //         <img src={borderLogo} alt="borderLogo" className='SkillsBlock_cssLogo_borderLogo'/>
            //         <p className='SkillsBlock_logo_text'>CSS3</p>
            //     </div>
            //     <div className='SkillsBlock_js'>
            //         <img src={jsLogo} alt="jsLogo" className='SkillsBlock_jsLogo'/>
            //         <img src={borderLogo} alt="borderLogo" className='SkillsBlock_jsLogo_borderLogo'/>
            //         <p className='SkillsBlock_logo_text'>JavaScript</p>
            //     </div>
            // </div>
            // <div className='SkillsBlock_logoWrapperDown'>
            //     <div className='SkillsBlock_html'>
            //         <img src={htmlLogo} alt="htmlLogo" className='SkillsBlock_htmlLogo'/>
            //         <img src={borderLogo} alt="borderLogo" className='SkillsBlock_htmlLogo_borderLogo'/>
            //         <p className='SSkillsBlock_logo_text'>HTML 5</p>
            //     </div>
            //     <div className='SkillsBlock_bootstrap'>
            //         <img src={bootstrapLogo} alt="bootstrapLogo" className='SkillsBlock_bootstrapLogo'/>
            //         <img src={borderLogo} alt="borderLogo" className='SkillsBlock_bootstrapLogo_borderLogo'/>
            //         <p className='SkillsBlock_logo_text'>Bootstrap</p>
            //     </div>
            // </div>