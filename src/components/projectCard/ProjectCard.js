import React from 'react';
import internet_large from '../../img/internet_large.png';
import './projectCard.css';

const ProjectCard = (props) => {
    const {imgprop, img_largeprop, description} = props;

    return (
        <div className='ProjectsBlock_containers'>
            <div className='ProjectsBlock_containers_content'>
                <picture>
                    <source 
                        className='ProjectsBlock_containers_img'
                        media='(min-width: 1440px)'
                        srcset={img_largeprop}/>
                    <img src={imgprop} alt="projectImg" className='ProjectsBlock_containers_img'/>
                </picture>
                <p className='ProjectsBlock_containers_text'>{description}</p>
                <a href="https://github.com/JUL1VER" className='ProjectsBlock_containers_footer' target="blank">
                    <img src={internet_large} alt="internet" className='ProjectsBlock_containers_footer_img'/>
                    <p className='ProjectsBlock_containers_footer_text'>Visit site</p>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;