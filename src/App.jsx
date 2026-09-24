import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import UpcomingSkills from './components/UpcomingSkills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
    const summary = "Data and applied AI analyst with 5 years at Ericsson, focused on building and shipping GenAI and agentic AI systems on enterprise telecom and operations data.";
    const skills = [
        "Agentic AI & Multi-Agent Systems",
        "LangChain & RAG Pipelines",
        "OpenAI GPT, Gemini & Qwen",
        "Vertex AI, Cloud Run & Docker",
        "Machine Learning & Computer Vision (OpenCV)",
        "Python, SQL & Power BI"
    ];
    return (
        <div className="min-h-screen bg-darkBg text-white font-inter">
            <Header />
            <main style={{ paddingLeft: '1cm', paddingRight: '1cm' }}>
                <About summary={summary} skills={skills} />
                <Skills />
                <Experience />
                <Projects />
                <UpcomingSkills />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;