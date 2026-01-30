import React from 'react';
import './About.css';

const About = ({ summary, skills }) => {
    return (
        <section className="about">
            <h2>About Me</h2>
            <p>{summary}</p>
            <h3>Skills</h3>
            <ul className="skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default About;