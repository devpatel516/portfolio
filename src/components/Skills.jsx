import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaGithub, FaDatabase,
} from 'react-icons/fa';
import {
  SiCplusplus, SiJavascript, SiExpress, SiMongodb, SiMysql,
  SiNumpy, SiPandas, SiScikitlearn, SiTableau, SiKnime,
  SiLangchain, SiN8N, SiFastapi, SiGit,
} from 'react-icons/si';
import { TbBrain, TbHierarchy, TbChartBar, TbNetwork, TbCpu } from 'react-icons/tb';
import { BiNetworkChart } from 'react-icons/bi';

const categories = [
  {
    id: 'lang',
    label: 'Languages',
    icon: 'code',
    skills: [
      { name: 'C++',        icon: <SiCplusplus />,  color: '#F34B7D' },
      { name: 'Java',       icon: <FaJava />,        color: '#E97226' },
      { name: 'JavaScript', icon: <SiJavascript />,  color: '#F1E05A' },
      { name: 'Python',     icon: <FaPython />,      color: '#4B8BBE' },
      { name: 'SQL',        icon: <FaDatabase />,    color: '#E38C00' },
    ],
  },
  {
    id: 'core',
    label: 'Core CS',
    icon: 'school',
    skills: [
      { name: 'OOP',  icon: <TbCpu />,    color: '#818CF8' },
      { name: 'OS',   icon: <TbNetwork />, color: '#A78BFA' },
      { name: 'DBMS', icon: <FaDatabase />, color: '#C084FC' },
    ],
  },
  {
    id: 'ds',
    label: 'Data Science & ML',
    icon: 'insights',
    skills: [
      { name: 'NumPy',      icon: <SiNumpy />,       color: '#4DABF5' },
      { name: 'Pandas',     icon: <SiPandas />,      color: '#7A68C2' },
      { name: 'Matplotlib', icon: <TbChartBar />,    color: '#11A0DC' },
      { name: 'Scikit',     icon: <SiScikitlearn />, color: '#F89939' },
      { name: 'Tableau',    icon: <SiTableau />,     color: '#E97627' },
      { name: 'KNIME',      icon: <SiKnime />,       color: '#FFD700' },
    ],
  },
  {
    id: 'genai',
    label: 'Generative AI',
    icon: 'auto_awesome',
    skills: [
      { name: 'LangChain',     icon: <SiLangchain />,    color: '#00FF88' },
      { name: 'MCP',           icon: <TbHierarchy />,    color: '#00FF88' },
      { name: 'n8n',           icon: <SiN8N />,          color: '#EF5350' },
      { name: 'Deep Learning', icon: <TbBrain />,        color: '#FF6F00' },
      { name: 'NLP',           icon: <BiNetworkChart />, color: '#26C6DA' },
    ],
  },
  {
    id: 'web',
    label: 'Web & Database',
    icon: 'public',
    skills: [
      { name: 'React',   icon: <FaReact />,   color: '#61DAFB' },
      { name: 'Node.js', icon: <FaNodeJs />,  color: '#339933' },
      { name: 'Express', icon: <SiExpress />, color: '#EEEEEE' },
      { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#4DB33D' },
      { name: 'MySQL',   icon: <SiMysql />,   color: '#00758F' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'build',
    skills: [
      { name: 'Git',    icon: <SiGit />,    color: '#F05032' },
      { name: 'GitHub', icon: <FaGithub />, color: '#E8EDF2' },
      { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    ],
  },
];

const SkillPill = ({ name, icon, color }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.03 }}
    transition={{ duration: 0.18 }}
    className="skill-card card flex flex-col items-center gap-2 p-4 cursor-default"
    title={name}
  >
    <div
      className="w-10 h-10 flex items-center justify-center rounded-sm text-2xl transition-all duration-200"
      style={{ color, background: `${color}16` }}
    >
      {icon}
    </div>
    <span className="font-mono text-[10px] font-semibold text-[#7A8899] text-center leading-tight whitespace-nowrap">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? categories
    : categories.filter(c => c.id === activeTab);

  return (
    <section id="skills" className="flex-grow py-16 px-5 sm:px-8 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="section-label mb-4"
        >
          /technical-skills
        </motion.p>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#E8EDF2] mb-2">
            My Stack<span style={{ color: 'var(--primary)' }}>.</span>
          </h1>
          <p className="font-mono text-xs text-[#4A5568]">
            From CS fundamentals to cutting-edge AI tooling.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Skill categories"
        >
          <button
            role="tab"
            aria-selected={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
            className="font-mono text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-all duration-150"
            style={activeTab === 'all'
              ? { color: '#080C10', background: 'var(--primary)', borderColor: 'var(--primary)' }
              : { color: '#4A5568', background: '#0E1318', borderColor: '#1C242E' }
            }
          >
            All
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              role="tab"
              aria-selected={activeTab === c.id}
              onClick={() => setActiveTab(c.id)}
              className="font-mono text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-sm border transition-all duration-150"
              style={activeTab === c.id
                ? { color: '#080C10', background: 'var(--primary)', borderColor: 'var(--primary)' }
                : { color: '#4A5568', background: '#0E1318', borderColor: '#1C242E' }
              }
            >
              {c.label}
            </button>
          ))}
        </motion.div>

        {/* Category blocks */}
        {filtered.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: catIdx * 0.06 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[var(--primary)] text-base">{cat.icon}</span>
              <h2 className="font-display font-bold text-base text-[#E8EDF2] tracking-tight">{cat.label}</h2>
              <div className="flex-1 rule-divider" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2.5">
              {cat.skills.map(skill => (
                <SkillPill key={skill.name} {...skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
