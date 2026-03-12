import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const education = [
  {
    school: 'Nirma University',
    period: '2023 – 2027',
    degree: 'B.Tech — Computer Science & Engineering',
    note: 'CGPA 8.99',
  },
  {
    school: 'Lokmanya Vidhyalaya',
    period: '2021 – 2023',
    degree: 'Higher Secondary Certificate',
    note: '86.61%',
  },
  {
    school: 'Mahadev Shashtri Vidhyalaya',
    period: '2020 – 2021',
    degree: 'Secondary School Certificate',
    note: '96.50%',
  },
];

const tags = ['Full-Stack Development', 'Artificial Intelligence', 'Machine Learning'];

const About = () => (
  <section
    id="about"
    className="flex-grow flex flex-col justify-center py-16 px-5 sm:px-8 relative overflow-hidden"
  >
    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)' }}
      />
    </div>

    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative z-10 w-full max-w-3xl mx-auto"
    >
      {/* Section label */}
      <motion.p variants={fadeUp} className="section-label mb-4">
        /about-me
      </motion.p>

      {/* Profile card */}
      <motion.div variants={fadeUp} className="card p-8 mb-6">
        <div className="flex flex-col sm:flex-row gap-7 items-start">

          {/* Avatar */}
          <div className="shrink-0">
            <div
              className="w-20 h-20 rounded-sm overflow-hidden"
              style={{ border: '1px solid var(--primary)', boxShadow: '0 0 20px var(--primary-glow)' }}
            >
              <img src="/dev.jpeg" alt="Dev Patel" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bio text */}
          <div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#E8EDF2] mb-3 tracking-tight">
              Hello, I'm Dev<span style={{ color: 'var(--primary)' }}>.</span>
            </h1>
            <p className="font-mono text-sm text-[#7A8899] leading-relaxed mb-5">
              A Computer Science student based in India with a passion for building software
              that solves real-world problems — blending efficient backend logic with clean,
              user-friendly interfaces. I thrive at the intersection of AI and web development.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <span
                  key={t}
                  className="font-mono text-[11px] font-semibold tracking-wide px-3 py-1 rounded-sm"
                  style={{
                    color: 'var(--primary)',
                    background: 'var(--primary-dim)',
                    border: '1px solid rgba(0,255,136,0.15)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Education section */}
      <motion.div variants={fadeUp}>
        <div className="flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-[var(--primary)] text-xl">school</span>
          <h2 className="font-display font-bold text-xl text-[#E8EDF2] tracking-tight">Education</h2>
          <div className="flex-1 rule-divider" />
        </div>

        <div className="flex flex-col gap-3">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="card p-5 flex items-start gap-5 group cursor-default"
            >
              {/* Timeline dot */}
              <div className="mt-1 shrink-0 flex flex-col items-center">
                <div
                  className="w-2 h-2 rounded-full group-hover:shadow-glow-sm transition-shadow"
                  style={{ background: 'var(--primary)' }}
                />
                {idx < education.length - 1 && (
                  <div className="w-px flex-1 mt-1.5 min-h-[20px] bg-[#1C242E]" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                  <h3 className="font-display font-bold text-base text-[#E8EDF2]">{item.school}</h3>
                  <span className="font-mono text-[11px] text-[#4A5568] bg-[#141A22] px-2 py-0.5 rounded-sm border border-[#1C242E]">
                    {item.period}
                  </span>
                </div>
                <p className="font-mono text-xs text-[#7A8899] mb-1">{item.degree}</p>
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: 'var(--primary)' }}
                >
                  {item.note}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Availability signal */}
      <motion.div
        variants={fadeUp}
        className="mt-6 flex items-center gap-3 px-5 py-3 rounded-sm"
        style={{ border: '1px solid #1C242E', background: '#0E1318' }}
      >
        <span
          className="relative flex h-3 w-3"
          aria-hidden="true"
        >
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ background: 'var(--primary)' }}
          />
          <span
            className="relative inline-flex h-3 w-3 rounded-full"
            style={{ background: 'var(--primary)' }}
          />
        </span>
        <span className="font-mono text-xs text-[#7A8899]">
          Open to internship opportunities · <span style={{ color: 'var(--primary)' }}>Available now</span>
        </span>
      </motion.div>
    </motion.div>
  </section>
);

export default About;
