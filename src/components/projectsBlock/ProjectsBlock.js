import React from 'react';
import projectLogo from '../../img/projectImg.png';
import projectLogo_large from '../../img/projectImg_large.png';
import project1 from '../../img/project1.png';
import project1_large from '../../img/project1_large.png';
import project2 from '../../img/project2.png';
import project2_large from '../../img/project2_large.png';
import project3 from '../../img/project3.png';
import project3_large from '../../img/project3_large.png';
import ProjectCard from '../projectCard/ProjectCard';

import './projectsBlock.css';

const ProjectsBlock = () => {
    const cards = [
        {id: 1, link: 'https://github.com/JUL1VER/MarvelCharactersApp.React', imgprop: project1, img_largeprop: project1_large, description: 'Made a Marvel information portal with MarvelAPI connection using React and Redux.'},
        {id: 2, link: 'https://github.com/JUL1VER/FoodServiceApp.JS', imgprop: project2, img_largeprop: project2_large, description: 'Made a website of food delivery company with calories per day calculations using JS.'},
        {id: 3, link: 'https://github.com/JUL1VER/GitHubSearch.TS', imgprop: project3, img_largeprop: project3_large, description: 'Made a simple website connected to GithubAPI for user repos search using React and TS.'}
    ];

    const content = cards.map((oneCard) => 
        <ProjectCard key={oneCard.id} imgprop={oneCard.imgprop} img_largeprop={oneCard.img_largeprop} description={oneCard.description} link={oneCard.link}/>
    )

    return (
        <div className='ProjectsBlock_wrapper'>
            <div className='ProjectsBlock_header'>
                <h2 className='ProjectsBlock_header_text' id='ProjectsPart'>Projects</h2>
                <picture className="ProjectsBlock_header_gearsImg">
                    <source
                        className='ProjectsBlock_header_img'
                        media='(min-width: 650px)'
                        srcSet={projectLogo_large}/> 
                    <img src={projectLogo} alt="gears" className="ProjectsBlock_header_img"/>
                </picture>
            </div>
            <p className='ProjectsBlock_text'>Here are some of my interesting projects:</p>
            <div className='ProjectsBlock_slides'>
                {content}
            </div>
        </div>
    );
};

export default ProjectsBlock;