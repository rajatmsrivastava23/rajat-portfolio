import React from 'react';
import AnimatedNetworkBG from './AnimatedNetworkBG';

const Hero = () => {
    return (
        <section className="w-full bg-darkBlue py-16 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <AnimatedNetworkBG />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-8 w-full text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-neonCyan drop-shadow-lg mb-3 animate-fade-in">Rajat Mohan Srivastava</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-4 animate-fade-in delay-100">~5 years of experience in Data Analysis, Business Intelligence & Emerging GenAI</p>
                <h2 className="text-base md:text-lg font-semibold text-neonPurple mb-3 animate-fade-in delay-200">Data Analyst | BI, Automation & Emerging GenAI Engineer</h2>
                <p className="text-sm md:text-base text-gray-300 mb-8 animate-fade-in delay-300">Turning Data into Insights and Scaling Intelligence with GenAI</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in delay-500">
                    <a href="#about" className="px-8 py-3 rounded-full bg-neonCyan text-darkBg font-bold shadow-lg hover:bg-neonGreen hover:text-darkBlue transition-all duration-300 border-2 border-neonCyan hover:border-neonGreen focus:outline-none focus:ring-2 focus:ring-neonCyan">View Profile</a>
                    <a href="/resume.pdf" className="px-8 py-3 rounded-full bg-transparent text-neonGreen font-bold border-2 border-neonGreen hover:bg-neonGreen hover:text-darkBlue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonGreen" download>Download Resume</a>
                    <a href="#contact" className="px-8 py-3 rounded-full bg-transparent text-neonCyan font-bold border-2 border-neonCyan hover:bg-neonPurple hover:text-white hover:border-neonPurple transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neonPurple">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
