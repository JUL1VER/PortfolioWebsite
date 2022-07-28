import React from 'react';
import gears from '../../img/gears.png';
import project1 from '../../img/project1.png';
import project1_large from '../../img/project1_large.png';
import project2 from '../../img/project2.png';
import project2_large from '../../img/project2_large.png';
import project3 from '../../img/project3.png';
import project3_large from '../../img/project3_large.png';
import internet from '../../img/internet.png';
import internet_large from '../../img/internet_large.png';
import gears_large from '../../img/gears_large.svg';
import './projectsBlock.css';

const ProjectsBlock = () => {
    return (
        <div className='ProjectsBlock_wrapper'>
            <div className='ProjectsBlock_header'>
                <h3 className='ProjectsBlock_header_text'>Projects</h3>
                <picture className="ProjectsBlock_header_gearsImg">
                    <source
                        className='ProjectsBlock_header_img'
                        media='(min-width: 1440px)'
                        srcset={gears_large}/> 
                    <img src={gears} alt="gears" className="ProjectsBlock_header_img"/>
                </picture>
            </div>
            <p className='ProjectsBlock_text'>Some of my projects include:</p>
            <div className='ProjectsBlock_slides'>
                <div className='ProjectsBlock_containers'>
                    <div className='ProjectsBlock_containers_content'>
                        <picture>
                            <source 
                                className='ProjectsBlock_containers_img'
                                media='(min-width: 1440px)'
                                srcset={project1_large}/>
                            <img src={project1} alt="projectImg" className='ProjectsBlock_containers_img'/>
                        </picture>
                        <p className='ProjectsBlock_containers_text'>Made a social media manager template using HTML 5, CSS and JS only.</p>
                        <a href="https://github.com/JUL1VER" className='ProjectsBlock_containers_footer' target="blank">
                            <img src={internet_large} alt="internet" className='ProjectsBlock_containers_footer_img'/>
                            <p className='ProjectsBlock_containers_footer_text'>Visit site</p>
                        </a>
                    </div>
                </div>
                <div className='ProjectsBlock_containers'>
                    <div className='ProjectsBlock_containers_content'>
                        <picture>
                            <source 
                                className='ProjectsBlock_containers_img'
                                media='(min-width: 1440px)'
                                srcset={project2_large}/>
                            <img src={project2} alt="projectImg" className='ProjectsBlock_containers_img'/>
                        </picture>
                        <p className='ProjectsBlock_containers_text'>Made a simple card page using HTML 5 and  CSS 3</p>
                        <a href="https://github.com/JUL1VER" className='ProjectsBlock_containers_footer' target="blank">
                            <img src={internet_large} alt="internet" className='ProjectsBlock_containers_footer_img'/>
                            <p className='ProjectsBlock_containers_footer_text'>Visit site</p>
                        </a>
                    </div>
                </div>
                <div className='ProjectsBlock_containers'>
                    <div className='ProjectsBlock_containers_content'>
                        <picture>
                            <source 
                                className='ProjectsBlock_containers_img'
                                media='(min-width: 1440px)'
                                srcset={project3_large}/>
                            <img src={project3} alt="projectImg" className='ProjectsBlock_containers_img'/>
                        </picture>
                        <p className='ProjectsBlock_containers_text'>Made an I.P address tracking website.</p>
                        <a href="https://github.com/JUL1VER" className='ProjectsBlock_containers_footer' target="blank">
                            <img src={internet_large} alt="internet" className='ProjectsBlock_containers_footer_img'/>
                            <p className='ProjectsBlock_containers_footer_text'>Visit site</p>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProjectsBlock;