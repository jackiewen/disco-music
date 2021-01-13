import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SubMenuItem from './SubMenuItem';
import { IRoute } from '@interfaces/IRoute';

interface IProps {
    item: IRoute,
    classHeaderItem?: string,
    classHeaderDropdownMenu?: string
}

const MenuItem = (props: IProps) => {
    
    const { t } = useTranslation();

    return (
        <li className={["nav-item dropdown", props.classHeaderItem].join(' ')}>
            <Link 
                className="nav-link dropdown-toggle text-capitalize" 
                to={props.item.path} 
                role="button" 
                data-hover="dropdown" 
                aria-expanded="false">
                {t('menu:' + props.item.name)}
            </Link>
            {props.item &&
                <SubMenuItem classHeaderDropdownMenu={props.classHeaderDropdownMenu} items={props.item.subRoute}  />
            }
        </li>
    )
}

export default MenuItem;