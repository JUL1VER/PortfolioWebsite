import React, { useState } from 'react';
import contactmeImg from '../../img/contactmeImg.png'
import contactmeImg_large from '../../img/contactmeImg_large.png'
import paperplane from '../../img/paperplane.png'
import paperplane_large from '../../img/paperplane_large.png'
import './contactmeBlock.css';

const ContactmeBlock = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendInfo = () => {
        const info = {
            'email': email,
            'message': message
        }
        console.log(info);
    }

    return (
        <div className='ContactmeBlock_wrapper'>
            <h3 className='ContactmeBlock_header'>Contact me</h3>
            <div className='ContactmeBlock_content'>
                <picture className="ContactmeBlock_imgPic">
                    <source
                        className='ContactmeBlock_img'
                        media='(min-width: 500px)'
                        srcSet={contactmeImg_large}/> 
                    <img src={contactmeImg} alt="ContactmeImg" className='ContactmeBlock_img'/>
                </picture>
                <form className='ContactmeBlock_form'>
                    <input 
                        type="email" 
                        placeholder='Enter email address' 
                        className='ContactmeBlock_email'
                        onChange={(e) => setEmail(e.target.value)}/>
                    <textarea 
                        type="text" 
                        placeholder='Enter message...' 
                        className='ContactmeBlock_message'
                        onChange={(e) => setMessage(e.target.value)}/>
                    <button 
                        className='ContactmeBlock_button' 
                        type='button' 
                        onClick={sendInfo}>
                        Send
                        <picture className="ContactmeBlock_button_imgPic">
                            <source
                                className='ContactmeBlock_button_img'
                                media='(min-width: 650px)'
                                srcSet={paperplane_large}/> 
                            <img src={paperplane} alt="Paperplane" className='ContactmeBlock_button_img'/>
                        </picture>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactmeBlock;