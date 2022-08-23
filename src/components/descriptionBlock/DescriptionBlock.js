import React, { useState } from 'react';
import myfoto from '../../img/myfoto.png';
import myfoto_large from '../../img/myfoto_large.png';
import question from '../../img/question.png';
import question_large from '../../img/question_large.png';
import Modal from '../modal/Modal';

import './descriptionBlock.css';

const DescriptionBlock = () => {
    const [modalActive, setModalActive] = useState(false)

    const handleCloseModalClick = () => {
        setModalActive(false);
    }

    return (
        <div className='DescriptionBlock_wrapper'>
            <div className='DescriptionBlock_header'>
                <h2 className='DescriptionBlock_header_text' id='WhoAmI'>Who Am I</h2>
                {/* Здесь элемент picture вряд ли нужен, иконка даже на большом экране совсем немного весит. Её лучше следать одним размером и вставить через псевдоэлемент ::after, чтобы не засорять разметку */}
                <picture className="DescriptionBlock_header_logoImg">
                    <source
                        className='DescriptionBlock_header_logo'
                        media='(min-width: 650px)'
                        srcSet={question_large}/> 
                    <img src={question} alt="Question" className="DescriptionBlock_header_logo"/>
                </picture>
            </div>
            <div className='DescriptionBlock_description'>
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
                <div className="DescriptionBlock_contentPart">
                    <p className='DescriptionBlock_text'>Hello, my name is <a href="https://linkedin.com/in/vladJ1" target='_blank' rel='noreferrer' className='DescriptionBlock_link'>Vlad</a> and I like to create cool things! Interesting fact about me: just like I'm obsessed with programming, I love to wrire <a href="https://stihi.ru/avtor/jul1ver" target='_blank' rel='noreferrer' className='DescriptionBlock_link'>poems</a>. That's why I can say programming is a poetry too!</p>
                    <p className='DescriptionBlock_text'>Currently I'm developing well desingned impressive apps in <a href="https://mish.design/" target='_blank' rel='noreferrer' className='DescriptionBlock_link'>Mish.design</a>. Mostly I work using React and TypeScript, but I also like native JavaScript. The power and possibilities of CSS never stop to amaze me!</p>
                    <p className='DescriptionBlock_text'>I am interested in many things including science, poetry, music, history, phylosophy and travelling. But programming is one of my favourites! And I also like to talk with people, so feel free to <a href="mailto:jul1v3r@gmail.com" target='_blank' rel='noreferrer' className='DescriptionBlock_link'>say</a> me something :)</p>
                    <button className='DescriptionBlock_helloButton' 
                            type={'button'}
                            onClick={() => setModalActive(true)}>
                            Say Hello
                    </button>
                </div>
                
                <Modal active={modalActive} onCloseModalClick={handleCloseModalClick}/>
            </div>
        </div>
    );
};

export default DescriptionBlock;