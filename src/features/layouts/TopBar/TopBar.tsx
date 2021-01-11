import React from 'react';
import classes from './TopBar.module.scss';

interface Props {
    children?: React.ReactChild | React.ReactChild[]
}

const TopBar = (props: Props) => {
    return (
        <div className={classes.TopBar}>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default TopBar;