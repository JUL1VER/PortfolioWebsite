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
                    <p className='DescriptionBlock_text'>Hello! My name is Vlad and I am frontend developer. Here is my portfolio website where you'll learn about my journey as a frontend developer.</p>
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