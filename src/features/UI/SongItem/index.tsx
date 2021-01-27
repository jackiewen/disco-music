import React from 'react';
import SongBg from '@images/song-bg.jpg';
import classes from './SongItem.module.scss';

interface IProps {
    coverImgPath?: string,
    other?: string,
    title: string,
    author?: string,
    quality?: string,
    width?: string,
    height?: string,
    className?: string,
    isVertical?: boolean
}

const SongItem = (props: IProps) => {
    const coverStyle: any = {width: props.width, height: props.height, backgroundImage: `url( ${props.coverImgPath || SongBg})`}
    if (props.isVertical) {
        coverStyle['width'] = props.height;
    }
    return (
        <div className={
            [classes.SongItem, props.isVertical ? classes.Vertical : '',  props.className || ''].join(' ')
            } style={{width: props.width}}>
            <div className={classes.SongCover} style={coverStyle}>
                <div className={classes.SongCoverHover}></div>
            </div>
            <div className={classes.SongInfo}>
                <div className={classes.Title}>
                    {props.other && <span className={classes.Other}>{props.other}</span>}{props.title}
                </div>
                {props.author && <div className={classes.Author}>{props.author}</div>}
                {props.quality && <div className={classes.Quality}>{props.quality}</div>}
            </div>
            {props.isVertical &&
                <div>
                    
                </div>
            }
        </div>
    );
}

export default SongItem;