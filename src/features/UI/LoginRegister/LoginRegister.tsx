import React from 'react';
import classes from './LoginRegister.module.scss';
// import { Link } from 'react-router-dom';

const LoginRegister = () => {
    return (
        <ul className={classes.LoginRegister}>
            <li><a href="/login">Đăng nhập</a></li>
            <li>/</li>
            <li><a href="/register">Đăng ký</a></li>
        </ul>
    );
}

export default LoginRegister;