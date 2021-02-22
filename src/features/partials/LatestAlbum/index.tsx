import React from 'react';
import SongItem from '@UI/SongItem';

const LatestAlbum = () => {
    return (
        <div className="d-flex flex-wrap">
            {[...Array(12).keys()].map((item, index) => (
                <SongItem
                    key={index}
                    className="flex-grow-1 p-2"
                    title="Quá Lự Kính (过滤镜) (Single)"
                    author="Nguyễn A"
                    coverImgPath="https://data.chiasenhac.com/data/cover/134/133126.jpg"
                    width="150px"
                    height="150px"
                    fontSize="0.8rem"
                    isVertical={false}
                    quality="lossless"
                />
            ))}
        </div>
    );
}

export default LatestAlbum;