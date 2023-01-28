import React, { useState } from 'react';
import { useEffect } from 'react';
import GlitchText from 'react-glitch-effect/core/GlitchText';

import './welcomeBlock.css'

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
        <section className='welcome-block'>
            <h1 className='welcome-block__hello'>Knock, knock.</h1>
            <h2 className='welcome-block__name'> <GlitchText component='span' color1='rgba(212, 81, 25, 0.8)' color2='rgba(25, 100, 212, 0.8)' className='welcome-block__green-text'>Vladislav Juliver</GlitchText> here.</h2>
            {
                isDesktop ?
                <h3 className='welcome-block__creater_desktop'>I am <span className='welcome-block__green-text'>obsessed</span> with creating beautiful digital products.</h3>
                :
                <>
                <h3 className='welcome-block__creater_mobile1'>I am <span className='welcome-block__green-text'>obsessed</span> with creating
                </h3><h3 className='welcome-block__creater_mobile2'>beautiful digital products.</h3>
                </>
            }
                <p className='welcome-block__potrfolio_1'>This is my portfolio website where you'll learn</p> 
                <p className='welcome-block__potrfolio_2'>about my journey as a <span className='welcome-block__green-text'>frontend developer.</span><span className='welcome-block__console'>NEO</span></p> 
        </section>
    );
};

export default WelcomeBlock;