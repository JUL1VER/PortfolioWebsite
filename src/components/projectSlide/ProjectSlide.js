import React, { useEffect } from 'react';
import projectsPC from '../../img/projectsPC.png';
import projectsPC_medium from '../../img/projectsPC_medium.png';
import projectsPC_large from '../../img/projectsPC_large.png';
import project1 from '../../img/project1.png';
import project2 from '../../img/project2.png';
import project3 from '../../img/project3.png';
import project4 from '../../img/project4.png';
import project5 from '../../img/project5.png';
import SwiperCore, { Navigation, Pagination, Lazy, EffectFade, EffectFlip } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-flip';
import Aos from 'aos';
import 'aos/dist/aos.css';

SwiperCore.use([Navigation, Pagination]);

const ProjectSlide = () => {
    const cards = [
        {
            id: 1,
            link: 'https://github.com/JUL1VER/MarvelCharactersApp.React',
            imgprop: project1,
            description: 'Made a Marvel information portal with MarvelAPI connection using React and Redux.',
            techno: ['React', 'Redux', 'SCSS']
        },
        {
            id: 2,
            link: 'https://github.com/JUL1VER/FoodServiceApp.JS',
            imgprop: project2,
            description: 'Made a website of food delivery company with calories per day calculations using JS.',
            techno: ['Native JavaScript', 'CSS']
        },
        {
            id: 3,
            link: 'https://github.com/JUL1VER/GitHubSearch.TS',
            imgprop: project3,
            description: 'Made a simple website connected to GithubAPI for user repos search using React and TS.',
            techno: ['TS', 'React', 'Redux', 'Tailwind']
        },
        {
            id: 4,
            link: 'https://github.com/JUL1VER/FunnyRace.JS',
            imgprop: project4,
            description: 'Made a minimalistic funny race of players based on random step using pure JS.',
            techno: ['Navite JavaScript', 'CSS']
        },
        {
            id: 5,
            link: 'https://github.com/JUL1VER/PortfolioWebsite.React',
            imgprop: project5,
            description: 'Made a collapse of the universe using recursion and my own website :)',
            techno: ['React', 'Screenshots', 'Meme']
        }
    ];

    const swiperTextRef = React.useRef(null);
    const swiperTecnhoRef = React.useRef(null);
    const swiperPicRef = React.useRef(null);

    const swiperPrev = () => {
        swiperTextRef.current.swiper.slidePrev()
        swiperTecnhoRef.current.swiper.slidePrev()
        swiperPicRef.current.swiper.slidePrev()
    }

    const swiperNext = () => {
        swiperTextRef.current.swiper.slideNext()
        swiperTecnhoRef.current.swiper.slideNext()
        swiperPicRef.current.swiper.slideNext()
    }

    useEffect(() => {
        Aos.init({duration: 2500});
    }, [])

    return (
        <div className='ProjectsBlock_content'>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='true' className='ProjectsBlock_content_textBlock'>
                <div className='ProjectsBlock_content_text'>
                    <Swiper
                        ref={swiperTextRef}
                        modules={[EffectFlip, Pagination]}
                        effect='flip'
                        noSwiping={true}
                        noSwipingClass='ProjectsBlock_content_textInside'
                        loop={true}
                        slidesPerView={1}
                    >
                        { cards.map(card => (
                            <SwiperSlide key={card.id}>
                                <p className='ProjectsBlock_content_textInside'>{card.description}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='ProjectsBlock_contect_tecnho'>
                    <Swiper
                        ref={swiperTecnhoRef}
                        modules={[EffectFlip, Pagination]}
                        effect='flip'
                        noSwiping={true}
                        noSwipingClass='ProjectsBlock_contect_tecnhoList'
                        loop={true}
                        slidesPerView={1}
                    >
                        { cards.map(card => (
                            <SwiperSlide key={card.id}>
                                <ul className='ProjectsBlock_contect_tecnhoList'>
                                    { card.techno.map(technology => (
                                        <li key={technology}>{technology}</li>
                                    ))}
                                </ul>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div data-aos='fade-up' data-aos-delay='100' data-aos-once='true' className='ProjectsBlock_conteiner'>
                <button onClick={() => swiperPrev()} className='ProjectsBlock_conteiner_prevButton'>
                    Prev
                </button>
                <button onClick={() => swiperNext()} className='ProjectsBlock_conteiner_nextButton'>
                    Next
                </button>
                <Swiper
                    ref={swiperPicRef}
                    modules={[Lazy, EffectFade, Pagination]}
                    effect='fade'
                    lazy={true}
                    loop={true}
                    noSwiping={true}
                    pagination={true}
                    noSwipingClass='ProjectsBlock_conteiner_slidePic'
                    className='ProjectsBlock_Swiper'
                    spaceBetween={0}
                    slidesPerView={1}
                >
                    { cards.map(card => (
                        <SwiperSlide key={card.id}>
                            <a href={card.link} target='_blank' rel='noreferrer' className='ProjectsBlock_conteiner_slidePic'>
                                <div className='ProjectsBlock_hover'/>
                                <img src={card.imgprop} alt="Project" className="ProjectsBlock_conteiner_projectPic"/>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <picture className="ProjectsBlock_conteiner_PCImg">
                    <source
                        className='ProjectsBlock_conteiner_PC'
                        media='(min-width: 1024px)'
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