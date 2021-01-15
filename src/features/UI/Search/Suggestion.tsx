import React from 'react';
import classes from './Suggestion.module.scss';
import { useSelector } from 'react-redux';
import {
    selectSuggest,
    selectVisibleSuggest
} from './searchSlice';

const Suggestion = () => {
    const suggest = useSelector(selectSuggest);
    const isVisible = useSelector(selectVisibleSuggest);

    return (
        <div className={[classes.Suggestion, isVisible ? classes.SuggestionShow : ''].join(' ')}>
            <h3>Bài hát nhiều người tìm kiếm</h3>
        </div>
    )
}

export default Suggestion;