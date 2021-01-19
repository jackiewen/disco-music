import React from 'react';
import iconImg from '@images/top-left.png';

const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <div className="btn-arrow btn-arrow-prev" onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </div>
    );
}

export default PrevArrow;