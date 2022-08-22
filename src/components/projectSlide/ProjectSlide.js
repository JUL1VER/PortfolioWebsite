import React from 'react';
import projectsPC from '../../img/projectsPC.png';
import projectsPC_medium from '../../img/projectsPC_medium.png';
import projectsPC_large from '../../img/projectsPC_large.png';
import project1 from '../../img/project1_large.png';
import project2 from '../../img/project2_large.png';
import project3 from '../../img/project3_large.png';
import SwiperCore, { Navigation} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

SwiperCore.use([Navigation]);

const ProjectSlide = () => {
    const cards = [
        {id: 1, link: 'https://github.com/JUL1VER/MarvelCharactersApp.React', imgprop: project1, description: 'Made a Marvel information portal with MarvelAPI connection using React and Redux.'},
        {id: 2, link: 'https://github.com/JUL1VER/FoodServiceApp.JS', imgprop: project2, description: 'Made a website of food delivery company with calories per day calculations using JS.'},
        {id: 3, link: 'https://github.com/JUL1VER/GitHubSearch.TS', imgprop: project3, description: 'Made a simple website connected to GithubAPI for user repos search using React and TS.'}
    ];

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <div className='ProjectsBlock_content'>
            <div className='ProjectsBlock_content_textBlock'>
                <p className='ProjectsBlock_content_text'>Made a Marvel information portal with MarvelAPI connection using React and Redux.</p>
                <ul className='ProjectsBlock_contect_tecnho'>
                    <li>React</li>
                    <li>Redux</li>
                    <li>SCSS</li>
                </ul>
            </div>
            <div className='ProjectsBlock_conteiner'>
                <button ref={navigationPrevRef} className='ProjectsBlock_conteiner_prevButton'>
                    Prev
                </button>
                <Swiper 
                    loop={true}
                    className='ProjectsBlock_Swiper'
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                   }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    { cards.map(card => (
                        <SwiperSlide key={card.id}>
                            <div className='ProjectsBlock_hover'/>
                            <img src={card.imgprop} alt="Project" className="ProjectsBlock_conteiner_projectPic"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
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
                <button ref={navigationNextRef} className='ProjectsBlock_conteiner_nextButton'>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProjectSlide;