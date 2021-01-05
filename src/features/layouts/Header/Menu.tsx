import React from 'react';
import { IRoute } from '@interfaces';
import MenuItem from './MenuItem';

interface Props {
    items: Array<IRoute>,
    classHeaderItem?: string,
    classHeaderDropdownMenu?: string
}

const Menu = (props: Props) => {

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