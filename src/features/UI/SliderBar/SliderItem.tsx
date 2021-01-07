import React from 'react';

const SliderItem = (props: any) => {
    // const {style, ...other} = props;
// console.log(props);
    return (
        <div {...props} className="slider-item">
            <div className="item-cover">
                <div className="item-cover-hover"></div>
            </div>
            <div className="item-info">
                <div className="title"><span className="other">1.</span> Nhạc Hoa</div>
                <div className="author">Nguyễn A</div>
                <div className="quality">lossess</div>
            </div>
        </div>
    );
}

export default SliderItem;