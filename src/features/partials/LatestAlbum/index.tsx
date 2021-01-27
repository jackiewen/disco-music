import React from 'react';
import SongItem from '@UI/SongItem';
import classes from './LatestAlbum.module.scss';

const LatestAlbum = () => {
    return (
        <div className={["d-flex flex-wrap", classes.LatestAlbum].join(' ')}>
            {[...Array(12).keys()].map((item, index) => (
                <SongItem
                    key={index}
                    className="flex-grow-1 p-2"
                    title="Quá Lự Kính (过滤镜) (Single)"
                    author="Nguyễn A"
                    coverImgPath="https://data.chiasenhac.com/data/cover/134/133126.jpg"
                    width="100%"
                    height="80px"
                    isVertical={true}
                    quality="lossless"
                />
            ))}
        </div>
    );
}

export default LatestAlbum;