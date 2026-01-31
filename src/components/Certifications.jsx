import React from 'react';

const Certifications = () => {
    return (
        <section id="certifications" className="my-8 p-8 rounded-2xl bg-gradient-to-br from-darkBlue/90 to-darkBg/90 shadow-2xl border-2 border-neonPurple/40 hover:border-neonCyan/60 animate-slide-in-left transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-neonPurple/10 rounded-full blur-3xl group-hover:bg-neonCyan/15 transition-all duration-500"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neonPurple via-neonCyan to-neonGreen bg-clip-text text-transparent mb-6 flex items-center gap-3 relative z-10">
                <span className="text-4xl">🏆</span>
                Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                <div className="bg-gradient-to-br from-darkBg/90 to-darkBlue/90 rounded-2xl p-6 shadow-2xl border-2 border-neonCyan/30 hover:border-neonGreen hover:scale-105 hover:shadow-neonCyan/50 transition-all duration-300 group/card relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-neonCyan/10 rounded-full blur-2xl group-hover/card:bg-neonGreen/20 transition-all duration-300"></div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonGreen relative z-10">ITIL® 4 Foundation</h3>
                </div>
                <div className="bg-gradient-to-br from-darkBg/90 to-darkBlue/90 rounded-2xl p-6 shadow-2xl border-2 border-neonCyan/30 hover:border-neonGreen hover:scale-105 hover:shadow-neonCyan/50 transition-all duration-300 group/card relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-neonCyan/10 rounded-full blur-2xl group-hover/card:bg-neonGreen/20 transition-all duration-300"></div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonGreen relative z-10">Advanced Excel – Udemy</h3>
                </div>
                <div className="bg-gradient-to-br from-darkBg/90 to-darkBlue/90 rounded-2xl p-6 shadow-2xl border-2 border-neonCyan/30 hover:border-neonGreen hover:scale-105 hover:shadow-neonCyan/50 transition-all duration-300 group/card relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-neonCyan/10 rounded-full blur-2xl group-hover/card:bg-neonGreen/20 transition-all duration-300"></div>
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonGreen relative z-10">SQL for Data Analysis</h3>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
