import React from 'react';

const Header = () => {
    const headerStyle = {
        background: `linear-gradient(rgba(0, 40, 80, 0.85), rgba(0, 20, 40, 0.9)), url(${process.env.PUBLIC_URL}/header-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center',
        padding: '24px 16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
        position: 'relative'
    };

    const containerStyle = {
        maxWidth: '900px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
    };

    const linkStyle = {
        color: '#3b82f6',
        textDecoration: 'none',
        fontWeight: 600
    };

    const linkHoverStyle = {
        color: '#60a5fa'
    };

    return (
        <header style={headerStyle}>
            <div style={containerStyle}>
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '180px' }}>
                    <div style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}>
                        <img 
                            src={`${process.env.PUBLIC_URL}/Rajat_photo.jpeg`} 
                            alt="Rajat Mohan Srivastava" 
                            style={{ 
                                width: '150px', 
                                height: '150px', 
                                borderRadius: '50%', 
                                border: '4px solid #3b82f6',
                                objectFit: 'cover',
                                objectPosition: 'top',
                                boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)'
                            }} 
                        />
                    </div>
                    <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                        <h1 style={{ margin: 0, fontSize: '2rem' }}>Rajat Mohan Srivastava</h1>
                        <p style={{ margin: '8px 0 6px', fontSize: '0.9rem', color: '#e5e7eb' }}>
                            ~5 years of experience in Data Analysis, Business Intelligence & Emerging GenAI
                        </p>
                        <h2 style={{ margin: '6px 0 10px', fontSize: '1.25rem' }}>
                            Data Analyst | BI, Automation & Emerging GenAI Engineer
                        </h2>
                        <p style={{ margin: '0 0 12px', fontSize: '0.95rem', color: '#e5e7eb' }}>
                            Turning Data into Insights and Scaling Intelligence with GenAI
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                            <a
                                href="#projects"
                                style={linkStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
                            >
                                View Projects
                            </a>
                            <span style={{ color: '#cbd5e1' }}>|</span>
                            <a
                                href="/resume.pdf"
                                style={linkStyle}
                                download
                                onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
                            >
                                Download Resume
                            </a>
                            <span style={{ color: '#cbd5e1' }}>|</span>
                            <a
                                href="#contact"
                                style={linkStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                                onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;