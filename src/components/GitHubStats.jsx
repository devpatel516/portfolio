import React from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHubStats = ({ githubData, username = 'devpatel516' }) => {
  if (!githubData) return null;
  const { userData, repos, events, loading, error } = githubData;

  if (loading) {
    return (
      <div className="card flex items-center justify-center h-48">
        <div
          className="w-6 h-6 border-2 rounded-full animate-spin"
          style={{ borderColor: 'var(--border-mid)', borderTopColor: 'var(--primary)' }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="card flex flex-col items-center justify-center text-center py-10">
        <span className="material-symbols-outlined text-3xl text-red-400 mb-2">error</span>
        <p className="font-mono text-xs text-[#7A8899]">{error}</p>
      </div>
    );
  }

  const pushEvents = events.filter(e => e.type === 'PushEvent');
  const lastActiveRepo = pushEvents.length > 0 ? pushEvents[0].repo.name : '—';

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: '1px solid #1C242E', background: '#141A22' }}
      >
        <div className="flex items-center gap-2.5">
          <img
            src={userData.avatar_url}
            alt="GitHub avatar"
            className="w-6 h-6 rounded-sm"
            style={{ border: '1px solid #253040' }}
          />
          <div>
            <p className="font-mono text-xs font-semibold text-[#E8EDF2]">{userData.name || username}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-[#4A5568] hover:text-[var(--primary)] transition-colors"
            >
              @{userData.login}
            </a>
          </div>
        </div>
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4A5568] hover:text-[var(--primary)] transition-colors"
          aria-label="View GitHub profile"
        >
          <span className="material-symbols-outlined text-[15px]">open_in_new</span>
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-px p-0" style={{ borderBottom: '1px solid #1C242E' }}>
        <div
          className="flex flex-col items-center justify-center py-3"
          style={{ borderRight: '1px solid #1C242E' }}
        >
          <span className="font-mono text-[10px] text-[#4A5568] uppercase tracking-widest mb-0.5">Repos</span>
          <span className="font-display font-bold text-xl text-[#E8EDF2]">{userData.public_repos}</span>
        </div>
        <div className="flex flex-col items-center justify-center py-3">
          <span className="font-mono text-[10px] text-[#4A5568] uppercase tracking-widest mb-0.5">Last Push</span>
          <span
            className="font-mono text-[10px] font-semibold text-center px-2 line-clamp-1 break-all"
            style={{ color: 'var(--primary)' }}
            title={lastActiveRepo}
          >
            {lastActiveRepo.replace(`${username}/`, '')}
          </span>
        </div>
      </div>

      {/* Recent repos */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <FaGithub className="text-[#4A5568] text-sm" />
          <span className="font-mono text-[10px] text-[#4A5568] uppercase tracking-widest">Recent Repositories</span>
        </div>
        <div className="flex flex-col gap-2">
          {repos.slice(0, 3).map(repo => (
            <div
              key={repo.id}
              className="px-3 py-2.5 rounded-sm flex flex-col gap-1 group"
              style={{ background: '#080C10', border: '1px solid #1C242E' }}
            >
              <div className="flex items-start justify-between gap-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-semibold text-[#7A8899] hover:text-[var(--primary)] transition-colors truncate"
                >
                  {repo.name}
                </a>
                <div className="flex gap-2 shrink-0 text-[10px] text-[#4A5568]">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[12px]">star</span>
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
              </div>
              {repo.description && (
                <p className="font-mono text-[10px] text-[#4A5568] line-clamp-1">{repo.description}</p>
              )}
              {repo.language && (
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: getLanguageColor(repo.language) }}
                  />
                  <span className="font-mono text-[9px] text-[#4A5568]">{repo.language}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function getLanguageColor(lang) {
  const map = {
    JavaScript: '#F1E05A',
    Python: '#3572A5',
    Java: '#E97226',
    'C++': '#F34B7D',
    HTML: '#E34C26',
    CSS: '#563D7C',
    TypeScript: '#3178C6',
    Jupyter: '#DA5B0B',
  };
  return map[lang] || '#4A5568';
}

export default GitHubStats;
