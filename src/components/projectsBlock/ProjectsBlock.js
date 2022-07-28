import React from 'react';
import gears from '../../img/gears.png';
import project1 from '../../img/project1.png';
import project1_large from '../../img/project1_large.png';
import project2 from '../../img/project2.png';
import project2_large from '../../img/project2_large.png';
import project3 from '../../img/project3.png';
import project3_large from '../../img/project3_large.png';
import gears_large from '../../img/gears_large.svg';
import ProjectCard from '../projectCard/ProjectCard';

import './projectsBlock.css';

const ProjectsBlock = () => {
    const cards = [
        {id: 1, imgprop: project1, img_largeprop: project1_large, description: 'Made a social media manager template using HTML 5, CSS and JS only.'},
        {id: 2, imgprop: project2, img_largeprop: project2_large, description: 'Made a simple card page using HTML 5 and  CSS 3.'},
        {id: 3, imgprop: project3, img_largeprop: project3_large, description: 'Made an I.P address tracking website.'}
    ];

    const content = cards.map((oneCard) => 
        <ProjectCard key={oneCard.id} imgprop={oneCard.imgprop} img_largeprop={oneCard.img_largeprop} description={oneCard.description}/>
    )

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
                {content}
            </div>
        </div>
    );
};

export default ProjectsBlock;