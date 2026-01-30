import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Rajat Mohan Srivastava. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/rajatmsrivastava" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:srajatmohan@gmail.com">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;