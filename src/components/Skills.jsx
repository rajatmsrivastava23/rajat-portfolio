import React from 'react';
import skillsData from '../data/skills';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skillsData.map((skill) => (
                    <div className="skill-card" key={skill.id}>
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;