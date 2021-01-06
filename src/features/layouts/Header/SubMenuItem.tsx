import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IRoute } from '@interfaces';

interface Props {
    items?: Array<IRoute>,
    classHeaderDropdownMenu?: string
}

const SubMenuItem = (props: Props) => {

    const { t } = useTranslation();

    return (
        <ul className={["dropdown-menu", props.classHeaderDropdownMenu].join(' ')} aria-labelledby="navbarDropdown">
        {props.items && props.items.map((item: IRoute, index: number) => (
            <li key={"sub_menu" + index}><Link className="dropdown-item text-capitalize" to={item.path}>{t("menu:" + item.name)}</Link></li>
        ))}
        </ul>
    )
}

export default SubMenuItem;