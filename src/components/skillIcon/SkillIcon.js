import React from 'react';

const SkillIcon = (props) => {
    const {imgprop, title} = props;
    return (
        <div>
            <img src={imgprop} alt="skillIcon" className='SkillsBlock_logos'/>
            <p className='SkillsBlock_logos_text'>{title}</p>
        </div>
    );
};

export default SkillIcon;