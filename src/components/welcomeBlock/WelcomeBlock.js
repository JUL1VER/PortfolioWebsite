import './welcomeBlock.css'
import React from 'react';

const WelcomeBlock = () => {
    return (
        <div className='WelcomeBlock_wrapper'>
            <h1 className='WelcomeBlock_hello'>Knock, knock.</h1>
            <h2 className='WelcomeBlock_name'> <span className='WelcomeBlock_greenText'>Vladislav Juliver</span> here.</h2>
            <h3 className='WelcomeBlock_creater'>I am <span className='WelcomeBlock_greenText'>obsessed</span> with creating beautiful digital products.</h3>
            <p className='WelcomeBlock_potrfolio'>This is my portfolio website where you'll learn about my journey as a <span className='WelcomeBlock_greenText'>frontend developer.</span></p>
        </div>
    );
};

export default WelcomeBlock;