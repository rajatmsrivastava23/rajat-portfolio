import React from 'react';
import projectsData from '../data/projects';
import './Projects.css';

const Projects = () => {
    return (
        <section className="my-8 p-6 rounded-2xl bg-darkBlue/80 shadow-xl border border-neonGreen/30 animate-slide-in-left">
            <h2 className="text-2xl md:text-3xl font-bold text-neonGreen mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectsData.map((project, index) => (
                    <div className="bg-gradient-to-br from-darkBg/90 to-darkBlue/90 rounded-2xl p-6 shadow-2xl border-2 border-neonGreen/30 hover:border-neonCyan hover:scale-105 transition-transform duration-300 group relative overflow-hidden" key={index}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neonGreen/10 rounded-full blur-3xl group-hover:bg-neonCyan/20 transition-all duration-300"></div>
                        <h3 className="text-xl font-bold text-neonCyan mb-3 flex items-center gap-2 relative z-10">
                            <span className="text-2xl">🚀</span>
                            {project.title}
                        </h3>
                        <p className="text-gray-300 mb-3 relative z-10"><span className="font-bold text-neonPurple">Problem:</span> {project.description}</p>
                        <p className="mb-3 relative z-10"><span className="font-bold text-neonGreen">Tech Stack:</span> <span className="text-gray-200">{project.techStack.join(', ')}</span></p>
                        <p className="relative z-10"><span className="font-bold text-neonCyan">Outcome:</span> <span className="text-gray-200">{project.outcome}</span></p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;