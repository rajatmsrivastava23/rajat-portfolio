import React from 'react';
import projectsData from '../data/projects';
import './Projects.css';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                        <p><strong>Outcome:</strong> {project.outcome}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;