import React from 'react';
import classes from './Box.module.scss';

interface IProps {
    className?: string,
    children?: any
}

const Title = (props: IProps) => {
    return (
        <h2 className={[classes.Title, props.className||''].join(' ')}>
            {props.children}
        </h2>
    );
}

export default Title;