import React, { useState } from 'react';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        try {
            const response = await fetch('https://formspree.io/f/mvzrlrky', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                setSubmitted(true);
                e.target.reset();
                setTimeout(() => setSubmitted(false), 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section id="contact" className="my-8 p-8 rounded-2xl bg-gradient-to-br from-darkBlue/90 to-darkBg/90 shadow-2xl border-2 border-neonCyan/40 hover:border-neonPurple/60 animate-slide-in-left transition-all duration-300 relative overflow-hidden group">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-neonCyan/10 rounded-full blur-3xl group-hover:bg-neonPurple/15 transition-all duration-500"></div>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neonCyan via-neonPurple to-neonGreen bg-clip-text text-transparent mb-6 flex items-center gap-3 relative z-10">
                <span className="text-4xl">📬</span>
                Get In Touch
            </h2>
            {submitted && (
                <div className="mb-6 p-4 bg-neonGreen/10 border-2 border-neonGreen rounded-xl flex items-center gap-3 relative z-10 animate-pulse">
                    <span className="text-3xl">✓</span>
                    <p className="text-neonGreen font-semibold text-lg">Message sent successfully!</p>
                </div>
            )}
            <div className="flex flex-col gap-6 items-start relative z-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            required 
                            className="px-5 py-4 rounded-xl bg-darkBg/90 border-2 border-neonCyan/30 text-white placeholder-gray-400 text-base focus:border-neonGreen focus:outline-none focus:ring-2 focus:ring-neonGreen/50 transition-all duration-300 hover:border-neonPurple/50" 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email" 
                            required 
                            className="px-5 py-4 rounded-xl bg-darkBg/90 border-2 border-neonCyan/30 text-white placeholder-gray-400 text-base focus:border-neonGreen focus:outline-none focus:ring-2 focus:ring-neonGreen/50 transition-all duration-300 hover:border-neonPurple/50" 
                        />
                    </div>
                    <textarea 
                        name="message" 
                        rows="5" 
                        placeholder="Your Message" 
                        required 
                        className="px-5 py-4 rounded-xl bg-darkBg/90 border-2 border-neonCyan/30 text-white placeholder-gray-400 text-base focus:border-neonGreen focus:outline-none focus:ring-2 focus:ring-neonGreen/50 transition-all duration-300 hover:border-neonPurple/50 resize-none"
                    ></textarea>
                    <button 
                        type="submit" 
                        className="px-8 py-4 rounded-xl bg-gradient-to-r from-neonCyan to-neonGreen text-darkBg font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-neonCyan/50 transition-all duration-300 whitespace-nowrap self-start flex items-center gap-3 group/btn"
                    >
                        <span>Send Message</span>
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;