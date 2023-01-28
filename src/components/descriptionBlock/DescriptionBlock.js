import React, { useEffect, useState } from 'react';
import myfoto from './img/myfoto.png';
import myfoto_large from './img/myfoto_large.png';
import question from './img/question.png';
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
        <section className='description-block'>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='true' className='description-block__header'>
                <h2 className='description-block__header-text' id='WhoAmI'>Who Am I</h2>
                <img src={question} alt="Question" className="description-block__header-logo"/>
            </div>
            <div data-aos='zoom-in' data-aos-delay='100' data-aos-once='true' className='description-block__description'>
                <div className='description-block__foto-with-hover'>
                    <div className='description-block__hover'/>
                    <picture className='description-block__foto-pic'>
                        <source
                            className='description-block__myfoto'
                            media='(min-width: 650px)'
                            srcSet={myfoto_large}/>
                        <source
                            className='description-block__myfoto'
                            media='(min-width: 1280px)'
                            srcSet={myfoto_large}/>
                        <img src={myfoto} alt='myFoto' className='description-block__myfoto'/>
                    </picture>
                </div>
                <div data-aos='fade-up' data-aos-delay='100' data-aos-once='true' className="description-block__content-part">
                    <div className='description-block__text'>Hello, my name is <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' style={{display: 'inline-block'}}><a href="https://linkedin.com/in/vladJ1" target='_blank' rel='noreferrer' className='description-block__link'>Vlad</a></GlitchText> and I like to create cool things! Interesting fact about me: just like I'm obsessed with programming, I love to write <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' style={{display: 'inline-block'}}><a href="https://stihi.ru/avtor/jul1ver" target='_blank' rel='noreferrer' className='description-block__link'>poems</a></GlitchText>. That's why I can say programming is a poetry too!</div>
                    <div className='description-block__text'>Currently I'm developing well desingned impressive apps in <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' style={{display: 'inline-block'}}><a href="https://mish.design/" target='_blank' rel='noreferrer' className='description-block__link'>Mish.design</a></GlitchText>. Mostly I work using React and TypeScript, but I also like native JavaScript. The power and possibilities of CSS never stop to amaze me!</div>
                    <div className='description-block__text'>I am interested in many things including science, poetry, music, history, phylosophy and travelling. But programming is one of my favourites! And I also like to talk with people, so feel free to <GlitchText onHover={true} color1='rgba(212, 81, 25, 0.7)' color2='rgba(25, 100, 212, 0.7)' style={{display: 'inline-block'}}><a href="mailto:jul1v3r@gmail.com" target='_blank' rel='noreferrer' className='description-block__link'>say</a></GlitchText> me something :)</div>
                    <button className='description-block__hello-button'
                            type='button'
                            onClick={() => setModalActive(true)}>
                            Say Hello
                    </button>
                </div>
            </div>
            <Modal active={modalActive} onCloseModalClick={handleCloseModalClick}/>
        </section>
    );
};

export default DescriptionBlock;