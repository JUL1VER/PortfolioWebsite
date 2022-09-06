import React from 'react';
import GlitchText from 'react-glitch-effect/core/GlitchText';

const SkillIcon = (props) => {
    const {imgprop, src, title} = props;
    return (
        <GlitchText component='span' onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' className='SkillsBlock_logoWithText'>
            <a href={src} target='_blank' rel='noreferrer' style={{textDecoration: 'none'}}>
                <img src={imgprop} alt="skillIcon" className='SkillsBlock_logos'/>
                <p className='SkillsBlock_logos_text'>{title}</p>
            </a>
        </GlitchText>
    );
};

export default SkillIcon;