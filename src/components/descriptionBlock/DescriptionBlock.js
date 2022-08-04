import React, { useState } from 'react';
import myfoto from '../../img/myfoto.jpeg';
import userFoto from '../../img/fotowithfigures.png'
import circles from '../../img/circles.png';
import circles_large from '../../img/circles_large.png';
import './descriptionBlock.css'
import Modal from '../modal/Modal';

const DescriptionBlock = () => {
    const [modalActive, setModalActive] = useState(false)

    const handleCloseModalClick = () => {
        setModalActive(false);
    }

    return (
        <div className='DescriptionBlock_wrapper'>
            <div className='DescriptionBlock_fotoWithFigures'>
                <picture className='DescriptionBlock_foto'>
                    <source 
                        className='DescriptionBlock_userFoto'
                        media='(min-width: 650px)'
                        srcSet={myfoto}/>
                    <source 
                        className='DescriptionBlock_userFoto'
                        media='(min-width: 1440px)'
                        srcSet={myfoto}/>
                    <img src={userFoto} alt='userForo' className='DescriptionBlock_userFoto'/>
                </picture>
                <picture className='DescriptionBlock_circlesPic'>
                    <source
                        className='DescriptionBlock_circles'
                        media='(min-width: 650px)'
                        srcSet={circles_large}/>
                    <img src={circles} alt='circles' className='DescriptionBlock_circles'/>
                </picture>
            </div>
            <div className="DescriptionBlock_contentPart">
                <h1 className='DescriptionBlock_name'>Vladislav Juliver</h1>
                <p className='DescriptionBlock_text'>Hello! My name is Vlad and I am frontend developer. Here is my portfolio website where you'll learn about my journey as a frontend developer.</p>
                <button className='DescriptionBlock_hireButton' 
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