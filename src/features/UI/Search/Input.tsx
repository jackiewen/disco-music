import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    keywordChange,
    suggestRequest,
    setVisibleSuggest,
    selectKeyword
} from './searchSlice';
import classes from './Input.module.scss';

interface IProps {
    placeholder?: string
}

let searchTimer:any = null;

const Input = (props: IProps) => {
    const keyword = useSelector(selectKeyword);
    const dispatch = useDispatch();

    const handleChange = (e: any) => {
        dispatch(keywordChange(e.target.value));
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
            dispatch(suggestRequest(e.target.value));
        }, 2000);
    }

    return (
        <div className={classes.Input}>
            <i className="fas fa-search"></i>
            <input 
                className="form-control" 
                type="text" 
                placeholder={props.placeholder} 
                value={keyword}
                onChange={handleChange}
                onFocus={() => dispatch(setVisibleSuggest(true))}
                onBlur={() => dispatch(setVisibleSuggest(false))}
            />
        </div>
    );
}

export default Input;