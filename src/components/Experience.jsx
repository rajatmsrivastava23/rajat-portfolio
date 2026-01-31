import React from 'react';
import './Experience.css';
import experienceData from '../data/experience';

const Experience = () => {
    return (
        <section className="my-8 p-8 rounded-2xl bg-gradient-to-br from-darkBlue/90 to-darkBg/90 shadow-2xl border-2 border-neonGreen/40 hover:border-neonCyan/60 animate-slide-in-right transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-neonGreen/10 rounded-full blur-3xl group-hover:bg-neonCyan/15 transition-all duration-500"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neonGreen via-neonCyan to-neonPurple bg-clip-text text-transparent mb-6 flex items-center gap-3 relative z-10">
                <span className="text-4xl">💼</span>
                Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {experienceData.map((job, index) => (
                    <div key={index} className="bg-gradient-to-br from-darkBg/90 to-darkBlue/90 rounded-2xl p-6 shadow-2xl border-2 border-neonPurple/30 hover:scale-105 hover:border-neonGreen hover:shadow-neonPurple/50 transition-all duration-300 group/card relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-neonPurple/10 rounded-full blur-2xl group-hover/card:bg-neonGreen/20 transition-all duration-300"></div>
                        <div className="flex items-center gap-3 mb-3 relative z-10">
                            <span className="text-4xl group-hover/card:scale-125 transition-transform duration-300">🏢</span>
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonCyan">{job.title}</h3>
                        </div>
                        <h4 className="text-lg text-neonCyan font-semibold mb-1 relative z-10">{job.company}</h4>
                        <p className="text-sm text-gray-400 mb-4 flex items-center gap-2 relative z-10">
                            <span className="text-neonGreen">📅</span>
                            {job.date || job.duration}
                        </p>
                        <ul className="space-y-2 relative z-10">
                            {job.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-200 group/item">
                                    <span className="text-neonGreen mt-1 group-hover/item:scale-125 transition-transform">✓</span>
                                    <span className="hover:text-neonGreen transition-colors duration-150 leading-relaxed">{responsibility}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;