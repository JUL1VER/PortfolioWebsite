import React from 'react';
import githublogo from '../../img/githublogo.svg';

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
                    <img src={githublogo} alt="github logo" className='ProjectsBlock_containers_footer_img'/>
                    <p className='ProjectsBlock_containers_footer_text'>Visit github</p>
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;