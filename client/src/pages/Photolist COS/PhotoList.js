import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './_photolist.scss';
import Banner from './photolist-img/Header Banner.png';
import Frame from '../../components/frames/Frame';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';

const PhotoList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [frames, setFrames] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // New loading state
    const framesPerPage = 16;

    useEffect(() => {
        const fetchFrames = async () => {
            setLoading(true); // Set loading to true when fetching starts
            try {
                const response = await fetch('http://localhost:3002/get_from_db');
                const data = await response.json();

                if (data.status === 'success') {
                    setFrames(data.data);
                } else {
                    setError('Failed to fetch frames.');
                }
            } catch (error) {
                setError('Error fetching frames: ' + error.message);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchFrames();
    }, []);

    const totalFrames = frames.length;
    const totalPages = Math.ceil(totalFrames / framesPerPage);
    const indexOfLastFrame = currentPage * framesPerPage;
    const indexOfFirstFrame = indexOfLastFrame - framesPerPage;
    const currentFrames = frames.slice(indexOfFirstFrame, indexOfLastFrame);

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
                {loading ? ( // Check loading state
                    <p>Loading frames...</p> // Loading indicator
                ) : error ? (
                    <p>{error}</p>
                ) : currentFrames.length > 0 ? (
                    currentFrames.map((frame) => (
                        <Frame
                            key={frame.title}
                            image={frame.image_path}
                            title={frame.title}
                        />
                    ))
                ) : (
                    <p>No frames available.</p>
                )}
            </div>
            <div className="pagination-container" style={{ display: 'flex', justifyContent: 'end' }}>
                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default PhotoList;