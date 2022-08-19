import './welcomeBlock.css'
import React, { useState } from 'react';
import { useEffect } from 'react';

const WelcomeBlock = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth >= 1280);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1280);
      };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    })

    return (
        <div className='WelcomeBlock_wrapper'>
            <h1 className='WelcomeBlock_hello'>Knock, knock.</h1>
            <h2 className='WelcomeBlock_name'> <span className='WelcomeBlock_greenText'>Vladislav Juliver</span> here.</h2>
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
                <p className='WelcomeBlock_potrfolio_2'>about my journey as a <span className='WelcomeBlock_greenText'>frontend developer.</span><span className='WelcomeBlock_console'>VJ</span></p> 
        </div>
    );
};

export default WelcomeBlock;