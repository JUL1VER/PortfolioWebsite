import React, { useEffect, useRef, useState } from 'react';
import contactmeLogo from '../../img/contactme_Logo.png';
import contactmeLogo_large from '../../img/contactme_Logo_large.png';
import handsWithPills from '../../img/handsWithPills.png';
import handsWithPills_large from '../../img/handsWithPills_large.png';
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
        if (!String(e.target.value).length) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }

    const handleEmailChange = (e) => {
        setInfo(state => ({ ...state, email: e.target.value }))
        if (!String(e.target.value).length) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }

    const handleMessageChange = (e) => {
        setInfo(state => ({ ...state, message: e.target.value }))
        if (!String(e.target.value).length) {
            setDisableButton(true)
        } else {
            setDisableButton(false)
        }
    }

    useEffect(() => {
        Aos.init({duration: 2500});
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kc7tg2i', 'template_1nboemo', form.current, 'uuqcIqnHZpy0Umg--')
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
                <picture className="ContactmeBlock_header_logoImg">
                    <source
                        className='ContactmeBlock_header_logo'
                        media='(min-width: 650px)'
                        srcSet={contactmeLogo_large}/> 
                    <img src={contactmeLogo} alt="Phone" className="ContactmeBlock_header_logo"/>
                </picture>
            </div>
            <div data-aos='fade-up' data-aos-delay='400' data-aos-once='true' className='ContactmeBlock_content'>
                <picture className="ContactmeBlock_imgPic">
                    <source
                        className='ContactmeBlock_img'
                        media='(min-width: 500px)'
                        srcSet={handsWithPills_large}/> 
                    <img src={handsWithPills} alt="Hands with pills" className='ContactmeBlock_img'/>
                </picture>
                <form ref={form} onSubmit={sendEmail} className='ContactmeBlock_form'>
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