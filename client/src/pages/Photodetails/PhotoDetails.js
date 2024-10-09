import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './_photo-details.scss';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../Photolist COS/photolist-img/Header Banner.png';
import Footer from '../../components/Footer/Footer';
import WatsonChat from '../../components/Watson/WatsonChat';

const PhotoDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { image_path, title, object } = location.state;

    return (
        <div className="photo-details-container">
            <Navbar />
            <div className="banner-container">
                <img src={Banner} alt="Header Banner" className="header-banner" />
                <div className="banner-sub">
                    <span className="panoramic-photo-list">Panoramic Photo List &lt;</span>
                    <span className="photo-details"> &nbsp;Photo Details</span>
                </div>
                <div className="banner-text">Photo Details</div>
            </div>

            <div style={{ padding: '3rem 6.88rem' }}>

                <button className="back-button" onClick={() => navigate(-1)}>&lt; Back</button>

                <div className="img-details">
                    <img src={image_path} alt={title} className="img-preview" />
                    <p className="img-sub">{title}</p>
                </div>

                <div>
                    <h4 className="page-header">Objects Detected</h4>

                    {object.map((obj, index) => (
                        <div key={index}>
                            <p className="object">{obj.object_type}</p>
                            <div style={{ marginTop: '0.5rem' }}>
                                <span className="amount">Amount: </span>
                                <span className="num-amount"> &nbsp;{obj.total_object}</span>
                            </div>

                            <div style={{ display: 'flex', gap: '2rem' }}>
                                {obj.details.map((detail, detailIndex) => (
                                    <img
                                        key={detailIndex}
                                        src={detail.image_path}
                                        alt={detail.title}
                                        className="object-detect"
                                        style={{ maxWidth: '20rem', maxHeight: '15rem', objectFit: 'cover' }}
                                    />
                                ))}
                            </div>

                            <div className="container">
                                <table className="device-table">
                                    <thead>
                                        <tr>
                                            <th>Object</th>
                                            <th>Coordinate</th>
                                            <th>Width</th>
                                            <th>Height</th>
                                            <th>Building Type</th>
                                            <th>City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {obj.details.map((detail, detailIndex) => (
                                            <tr key={detailIndex}>
                                                <td className="obj-name">{detail.title}</td>
                                                <td>
                                                    <span className="coord-label">Latitude:</span> {detail.lat} <br />
                                                    <span className="coord-label">Longitude:</span> {detail.long}
                                                </td>
                                                <td>{detail.width}m</td>
                                                <td>{detail.length}m</td>
                                                <td>{detail.building_type}</td>
                                                <td>{detail.city}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="divider" style={{ margin: '2.5rem, 0rem' }}></div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
            <WatsonChat />
        </div>
    );
};

export default PhotoDetails;