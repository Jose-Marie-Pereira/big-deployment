import React from 'react';
import './_photo-details.scss';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../Photolist COS/photolist-img/Header Banner.png';
import Footer from '../../components/Footer/Footer';
import Sample from './Photodetail-img/Photodetails.jpeg';
import B1 from './Photodetail-img/b1.png';
import B2 from './Photodetail-img/b2.png';
import t1 from './Photodetail-img/t1.png';
import t2 from './Photodetail-img/t2.png';
import t3 from './Photodetail-img/t3.png';

const PhotoDetails = () => {
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
                <div className="img-details">
                    <img src={Sample} alt="Sample Pic" className="img-preview" />
                    <p className="img-sub">COS_1234TYG</p>
                </div>

                <div>
                    <h4 className="page-header">Objects Detected</h4>
                    <p className="object">Building</p>
                    <div style={{ marginTop: '0.5rem' }}>
                        <span className="amount">Amount: </span>
                        <span className="num-amount"> &nbsp;2</span>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <img src={B1} alt="Building 1" className="object-detect" />
                        <img src={B2} alt="Building 2" className="object-detect" />
                    </div>

                    <div className="container">
                        <table className="device-table">
                            <thead>
                                <tr >
                                    <th>Object</th>
                                    <th>Coordinate</th>
                                    <th>Length</th>
                                    <th>Width</th>
                                    <th>Height</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='obj-name'>Building 1</td>
                                    <td>
                                        <span className="coord-label">Latitude:</span> 12.345 <br />
                                        <span className="coord-label">Longitude:</span> 67.890
                                    </td>
                                    <td>100m</td>
                                    <td>50m</td>
                                    <td>200m</td>
                                </tr>
                                <tr>
                                    <td className='obj-name'>Building 2</td>
                                    <td>
                                        <span className="coord-label">Latitude:</span> 12.345 <br />
                                        <span className="coord-label">Longitude:</span> 67.890
                                    </td>
                                    <td>120m</td>
                                    <td>60m</td>
                                    <td>220m</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='divider' style={{ margin: '2.5rem, 0rem' }}></div>
                    <p className="object">Trees</p>
                    <div style={{ marginTop: '0.5rem' }}>
                        <span className="amount">Amount: </span>
                        <span className="num-amount"> &nbsp;3</span>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <img src={t1} alt="Tree 1" className="object-detect" />
                        <img src={t2} alt="Tree 2" className="object-detect" />
                        <img src={t3} alt="Tree 2" className="object-detect" />
                    </div>

                    <div className="container">
                        <table className="device-table">
                            <thead>
                                <tr >
                                    <th>Object</th>
                                    <th>Coordinate</th>
                                    <th>Length</th>
                                    <th>Width</th>
                                    <th>Height</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='obj-name'>Tree 1</td>
                                    <td>
                                        <span className="coord-label">Latitude:</span> 12.345 <br />
                                        <span className="coord-label">Longitude:</span> 67.890
                                    </td>
                                    <td>100m</td>
                                    <td>50m</td>
                                    <td>10m</td>
                                </tr>
                                <tr>
                                    <td className='obj-name'>Tree 2</td>
                                    <td>
                                        <span className="coord-label">Latitude:</span> 112.92 <br />
                                        <span className="coord-label">Longitude:</span> 67.890
                                    </td>
                                    <td>17m</td>
                                    <td>60m</td>
                                    <td>20m</td>
                                </tr>
                                <tr>
                                    <td className='obj-name'>Tree 3</td>
                                    <td>
                                        <span className="coord-label">Latitude:</span> 12.3425 <br />
                                        <span className="coord-label">Longitude:</span> 67.890
                                    </td>
                                    <td>17m</td>
                                    <td>40m</td>
                                    <td>20m</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PhotoDetails;