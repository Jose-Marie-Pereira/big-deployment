import React from 'react';
import './_frame.scss';
import Icon from './frame-img/Icon.svg';

const Frame = ({ image, title, onClick }) => {
    return (
        <div className='frame'>
            <img src={image} alt={title} className='frame-image' />
            <div className='frame-menu'>
                <p className='frame-name'>{title}</p>
                <img
                    src={Icon}
                    alt='Icon'
                    className='menu-icon'
                    onClick={onClick}
                />
            </div>
        </div>
    );
};

export default Frame;