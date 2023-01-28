import React, { useEffect } from 'react';
import projectLogo from './img/projectImg.png';
import ProjectSlide from './projectSlide/ProjectSlide';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './projectsBlock.css';

const ProjectsBlock = () => {
    useEffect(() => {
        Aos.init({duration: 2500});
    }, [])
    return (
        <section className='projects-block'>
            <div data-aos='fade-down' data-aos-delay='100' data-aos-once='true' className='projects-block__header'>
                <h2 className='projects-block__header-text' id='ProjectsPart'>Projects</h2>
                <img src={projectLogo} alt="Project" className="projects-block__header-logo"/>
            </div>
            <p data-aos='fade-down' data-aos-delay='100' data-aos-once='true' className='projects-block__text'>Check out some of my interesting projects:</p>
            <ProjectSlide/>
        </section>
    );
};

export default ProjectsBlock;