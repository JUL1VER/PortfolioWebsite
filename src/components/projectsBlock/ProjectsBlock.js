import React, { useEffect } from 'react';
import projectLogo from '../../img/projectImg.png';
import ProjectSlide from '../projectSlide/ProjectSlide';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './projectsBlock.css';

const ProjectsBlock = () => {
    useEffect(() => {
        Aos.init({duration: 2500});
    }, [])
    return (
        <div className='ProjectsBlock__wrapper'>
            <div data-aos='fade-down' data-aos-delay='100' data-aos-once='true' className='ProjectsBlock__header'>
                <h2 className='ProjectsBlock__header-text' id='ProjectsPart'>Projects</h2>
                <img src={projectLogo} alt="Project" className="ProjectsBlock__header-logo"/>
            </div>
            <p data-aos='fade-down' data-aos-delay='100' data-aos-once='true' className='ProjectsBlock__text'>Check out some of my interesting projects:</p>
            <ProjectSlide/>
        </div>
    );
};

export default ProjectsBlock;