import React from 'react';
import classes from './Box.module.scss';

interface IProps {
    className?: string,
    children?: any
}

const Body = (props: IProps) => {
    return (
        <div className={[classes.Body, props.className||''].join(' ')}>
            {props.children}
        </div>
    );
}

export default Body;