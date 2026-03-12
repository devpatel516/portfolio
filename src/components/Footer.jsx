import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const socials = [
  { icon: <FaGithub />,    href: 'https://github.com/devpatel516',                          label: 'GitHub',     hoverColor: '#E8EDF2' },
  { icon: <FaLinkedin />,  href: 'https://www.linkedin.com/in/dev-patel-862458288/',        label: 'LinkedIn',   hoverColor: '#0A66C2' },
  { icon: <SiLeetcode />,  href: 'https://leetcode.com/u/devpatel516/',                     label: 'LeetCode',   hoverColor: '#F89F1B' },
  { icon: <SiCodeforces />,href: 'https://codeforces.com/profile/devpatel17207',            label: 'Codeforces', hoverColor: '#1F8ACB' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/dev_patel_516/',               label: 'Instagram',  hoverColor: '#E1306C' },
];

const Footer = () => (
  <footer
    className="mt-auto py-8 px-5 sm:px-8"
    style={{ borderTop: '1px solid #1C242E', background: '#080C10' }}
  >
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">

      {/* Left: wordmark + year */}
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="font-display font-bold text-sm tracking-widest uppercase text-[#4A5568] hover:text-[var(--primary)] transition-colors"
        >
          Dev Patel
        </Link>
        <span className="text-[#1C242E]">·</span>
        <span className="font-mono text-[11px] text-[#4A5568]">© 2026</span>
      </div>

      {/* Center: social icons */}
      <div className="flex items-center gap-5" role="list" aria-label="Social links">
        {socials.map(({ icon, href, label, hoverColor }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#4A5568] text-lg transition-all duration-200 hover:scale-110"
            style={{ '--hover-color': hoverColor }}
            onMouseEnter={e => e.currentTarget.style.color = hoverColor}
            onMouseLeave={e => e.currentTarget.style.color = ''}
            role="listitem"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Right: quote */}
      <p className="font-mono text-[10px] text-[#4A5568] italic text-center sm:text-right max-w-xs">
        "Crafting digital experiences at the edge of what's possible."
      </p>
    </div>
  </footer>
);

export default Footer;
