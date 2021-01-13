import React from 'react';
import classes from './Box.module.scss';
import Header from './Header';
import Body from './Body';
import Title from './Title';
import Tool from './Tool';

const Box = (props: any) => {
    return (
        <div className={[classes.Box, props.className||''].join(' ')}>
            {props.children}
        </div>
    );
}

Box.Header = Header;
Box.Body = Body;
Box.Title = Title;
Box.Tool = Tool;

export default Box;
