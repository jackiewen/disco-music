import React from 'react';

const NextArrow = (props: any) => {
    const { onClick } = props;

    return (
        <div className="btn-arrow btn-arrow-next" onClick={onClick}>
            <i className="fas fa-chevron-right"></i>
        </div>
    );
}

export default NextArrow;