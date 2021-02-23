import React from 'react';
import { Link } from 'react-router-dom';
import SongBg from '@images/song-bg.jpg';
import classes from './SongItem.module.scss';
import SubCommon from './SubCommon';

interface IProps {
    coverImg?: string,
    other?: string,
    title: string,
    author?: string,
    quality?: string,
    songLink: string,
    authorLink: string,
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
    const coverStyle: any = {width: props.width, height: props.height, backgroundImage: `url( ${props.coverImg || SongBg})`}
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
                <Link to="/cover">
                    <div className={classes.SongCover} style={coverStyle}>
                        <div className={classes.SongCoverHover}></div>
                    </div>
                </Link>
                <div className={classes.SongInfo}>
                    <Link to="/title">
                        <div className={classes.Title}>
                            {props.other && <span className={classes.Other}>{props.other}</span>}{props.title}
                        </div>
                    </Link>
                    <Link to="/author">
                        {props.author && <div className={classes.Author}>{props.author}</div>}
                    </Link>
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