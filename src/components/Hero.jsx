import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [showRedAlert, setShowRedAlert] = useState(false);

    const handleRedClick = () => {
        setShowRedAlert(true);
        setTimeout(() => setShowRedAlert(false), 3000);
    };

    return (
        <section id="hero" className="flex-grow flex flex-col justify-center relative overflow-hidden min-h-[90vh]">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#3ad454 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-20">
                <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-gray-300 dark:border-github-border bg-gray-100 dark:bg-[#161b22] px-4 py-3 shadow-sm relative">
                    {/* Floating alert for Red Button */}
                    <AnimatePresence>
                        {showRedAlert && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: -45, scale: 1 }}
                                exit={{ opacity: 0, y: 0, scale: 0.9 }}
                                className="absolute left-2 top-0 bg-[#ff5f56] text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
                            >
                                Nice try! You can't close it.
                                <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#ff5f56] rotate-45"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex gap-2 group/mac hover:cursor-default">
                        <button
                            onClick={handleRedClick}
                            className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e] flex items-center justify-center hover:bg-[#ff5f56]/90 transition-colors"
                            aria-label="Close"
                        >
                            <span className="opacity-0 group-hover/mac:opacity-100 text-[8px] font-bold text-[#4d0000] leading-none transition-opacity">✕</span>
                        </button>
                        <button
                            onClick={() => setIsMinimized(true)}
                            className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123] flex items-center justify-center hover:bg-[#ffbd2e]/90 transition-colors"
                            aria-label="Minimize"
                        >
                            <span className="opacity-0 group-hover/mac:opacity-100 text-[10px] font-bold text-[#4d3300] leading-none transition-opacity -mt-[1px]">−</span>
                        </button>
                        <button
                            onClick={() => setIsMinimized(false)}
                            className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29] flex items-center justify-center hover:bg-[#27c93f]/90 transition-colors"
                            aria-label="Expand"
                        >
                            <span className="opacity-0 group-hover/mac:opacity-100 text-[10px] font-bold text-[#004d00] leading-none transition-opacity">＋</span>
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-500 dark:text-github-text-secondary">
                        <span className="material-symbols-outlined text-[14px]">home</span>
                        <span>"dev-patel.sh"</span>
                    </div>
                    <div className="w-14"></div>
                </div>

                <div className="relative rounded-b-lg border border-gray-300 dark:border-github-border bg-white/50 dark:bg-[#0d1117]/80 backdrop-blur-sm shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {isMinimized ? (
                            <motion.div
                                key="minimized"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col items-center text-center p-8 sm:p-12 w-full"
                            >
                                <span className="text-5xl mb-6">:(</span>
                                <h3 className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                    Window Minimized
                                </h3>
                                <p className="text-slate-600 dark:text-[#8b949e] max-w-md font-mono text-sm leading-relaxed mb-8">
                                    No worries, take all the time you need! I'll be right here waiting patiently. Whenever you're ready to dive back in...
                                </p>
                                <button
                                    onClick={() => setIsMinimized(false)}
                                    className="inline-flex items-center gap-2 text-[#27c93f] hover:text-[#27c93f]/80 font-mono text-sm group transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[16px] group-hover:scale-125 transition-transform">add_circle</span>
                                    <span>just hit the green button and let's get going again!</span>
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="p-8 sm:p-12 flex flex-col items-center text-center w-full"
                            >
                                <div className="mb-6 inline-flex items-center justify-center rounded-full border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] p-1 shadow-sm">
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-green-700 dark:text-primary border border-primary/20">
                                        Available for Internships
                                    </span>
                                </div>
                                <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                                    Dev Patel
                                </h1>
                                <div className="flex items-center gap-2 font-mono text-lg sm:text-xl text-slate-600 dark:text-github-text-secondary mb-8">
                                    <span className="text-primary font-bold">➜</span>
                                    <span className="text-slate-500 dark:text-[#8b949e]">~</span>
                                    <TypeAnimation
                                        sequence={[
                                            'Full-Stack Developer',
                                            2000,
                                            'AI Developer',
                                            2000,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                        cursor={false}
                                    />
                                    <span className="animate-pulse w-2.5 h-5 bg-primary block ml-1"></span>
                                </div>
                                <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-[#8b949e] mb-10 leading-relaxed">
                                    Computer Science Student at Nirma University. Crafting robust web applications and exploring the frontiers of artificial intelligence.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4 px-4 sm:px-0">
                                    <Link to='/projects' className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-6 py-3 text-sm font-semibold shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] min-w-[160px]">
                                        <span className="material-symbols-outlined text-[20px]">book_2</span>
                                        View Projects
                                    </Link>
                                    <Link to='/contact' className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-100 dark:bg-[#21262d] hover:bg-gray-200 dark:hover:bg-[#30363d] text-slate-900 dark:text-[#c9d1d9] border border-gray-300 dark:border-[rgba(240,246,252,0.1)] px-6 py-3 text-sm font-semibold shadow-sm transition-all min-w-[160px]">
                                        <span className="material-symbols-outlined text-[20px]">mail</span>
                                        Contact Me
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="absolute -bottom-12 -right-12 -z-10 opacity-20 dark:opacity-30 blur-[2px] hidden lg:block transform rotate-[-5deg]">
                    <div className="contribution-grid p-4 rounded bg-[#161b22] border border-[#30363d]">
                        <div className="contribution-box level-1"></div><div className="contribution-box level-2"></div><div className="contribution-box level-0"></div><div className="contribution-box level-4"></div><div className="contribution-box level-1"></div>
                        <div className="contribution-box level-3"></div><div className="contribution-box level-1"></div><div className="contribution-box level-0"></div><div className="contribution-box level-2"></div><div className="contribution-box level-3"></div>
                        <div className="contribution-box level-0"></div><div className="contribution-box level-4"></div><div className="contribution-box level-1"></div><div className="contribution-box level-2"></div><div className="contribution-box level-0"></div>
                        <div className="contribution-box level-2"></div><div className="contribution-box level-3"></div><div className="contribution-box level-4"></div><div className="contribution-box level-1"></div><div className="contribution-box level-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
