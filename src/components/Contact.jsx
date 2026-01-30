import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Contact Me</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
                <form className="contact-form" style={{ flex: '1', minWidth: '280px', background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(44,62,80,0.08)' }}>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }} />
                    </div>
                    <div className="form-group" style={{ marginBottom: '1rem' }}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
                    </div>
                    <button type="submit" className="submit-button" style={{ background: '#4a90e2', color: '#fff', padding: '0.7rem 1.5rem', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Send Message</button>
                </form>
                <div className="contact-info" style={{ flex: '1', minWidth: '220px', background: '#f7f9fa', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 2px 8px rgba(44,62,80,0.08)' }}>
                    <h3 style={{ color: '#4a90e2', marginBottom: '1rem' }}>Get in Touch</h3>
                    <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>Email:</strong> <a href="mailto:srajatmohan@gmail.com" style={{ color: '#2c3e50', textDecoration: 'underline' }}>srajatmohan@gmail.com</a></p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>Phone:</strong> <a href="tel:+918874511637" style={{ color: '#2c3e50', textDecoration: 'underline' }}>+91 88745 11637</a></p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rajatmohan/" target="_blank" rel="noopener noreferrer" style={{ color: '#4a90e2', textDecoration: 'underline' }}>linkedin.com/in/rajatmohan</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;