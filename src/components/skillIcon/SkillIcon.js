import React from 'react';

const SkillIcon = (props) => {
    const {imgprop} = props;
    return (
        <img src={imgprop} alt="skillIcon" className='SkillsBlock_logos'/>
    );
};

export default SkillIcon;