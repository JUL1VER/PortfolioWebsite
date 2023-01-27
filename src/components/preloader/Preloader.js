import './preloader.css';
import classNames from 'classnames';
import React from 'react';

const Preloader = ({ className }) => {
    return (
        <div className={classNames('Preloader', className)}>
            <h1 className='Matrix-console'>Wake up, Neo...</h1>
        </div>
    );
};

export default Preloader;