import React from 'react';
import classes from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = () => {
    const { t } = useTranslation();

    const menu = [
        {
            name: 'rating',
            route: 'rating',
            path: {
                pathname: '/xep-hang',
            },
            subRoute: [
                {
                    name: 'daily ranking',
                    route: 'rating.daily-ranking',
                    path: {
                        pathname: '/xep-hang/ngay',
                    },
                },
                {
                    name: 'weekly ranking',
                    route: 'rating.weekly-ranking',
                    path: {
                        pathname: '/xep-hang/tuan',
                    },
                },
                {
                    name: 'monthly ranking',
                    route: 'rating.monthly-ranking',
                    path: {
                        pathname: '/xep-hang/thang',
                    },
                },
                {
                    name: 'yearly ranking',
                    route: 'rating.yearly-ranking',
                    path: {
                        pathname: '/xep-hang/nam',
                    },
                },
            ]
        }
    ]

    return (
        <nav className={["navbar navbar-expand-lg navbar-light bg-light", classes.Header].join(' ')}>
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader" aria-controls="mainHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainHeader">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className={["nav-item dropdown", classes.HeaderItem].join(' ')}>
                        <Link className="nav-link dropdown-toggle text-capitalize" to="/xep-hang" role="button" data-hover="dropdown" aria-expanded="false">
                            {t('menu:rating')}
                        </Link>
                        <ul className={["dropdown-menu", classes.HeaderDropdownMenu].join(' ')} aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    );
}

export default Header;