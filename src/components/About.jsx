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
                Data and applied AI analyst with 5 years at Ericsson, focused on building and shipping <span className="text-neonCyan font-semibold bg-neonCyan/10 px-1.5 py-0.5 rounded">GenAI and agentic AI systems</span> on enterprise telecom and operations data. I design LangChain-based multi-agent workflows that combine LLM reasoning (OpenAI GPT, Google Gemini and Qwen models), retrieval-augmented generation (RAG) over vector databases, and orchestration with live KPI feeds and ML model outputs.
            </p>
            <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed relative z-10">
                I take solutions from local prototype (Ollama on internal Eric AI infrastructure) to production on Google Cloud, packaging agents as <span className="text-neonGreen font-semibold bg-neonGreen/10 px-1.5 py-0.5 rounded">Docker containers on Vertex AI with Cloud Run</span>, with data fetched directly from GCP pipelines (PMGCP). I bring a strong Python and SQL foundation from years of data engineering and automation, working knowledge of machine learning and computer vision (Scikit-learn, OpenCV), a cost-aware and privacy-first approach to model hosting, and a track record of partnering with product, operations and leadership teams to turn business questions into grounded, automated AI answers and executive-ready outputs.
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