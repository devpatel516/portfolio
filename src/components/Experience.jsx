import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubStats from './GitHubStats';

const certificates = [
  {
    id: 'mcp',
    title: 'Model Context Protocol',
    issuer: 'Anthropic',
    instructor: 'Anthropic',
    date: 'Mar 2026',
    image: '/certificates/mcp.png',
  },
  {
    id: 'agentic-ai',
    title: 'Full Stack Generative & Agentic AI with Python',
    issuer: 'Udemy',
    instructor: 'Hitesh Choudhary, Piyush Garg',
    date: 'Feb 2026',
    image: '/certificates/agentic-ai.png',
  },
  {
    id: 'deloitte',
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte',
    instructor: 'Forage',
    date: 'Jul 2025',
    image: '/certificates/deloitte.png',
  },
  {
    id: 'web-dev',
    title: 'Complete Web Development Course',
    issuer: 'Udemy',
    instructor: 'Hitesh Choudhary',
    date: 'Jun 2025',
    image: '/certificates/web-dev.jpg',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Experience = ({ githubData }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="flex-grow py-16 px-5 sm:px-8 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p variants={fadeUp} initial="hidden" animate="show" className="section-label mb-4">
          /achievements
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#E8EDF2] mb-10"
        >
          Proof of Work<span style={{ color: 'var(--primary)' }}>.</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── Coding Profiles ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="material-symbols-outlined text-[var(--primary)] text-base">code_blocks</span>
              <h2 className="font-display font-bold text-lg text-[#E8EDF2] tracking-tight">Coding Profiles</h2>
              <div className="flex-1 rule-divider" />
            </div>

            {/* LeetCode embed */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="card overflow-hidden mb-4"
            >
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '1px solid #1C242E' }}
              >
                <div className="flex items-center gap-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                    alt="LeetCode"
                    className="w-5 h-5 rounded bg-white p-0.5"
                  />
                  <span className="font-mono text-xs font-semibold text-[#E8EDF2]">LeetCode</span>
                </div>
                <a
                  href="https://leetcode.com/u/devpatel516/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A5568] hover:text-[var(--primary)] transition-colors"
                  aria-label="Open LeetCode profile"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
              <div className="p-3 bg-[#080C10]">
                <img
                  src="https://leetcard.jacoblin.cool/devpatel516?theme=dark&font=JetBrains%20Mono&ext=activity"
                  alt="Dev Patel LeetCode Stats"
                  className="w-full h-auto rounded-sm"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} initial="hidden" animate="show">
              <GitHubStats githubData={githubData} username="devpatel516" />
            </motion.div>
          </div>

          {/* ── Certifications ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="material-symbols-outlined text-[#F59E0B] text-base">workspace_premium</span>
              <h2 className="font-display font-bold text-lg text-[#E8EDF2] tracking-tight">Certifications</h2>
              <div className="flex-1 rule-divider" />
            </div>

            <div className="flex flex-col gap-3">
              {certificates.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  onClick={() => setSelectedCert(cert)}
                  className="card p-4 cursor-pointer group relative overflow-hidden"
                  role="button"
                  tabIndex={0}
                  aria-label={`View certificate: ${cert.title}`}
                  onKeyDown={e => e.key === 'Enter' && setSelectedCert(cert)}
                >
                  {/* Background premium icon */}
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[3rem] text-[#1C242E] group-hover:text-[#253040] transition-colors material-symbols-outlined select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    workspace_premium
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="font-mono text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm"
                        style={{ color: 'var(--primary)', background: 'var(--primary-dim)', border: '1px solid rgba(0,255,136,0.15)' }}
                      >
                        {cert.issuer}
                      </span>
                      <span className="font-mono text-[10px] text-[#4A5568]">{cert.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-[#E8EDF2] group-hover:text-[var(--primary)] transition-colors mb-0.5 pr-10 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#4A5568]">
                      Instructor: <span className="text-[#7A8899]">{cert.instructor}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Certificate Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            style={{ background: 'rgba(8,12,16,0.9)', backdropFilter: 'blur(12px)' }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="relative max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-11 right-0 font-mono text-xs text-[#7A8899] hover:text-[var(--primary)] flex items-center gap-1.5 transition-colors"
                aria-label="Close certificate viewer"
              >
                <span className="material-symbols-outlined text-[15px]">close</span>
                ESC to close
              </button>

              {/* Header */}
              <div
                className="px-5 py-3 flex items-center justify-between rounded-t-sm"
                style={{ background: '#141A22', border: '1px solid #253040', borderBottom: 'none' }}
              >
                <div>
                  <h2 className="font-display font-bold text-sm text-[#E8EDF2]">{selectedCert.title}</h2>
                  <p className="font-mono text-[10px] text-[var(--primary)]">{selectedCert.issuer} · {selectedCert.date}</p>
                </div>
              </div>

              {/* Image */}
              <div
                className="overflow-hidden rounded-b-sm"
                style={{ border: '1px solid #253040' }}
              >
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[78vh] object-contain block bg-[#080C10]"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/800x560/0E1318/00FF88?text=Certificate+Image+Pending';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
