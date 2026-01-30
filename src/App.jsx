import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
    const summary = "I am a passionate Data Analyst and GenAI Engineer with experience in transforming data into actionable insights and building intelligent solutions.";
    const skills = [
        "Python", "SQL", "Machine Learning", "Data Visualization", "React", "GenAI", "Statistics"
    ];
    return (
        <div className="App">
            <Header />
            <About summary={summary} skills={skills} />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;