import React, { useState } from 'react';
import userFoto from '../../img/fotowithfigures.png'
import circles from '../../img/circles.png';
import circles_large from '../../img/circles_large.png';
import userFoto_large from '../../img/userFoto_large.png';
import './descriptionBlock.css'
import Modal from '../modal/Modal';

const DescriptionBlock = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className='DescriptionBlock_wrapper'>
            <div className='DescriptionBlock_fotoWithFigures'>
                <picture className='DescriptionBlock_foto'>
                    <source 
                        className='DescriptionBlock_userFoto'
                        media='(min-width: 650px)'
                        srcSet={userFoto_large}/>
                    <source 
                        className='DescriptionBlock_userFoto'
                        media='(min-width: 1440px)'
                        srcSet={userFoto_large}/>
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
                <h1 className='DescriptionBlock_name'>John Doe</h1>
                <p className='DescriptionBlock_text'>Hello! Am a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</p>
                <button className='DescriptionBlock_hireButton' 
                        type={'button'}
                        onClick={() => setModalActive(true)}>
                        Hire me
                </button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default DescriptionBlock;