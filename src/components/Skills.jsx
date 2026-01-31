import React from 'react';
import skillsData from '../data/skills';
import './Skills.css';

const Skills = () => {
    return (
        <section className="my-8 p-6 rounded-2xl bg-darkBlue/80 shadow-xl border border-neonPurple/30 animate-slide-in-right">
            <h2 className="text-2xl md:text-3xl font-bold text-neonPurple mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillsData.map((group, idx) => (
                    <div className="bg-gradient-to-br from-darkBg/90 to-darkBlue/90 rounded-xl p-5 shadow-xl border-2 border-neonCyan/30 hover:border-neonGreen hover:scale-105 transition-all duration-300 hover:shadow-neonCyan/50" key={idx}>
                        <h3 className="text-lg font-bold text-neonCyan mb-3 flex items-center gap-2">
                            <span className="text-2xl">💡</span>
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 rounded-full bg-gradient-to-r from-neonPurple/30 to-neonGreen/30 text-white text-xs font-medium border border-neonGreen/40 hover:border-neonGreen hover:shadow-lg hover:shadow-neonGreen/30 transition-all duration-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;