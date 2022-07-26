import React from 'react';
import userFoto from '../../img/fotowithfigures.png'
import circles from '../../img/circles.png';
import './descriptionBlock.css'

const DescriptionBlock = () => {
    return (
        <div className='DescriptionBlock_wrapper'>
            <div className='DescriptionBlock_fotoWithFigures'>
                <img src={userFoto} alt='userForo' className='DescriptionBlock_userFoto'/>
                <img src={circles} alt='circles' className='DescriptionBlock_circles'/>
            </div>
            <div className="DescriptionBlock_leftPart">
                <h2 className='DescriptionBlock_name'>John Doe</h2>
                <p className='DescriptionBlock_text'>Hello! Am a software developer and here is my portfolio website. Here you’ll learn about my journey as a software developer.</p>
                <button className='DescriptionBlock_hireButton'>Hire me</button>
            </div>
        </div>
    );
};

export default DescriptionBlock;