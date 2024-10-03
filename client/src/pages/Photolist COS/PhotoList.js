import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './_photolist.scss';
import Banner from './photolist-img/Header Banner.png';
import Frame from '../../components/frames/Frame';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';

const PhotoList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalFrames = 39;
    const framesPerPage = 16;

    const totalPages = Math.ceil(totalFrames / framesPerPage);

    const indexOfLastFrame = currentPage * framesPerPage;
    const indexOfFirstFrame = indexOfLastFrame - framesPerPage;
    const currentFrames = [...Array(totalFrames)].slice(indexOfFirstFrame, indexOfLastFrame);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="photo-list-container">
            <Navbar />
            <div className="banner-container">
                <img src={Banner} alt='Header Banner' className="header-banner" />
                <div className="banner-text">Panoramic Photo List</div>
            </div>
            <div className="frame-container">
                {currentFrames.map((_, index) => (
                    <Frame key={index + indexOfFirstFrame} alt={`Frame ${index + indexOfFirstFrame + 1}`} />
                ))}
            </div>
            <div className="pagination-container" style={{ display: 'flex', justifyContent: 'end' }}>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
            <Footer />
        </div>
    );
};

export default PhotoList;