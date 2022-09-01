import React from 'react';
import linkedin from '../../img/linkedin.svg';
import telegram from '../../img/telegram.svg';

import './modal.css';

const Modal = ({ active, onCloseModalClick }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={onCloseModalClick}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                <p className='modal_text'>Feel free to contact me by the following links below!</p>
                <div className='modal_linksBlock'>
                    <a href='https://linkedin.com/in/vladJ1' className='modal_link modal_link_left' target="blank">
                        LinkedIn 
                        <img src={linkedin} alt='linkedin' className='modal_linkImg'/>
                    </a>
                    <a href="https://t.me/JUL1VER" className='modal_link modal_link_right' target="blank">
                        Telegram
                        <img src={telegram} alt='linkedin' className='modal_linkImg'/>
                    </a>
                </div>
                <button className='modal_closeButton' onClick={onCloseModalClick}/>
            </div>
        </div>
    );
};

export default Modal;