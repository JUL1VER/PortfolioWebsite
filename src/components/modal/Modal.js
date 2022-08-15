import React from 'react';
import linkedin from '../../img/linkedin.png';
import telegram from '../../img/telegram.svg';
import linkedin_large from '../../img/linkedin_large.svg';
import telegram_large from '../../img/telegram_large.svg';

import './modal.css';

const Modal = ({ active, onCloseModalClick }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={onCloseModalClick}>
            <div className={active ? 'modal_content active' : 'modal_content'} onClick={e => e.stopPropagation()}>
                <p className='modal_text'>Feel free to contact me by the following links below!</p>
                <div className='modal_linksBlock'>
                    <a href='https://linkedin.com/in/vladJ1' className='modal_link modal_link_left' target="blank">
                        LinkedIn 
                        <picture
                            className='modal_linkImg'
                            media='{min-width: 650px}'
                            srcSet={linkedin_large}>
                            <img src={linkedin} alt='linkedin' className='modal_linkImg'/>
                        </picture>
                    </a>
                    <a href="https://t.me/JUL1VER" className='modal_link modal_link_right' target="blank">
                        Telegram 
                        <picture
                            className='modal_linkImg'
                            media='{min-width: 650px}'
                            srcSet={telegram_large}>
                            <img src={telegram} alt='linkedin' className='modal_linkImg'/>
                        </picture>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Modal;