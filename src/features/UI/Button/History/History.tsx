import React from 'react';
import classes from './History.module.scss';

const History = () => {

    const abc = () => {
        console.log('abc');
    }

    return (
        <a className={classes.History} onClick={abc}>
            <i className="fas fa-history"></i>
        </a>
    );
}

export default History;