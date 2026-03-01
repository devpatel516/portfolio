import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import PageTransition from './components/PageTransition';

function App() {
  const location = useLocation();
  const [githubData, setGithubData] = useState({
    userData: null,
    repos: [],
    events: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = 'devpatel516';

        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) {
          if (userRes.status === 403) throw new Error('API Rate limit exceeded. Try again later.');
          throw new Error('Failed to fetch user data');
        }
        const userJson = await userRes.json();

        // Fetch repos
        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=10`);
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposJson = await reposRes.json();

        // Fetch events
        const eventsRes = await fetch(`https://api.github.com/users/${username}/events?per_page=10`);
        if (!eventsRes.ok) throw new Error('Failed to fetch events');
        const eventsJson = await eventsRes.json();

        setGithubData({
          userData: userJson,
          repos: reposJson,
          events: eventsJson,
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setGithubData(prev => ({ ...prev, loading: false, error: err.message }));
      }
    };

    fetchGitHubData();
  }, []);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      <Background3D />
      <div className="relative z-10 flex flex-col min-h-screen font-display text-slate-100 selection:bg-primary selection:text-[#0d1117]">
        <Header />
        <main className="flex-grow flex flex-col overflow-hidden">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Hero /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
              <Route path="/experience" element={<PageTransition><Experience githubData={githubData} /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
