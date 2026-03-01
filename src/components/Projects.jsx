import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 overflow-hidden">
            <div className="flex items-center gap-3 mb-10">
                <span className="material-symbols-outlined text-neon-green">folder_open</span>
                <h2 className="text-2xl font-bold font-mono dark:text-white text-slate-900 tracking-tight">
                    Featured Projects
                </h2>
                <div className="h-px bg-github-border flex-grow ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="group relative rounded-xl border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] p-6 transition-all duration-300 hover:border-neon-green hover:shadow-lg dark:hover:shadow-glow flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-neon-green transition-colors font-display">
                            BlogSphere
                        </h3>
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-neon-green transition-colors"><a href="https://github.com/devpatel516/Blog-website" target="_blank">arrow_outward</a></span>
                    </div>
                    <p className="text-slate-600 dark:text-github-text-secondary text-base leading-relaxed mb-6 flex-grow">
                        Developed a full-stack blogging platform using React, Node.js, Express.js, and MongoDB with secure JWT-based authentication and refresh tokens. Implemented CRUD operations for blog posts, image uploads via MongoDB GridFS, and a responsive UI optimized for cross-device usage.                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">ReactJS</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">MongoDB</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">NodeJS</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">ExpressJS</span>
                    </div>
                </div>

                <div className="group relative rounded-xl border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] p-6 transition-all duration-300 hover:border-neon-green hover:shadow-lg dark:hover:shadow-glow flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-neon-green transition-colors font-display">
                            Emotion-Based Music Player
                        </h3>
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-neon-green transition-colors"><a href="https://github.com/devpatel516/Emotion-Based-Music-Recommender" target="_blank">arrow_outward</a></span>
                    </div>
                    <p className="text-slate-600 dark:text-github-text-secondary text-base leading-relaxed mb-6 flex-grow">
                        Built a Streamlit app that recommends music using NLP-driven emotion detection, integrating a Hugging Face transformer model for real-time emotion classification. Implemented an emotion-to-genre mapping pipeline with metadata-driven recommendation logic.
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">NLP</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">Streamlit</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">Hugging Face</span>
                    </div>
                </div>

                <div className="group relative rounded-xl border border-gray-200 dark:border-github-border bg-white dark:bg-[#161b22] p-6 transition-all duration-300 hover:border-neon-green hover:shadow-lg dark:hover:shadow-glow flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-neon-green transition-colors font-display">
                            Movie Recommendation System
                        </h3>
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-neon-green transition-colors"><a href="https://github.com/devpatel516/Movie-Recommendation-System" target="_blank">arrow_outward</a></span>
                    </div>
                    <p className="text-slate-600 dark:text-github-text-secondary text-base leading-relaxed mb-6 flex-grow">
                        Built a content-based movie recommendation system using TF-IDF and cosine similarity with NLP preprocessing. Developed a FastAPI ML inference service, Node.js backend, and a React frontend with autocomplete search, real-time recommendations, and OMDb API integration.
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">Python</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">FastAPI</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">Node.js</span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-github-btn-bg text-slate-700 dark:text-github-text-secondary border border-gray-200 dark:border-github-border group-hover:border-neon-green/30 group-hover:text-neon-green transition-colors">React</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-github-text-secondary hover:text-neon-green transition-colors">
                    <span className="material-symbols-outlined text-[18px]">history</span>
                    <a href='https://github.com/devpatel516?tab=repositories' target="_blank">View all repositories</a>
                </button>
            </div>
        </section>
    );
};

export default Projects;
