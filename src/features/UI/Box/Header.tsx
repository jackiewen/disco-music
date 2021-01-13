import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Box.module.scss';

const Header = (props: any) => {
    return (
        <div className={classes.Header}>
            <h2 className={classes.Title}>{props.title}</h2>
            {props.href && <Link className={classes.ViewAll} to={props.href}>view all</Link>}
        </div>
    );
}

export default Header;