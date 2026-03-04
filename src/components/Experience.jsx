import React, { useState } from 'react';
import GitHubStats from './GitHubStats';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = ({ githubData }) => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 'mcp',
            title: "Model Context Protocol",
            issuer: "Anthropic",
            instructor: "Anthropic",
            date: "March 4, 2026",
            image: "/certificates/mcp.png"
        },
        {
            id: 'agentic-ai',
            title: "Full Stack Generative and Agentic AI with Python",
            issuer: "Udemy",
            instructor: "Hitesh Choudhary, Piyush Garg",
            date: "February 11, 2026",
            image: "/certificates/agentic-ai.png"
        },
        {
            id: 'deloitte',
            title: "Data Analytics Job Simulation",
            issuer: "Deloitte",
            instructor: "Forage",
            date: "July 2nd, 2025",
            image: "/certificates/deloitte.png"
        },
        {
            id: 'web-dev',
            title: "Complete Web Development Course",
            issuer: "Udemy",
            instructor: "Hitesh Choudhary",
            date: "June 29, 2025",
            image: "/certificates/web-dev.jpg"
        }
    ];

    return (
        <section id="experience" className="flex-grow flex flex-col justify-center relative overflow-hidden pt-8 pb-16">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#39d353 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
                <div className="mb-10 flex items-center justify-between border-b border-github-border pb-4">
                    <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                        <span className="text-[var(--primary)] material-symbols-outlined text-4xl">emoji_events</span>
                        Achievements &amp; Coding Profiles
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Coding Profiles Section */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-blue-400">code_blocks</span>
                            Coding Profiles
                        </h3>

                        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 relative overflow-hidden group hover:border-[var(--primary)]/50 transition-all shadow-lg hover:shadow-glow mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-8 h-8 rounded-full bg-white p-1" />
                                    <h4 className="text-lg font-bold text-white">LeetCode</h4>
                                </div>
                                <a href="https://leetcode.com/u/devpatel516/" target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-[var(--primary)] transition-colors">
                                    <span className="material-symbols-outlined">open_in_new</span>
                                </a>
                            </div>

                            <div className="w-full rounded-lg overflow-hidden border border-[#30363d] bg-[#0d1117]">
                                <img
                                    src="https://leetcard.jacoblin.cool/devpatel516?theme=dark&font=Space%20Grotesk&ext=activity"
                                    alt="Dev Patel LeetCode Stats"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <GitHubStats githubData={githubData} username="devpatel516" />
                    </div>

                    {/* Certifications Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-yellow-500">Workspace_Premium</span>
                            Certifications
                        </h3>

                        <div className="space-y-4">
                            {certificates.map((cert) => (
                                <div
                                    key={cert.id}
                                    onClick={() => setSelectedCert(cert)}
                                    className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 relative overflow-hidden group hover:border-[var(--primary)]/50 transition-all cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(57,211,83,0.1)]"
                                >
                                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="material-symbols-outlined text-5xl text-[var(--primary)]">workspace_premium</span>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-[var(--primary)]/20 text-[var(--primary)] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide border border-[var(--primary)]/30">
                                                {cert.issuer}
                                            </span>
                                            <span className="text-[#8b949e] text-xs font-medium">{cert.date}</span>
                                        </div>
                                        <h4 className="text-base font-bold text-white mb-1 group-hover:text-[var(--primary)] transition-colors pr-8 leading-tight">
                                            {cert.title}
                                        </h4>
                                        <p className="text-xs text-[#8b949e]">
                                            Instructor: <span className="text-[#c9d1d9]">{cert.instructor}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute -top-12 right-0 sm:-right-12 text-white/70 hover:text-white bg-[#161b22]/50 hover:bg-[#161b22] rounded-full p-2 transition-all border border-[#30363d]"
                            >
                                <span className="material-symbols-outlined text-2xl block">close</span>
                            </button>

                            <div className="w-full rounded-lg overflow-hidden border-2 border-[#30363d] shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0d1117] flex items-center justify-center relative">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full h-auto object-contain max-h-[85vh] block"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/800x600/161b22/39d353?text=Certificate+Image+Pending%0A(Please+add+to+public/certificates)";
                                    }}
                                />
                            </div>

                            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex flex-col items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white font-bold text-xl drop-shadow-md text-center">{selectedCert.title}</h3>
                                <p className="text-[var(--primary)] font-medium drop-shadow-md">{selectedCert.issuer}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
