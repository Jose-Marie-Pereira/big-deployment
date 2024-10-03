import React from 'react';
import './_footer.scss';
import logo from './footer-img/badan geospasial 1.svg';
import applestore from './footer-img/apple store 1.svg';
import googleplay from './footer-img/google play 1.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className='foot-left'>
                    <p className='footer-title'>Contact us:</p>
                    <img src={logo} alt="BIG Logo" className="footer-image" />
                    <p className='alt-footer-text'>Badan Informasi Geospasial</p>
                    <p className='address'>Integritas, Visioner, Tanggung Jawab, Kerja Sama</p>
                </div>
                <div className='foot-right'>
                    <p className='footer-title'>Find us on:</p>
                    <img src={applestore} alt='App Store' className='store' />
                    <img src={googleplay} alt='Google Play' className='store' />
                </div>
            </div>
            <p className='copyright'>Hak Cipta © 2024 Badan Geospasial Indonesia</p>
        </footer>
    );
};

export default Footer;