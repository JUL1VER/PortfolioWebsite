import React from 'react';

const FooterLink = (props) => {
    const {imgprop, img_largeprop, src} = props;

    return (
        <a href={src} target='_blank' rel='noreferrer'>
            <picture className='Footer_linksBlock_imgsPic'>
                <source
                    className='Footer_linksBlock_imgs'
                    media='(min-width: 1440px)'
                    srcset={img_largeprop}/> 
                <img src={imgprop} alt="linkIcon" className='Footer_linksBlock_imgs'/>
            </picture>
        </a>
    );
};

export default FooterLink;