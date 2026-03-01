import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { useColorTheme } from '../context/ColorContext';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { accentColor, setAccentColor } = useColorTheme();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' },
        { name: 'Achievements', path: '/experience' },
        { name: 'Contact', path: '/contact' }
    ];

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-github-border bg-background-light/80 dark:bg-[#161b22]/80 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm transition-colors duration-300 overflow-hidden">
                                <img src="/logos/logo.jpg" alt="logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-lg font-bold tracking-tight font-mono text-slate-900 dark:text-white transition-colors duration-300">dev_patel</span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-[var(--primary)]'
                                        : 'text-slate-600 dark:text-github-text-secondary hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Theme Toggle Buttons */}
                        <div className="hidden sm:flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-full px-2 py-1 shadow-inner">
                            <button
                                onClick={() => setAccentColor('green')}
                                className={`w-5 h-5 rounded-full bg-[#39d353] border-2 transition-transform ${accentColor === 'green' ? 'border-white scale-110' : 'border-transparent hover:scale-110'}`}
                                aria-label="Green Theme"
                                title="Neon Green"
                            />
                            <button
                                onClick={() => setAccentColor('yellow')}
                                className={`w-5 h-5 rounded-full bg-[#5d08e4ff] border-2 transition-transform ${accentColor === 'yellow' ? 'border-white scale-110' : 'border-transparent hover:scale-110'}`}
                                aria-label="Yellow Theme"
                                title="Mac Yellow"
                            />
                            <button
                                onClick={() => setAccentColor('orange')}
                                className={`w-5 h-5 rounded-full bg-[#f0883e] border-2 transition-transform ${accentColor === 'orange' ? 'border-white scale-110' : 'border-transparent hover:scale-110'}`}
                                aria-label="Orange Theme"
                                title="GitHub Orange"
                            />
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 rounded-md text-slate-600 dark:text-github-text-secondary hover:bg-slate-100 dark:hover:bg-[#30363d] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <span className="material-symbols-outlined">
                            {isMobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-b border-gray-200 dark:border-github-border bg-background-light dark:bg-[#161b22] overflow-hidden shadow-lg"
                    >
                        <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={closeMobileMenu}
                                    className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${location.pathname === link.path
                                        ? 'bg-slate-100 dark:bg-[#30363d] text-[var(--primary)] dark:text-[var(--primary)]'
                                        : 'text-slate-600 dark:text-github-text-secondary hover:bg-slate-50 dark:hover:bg-[#21262d] hover:text-slate-900 dark:hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Mobile Theme Toggle */}
                            <div className="flex items-center justify-between px-3 py-3 mt-4 border-t border-gray-200 dark:border-github-border">
                                <span className="text-base font-medium text-slate-600 dark:text-github-text-secondary">Theme Color</span>
                                <div className="flex items-center gap-3 bg-[#161b22] border border-[#30363d] rounded-full px-2 py-1 shadow-inner">
                                    <button
                                        onClick={() => { setAccentColor('green'); closeMobileMenu(); }}
                                        className={`w-6 h-6 rounded-full bg-[#39d353] border-2 transition-transform ${accentColor === 'green' ? 'border-white scale-110' : 'border-transparent hover:scale-110'}`}
                                        aria-label="Green Theme"
                                    />
                                    <button
                                        onClick={() => { setAccentColor('yellow'); closeMobileMenu(); }}
                                        className={`w-6 h-6 rounded-full bg-[#5d08e4ff] border-2 transition-transform ${accentColor === 'yellow' ? 'border-white scale-110' : 'border-transparent hover:scale-110'}`}
                                        aria-label="Yellow Theme"
                                    />
                                    <button
                                        onClick={() => { setAccentColor('orange'); closeMobileMenu(); }}
                                        className={`w-6 h-6 rounded-full bg-[#f0883e] border-2 transition-transform ${accentColor === 'orange' ? 'border-white scale-110' : 'border-transparent hover:scale-110'}`}
                                        aria-label="Orange Theme"
                                    />
                                </div>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
