import React from 'react';

const SkillIcon = (props) => {
    const {imgprop} = props;
    return (
        <div className='SkillsBlock_css'>
            <img src={imgprop} alt="skillIcon"/>
        </div>
    );
};

export default SkillIcon;