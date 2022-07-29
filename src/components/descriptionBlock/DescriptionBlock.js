import React from 'react';
import userFoto from '../../img/fotowithfigures.png'
import circles from '../../img/circles.png';
import circles_large from '../../img/circles_large.png';
import userFoto_large from '../../img/userFoto_large.png';
import cube_large from '../../img/cube_large.png';
import plus_large from '../../img/plus_large.png';
import zigzags_large from '../../img/zigzags_large.png';
import ellipse_large from '../../img/ellipse_large.png';
import './descriptionBlock.css'

const DescriptionBlock = () => {
    return (
        <div className='DescriptionBlock_wrapper'>
            <div className='DescriptionBlock_fotoWithFigures'>
                <img src={ellipse_large} alt='ellipse' className='DescriptionBlock_fotoWithFigures_ellipse' />
                <img src={zigzags_large} alt='zigzags' className='DescriptionBlock_fotoWithFigures_zigzags' />
                <img src={plus_large} alt='plus' className='DescriptionBlock_fotoWithFigures_plus' />
                <img src={cube_large} alt='cube' className='DescriptionBlock_fotoWithFigures_cube' />
                <picture className='DescriptionBlock_foto'>
                    <source 
                        className='DescriptionBlock_userFoto'
                        media='(min-width: 650px)'
                        srcSet={userFoto_large}/>
                    <source 
                        className='DescriptionBlock_userFoto'
                        media='(min-width: 1440px)'
                        srcSet={userFoto_large}/>
                    <img src={userFoto} alt='userForo' className='DescriptionBlock_userFoto'/>
                </picture>
                <picture className='DescriptionBlock_circlesPic'>
                    <source
                        className='DescriptionBlock_circles'
                        media='(min-width: 1440px)'
                        srcSet={circles_large}/>
                    <img src={circles} alt='circles' className='DescriptionBlock_circles'/>
                </picture>
            </div>
            <div className="DescriptionBlock_contentPart">
                <h2 className='DescriptionBlock_name'>John Doe</h2>
                <p className='DescriptionBlock_text'>Hello! Am a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</p>
                <button className='DescriptionBlock_hireButton' type={'button'}>Hire me</button>
            </div>
        </div>
    );
};

export default DescriptionBlock;