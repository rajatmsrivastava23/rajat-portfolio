import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="hero">
                <h1 className="name">Rajat Mohan Srivastava</h1>
                <h2 className="role">Data Analyst & Emerging GenAI Engineer</h2>
                <p className="tagline">Transforming data into actionable insights.</p>
                <div className="cta-buttons">
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </header>
    );
};

export default Header;