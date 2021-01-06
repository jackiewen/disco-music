import React from 'react';
import classes from './History.module.scss';

const History = () => {

    const handleClick = () => {
        console.log('History button');
    }

    return (
        <a className={classes.History} onClick={handleClick}>
            <i className="fas fa-history"></i>
        </a>
    );
}

export default History;