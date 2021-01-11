import React from 'react';
import { SongItem } from '@UI';

const SliderItem = (props: any) => {

    return (
        <SongItem 
            {...props}
            coverImgPath={"https://data.chiasenhac.com/data/cover/134/133126.jpg"}
            title="Nhạc Hoa"
            author="Nguyễn A"
            quality="lossless"
        />
    );
}

export default SliderItem;