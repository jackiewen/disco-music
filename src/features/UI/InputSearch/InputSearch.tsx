import React from 'react';
import classes from './InputSearch.module.scss';

type Props = {
    placeholder?: string
}

const InputSearch = (props: Props) => {
    return (
        <div className={classes.InputSearch}>
            <i className="fas fa-search"></i>
            <input className="form-control" type="text" placeholder={props.placeholder} />
        </div>
    );
}

export default InputSearch;