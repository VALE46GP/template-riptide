import React from 'react';
import './ImageGrid.sass';

function ImageGrid({ imageURLs }) {
    return (
        <div className="image-grid">
            {imageURLs.map((url, index) => (
                <div key={index} className="image-item" style={{ backgroundImage: `url(${url})` }}></div>
            ))}
        </div>
    );
}

export default ImageGrid;
