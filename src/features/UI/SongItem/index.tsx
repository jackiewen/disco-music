import React from 'react';
import classes from './SongItem.module.scss';
import SongBg from '@images/song-bg.jpg';

interface IProps {
    coverImgPath?: string,
    other?: string,
    title: string,
    author?: string,
    quality?: string,
    width?: string,
    height?: string,
    className?: string
}

const SongItem = (props: IProps) => {

    return (
        <div className={[classes.SongItem, props.className || ''].join(' ')} style={{width: props.width}}>
            <div className={classes.SongCover} style={{width: props.width, height: props.height, backgroundImage: `url( ${props.coverImgPath || SongBg})`}}>
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