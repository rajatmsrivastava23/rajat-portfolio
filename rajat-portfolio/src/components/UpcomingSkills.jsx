import React from 'react';
import './UpcomingSkills.css';

const UpcomingSkills = () => {
    const skills = [
        "Advanced Python for AI",
        "FastAPI for AI backends",
        "Advanced LangChain & Agentic Workflows",
        "OpenAI / LLM APIs",
        "Deployment (Docker, Cloud basics)",
        "MLOps & Monitoring (Foundations)"
    ];

    return (
        <div className="upcoming-skills">
            <h2>Upcoming Skills & What I’m Actively Learning</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index} className="skill-item">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingSkills;