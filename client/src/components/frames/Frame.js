import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_frame.scss';
import Icon from './frame-img/Icon.svg';

const Frame = ({ image, title }) => {
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate('/photo-details');
    };

    return (
        <div className='frame'>
            <img src={image} alt={title} className='frame-image' />
            <div className='frame-menu'>
                <p className='frame-name'>{title}</p>
                <img
                    src={Icon}
                    alt='Icon'
                    className='menu-icon'
                    onClick={handleIconClick}
                />
            </div>
        </div>
    );
};

export default Frame;