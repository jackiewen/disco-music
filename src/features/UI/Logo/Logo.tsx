import React from 'react';
import classes from './Logo.module.scss';
import logo from './logo.png';

type Props = {
    size: string
}

const Logo = (props: Props) => {
    return (
        <div className={[classes.Logo, classes[props.size]].join(' ')}>
            <img src={logo} />
        </div>
    );
}

export default Logo;