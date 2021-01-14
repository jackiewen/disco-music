import React from 'react';
import classes from './Box.module.scss';

interface IProps {
    className?: string,
    children?: any
}

const Header = (props: IProps) => {
    return (
        <div className={[classes.Header, props.className||''].join(' ')}>
            {props.children}
        </div>
    );
}

export default Header;