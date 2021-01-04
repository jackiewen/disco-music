import React from 'react';
import { Link } from 'react-router-dom';
import { IRoute } from '@interfaces';

interface Props {
    items: Array<IRoute>,
    className?: string
}

const SubMenuItem = (props: Props) => {
    return (
        <ul className={["dropdown-menu", props.className].join(' ')} aria-labelledby="navbarDropdown">
        {props.items && props.items.map((item: IRoute) => (
            <li><Link className="dropdown-item" to={item.path}>{item.name}</Link></li>
        ))}
        </ul>
    )
}

export default SubMenuItem;