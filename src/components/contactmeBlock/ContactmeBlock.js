import React, { useEffect, useState } from 'react';
import contactmeLogo from '../../img/contactme_Logo.png';
import contactmeLogo_large from '../../img/contactme_Logo_large.png';
import handsWithPills from '../../img/handsWithPills.png';
import handsWithPills_large from '../../img/handsWithPills_large.png';

import './contactmeBlock.css';

const ContactmeBlock = () => {
    const [emailDirty, setEmailDirty] = useState(false);
    const [textDirty, setTextDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email cannot be empty');
    const [textError, setTextError] = useState('Message cannot be empty');
    const [info, setInfo] = useState({ email: '', message: '' });
    const [disableButton, setDisableButton] = useState(true);
    
    useEffect(() => {
        if (!info.email.length || !info.message.length) { setDisableButton(true) }
        else { setDisableButton(false) }
    }, [info])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'text':
                setTextDirty(true)
                break
            default: break
        }
    }

    const handleEmailChange = (e) => {
        setInfo(state => ({ ...state, email: e.target.value }))
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Incorrect email')
            setDisableButton(true)
        } else {
            setEmailError('')
            setDisableButton(false)
        }
    }

    const handleMessageChange = (e) => {
        setInfo(state => ({ ...state, message: e.target.value }))
        if (!String(e.target.value).length) {
            setTextError('Incorrect message')
            setDisableButton(true)
        } else {
            setTextError('')
            setDisableButton(false)
        }
    }

    const sendInfo = () => {
        const postInfo = {
            'email': info.email,
            'message': info.message
        }

        console.log(postInfo);

        setInfo(state => ({ ...state, email: ''}))
        setInfo(state => ({ ...state, message: ''}))
    }

    return (
        <div className='ContactmeBlock_wrapper'>
            <div className='ContactmeBlock_header'>
                <h2 className='ContactmeBlock_header_text' id='ContactmePart'>Contact me</h2>
                <picture className="ContactmeBlock_header_logoImg">
                    <source
                        className='ContactmeBlock_header_logo'
                        media='(min-width: 650px)'
                        srcSet={contactmeLogo_large}/> 
                    <img src={contactmeLogo} alt="gears" className="ContactmeBlock_header_logo"/>
                </picture>
            </div>
            <div className='ContactmeBlock_content'>
                <picture className="ContactmeBlock_imgPic">
                    <source
                        className='ContactmeBlock_img'
                        media='(min-width: 500px)'
                        srcSet={handsWithPills_large}/> 
                    <img src={handsWithPills} alt="Hands with pills" className='ContactmeBlock_img'/>
                </picture>
                <form className='ContactmeBlock_form'>
                    <div className='ContactmeBlock_error'>{ emailDirty && emailError }</div>
                    <input 
                        name='email'
                        type='email'
                        placeholder='Enter your email address' 
                        className='ContactmeBlock_email'
                        value={info.email}
                        onChange={handleEmailChange}
                        onBlur={e => blurHandler(e)}/>
                    <div className='ContactmeBlock_error'>{ textDirty && textError }</div>
                    <textarea 
                        name='text'
                        type='text'
                        placeholder='Enter your message...' 
                        className='ContactmeBlock_message'
                        value={info.message}
                        onChange={handleMessageChange}
                        onBlur={e => blurHandler(e)}/>
                    <button
                        disabled={ disableButton || textError.length || emailError.length }
                        className={(disableButton || textError.length || emailError.length) ? 'ContactmeBlock_button disabled' : 'ContactmeBlock_button'}
                        type='button' 
                        onClick={sendInfo}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactmeBlock;