import React from 'react';
import SongBg from '@images/song-bg.jpg';
import classes from './SongItem.module.scss';
import SubCommon from './SubCommon';

interface IProps {
    coverImgPath?: string,
    other?: string,
    title: string,
    author?: string,
    quality?: string,
    width?: string,
    height?: string,
    className?: string,
    isVertical?: boolean,
    // isSubItem?: boolean,
    fontSize?: string,
    children?: any
}

const SongItem = (props: IProps) => {
    const itemStyle: any = {width: props.width};
    const coverStyle: any = {width: props.width, height: props.height, backgroundImage: `url( ${props.coverImgPath || SongBg})`}
    if (props.fontSize) {
        itemStyle['fontSize'] = props.fontSize;
    }
    if (props.isVertical) {
        itemStyle['display'] = 'inline-flex';
        itemStyle['justifyContent'] = 'space-between';
        coverStyle['width'] = props.height;
    }
    return (
        <div className={
            [classes.SongItem, props.isVertical ? classes.Vertical : '',  props.className || ''].join(' ')
            } style={itemStyle}>
            <div className={props.isVertical ? classes.WrapItem : ''}>
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
            </div>
            {props.children &&
                React.cloneElement(props.children, {className: {SubFirst: classes.SubFirst,  SubLast: classes.SubLast}})
            }
        </div>
    );
}

SongItem.SubCommon = SubCommon;

export default SongItem;