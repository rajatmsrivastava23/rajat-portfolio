import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Rajat Mohan Srivastava</p>
                <p>Data Analyst | Emerging GenAI Engineer</p>
                <a href="https://www.linkedin.com/in/rajatmohan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;