import './welcomeBlock.css'
import React from 'react';

const WelcomeBlock = () => {
    return (
        <div className='WelcomeBlock'>
            <div className='WelcomeBlock_wrapper'>
                <h1 className='WelcomeBlock_hello'>Knock, knock.</h1>
                <h2 className='WelcomeBlock_name'>Vladislav Juliver here.</h2>
                <h3 className='WelcomeBlock_creater'>I am obsessed with creating beautiful digital products.</h3>
                <p className='WelcomeBlock_potrfolio'>This is my potfolio website where you'll learn about my journey as a frontend developer.</p>
            </div>
        </div>
    );
};

export default WelcomeBlock;