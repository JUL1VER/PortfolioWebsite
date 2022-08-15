import React, { useState } from 'react';
import myfoto from '../../img/myfoto.png';
import myfoto_large from '../../img/myfoto_large.png';
import Modal from '../modal/Modal';

import './descriptionBlock.css';

const DescriptionBlock = () => {
    const [modalActive, setModalActive] = useState(false)

    const handleCloseModalClick = () => {
        setModalActive(false);
    }

    return (
        <div className='DescriptionBlock_wrapper'>
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
                <h1 className='DescriptionBlock_name'>Vladislav Juliver</h1>
                <p className='DescriptionBlock_text'>Hello! My name is Vlad and I am frontend developer. Here is my portfolio website where you'll learn about my journey as a frontend developer.</p>
                <button className='DescriptionBlock_helloButton' 
                        type={'button'}
                        onClick={() => setModalActive(true)}>
                        Say Hello
                </button>
            </div>
            
            <Modal active={modalActive} onCloseModalClick={handleCloseModalClick}/>
        </div>
    );
};

export default DescriptionBlock;