import React from 'react';
import classes from './Logo.module.scss';
import logo from '@images/logo.png';

interface IProps {
    size: string
}

const Logo = (props: IProps) => {
    return (
        <div className={[classes.Logo, classes[props.size]].join(' ')}>
            <img src={logo} />
        </div>
    );
}

export default Logo;