import React from 'react';
import skillsData from '../data/skills';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skillsData.map((category) => (
                    <div key={category.title} className="skills-category">
                        <h3>{category.title}</h3>
                        <div className="skills-list">
                            {category.skills.map((skill) => (
                                <span key={skill} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;