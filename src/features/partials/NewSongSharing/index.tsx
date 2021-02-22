import React from 'react';
import SongItem from '@UI/SongItem';
import classes from './LatestAlbum.module.scss';

const NewSongSharing = () => {
    return (
        <ul className="list-vertical">
            {[...Array(10).keys()].map((item, index) => (
                <li key={index} className="select">
                    <SongItem
                        className="flex-grow-1 p-2"
                        title="Quá Lự Kính (过滤镜) (Single)"
                        author="Nguyễn A"
                        coverImgPath="https://data.chiasenhac.com/data/cover/134/133126.jpg"
                        width="100%"
                        height="70px"
                        fontSize="0.85rem"
                        isVertical={true}
                        quality="lossless"
                    >
                        <SongItem.SubCommon />
                    </SongItem>
                </li>
            ))}
        </ul>
    );
}

export default NewSongSharing;