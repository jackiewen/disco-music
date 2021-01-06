import React from 'react';
import classes from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import Menu from './Menu';
import { Button } from '@UI';

const MenuMockup = require('@mockups/menu.json');

const Header = () => {
    const { t } = useTranslation();

    return (
        <nav className={["navbar navbar-expand-lg navbar-light bg-light", classes.Header].join(' ')}>
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader" aria-controls="mainHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainHeader">
                <Menu 
                    items={MenuMockup}
                    classHeaderItem={classes.HeaderItem}
                    classHeaderDropdownMenu={classes.HeaderDropdownMenu}
                />
            </div>
            <Button.Upload />
        </div>
        </nav>
    );
}

export default Header;