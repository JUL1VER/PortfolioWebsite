import React from 'react';
import contactmeImg from '../../img/contactmeImg.png'
import paperplane from '../../img/paperplane.png'
import './contactmeBlock.css';

const ContactmeBlock = () => {
    return (
        <div className='ContactmeBlock_wrapper'>
            <h3 className='ContactmeBlock_header'>Contact me</h3>
            <div className='ContactmeBlock_content'>
                <img src={contactmeImg} alt="ContactmeImg" className='ContactmeBlock_img'/>
                <div className='ContactmeBlock_forms'>
                    <input type="email" placeholder='Enter email address' className='ContactmeBlock_email'/>
                    <textarea type="text" placeholder='Enter message...' className='ContactmeBlock_message'/>
                    <button className='ContactmeBlock_button'>
                        Send
                        <img src={paperplane} alt="Paperplane" className='ContactmeBlock_button_img'/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactmeBlock;