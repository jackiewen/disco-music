import React from 'react';
import iconImg from '@images/top-right.png';

const NextArrow = (props: any) => {
    const { onClick } = props;

    return (
        <div className="btn-arrow btn-arrow-next" onClick={onClick}>
            <img src={iconImg} />
        </div>
    );
}

export default NextArrow;