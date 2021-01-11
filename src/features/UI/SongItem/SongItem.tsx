import React from 'react';
import classes from './SongItem.module.scss';

interface Props {
    coverImgPath: string,
    other?: string,
    title: string,
    author?: string,
    quality?: string
}

const SongItem = (props: Props) => {
    return (
        <div className={classes.SongItem}>
            <div className={classes.SongCover} style={{backgroundImage: "url(" + props.coverImgPath + ")"}}>
                <div className={classes.SongCoverHover}></div>
            </div>
            <div className={classes.SongInfo}>
                <div className={classes.Title}>
                    {props.other && <span className={classes.Other}>{props.other}</span>}{props.title}
                    </div>
                {props.author && <div className={classes.Author}>{props.author}</div>}
                {props.quality && <div className={classes.Quality}>{props.quality}</div>}
            </div>
        </div>
    );
}

export default SongItem;