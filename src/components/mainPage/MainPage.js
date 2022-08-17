import React from 'react';
import { useEffect, useState } from 'react';
import ContactmeBlock from '../contactmeBlock/ContactmeBlock';
import DescriptionBlock from '../descriptionBlock/DescriptionBlock';
import ProjectsBlock from '../projectsBlock/ProjectsBlock';
import Preloader from '../proloader/Preloader';
import SkillsBlock from '../skillsBlock/SkillsBlock';
import WelcomeBlock from '../welcomeBlock/WelcomeBlock';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import classNames from 'classnames';

import './mainPage.css';

const MainPage = () => {
    const [loading, setLoadong] = useState();

    useEffect(() => {
        setLoadong(true);
        setTimeout(() => {
        setLoadong(false)
        }, 3000)
    }, [])

    return (
        <>
            <Preloader className={classNames( loading ? '' : 'PreloaderHidden')}/>
            <div className={ loading ? 'MainpageHidden' : ''}>
                <Header/>
                <WelcomeBlock/>
                <DescriptionBlock/>
                <SkillsBlock/>
                <ProjectsBlock/>
                <ContactmeBlock/>
                <Footer/>
            </div>
        </>
    );
};

export default MainPage;