import React from 'react';

const GitHubStats = ({ githubData, username = 'devpatel516' }) => {
    // If githubData is not yet provided or is structured differently, fallback gracefully
    if (!githubData) return null;

    const { userData, repos, events, loading, error } = githubData;

    if (loading) {
        return (
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 relative overflow-hidden flex justify-center items-center h-[430px] shadow-lg">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--primary)]"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-[#161b22] border border-red-500/30 rounded-xl p-6 relative overflow-hidden h-[430px] flex flex-col items-center justify-center text-center shadow-lg">
                <span className="material-symbols-outlined text-4xl text-red-400 mb-2">error</span>
                <p className="text-red-400 font-medium">Failed to load GitHub stats</p>
                <p className="text-[#8b949e] text-sm mt-1">{error}</p>
            </div>
        );
    }
    // Get recent commits from events
    const pushEvents = events.filter(e => e.type === 'PushEvent');
    const lastActiveRepo = pushEvents.length > 0 ? pushEvents[0].repo.name : 'None recently';

    return (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 relative overflow-hidden group hover:border-[var(--primary)]/50 transition-all shadow-lg hover:shadow-glow">
            <div className="flex items-center justify-between mb-5 border-b border-[#30363d] pb-4">
                <div className="flex items-center gap-3">
                    <img src={userData.avatar_url || "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} alt="GitHub" className="w-10 h-10 rounded-full border border-[#30363d] bg-white" />
                    <div>
                        <h4 className="text-lg font-bold text-white leading-tight">{userData.name || username}</h4>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8b949e] hover:text-[var(--primary)] transition-colors">@{userData.login}</a>
                    </div>
                </div>
                <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-[#8b949e] hover:text-[var(--primary)] transition-colors bg-[#0d1117] p-2 rounded-lg border border-[#30363d]">
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-[#0d1117] border border-[#30363d] p-3 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-[#8b949e] text-[10px] uppercase tracking-wider font-semibold mb-1">Public Repos</span>
                    <span className="text-xl font-bold text-white font-mono">{userData.public_repos}</span>
                </div>
                <div className="bg-[#0d1117] border border-[#30363d] p-3 rounded-lg flex flex-col items-center justify-center text-center">
                    <span className="text-[#8b949e] text-[10px] uppercase tracking-wider font-semibold mb-1">Recent Push</span>
                    <span className="text-xs font-medium text-[var(--primary)] line-clamp-1 break-all px-1" title={lastActiveRepo}>
                        {lastActiveRepo.replace(username + '/', '')}
                    </span>
                </div>
            </div>

            <div>
                <h5 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[var(--primary)]">book</span>
                    Recent Repositories
                </h5>
                <div className="space-y-2">
                    {repos.slice(0, 3).map(repo => (
                        <div key={repo.id} className="flex flex-col gap-1 p-3 rounded-lg bg-[#0d1117] border border-[#30363d] hover:border-[var(--primary)]/30 transition-colors">
                            <div className="flex justify-between items-start">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-[#58a6ff] hover:underline font-medium text-sm truncate max-w-[75%]">
                                    {repo.name}
                                </a>
                                <div className="flex gap-2 text-xs text-[#8b949e]">
                                    {repo.stargazers_count > 0 && (
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">star</span> {repo.stargazers_count}</span>
                                    )}
                                    {repo.forks_count > 0 && (
                                        <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">fork_right</span> {repo.forks_count}</span>
                                    )}
                                </div>
                            </div>
                            {repo.description && (
                                <p className="text-xs text-[#8b949e] line-clamp-1">{repo.description}</p>
                            )}
                            {repo.language && (
                                <div className="flex items-center gap-1.5 mt-1">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                                    <span className="text-[10px] text-[#8b949e]">{repo.language}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper for language colors
function getLanguageColor(lang) {
    const colors = {
        JavaScript: '#f1e05a',
        Python: '#3572A5',
        Java: '#b07219',
        'C++': '#f34b7d',
        HTML: '#e34c26',
        CSS: '#563d7c',
        TypeScript: '#3178c6',
        Jupyter: '#DA5B0B'
    };
    return colors[lang] || '#8b949e';
}

export default GitHubStats;
