import React from 'react';

const About = () => {
    return (
        <section id="about" className="flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)]/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="w-full max-w-3xl mx-auto relative z-10">
                <div className="rounded-2xl border border-[#30363d] bg-[#161b22]/60 backdrop-blur-xl shadow-glow p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#30363d] to-[#161b22] border-2 border-[var(--primary)] flex items-center justify-center shadow-lg overflow-hidden">
                                <img src="/dev.jpeg" className="w-full h-full object-cover" alt="Dev Patel" />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2 font-display">About Me</h1>
                                <div className="h-1 w-20 bg-[var(--primary)] rounded-full"></div>
                            </div>
                            <p className="text-[#c9d1d9] text-lg leading-relaxed font-light">
                                Hello! I'm <strong className="text-white font-medium">Dev Patel</strong>, a Computer Science student based in India. I have a passion for building software that solves real-world problems, blending efficient backend logic with clean, user-friendly interfaces.
                            </p>

                            <div className="space-y-4 pt-4">
                                <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[var(--primary)]">school</span>
                                    Education
                                </h2>
                                <div className="bg-[#0d1117]/50 rounded-lg p-5 border border-[#30363d] hover:border-[var(--primary)]/50 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-white font-medium text-lg">Nirma University</h3>
                                        <span className="text-[#8b949e] text-sm bg-[#30363d]/50 px-2 py-1 rounded">2023 - 2027</span>
                                    </div>
                                    <p className="text-[#8b949e] mb-3">B.Tech in Computer Science &amp; Engineering</p>
                                    <p className="text-[#c9d1d9] text-sm leading-relaxed">
                                        Currently maintaining a strong academic record with a <span className="text-[var(--primary)] font-bold">CGPA of 8.99</span> while actively participating in coding communities and hackathons.
                                    </p>
                                </div>
                                <div className="bg-[#0d1117]/50 rounded-lg p-5 border border-[#30363d] hover:border-[var(--primary)]/50 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-white font-medium text-lg">Lokmanya Vidhyalaya</h3>
                                        <span className="text-[#8b949e] text-sm bg-[#30363d]/50 px-2 py-1 rounded">2021 - 2023</span>
                                    </div>
                                    <p className="text-[#8b949e] mb-3">Higher Secondary Certificate</p>
                                    <p className="text-[#c9d1d9] text-sm leading-relaxed">
                                        <span className="text-[var(--primary)] font-bold">86.61%</span>
                                    </p>
                                </div>
                                <div className="bg-[#0d1117]/50 rounded-lg p-5 border border-[#30363d] hover:border-[var(--primary)]/50 transition-colors">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-white font-medium text-lg">Mahadev Shashtri Vidhyalaya</h3>
                                        <span className="text-[#8b949e] text-sm bg-[#30363d]/50 px-2 py-1 rounded">2020 - 2021</span>
                                    </div>
                                    <p className="text-[#8b949e] mb-3">Secondary School Certificate</p>
                                    <p className="text-[#c9d1d9] text-sm leading-relaxed">
                                        <span className="text-[var(--primary)] font-bold">96.50%</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm border border-[var(--primary)]/20 font-medium">Full-Stack Development</span>
                                <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm border border-[var(--primary)]/20 font-medium">Artificial Intelligence</span>
                                <span className="px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] text-sm border border-[var(--primary)]/20 font-medium">Machine Learning</span>
                            </div>

                            {/* <div className="pt-6 border-t border-[#30363d] flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--primary)]"></span>
                                </div>
                                <span className="text-[#c9d1d9] text-sm font-medium">Open to Internships</span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
