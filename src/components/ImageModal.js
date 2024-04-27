import React from 'react';
import './ImageModal.sass';

function ImageModal({ url, onClose }) {
    return (
        <div className="image-modal">
            <img src={url} alt="Full Screen" />
            <button className="close-modal" onClick={onClose}>X</button>
        </div>
    );
}

export default ImageModal;
