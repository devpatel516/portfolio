import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useColorTheme } from '../context/ColorContext';

const NAV = [
  { label: 'Home',         path: '/' },
  { label: 'About',        path: '/about' },
  { label: 'Projects',     path: '/projects' },
  { label: 'Skills',       path: '/skills' },
  { label: 'Achievements', path: '/experience' },
  { label: 'Contact',      path: '/contact' },
];

/* Accent swatches for the theme picker */
const SWATCHES = {
  green:  '#00FF88',
  violet: '#A78BFA',
  amber:  '#F59E0B',
};

const Header = () => {
  const location = useLocation();
  const { accentColor, setAccentColor } = useColorTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080C10]/95 backdrop-blur-md border-b border-[#1C242E]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">

        {/* Logo / wordmark */}
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Home">
          <div className="w-7 h-7 rounded-sm overflow-hidden border border-[#253040] group-hover:border-[var(--primary)] transition-colors flex items-center justify-center">
            <img src="/logos/logo.jpg" alt="Dev Patel" className="w-full h-full object-cover" />
          </div>
          <span
            className="font-display font-bold text-sm tracking-widest text-[#E8EDF2] group-hover:text-[var(--primary)] transition-colors uppercase"
          >
            Dev Patel
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {NAV.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link ${location.pathname === path ? 'active' : ''}`}
              aria-current={location.pathname === path ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right cluster: theme picker + hamburger */}
        <div className="flex items-center gap-4">
          {/* Theme swatch picker */}
          <div
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm border border-[#1C242E] bg-[#0E1318]"
            role="group"
            aria-label="Accent color"
          >
            {Object.entries(SWATCHES).map(([key, color]) => (
              <button
                key={key}
                onClick={() => setAccentColor(key)}
                title={`${key} theme`}
                aria-pressed={accentColor === key}
                className="w-4 h-4 rounded-full transition-transform"
                style={{
                  background: color,
                  transform: accentColor === key ? 'scale(1.3)' : 'scale(1)',
                  outline: accentColor === key ? `2px solid ${color}` : 'none',
                  outlineOffset: '2px',
                }}
              />
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] group"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span
              className="block h-px w-5 bg-[#7A8899] group-hover:bg-[var(--primary)] transition-all duration-200"
              style={{ transform: open ? 'rotate(45deg) translateY(6px)' : 'none' }}
            />
            <span
              className="block h-px w-4 bg-[#7A8899] group-hover:bg-[var(--primary)] transition-all duration-200"
              style={{ opacity: open ? 0 : 1, marginLeft: '-4px' }}
            />
            <span
              className="block h-px w-5 bg-[#7A8899] group-hover:bg-[var(--primary)] transition-all duration-200"
              style={{ transform: open ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden border-t border-[#1C242E] bg-[#080C10] overflow-hidden"
            aria-label="Mobile navigation"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`py-2.5 px-3 text-xs font-mono tracking-widest uppercase transition-colors rounded-sm ${
                    location.pathname === path
                      ? 'text-[var(--primary)] bg-[var(--primary-dim)]'
                      : 'text-[#7A8899] hover:text-[#E8EDF2] hover:bg-[#0E1318]'
                  }`}
                  aria-current={location.pathname === path ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}

              {/* Mobile theme picker */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#1C242E]">
                <span className="text-[11px] text-[#4A5568] uppercase tracking-widest">Accent</span>
                <div className="flex gap-2">
                  {Object.entries(SWATCHES).map(([key, color]) => (
                    <button
                      key={key}
                      onClick={() => setAccentColor(key)}
                      aria-label={`${key} theme`}
                      className="w-5 h-5 rounded-full transition-transform"
                      style={{
                        background: color,
                        transform: accentColor === key ? 'scale(1.2)' : 'scale(1)',
                        outline: accentColor === key ? `2px solid ${color}` : 'none',
                        outlineOffset: '2px',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
