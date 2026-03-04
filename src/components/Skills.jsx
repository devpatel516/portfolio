import React from 'react';
import {
    FaJava, FaPython, FaReact, FaNodeJs, FaDocker, FaGithub, FaDatabase,
} from 'react-icons/fa';
import {
    SiCplusplus, SiJavascript, SiExpress, SiMongodb, SiMysql,
    SiNumpy, SiPandas, SiScikitlearn, SiTableau, SiKnime,
    SiLangchain, SiN8N, SiFastapi,
    SiGit,
} from 'react-icons/si';
import { TbBrain, TbHierarchy, TbChartBar, TbNetwork, TbCpu } from 'react-icons/tb';
import { BiNetworkChart } from 'react-icons/bi';

/* ─── data ─────────────────────────────────────────────────────────────────── */

const categories = [
    {
        id: 'lang',
        label: 'Programming Languages',
        icon: 'code',
        iconBg: 'bg-blue-500/10 text-blue-400',
        skills: [
            { name: 'C++', icon: <SiCplusplus />, color: '#f34b7d' },
            { name: 'Java', icon: <FaJava />, color: '#b07219' },
            { name: 'JavaScript', icon: <SiJavascript />, color: '#f1e05a' },
            { name: 'Python', icon: <FaPython />, color: '#3572A5' },
            { name: 'SQL', icon: <FaDatabase />, color: '#e38c00' },
        ],
    },
    {
        id: 'core',
        label: 'Core Subjects',
        icon: 'school',
        iconBg: 'bg-indigo-500/10 text-indigo-400',
        skills: [
            { name: 'OOP', icon: <TbCpu />, color: '#818cf8' },
            { name: 'OS', icon: <TbNetwork />, color: '#a78bfa' },
            { name: 'DBMS', icon: <FaDatabase />, color: '#c084fc' },
        ],
    },
    {
        id: 'ds',
        label: 'Data Science & ML',
        icon: 'insights',
        iconBg: 'bg-teal-500/10 text-teal-400',
        skills: [
            { name: 'NumPy', icon: <SiNumpy />, color: '#4dabf5' },
            { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
            { name: 'Matplotlib', icon: <TbChartBar />, color: '#11a0dc' },
            { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#f89939' },
            { name: 'Tableau', icon: <SiTableau />, color: '#e97627' },
            { name: 'KNIME', icon: <SiKnime />, color: '#ffd700' },
        ],
    },
    {
        id: 'genai',
        label: 'Generative AI',
        icon: 'auto_awesome',
        iconBg: 'bg-pink-500/10 text-pink-400',
        skills: [
            { name: 'LangChain', icon: <SiLangchain />, color: '#1c3c3c' },
            { name: 'MCP', icon: <TbHierarchy />, color: '#3ad454' },
            { name: 'n8n', icon: <SiN8N />, color: '#ef5350' },
            { name: 'Deep Learning', icon: <TbBrain />, color: '#ff6f00' },
            { name: 'NLP', icon: <BiNetworkChart />, color: '#26c6da' },
        ],
    },
    {
        id: 'web',
        label: 'Web Development & Database',
        icon: 'public',
        iconBg: 'bg-purple-500/10 text-purple-400',
        skills: [
            { name: 'React', icon: <FaReact />, color: '#61dafb' },
            { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
            { name: 'Express', icon: <SiExpress />, color: '#eeeeee' },
            { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d' },
            { name: 'MySQL', icon: <SiMysql />, color: '#00758f' },
        ],
    },
    {
        id: 'tools',
        label: 'Tools',
        icon: 'build',
        iconBg: 'bg-orange-500/10 text-orange-400',
        skills: [
            { name: 'Git', icon: <SiGit />, color: '#F05032' },
            { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
            { name: 'Docker', icon: <FaDocker />, color: '#2496ed' },
        ],
    },
];

/* ─── card ──────────────────────────────────────────────────────────────────── */

const SkillCard = ({ name, icon, color }) => (
    <div
        className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-github-border
                bg-white dark:bg-[#161b22] hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5
                transition-all duration-200 cursor-default"
    >
        <div
            className="w-12 h-12 flex items-center justify-center rounded-xl text-3xl transition-transform duration-200 group-hover:scale-110"
            style={{ color, background: `${color}18` }}
        >
            {icon}
        </div>
        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 text-center leading-tight">
            {name}
        </span>
    </div>
);

/* ─── category block ────────────────────────────────────────────────────────── */

const CategoryBlock = ({ label, icon, iconBg, skills }) => (
    <div className="mb-12">
        <div className="flex items-center gap-3 mb-5">
            <span className={`p-2 rounded-lg ${iconBg}`}>
                <span className="material-symbols-outlined text-xl">{icon}</span>
            </span>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{label}</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {skills.map((s) => (
                <SkillCard key={s.name} {...s} />
            ))}
        </div>
    </div>
);

/* ─── page ──────────────────────────────────────────────────────────────────── */

const Skills = () => (
    <section id="skills" className="flex-grow flex flex-col justify-start relative overflow-hidden py-10">
        {/* background */}
        <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]"
                style={{ backgroundImage: 'radial-gradient(#39d353 1px, transparent 1px)', backgroundSize: '32px 32px' }}
            />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
            {/* heading */}
            <div className="mb-10 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white font-display mb-4">
                    Technical Skills
                </h2>
                <p className="text-slate-600 dark:text-github-text-secondary text-lg max-w-2xl mx-auto">
                    A comprehensive overview of my technical stack — from core CS fundamentals to cutting-edge AI tools.
                </p>
            </div>

            {categories.map((cat) => (
                <CategoryBlock key={cat.id} {...cat} />
            ))}
        </div>
    </section>
);

export default Skills;
