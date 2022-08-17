import classNames from 'classnames';
import React from 'react';

import './preloader.css';

const Preloader = ({ className }) => {
    return (
        <div className={classNames('Preloader', className)}>
            <h1>Wake up Neo...</h1>
        </div>
    );
};

export default Preloader;