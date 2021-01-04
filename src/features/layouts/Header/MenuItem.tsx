import React from 'react';
import SubMenuItem from './SubMenuItem';
import { IRoute } from '@interfaces';

type Props = {
    item: Array<IRoute>,
    className?: string,
    subClassName?: string
}

const MenuItem = (props: Props) => {
    return (
        <li className={["nav-item dropdown", props.className].join(' ')}>
        {props.item &&
            <SubMenuItem className={props.subClassName} items={props.item.subRoute}  />
        }
        </li>
    )
}

export default MenuItem;