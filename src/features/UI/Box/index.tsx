import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Box.module.scss';

const Box = (props: any) => {
    return (
        <div className={classes.Box}>
            <div className={classes.Header}>
                <h2 className={classes.Title}>{props.title}</h2>
                {props.href && <Link className={classes.ViewAll} to={props.href}>view all</Link>}
            </div>
            <div className={classes.Body}>
                {props.children}
            </div>
        </div>
    );
}

export default Box;