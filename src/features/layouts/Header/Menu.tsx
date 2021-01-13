import React from 'react';
import { IRoute } from '@interfaces/IRoute';
import MenuItem from './MenuItem';

interface IProps {
    items: Array<IRoute>,
    classHeaderItem?: string,
    classHeaderDropdownMenu?: string
}

const Menu = (props: IProps) => {

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {props.items && props.items.map((item: IRoute, index: number) => (
            <MenuItem
                key={"menu" + index}
                item={item}
                classHeaderItem={props.classHeaderItem}
                classHeaderDropdownMenu={props.classHeaderDropdownMenu}
            />
        ))}
        </ul>
    )
}

export default Menu;