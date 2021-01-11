import React from 'react';
import iconImg from '@images/top-left.png';

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="btn-arrow btn-arrow-prev" onClick={onClick}>
            <img src={iconImg} />
        </div>
    );
}

export default PrevArrow;