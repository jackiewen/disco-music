import React from 'react';
import classes from './InputSearch.module.scss';

interface IProps {
    placeholder?: string
}

const InputSearch = (props: IProps) => {
    return (
        <div className={classes.InputSearch}>
            <i className="fas fa-search"></i>
            <input className="form-control" type="text" placeholder={props.placeholder} />
        </div>
    );
}

export default InputSearch;