import React, { useEffect, useRef, useState } from 'react';
import contactmeLogo from '../../img/contactmeLogo_large.png';
import leftpill from '../../img/bluePill.png';
import rightpill from '../../img/redPill.png';
import hands from '../../img/hands.png';
import hands_large from '../../img/hands_large.png';
import Aos from 'aos';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';

import './contactmeBlock.css';

const ContactmeBlock = () => {
    const [info, setInfo] = useState({ name: '', email: '', message: '' });
    const [disableButton, setDisableButton] = useState(true);
    
    useEffect(() => {
        if (!info.email.length || !info.message.length || !info.name.length) { setDisableButton(true) }
        else { setDisableButton(false) }
    }, [info])

    const handleNameChange = (e) => {
        setInfo(state => ({ ...state, name: e.target.value }))
    }

    const handleEmailChange = (e) => {
        setInfo(state => ({ ...state, email: e.target.value }))
    }

    const handleMessageChange = (e) => {
        setInfo(state => ({ ...state, message: e.target.value }))
    }

    useEffect(() => {
        Aos.init({duration: 2500});
    }, [])

    const form = useRef();

    const SendEmail = (e) => {
        e.preventDefault();

        emailjs.SendForm('service_kc7tg2i', 'template_1nboemo', form.current, 'uuqcIqnHZpy0Umg--')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        setInfo(state => ({ ...state, name: '' }))
        setInfo(state => ({ ...state, email: '' }))
        setInfo(state => ({ ...state, message: '' }))
    };

    return (
        <div className='ContactmeBlock_wrapper'>
            <div data-aos='fade-down' data-aos-delay='400' data-aos-once='true' className='ContactmeBlock_header'>
                <h2 className='ContactmeBlock_header_text' id='ContactmePart'>Contact me</h2>
                <img src={contactmeLogo} alt="Phone" className="ContactmeBlock_header_logo"/>
            </div>
            <div data-aos='fade-up' data-aos-delay='400' data-aos-once='true' className='ContactmeBlock_content'>
                <div className='ContactmeBlock_picture'>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><img src={leftpill} alt="leftpill" className="ContactmeBlock_leftpill"/></a>
                    <a href="https://www.youtube.com/watch?v=O5b0ZxUWNf0" target="_blank" rel="noreferrer"><img src={rightpill} alt="rightpull" className='ContactmeBlock_rightpill'/></a>
                    <picture className="ContactmeBlock_imgPic">
                        <source
                            className='ContactmeBlock_img'
                            media='(min-width: 500px)'
                            srcSet={hands_large}/> 
                        <img src={hands} alt="Hands" className='ContactmeBlock_img'/>
                    </picture>
                </div>
                <form ref={form} onSubmit={SendEmail} className='ContactmeBlock_form'>
                    <input 
                        name='user_name'
                        type='text'
                        placeholder='Enter your name' 
                        className='ContactmeBlock_name'
                        value={info.name}
                        onChange={handleNameChange}
                        />
                    <input 
                        name='user_email'
                        type='email'
                        placeholder='Enter your email address' 
                        className='ContactmeBlock_email'
                        value={info.email}
                        onChange={handleEmailChange}/>
                    <textarea 
                        name='message'
                        type='text'
                        placeholder='Enter your message...' 
                        className='ContactmeBlock_message'
                        value={info.message}
                        onChange={handleMessageChange}/>
                    <button
                        disabled={ disableButton }
                        className={disableButton ? 'ContactmeBlock_button disabled' : 'ContactmeBlock_button'}
                        type='submit'
                        value='Send'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactmeBlock;