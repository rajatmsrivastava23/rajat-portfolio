import React from 'react';
import experienceData from '../data/experience';
import './Experience.css';

const Experience = () => {
    return (
        <section className="experience">
            <h2>Experience</h2>
            <div className="experience-list">
                {experienceData.map((job, index) => (
                    <div key={index} className="experience-item">
                        <h3>{job.title} at {job.company}</h3>
                        <p className="experience-duration">{job.duration}</p>
                        <ul className="experience-responsibilities">
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