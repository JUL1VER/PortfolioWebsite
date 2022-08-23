import React from 'react';
import projectLogo from '../../img/projectImg.png';
import projectLogo_large from '../../img/projectImg_large.png';
import ProjectSlide from '../projectSlide/ProjectSlide';

import './projectsBlock.css';

const ProjectsBlock = () => {

    return (
        <div className='ProjectsBlock_wrapper'>
            <div className='ProjectsBlock_header'>
                <h2 className='ProjectsBlock_header_text' id='ProjectsPart'>Projects</h2>
                {/* Эту иконку тоже лучше вставить через псевдоэлемент */}
                <picture className="ProjectsBlock_header_gearsImg">
                    <source
                        className='ProjectsBlock_header_logoImg'
                        media='(min-width: 650px)'
                        srcSet={projectLogo_large} />
                    <img src={projectLogo} alt="gears" className="ProjectsBlock_header_logoImg" />
                </picture>
            </div>
            <p className='ProjectsBlock_text'>Check out some of my interesting projects:</p>
            <ProjectSlide />
        </div>
    );
};

export default ProjectsBlock;