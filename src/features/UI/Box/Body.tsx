import React from 'react';
import classes from './Box.module.scss';

const Body = (props: any) => {
    return (
        <div className={[classes.Body, props.className||''].join(' ')}>
            {props.children}
        </div>
    );
}

export default Body;