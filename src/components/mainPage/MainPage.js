import React from 'react';
import ContactmeBlock from '../contactmeBlock/ContactmeBlock';
import DescriptionBlock from '../descriptionBlock/DescriptionBlock';
import ProjectsBlock from '../projectsBlock/ProjectsBlock';
import SkillsBlock from '../skillsBlock/SkillsBlock';

const MainPage = () => {
    return (
        <>
            <DescriptionBlock/>
            <SkillsBlock/>
            <ProjectsBlock/>
            <ContactmeBlock/>
        </>
    );
};

export default MainPage;