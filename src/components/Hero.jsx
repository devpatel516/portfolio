import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';

/* Stagger container */
const containerVar = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } }
};
const itemVar = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
};

const Hero = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [lineCount, setLineCount] = useState(0);

  /* Animate line numbers on mount */
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setLineCount(i);
      if (i >= 18) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, []);

  const handleRedClick = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2800);
  };

  return (
    <section
      id="hero"
      className="relative flex-grow flex flex-col justify-center overflow-hidden min-h-[92vh] dot-grid"
    >
      {/* ── Watermark ─────────────────────────────────── */}
      <div className="hero-watermark select-none" aria-hidden="true">DEV</div>

      {/* ── Ambient glow ──────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 70%)' }}
        />
      </div>

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 py-16">

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-sm"
          style={{ border: '1px solid #1C242E', background: '#0E1318', position: 'relative' }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-4 py-3 border-b"
            style={{ borderColor: '#1C242E', background: '#141A22' }}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-2 relative">
              <AnimatePresence>
                {alertVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.92 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-0 bottom-full mb-2 bg-[#FF5F56] text-white text-[10px] font-bold px-3 py-1.5 rounded-sm whitespace-nowrap pointer-events-none shadow-lg"
                    style={{ zIndex: 100 }}
                  >
                    Nice try! You can't close it.
                    {/* Caret pointing down */}
                    <div className="absolute top-full left-3 w-0 h-0" style={{
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #FF5F56',
                    }} />
                  </motion.div>
                )}
              </AnimatePresence>

              <button onClick={handleRedClick} aria-label="Close" className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] hover:brightness-110 transition-all" />
              <button onClick={() => setIsMinimized(true)} aria-label="Minimize" className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] hover:brightness-110 transition-all" />
              <button onClick={() => setIsMinimized(false)} aria-label="Expand" className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] hover:brightness-110 transition-all" />
            </div>

            {/* Tab label */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#4A5568]">
              <span className="material-symbols-outlined text-[13px]" style={{ fontSize: '13px' }}>terminal</span>
              <span>dev-patel.sh</span>
            </div>

            <div className="w-20" />
          </div>

          {/* Terminal body */}
          <AnimatePresence mode="wait">
            {isMinimized ? (
              <motion.div
                key="minimized"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex flex-col items-center justify-center text-center p-12 min-h-[260px]"
              >
                <span className="text-4xl mb-5 select-none">:(</span>
                <p className="font-mono text-xs text-[#7A8899] mb-6 max-w-xs leading-relaxed">
                  Window minimized. Hit the green button when you're ready.
                </p>
                <button
                  onClick={() => setIsMinimized(false)}
                  className="btn-ghost text-[11px] gap-1.5"
                >
                  <span className="material-symbols-outlined text-[14px]">expand_content</span>
                  Restore window
                </button>
              </motion.div>
            ) : (
              <div className="flex min-h-[380px] sm:min-h-[420px]">
                {/* Line numbers */}
                <div
                  className="hidden sm:flex flex-col pt-8 pb-4 px-4 select-none shrink-0"
                  style={{ borderRight: '1px solid #1C242E', minWidth: '44px' }}
                  aria-hidden="true"
                >
                  {Array.from({ length: lineCount }, (_, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono leading-[1.95rem] text-right"
                      style={{ color: '#253040' }}
                    >
                      {i + 1}
                    </span>
                  ))}
                </div>

                {/* Main content */}
                <motion.div
                  key="expanded"
                  variants={containerVar}
                  initial="hidden"
                  animate="show"
                  className="flex-1 flex flex-col justify-center p-8 sm:p-12"
                >
                  {/* Availability badge */}
                  <motion.div variants={itemVar} className="mb-6">
                    <span
                      className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm"
                      style={{ color: 'var(--primary)', background: 'var(--primary-dim)', border: '1px solid rgba(0,255,136,0.15)' }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--primary)', boxShadow: '0 0 6px var(--primary-glow)', animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
                      />
                      Available for Internships
                    </span>
                  </motion.div>

                  {/* Name */}
                  <motion.h1
                    variants={itemVar}
                    className="font-display font-extrabold leading-none tracking-tight mb-4"
                    style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.03em' }}
                  >
                    Dev Patel<span style={{ color: 'var(--primary)' }}>.</span>
                  </motion.h1>

                  {/* Type animation */}
                  <motion.div
                    variants={itemVar}
                    className="flex items-center gap-3 mb-6"
                  >
                    <span className="text-[#4A5568] font-mono text-sm select-none">~/dev $</span>
                    <span className="font-mono text-sm" style={{ color: 'var(--primary)' }}>
                      <TypeAnimation
                        sequence={[
                          'Full-Stack Developer',
                          2200,
                          'AI Developer',
                          2200,
                          'Problem Solver',
                          2200,
                        ]}
                        wrapper="span"
                        speed={52}
                        repeat={Infinity}
                        cursor={false}
                      />
                    </span>
                    <span
                      className="cursor-blink w-2 h-[1.1em] inline-block align-middle"
                      style={{ background: 'var(--primary)' }}
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Bio */}
                  <motion.p
                    variants={itemVar}
                    className="font-mono text-sm text-[#7A8899] leading-relaxed mb-10 max-w-xl"
                  >
                    CS student at Nirma University. Crafting robust web applications
                    and exploring the frontiers of artificial intelligence.
                  </motion.p>

                  {/* CTAs */}
                  <motion.div variants={itemVar} className="flex flex-wrap gap-3">
                    <Link to="/projects" className="btn-primary" id="hero-projects-btn">
                      <span className="material-symbols-outlined text-[16px]">folder_open</span>
                      View Projects
                    </Link>
                    <Link to="/contact" className="btn-ghost" id="hero-contact-btn">
                      <span className="material-symbols-outlined text-[16px]">mail</span>
                      Contact Me
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom status bar */}
        <div
          className="flex items-center justify-between mt-3 px-4 py-2 text-[10px] font-mono text-[#4A5568]"
          style={{ border: '1px solid #1C242E', borderRadius: '2px', background: '#0E1318' }}
        >
          <div className="flex items-center gap-4">
            <span>JSX</span>
            <span>UTF-8</span>
            <span style={{ color: 'var(--primary)' }}>● Ready</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Nirma University</span>
            <span>India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
