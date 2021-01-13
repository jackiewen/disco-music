import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Box.module.scss';

const Header = (props: any) => {
    return (
        <div className={[classes.Header, props.className||''].join(' ')}>
            {props.children}
        </div>
    );
}

export default Header;