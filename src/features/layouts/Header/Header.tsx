import React from 'react';
import classes from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import Menu from './Menu';

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
                <Menu 
                    items={menu}
                    classHeaderItem={classes.HeaderItem}
                    classHeaderDropdownMenu={classes.HeaderDropdownMenu}
                />
            </div>
        </div>
        </nav>
    );
}

export default Header;