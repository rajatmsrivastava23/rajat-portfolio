import React from 'react';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#35424a',
        color: '#ffffff',
        textAlign: 'center',
        padding: '24px 16px',
        marginTop: '48px',
        boxShadow: '0 -10px 25px rgba(0,0,0,0.25)'
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
        <footer style={footerStyle}>
            <div style={{ fontWeight: 700, fontSize: '18px', marginBottom: '6px' }}>Rajat Mohan Srivastava</div>
            <div style={{ color: '#e5e7eb', marginBottom: '10px' }}>Data Analyst | Emerging GenAI Engineer</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <a
                    href="https://www.linkedin.com/in/rajatmsrivastava/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
                >
                    LinkedIn
                </a>
                <span style={{ color: '#cbd5e1' }}>|</span>
                <a
                    href="https://github.com/rajatmsrivastava23"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
                >
                    GitHub
                </a>
                <span style={{ color: '#cbd5e1' }}>|</span>
                <a
                    href="mailto:srajatmohan@gmail.com"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.currentTarget.style.color = linkHoverStyle.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = linkStyle.color)}
                >
                    Email
                </a>
            </div>
            <div style={{ color: '#e5e7eb', fontSize: '12px', marginTop: '8px' }}>
                © {new Date().getFullYear()} Rajat Mohan Srivastava
            </div>
        </footer>
    );
};

export default Footer;