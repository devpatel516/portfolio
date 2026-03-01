import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-gray-200 dark:border-github-border py-10 bg-background-light dark:bg-[#161b22]">
            <div className="max-w-[1280px] mx-auto px-4 flex flex-col items-center justify-center gap-6 text-xs text-slate-500 dark:text-github-text-secondary">

                {/* First Row: Icons */}
                <div className="flex items-center gap-8 text-2xl">
                    <a className="opacity-70 hover:opacity-100 hover:text-slate-900 dark:hover:text-white transition-all transform hover:scale-125" href="https://github.com/devpatel516" target="_blank" rel="noopener noreferrer" title="GitHub">
                        <FaGithub />
                    </a>
                    <a className="opacity-70 hover:opacity-100 hover:text-[#0a66c2] transition-all transform hover:scale-125" href="https://www.linkedin.com/in/dev-patel-862458288/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a className="opacity-70 hover:opacity-100 hover:text-[#e44d26] transition-all transform hover:scale-125" href="https://leetcode.com/u/devpatel516/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                        <SiLeetcode />
                    </a>
                    <a className="opacity-70 hover:opacity-100 hover:text-[#1f8acb] transition-all transform hover:scale-125" href="https://codeforces.com/profile/devpatel17207" target="_blank" rel="noopener noreferrer" title="Codeforces">
                        <SiCodeforces />
                    </a>
                    <a className="opacity-70 hover:opacity-100 hover:text-[#e1306c] transition-all transform hover:scale-125" href="https://www.instagram.com/dev_patel_516/" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <FaInstagram />
                    </a>
                </div>

                {/* Second Row: Copyright */}
                <div className="flex flex-col items-center gap-2 mt-2">
                    <span className="text-sm font-medium tracking-wide">© 2026 Dev Patel. All rights reserved.</span>
                </div>

                {/* Third Row: Quote */}
                <div className="text-center italic opacity-80 max-w-md px-4 font-serif text-sm">
                    "Building functional, beautiful, and scalable digital experiences."
                </div>

            </div>
        </footer>
    );
};

export default Footer;
