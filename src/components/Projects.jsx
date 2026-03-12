import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 'blogsphere',
    title: 'BlogSphere',
    tag: 'Full-Stack',
    description:
      'Full-stack blogging platform with React, Node.js, Express, and MongoDB. Secure JWT auth with refresh tokens, CRUD operations, GridFS image uploads, and a responsive adaptive UI.',
    stack: ['React', 'MongoDB', 'Node.js', 'Express'],
    url: 'https://github.com/devpatel516/Blog-website',
    index: '01',
  },
  {
    id: 'emotion-music',
    title: 'Emotion Music Player',
    tag: 'AI / ML',
    description:
      'Streamlit app that recommends music using NLP-driven emotion detection via Hugging Face transformers. Implements emotion-to-genre mapping with metadata-driven recommendation logic.',
    stack: ['Python', 'NLP', 'Streamlit', 'Hugging Face'],
    url: 'https://github.com/devpatel516/Emotion-Based-Music-Recommender',
    index: '02',
  },
  {
    id: 'movie-rec',
    title: 'Movie Recommendation System',
    tag: 'AI / ML',
    description:
      'Content-based recommendation using TF-IDF and cosine similarity. FastAPI ML inference, Node.js backend, React frontend with autocomplete and real-time results via OMDb API.',
    stack: ['Python', 'FastAPI', 'React', 'Node.js'],
    url: 'https://github.com/devpatel516/Movie-Recommendation-System',
    index: '03',
  },
];

const cardVar = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Projects = () => (
  <section id="projects" className="flex-grow py-16 px-5 sm:px-8 max-w-6xl mx-auto w-full relative">

    {/* Section label */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="section-label mb-4"
    >
      /featured-projects
    </motion.p>

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="flex items-end justify-between mb-10 flex-wrap gap-4"
    >
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#E8EDF2]">
        Things I've Built<span style={{ color: 'var(--primary)' }}>.</span>
      </h1>
      <a
        href="https://github.com/devpatel516?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-ghost text-[11px] py-2 px-4"
        id="all-repos-link"
      >
        <FaGithub />
        All Repositories
      </a>
    </motion.div>

    {/* Project grid — asymmetric: first card spans full col, others 2-up */}
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

      {/* Feature card — wider */}
      <motion.article
        custom={0}
        variants={cardVar}
        initial="hidden"
        animate="show"
        className="lg:col-span-3 card p-7 flex flex-col group relative overflow-hidden"
        aria-labelledby="project-0-title"
      >
        {/* Large index watermark */}
        <span
          className="absolute top-2 right-4 font-display font-extrabold text-[5rem] leading-none select-none pointer-events-none text-[#1C242E] transition-colors duration-300 group-hover:text-[#253040]"
          aria-hidden="true"
        >
          {projects[0].index}
        </span>

        <div className="flex items-start justify-between mb-3 relative z-10">
          <span
            className="font-mono text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm"
            style={{ color: 'var(--primary)', background: 'var(--primary-dim)', border: '1px solid rgba(0,255,136,0.15)' }}
          >
            {projects[0].tag}
          </span>
          <a
            href={projects[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4A5568] hover:text-[var(--primary)] transition-colors p-1"
            aria-label={`GitHub — ${projects[0].title}`}
          >
            <FaGithub size={16} />
          </a>
        </div>

        <h2
          id="project-0-title"
          className="font-display font-bold text-2xl text-[#E8EDF2] mb-3 tracking-tight group-hover:text-[var(--primary)] transition-colors relative z-10"
        >
          {projects[0].title}
        </h2>
        <p className="font-mono text-xs text-[#7A8899] leading-relaxed mb-6 flex-grow relative z-10">
          {projects[0].description}
        </p>
        <div className="flex flex-wrap gap-2 relative z-10">
          {projects[0].stack.map(s => (
            <span
              key={s}
              className="font-mono text-[11px] text-[#7A8899] px-2.5 py-1 rounded-sm"
              style={{ background: '#141A22', border: '1px solid #1C242E' }}
            >
              {s}
            </span>
          ))}
        </div>
      </motion.article>

      {/* Right column — 2 stacked */}
      <div className="lg:col-span-2 flex flex-col gap-4">
        {projects.slice(1).map((proj, i) => (
          <motion.article
            key={proj.id}
            custom={i + 1}
            variants={cardVar}
            initial="hidden"
            animate="show"
            className="card p-6 flex flex-col group relative overflow-hidden flex-1"
            aria-labelledby={`project-${i + 1}-title`}
          >
            <span
              className="absolute top-1 right-3 font-display font-extrabold text-[3.5rem] leading-none select-none pointer-events-none text-[#1C242E] transition-colors duration-300 group-hover:text-[#253040]"
              aria-hidden="true"
            >
              {proj.index}
            </span>

            <div className="flex items-start justify-between mb-3 relative z-10">
              <span
                className="font-mono text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm"
                style={{ color: 'var(--primary)', background: 'var(--primary-dim)', border: '1px solid rgba(0,255,136,0.15)' }}
              >
                {proj.tag}
              </span>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A5568] hover:text-[var(--primary)] transition-colors p-1"
                aria-label={`GitHub — ${proj.title}`}
              >
                <FaGithub size={15} />
              </a>
            </div>

            <h2
              id={`project-${i + 1}-title`}
              className="font-display font-bold text-lg text-[#E8EDF2] mb-2 tracking-tight group-hover:text-[var(--primary)] transition-colors relative z-10"
            >
              {proj.title}
            </h2>
            <p className="font-mono text-xs text-[#7A8899] leading-relaxed mb-4 flex-grow relative z-10">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-1.5 relative z-10">
              {proj.stack.map(s => (
                <span
                  key={s}
                  className="font-mono text-[11px] text-[#7A8899] px-2.5 py-0.5 rounded-sm"
                  style={{ background: '#141A22', border: '1px solid #1C242E' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
