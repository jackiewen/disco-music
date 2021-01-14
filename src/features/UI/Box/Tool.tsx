import React from 'react';
import classes from './Box.module.scss';

interface IProps {
    className?: string,
    children?: any
}

const Tool = (props: IProps) => {
    return (
        <div className={[classes.Tool, props.className||''].join(' ')}>
            {props.children}
        </div>
    );
}

export default Tool;