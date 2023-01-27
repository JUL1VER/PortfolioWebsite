import React from 'react';
import linkedin from '../../img/linkedin.svg';
import telegram from '../../img/telegram.svg';

import './modal.css';

const Modal = ({ active, onCloseModalClick }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={onCloseModalClick}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                <p className='modal__text'>Feel free to contact me by the following links below!</p>
                <div className='modal__links-block'>
                    <a href='https://linkedin.com/in/vladJ1' className='modal__link modal__link_left' target="blank">
                        LinkedIn 
                        <img src={linkedin} alt='linkedin' className='modal__link-img'/>
                    </a>
                    <a href="https://t.me/JUL1VER" className='modal__link modal__link_right' target="blank">
                        Telegram
                        <img src={telegram} alt='linkedin' className='modal__link-img'/>
                    </a>
                </div>
                <button className='modal__close-button' onClick={onCloseModalClick}/>
            </div>
        </div>
    );
};

export default Modal;