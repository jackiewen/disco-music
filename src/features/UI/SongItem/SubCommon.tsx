import React from 'react';

interface IProps {
    className?: any
}

const SubCommon = (props: IProps) => {
    
    return (
        <>
            <div className={props.className.SubFirst}>
                <ul>
                    <li><i className="far fa-clock me-1 pt-1"></i> Hôm qua, 21:00</li>
                    <li><i className="fas fa-headphones me-1 pt-1"></i> 300</li>
                </ul>
            </div>
            <div className={props.className.SubLast}>
                <ul>
                    <li><i className="fas fa-headphones"></i></li>
                    <li><i className="fas fa-list"></i></li>
                    <li><i className="fas fa-share-alt"></i></li>
                </ul>
            </div>
        </>
    );
}

export default SubCommon;