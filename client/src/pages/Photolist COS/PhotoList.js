import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './_photolist.scss';
import Banner from './photolist-img/Header Banner.png';
import Frame from '../../components/frames/Frame';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';
import WatsonChat from '../../components/Watson/WatsonChat';
const PhotoList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [frames, setFrames] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const framesPerPage = 16;
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchFrames = async () => {
            setLoading(true);
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
                setLoading(false);
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

    const handlePhotoClick = (frameData) => {
        // Navigate to PhotoDetails, passing frame data
        navigate('/photo-details', { state: frameData });
    };

    return (
        <div className="photo-list-container">
            <Navbar />
            <div className="banner-container">
                <img src={Banner} alt='Header Banner' className="header-banner" />
                <div className="banner-text">Panoramic Photo List</div>
            </div>
            <div className="frame-container">
                {loading ? (
                    <p>Loading frames...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : currentFrames.length > 0 ? (
                    currentFrames.map((frame) => (
                        <Frame
                            key={frame.title}
                            image={frame.image_path}
                            title={frame.title}
                            onClick={() => handlePhotoClick(frame)} // Pass frame data
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
            <WatsonChat />

        </div>
    );
};

export default PhotoList;