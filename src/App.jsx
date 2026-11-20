import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import UtilityCard from './components/UtilityCard';
import Toast from './components/Toast';
import { UTILITIES, CATEGORIES } from './data/utilityDefinitions';
import { Search, Sparkles, Filter, ExternalLink, Terminal } from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);

  const showToast = (toastData) => {
    setToast(toastData);
  };

  // Compute utility counts by category
  const countsByCategory = useMemo(() => {
    const counts = {};
    UTILITIES.forEach((u) => {
      counts[u.category] = (counts[u.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter utilities based on category and search query
  const filteredUtilities = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return UTILITIES.filter((u) => {
      const matchesCategory = activeCategory === 'all' || u.category === activeCategory;
      const matchesSearch =
        !query ||
        u.name.toLowerCase().includes(query) ||
        u.summary.toLowerCase().includes(query) ||
        u.category.toLowerCase().includes(query) ||
        u.signature.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="app-container">
      {/* Toast Notification Container */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* Main Top Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onQuickFilter={setActiveCategory}
      />

      <div className="app-layout">
        {/* Left Sidebar Navigation */}
        <Sidebar
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          countsByCategory={countsByCategory}
        />

        {/* Main Content Area */}
        <main className="dashboard-main">
          {/* Hero Banner Section */}
          <Hero
            onSelectCategory={setActiveCategory}
            onShowToast={showToast}
          />

          {/* Section Toolbar */}
          <div className="section-toolbar">
            <div className="toolbar-left">
              <h2 className="section-title">
                {activeCategory === 'all'
                  ? 'All Utilities'
                  : CATEGORIES.find((c) => c.id === activeCategory)?.name}
              </h2>
              <span className="results-badge">
                {filteredUtilities.length} {filteredUtilities.length === 1 ? 'function' : 'functions'} available
              </span>
            </div>

            {searchQuery && (
              <div className="toolbar-right">
                <span className="search-filter-tag">
                  Filtering by: <strong>"{searchQuery}"</strong>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="tag-clear-btn"
                  >
                    ×
                  </button>
                </span>
              </div>
            )}
          </div>

          {/* Utilities Grid */}
          {filteredUtilities.length > 0 ? (
            <div className="utilities-grid">
              {filteredUtilities.map((utility) => (
                <UtilityCard
                  key={utility.id}
                  utility={utility}
                  onShowToast={showToast}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">
                <Search className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="empty-state-title">No utilities matched your search</h3>
              <p className="empty-state-desc">
                No functions matched the term <strong>"{searchQuery}"</strong> in the {activeCategory} category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="btn-empty-reset"
              >
                Clear search and show all 31 utilities
              </button>
            </div>
          )}

          {/* Footer */}
          <footer className="dashboard-footer">
            <div className="footer-content">
              <div className="footer-left">
                <span className="footer-brand">DevUtils Playground</span>
                <span className="footer-separator">•</span>
                <span>Advanced Software Development Evaluation Project</span>
                <span className="footer-separator">•</span>
                <span>Created by Aradhya Tiwari</span>
              </div>

              <div className="footer-links">
                <a
                  href="https://www.npmjs.com/package/@aradhya2072007/devutils-npm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <Terminal className="w-4 h-4" />
                  <span>NPM Registry</span>
                </a>
                <a
                  href="https://github.com/aradhya2072007/devutils-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Demo Repository</span>
                </a>
                <a
                  href="https://github.com/aradhya2072007/npm-package-asd-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Package Repository</span>
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
