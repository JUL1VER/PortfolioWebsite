import React from 'react';

const FooterLink = (props) => {
    const {imgprop, src} = props;

    return (
        <a href={src} target='_blank' rel='noreferrer'>
            <div 
                style={{
                    WebkitMask: `url("${imgprop}") no-repeat center`,
                    WebkitMaskSize: "cover",
                    mask: `url("${imgprop}") no-repeat center`,
                  }}
                alt="linkIcon" className='Footer_linksBlock_imgs'/>
        </a>
    );
};

export default FooterLink;