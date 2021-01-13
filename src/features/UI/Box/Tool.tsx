import React from 'react';
import classes from './Box.module.scss';

const Tool = (props: any) => {
    return (
        <div className={[classes.Tool, props.className||''].join(' ')}>
            {props.children}
        </div>
    );
}

export default Tool;