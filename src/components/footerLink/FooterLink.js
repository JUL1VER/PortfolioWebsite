import React, { useEffect, useState } from 'react';

const FooterLink = (props) => {
    const {imgprop, imgprop_large, src} = props;

    const [isDesktop, setDesktop] = useState(window.innerWidth >= 1280);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1280);
      };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    })

    return (
        <a href={src} target='_blank' rel='noreferrer' style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            { isDesktop ? 
                <div 
                    style={{
                        WebkitMask: `url("${imgprop_large}") no-repeat center`,
                        WebkitMaskSize: "cover",
                        maskSize: "cover",
                        mask: `url("${imgprop_large}") no-repeat center`,
                    }}
                    alt="linkIcon" className='Footer_linksBlock_imgs'/>
                :
                <div 
                    style={{
                        WebkitMask: `url("${imgprop}") no-repeat center`,
                        WebkitMaskSize: "cover",
                        MaskSize: "cover",
                        mask: `url("${imgprop}") no-repeat center`,
                    }}
                    alt="linkIcon" className='Footer_linksBlock_imgs'/>
            }
        </a>
    );
};

export default FooterLink;