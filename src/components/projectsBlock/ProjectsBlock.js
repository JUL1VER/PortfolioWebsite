import React from 'react';
import gears from '../../img/gears.png';
import project1 from '../../img/project1.png';
import project2 from '../../img/project2.png';
import project3 from '../../img/project3.png';
import internet from '../../img/internet.png';
import './projectsBlock.css';

const ProjectsBlock = () => {
    return (
        <div className='ProjectsBlock_wrapper'>
            <div className='ProjectsBlock_header'>
                <h3 className='ProjectsBlock_header_text'>Projects</h3>
                <img src={gears} alt="gears" className='ProjectsBlock_header_img'/>
            </div>
            <p className='ProjectsBlock_text'>Some of my projects include:</p>
            <div className='ProjectsBlock_slides'>
                <div className='ProjectsBlock_containers'>
                    <div className='ProjectsBlock_containers_content'>
                        <img src={project1} alt="projectImg" className='ProjectsBlock_containers_img'/>
                        <p className='ProjectsBlock_containers_text'>Made a social media manager template using HTML 5, CSS and JS only.</p>
                        <a href="https://github.com/JUL1VER" className='ProjectsBlock_containers_footer'>
                            <img src={internet} alt="internet" className='ProjectsBlock_containers_footer_img'/>
                            <p className='ProjectsBlock_containers_footer_text'>Visit site</p>
                        </a>
                    </div>
                </div>
                <div className='ProjectsBlock_containers'>
                    <div className='ProjectsBlock_containers_content'>
                        <img src={project2} alt="projectImg" className='ProjectsBlock_containers_img'/>
                        <p className='ProjectsBlock_containers_text'>Made a simple card page using HTML 5 and  CSS 3</p>
                        <a href="https://github.com/JUL1VER" className='ProjectsBlock_containers_footer'>
                            <img src={internet} alt="internet" className='ProjectsBlock_containers_footer_img'/>
                            <p className='ProjectsBlock_containers_footer_text'>Visit site</p>
                        </a>
                    </div>
                </div>
                <div className='ProjectsBlock_containers'>
                    <div className='ProjectsBlock_containers_content'>
                        <img src={project3} alt="projectImg" className='ProjectsBlock_containers_img'/>
                        <p className='ProjectsBlock_containers_text'>Made an I.P address tracking website.</p>
                        <a href="https://github.com/JUL1VER" className='ProjectsBlock_containers_footer'>
                            <img src={internet} alt="internet" className='ProjectsBlock_containers_footer_img'/>
                            <p className='ProjectsBlock_containers_footer_text'>Visit site</p>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectsBlock;