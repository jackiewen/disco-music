import React from 'react';
import classes from './Box.module.scss';

const Title = (props: any) => {
    return (
        <h2 className={classes.Title}>{props.title}</h2>
    );
}

export default Title;