import './preloader.css';
import classNames from 'classnames';
import React from 'react';

const Preloader = ({ className }) => {
    return (
        <div className={classNames('preloader', className)}>
            <h1 className='matrix-console'>Wake up, Neo...</h1>
        </div>
    );
};

export default Preloader;