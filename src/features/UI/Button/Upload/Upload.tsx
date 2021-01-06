import React from 'react';

const Upload = () => {

    const handleClick = () => {
        console.log('Upload button');
    }

    return (
        <button type="button" className="btn btn-primary rounded-pill px-4 py-2 text-capitalize" onClick={handleClick}>
            <div className="d-flex"><i className="fas fa-cloud-upload-alt lh-base me-1"></i> upload</div>
        </button>
    );
}

export default Upload;