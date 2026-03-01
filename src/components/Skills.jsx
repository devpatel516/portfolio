import React from 'react';
import { FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';
import { TbBrain, TbHierarchy } from 'react-icons/tb';

const Skills = () => {
    return (
        <section id="skills" className="flex-grow flex flex-col justify-start relative overflow-hidden py-10">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#39d353 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display mb-4">Technical Skills</h2>
                    <p className="text-slate-600 dark:text-github-text-secondary text-lg max-w-2xl mx-auto">A comprehensive overview of my technical stack and tools I use to build robust applications.</p>
                </div>

                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                            <span className="material-symbols-outlined">code</span>
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Programming Languages</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#f34b7d]/10 text-[#f34b7d]">
                                <SiCplusplus className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">C++</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Advanced</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#b07219]/10 text-[#b07219]">
                                <FaJava className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">Java</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Intermediate</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#f1e05a]/10 text-[#f1e05a]">
                                <SiJavascript className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">JavaScript</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Core</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#3572A5]/10 text-[#3572A5]">
                                <FaPython className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">Python</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Proficient</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#e38c00]/10 text-[#e38c00]">
                                <FaDatabase className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">SQL</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                            <span className="material-symbols-outlined">globe</span>
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Web Development</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#61dafb]/10 text-[#61dafb]">
                                <FaReact className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">React</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Frontend</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#339933]/10 text-[#339933]">
                                <FaNodeJs className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">Node.js</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Backend</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#eeeeee]/10 text-[#eeeeee]">
                                <SiExpress className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">Express.js</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Backend</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                            <span className="material-symbols-outlined">smart_toy</span>
                        </span>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">AI, Tools &amp; Databases</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#ffffff]/10 text-[#ffffff]">
                                <TbBrain className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">LangChain</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Gen AI</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#3ad454]/10 text-[#3ad454]">
                                <TbHierarchy className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">MCP</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Context Protocol</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#4db33d]/10 text-[#4db33d]">
                                <SiMongodb className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">MongoDB</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Database</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#2496ed]/10 text-[#2496ed]">
                                <FaDocker className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">Docker</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">DevOps</span>
                            </div>
                        </div>
                        <div className="skill-card group flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] transition-all cursor-default">
                            <div className="w-10 h-10 flex items-center justify-center rounded bg-[#F05032]/10 text-[#F05032]">
                                <FaGithub className="text-2xl" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-medium text-slate-900 dark:text-slate-100">Git/GitHub</span>
                                <span className="text-xs text-slate-500 dark:text-github-text-secondary">Version Control</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
