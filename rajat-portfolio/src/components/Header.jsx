import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="hero-section">
                <h1>Rajat Mohan Srivastava</h1>
                <h2>Data Analyst | BI, Automation & Emerging GenAI Engineer</h2>
                <p>Turning Data into Insights and Scaling Intelligence with GenAI</p>
                <div className="cta-buttons">
                    <Link to="/projects" className="cta-button">View Projects</Link>
                    <a href="mailto:srajatmohan@gmail.com" className="cta-button">Download Resume</a>
                    <Link to="/contact" className="cta-button">Contact Me</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;