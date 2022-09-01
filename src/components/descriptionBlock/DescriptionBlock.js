import React, { useEffect, useState } from 'react';
import myfoto from '../../img/myfoto.png';
import myfoto_large from '../../img/myfoto_large.png';
import question from '../../img/question.png';
import Modal from '../modal/Modal';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './descriptionBlock.css';

const DescriptionBlock = () => {
    const [modalActive, setModalActive] = useState(false)

    const handleCloseModalClick = () => {
        setModalActive(false);
    }

    useEffect(() => {
        Aos.init({duration: 2500});
    }, [])

    return (
        <div className='DescriptionBlock_wrapper'>
            <div data-aos='fade-up' data-aos-delay='400' data-aos-once='true' className='DescriptionBlock_header'>
                <h2 className='DescriptionBlock_header_text' id='WhoAmI'>Who Am I</h2>
                <img src={question} alt="Question" className="DescriptionBlock_header_logo"/>
            </div>
            <div data-aos='zoom-in' data-aos-delay='400' data-aos-once='true' className='DescriptionBlock_description'>
                <div className='DescriptionBlock_fotoWithHover'>
                    <div className='DescriptionBlock_hover'/>
                    <picture className='DescriptionBlock_foto'>
                        <source 
                            className='DescriptionBlock_myFoto'
                            media='(min-width: 650px)'
                            srcSet={myfoto_large}/>
                        <source 
                            className='DescriptionBlock_myFoto'
                            media='(min-width: 1280px)'
                            srcSet={myfoto_large}/>
                        <img src={myfoto} alt='myFoto' className='DescriptionBlock_myFoto'/>
                    </picture>
                </div>
                <div data-aos='fade-up' data-aos-delay='400' data-aos-once='true' className="DescriptionBlock_contentPart">
                    <div className='DescriptionBlock_text'>Hello, my name is <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' style={{display: 'inline-block'}}><a href="https://linkedin.com/in/vladJ1" target='_blank' rel='noreferrer' className='DescriptionBlock_link'>Vlad</a></GlitchText> and I like to create cool things! Interesting fact about me: just like I'm obsessed with programming, I love to write <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' style={{display: 'inline-block'}}><a href="https://stihi.ru/avtor/jul1ver" target='_blank' rel='noreferrer' className='DescriptionBlock_link'>poems</a></GlitchText>. That's why I can say programming is a poetry too!</div>
                    <div className='DescriptionBlock_text'>Currently I'm developing well desingned impressive apps in <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' style={{display: 'inline-block'}}><a href="https://mish.design/" target='_blank' rel='noreferrer' className='DescriptionBlock_link'>Mish.design</a></GlitchText>. Mostly I work using React and TypeScript, but I also like native JavaScript. The power and possibilities of CSS never stop to amaze me!</div>
                    <div className='DescriptionBlock_text'>I am interested in many things including science, poetry, music, history, phylosophy and travelling. But programming is one of my favourites! And I also like to talk with people, so feel free to <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' style={{display: 'inline-block'}}><a href="mailto:jul1v3r@gmail.com" target='_blank' rel='noreferrer' className='DescriptionBlock_link'>say</a></GlitchText> me something :)</div>
                    <button className='DescriptionBlock_helloButton' 
                            type={'button'}
                            onClick={() => setModalActive(true)}>
                            Say Hello
                    </button>
                </div>
            </div>
            <Modal active={modalActive} onCloseModalClick={handleCloseModalClick}/>
        </div>
    );
};

export default DescriptionBlock;