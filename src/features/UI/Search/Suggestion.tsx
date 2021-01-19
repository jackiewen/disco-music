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
            <h4>Bài hát nhiều người tìm kiếm</h4>
            <ul>
                <li>
                    <a>
                        <h5>Đi về nhà</h5>
                        <div className={classes.Author}>Đen; JutaTee</div>
                        <div className={classes.Quality}>lossless</div>
                    </a>
                </li>
                <li>
                    <a>
                        <h5>Đi về nhà</h5>
                        <div className={classes.Author}>Đen; JutaTee</div>
                        <div className={classes.Quality}>lossless</div>
                    </a>
                </li>
            </ul>
            <hr />
            <h4>Lịch sử tìm kiếm của bạn</h4>
            <ul>
                <li>
                    <h5>Đi về nhà<span className="float-end">x</span></h5>
                </li>
            </ul>
        </div>
    )
}

export default Suggestion;