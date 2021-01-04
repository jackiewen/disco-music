import React from 'react';
import { useTranslation } from 'react-i18next';
import classes from './LoginRegister.module.scss';
// import { Link } from 'react-router-dom';

const LoginRegister = () => {
    const { t } = useTranslation();

    return (
        <ul className={classes.LoginRegister}>
            <li><a href="/login" className="text-uppercase-first-letter">{t('common:login')}</a></li>
            <li>/</li>
            <li><a href="/register" className="text-uppercase-first-letter">{t('common:register')}</a></li>
        </ul>
    );
}

export default LoginRegister;