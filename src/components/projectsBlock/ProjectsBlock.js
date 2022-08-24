import React, { useEffect } from 'react';
import projectLogo from '../../img/projectImg.png';
import projectLogo_large from '../../img/projectImg_large.png';
import ProjectSlide from '../projectSlide/ProjectSlide';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './projectsBlock.css';

const ProjectsBlock = () => {
    useEffect(() => {
        Aos.init({duration: 2500});
    }, [])
    return (
        <div className='ProjectsBlock_wrapper'>
            <div data-aos='fade-down' data-aos-delay='400' data-aos-once='true' className='ProjectsBlock_header'>
                <h2 className='ProjectsBlock_header_text' id='ProjectsPart'>Projects</h2>
                <picture className="ProjectsBlock_header_gearsImg">
                    <source
                        className='ProjectsBlock_header_logoImg'
                        media='(min-width: 650px)'
                        srcSet={projectLogo_large}/> 
                    <img src={projectLogo} alt="Project" className="ProjectsBlock_header_logoImg"/>
                </picture>
            </div>
            <p data-aos='zoom-in' data-aos-delay='400' data-aos-once='true' className='ProjectsBlock_text'>Check out some of my interesting projects:</p>
            <ProjectSlide/>
        </div>
    );
};

export default ProjectsBlock;