import React from 'react';
import './Experience.css';
import experienceData from '../data/experience';

const Experience = () => {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <div className="experience-list">
                {experienceData.map((job, index) => (
                    <div key={index} className="experience-item">
                        <h3>{job.title}</h3>
                        <h4>{job.company}</h4>
                        <p className="date">{job.date}</p>
                        <ul>
                            {job.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;