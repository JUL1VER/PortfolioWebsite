import React from 'react';
import project1 from '../../img/project1.png';
import project1_medium from '../../img/project1_medium.png';
import project1_large from '../../img/project1_large.png';
import projectsPC from '../../img/projectsPC.png';
import projectsPC_medium from '../../img/projectsPC_medium.png';
import projectsPC_large from '../../img/projectsPC_large.png';

const ProjectSlide = (props) => {
    const {imgprop, img_largeprop, description, link} = props;

    return (
        <div className='ProjectsBlock_content'>
            <div className='ProjectsBlock_content_textBlock'>
                <p className='ProjectsBlock_content_text'>Made a Marvel information portal with MarvelAPI connection using React and Redux.</p>
                <ul className='ProjectsBlock_contect_tecnho'>
                    <li>React</li>
                    <li>Redux</li>
                    <li>SCSS</li>
                </ul>
                {/* <button className='ProjectsBlock_pagButton'>Next project</button> */}
            </div>
            <div className='ProjectsBlock_conteiner'>
                <button className='ProjectsBlock_conteiner_prevButton'>
                    Prev
                </button>
                <picture className="ProjectsBlock_conteiner_projectImgs">
                    <div className='ProjectsBlock_hover'/>
                    <source
                        className='ProjectsBlock_conteiner_projectPic'
                        media='(min-width: 1280px)'
                        srcSet={project1_large}/>
                    <source
                        className='ProjectsBlock_conteiner_projectPic'
                        media='(min-width: 650px)'
                        srcSet={project1_medium}/>
                    <img src={project1} alt="Project" className="ProjectsBlock_conteiner_projectPic"/>
                </picture>
                <picture className="ProjectsBlock_conteiner_PCImg">
                    <source
                        className='ProjectsBlock_conteiner_PC'
                        media='(min-width: 1280px)'
                        srcSet={projectsPC_large}/>
                    <source
                        className='ProjectsBlock_conteiner_PC'
                        media='(min-width: 650px)'
                        srcSet={projectsPC_medium}/>
                    <img src={projectsPC} alt="PC" className="ProjectsBlock_conteiner_PC"/>
                </picture>
                <button className='ProjectsBlock_conteiner_nextButton'>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProjectSlide;