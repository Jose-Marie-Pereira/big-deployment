import React from 'react';
import { useNavigate } from 'react-router-dom';
import './_frame.scss';
import Sample from './frame-img/sample.jpeg';
import Icon from './frame-img/Icon.svg';

const Frame = ({ alt }) => {
    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate('/photo-details');
    };

    return (
        <div className='frame'>
            <img src={Sample} alt={alt} className='frame-image' />
            <div className='frame-menu'>
                <p className='frame-name'>COS_1234TYG</p>
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