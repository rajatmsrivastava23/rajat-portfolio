import React from 'react';
import './About.css';

const About = ({ summary, skills }) => {
    return (
        <section className="my-8 p-8 rounded-2xl bg-gradient-to-br from-darkBlue/90 to-darkBg/90 shadow-2xl border-2 border-neonCyan/40 hover:border-neonPurple/60 animate-slide-in-left transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-neonCyan/10 rounded-full blur-3xl group-hover:bg-neonPurple/15 transition-all duration-500"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neonCyan via-neonPurple to-neonGreen bg-clip-text text-transparent mb-6 flex items-center gap-3 relative z-10">
                <span className="text-4xl">👨‍💻</span>
                About Me
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed relative z-10">
                I am a motivated and detail-oriented professional with a strong interest in the data field and artificial intelligence. My career goal is to build a long-term career in data analytics and AI, where I can work on real-world problems and deliver meaningful, data-driven solutions. I have hands-on experience with <span className="text-neonCyan font-semibold bg-neonCyan/10 px-1.5 py-0.5 rounded">Python, SQL, Excel, and Power BI</span> for data analysis, KPI reporting, and performance monitoring. I enjoy working with large datasets and transforming raw data into clear, actionable insights.
            </p>
            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed relative z-10">
                Currently, I am learning <span className="text-neonGreen font-semibold bg-neonGreen/10 px-1.5 py-0.5 rounded">Agentic AI</span> and further strengthening my Python skills to understand intelligent, autonomous systems and practical AI applications. I believe in continuous learning and staying updated with emerging technologies. I am highly analytical, curious, and focused on improving my problem-solving abilities. I am seeking opportunities in a growth-oriented environment where I can apply my skills, learn from real-world challenges, and grow as a data and AI professional.
            </p>
            <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neonPurple to-neonGreen mb-4 flex items-center gap-2 relative z-10">
                <span className="text-2xl">🔑</span>
                Key Skills
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 relative z-10">
                {skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2 text-neonGreen bg-gradient-to-br from-darkBg/90 to-darkBlue/90 px-4 py-3 rounded-xl shadow-lg border border-neonGreen/30 hover:scale-105 hover:border-neonCyan hover:shadow-neonGreen/50 transition-all duration-200 group/item">
                        <span className="inline-block w-2 h-2 rounded-full bg-neonCyan animate-pulse group-hover/item:scale-150 transition-transform"></span>
                        <span className="font-medium">{skill}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default About;