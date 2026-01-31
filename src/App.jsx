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
    const summary = "Data Analyst with 4+ years of experience in Power BI, SQL, Python, and SAP BI. Currently learning Agentic AI, LLMs, RAG, and Vector Databases with a focus on analytics automation and AI-powered insights.";
    const skills = [
        "Power BI (DAX, Power Query)",
        "SQL (Advanced)",
        "Python (Pandas, NumPy)",
        "SAP BI",
        "ETL Pipelines",
        "LLMs & Prompt Engineering"
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