import React from 'react';

const UpcomingSkills = () => {
    const items = [
        "Advanced Python for AI",
        "FastAPI for AI backends",
        "Advanced LangChain & Agentic Workflows",
        "OpenAI / LLM APIs",
        "Deployment (Docker, Cloud basics)",
        "MLOps & Monitoring (Foundations)"
    ];

    return (
        <section id="upcoming" className="my-8 p-8 rounded-2xl bg-gradient-to-br from-darkBlue/90 to-darkBg/90 shadow-2xl border-2 border-neonGreen/40 hover:border-neonPurple/60 animate-slide-in-right transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-neonGreen/10 rounded-full blur-3xl group-hover:bg-neonPurple/15 transition-all duration-500"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neonGreen via-neonPurple to-neonCyan bg-clip-text text-transparent mb-6 flex items-center gap-3 relative z-10">
                <span className="text-4xl">🚀</span>
                Upcoming Skills & What I'm Actively Learning
            </h2>
            <ul className="space-y-4 relative z-10">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-200 bg-gradient-to-r from-darkBg/80 to-darkBlue/80 px-6 py-4 rounded-xl border-2 border-neonGreen/20 hover:border-neonCyan hover:scale-105 hover:shadow-neonGreen/50 transition-all duration-300 group/item relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-24 h-24 bg-neonGreen/10 rounded-full blur-2xl group-hover/item:bg-neonCyan/20 transition-all duration-300"></div>
                        <span className="inline-flex w-3 h-3 rounded-full bg-neonGreen animate-pulse group-hover/item:scale-150 transition-transform relative z-10"></span>
                        <span className="font-medium text-lg relative z-10">{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default UpcomingSkills;
