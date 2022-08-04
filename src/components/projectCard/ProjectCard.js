import React from 'react';
import internet_large from '../../img/internet_large.png';

const ProjectCard = (props) => {
    const {imgprop, img_largeprop, description, link} = props;

    return (
        <div className='ProjectsBlock_containers'>
            <div className='ProjectsBlock_containers_content'>
                <picture>
                    <source 
                        className='ProjectsBlock_containers_img'
                        media='(min-width: 650px)'
                        srcSet={img_largeprop}/>
                    <img src={imgprop} alt="projectImg" className='ProjectsBlock_containers_img'/>
                </picture>
                <p className='ProjectsBlock_containers_text'>{description}</p>
                <a href={link} className='ProjectsBlock_containers_footer' target="blank">
                    <img src={internet_large} alt="internet" className='ProjectsBlock_containers_footer_img'/>
                    <p className='ProjectsBlock_containers_footer_text'>Visit github</p>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;