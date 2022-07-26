import React from 'react';
import ContactmeBlock from '../contactmeBlock/ContactmeBlock';
import DescriptionBlock from '../descriptionBlock/DescriptionBlock';
import Footer from '../footer/Footer';
import ProjectsBlock from '../projectsBlock/ProjectsBlock';
import SkillsBlock from '../skillsBlock/SkillsBlock';

const MainPage = () => {
    return (
        <>
            <DescriptionBlock/>
            <SkillsBlock/>
            <ProjectsBlock/>
            <ContactmeBlock/>
            <Footer/>
        </>
    );
};

export default MainPage;