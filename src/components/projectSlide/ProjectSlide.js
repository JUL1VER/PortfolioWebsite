import React from 'react';
import project1 from '../../img/project1_1.png';
import project1_medium from '../../img/project1_medium.png';
import project1_large from '../../img/project1_large_.png';
import projectsPC from '../../img/projectsPC.png';
import projectsPC_medium from '../../img/projectsPC_medium.png';
import projectsPC_large from '../../img/projectsPC_large.png';

const ProjectSlide = (props) => {
    const {imgprop, img_largeprop, description, link} = props;

    return (
        <div className='ProjectsBlock_content'>
            <div className='ProjectsBlock_content_textBlock'>
                <p className='ProjectsBlock_content_text'>Made a Marvel information portal with MarvelAPI connection using React and Redux.</p>
                <button className='ProjectsBlock_pagButton'>Next project</button>
            </div>
            <div className='ProjectsBlock_conteiner'>
                <picture className="ProjectsBlock_conteiner_projectImgs">
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
            </div>
        </div>
    );
};

export default ProjectSlide;