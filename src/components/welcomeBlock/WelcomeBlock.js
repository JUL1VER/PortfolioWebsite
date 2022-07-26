import './welcomeBlock.css'
import React, { useState } from 'react';
import { useEffect } from 'react';
import GlitchText from 'react-glitch-effect/core/GlitchText';

const WelcomeBlock = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);

    const updateMedia = () => {
        setDesktop(window.innerWidth >= 1024);
      };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    })

    return (
        <div className='WelcomeBlock_wrapper'>
            <h1 className='WelcomeBlock_hello'>Knock, knock.</h1>
            <h2 className='WelcomeBlock_name'> <GlitchText component='span' color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='WelcomeBlock_greenText'>Vladislav Juliver</GlitchText> here.</h2>
            {
                isDesktop ? 
                <h3 className='WelcomeBlock_creater_desktop'>I am <span className='WelcomeBlock_greenText'>obsessed</span> with creating beautiful digital products.</h3>
                :
                <>
                <h3 className='WelcomeBlock_creater_mobile1'>I am <span className='WelcomeBlock_greenText'>obsessed</span> with creating
                </h3><h3 className='WelcomeBlock_creater_mobile2'>beautiful digital products.</h3>
                </>
            }
                <p className='WelcomeBlock_potrfolio_1'>This is my portfolio website where you'll learn</p> 
                <p className='WelcomeBlock_potrfolio_2'>about my journey as a <span className='WelcomeBlock_greenText'>frontend developer.</span><span className='WelcomeBlock_console'>NEO</span></p> 
        </div>
    );
};

export default WelcomeBlock;