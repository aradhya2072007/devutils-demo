import React from 'react';
import {
  Anvil,
  ExternalLink,
  Search,
  Sparkles,
  Terminal,
  ShieldCheck
} from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Header({ searchQuery, onSearchChange, onQuickFilter }) {
  return (
    <header className="dashboard-header" role="banner">
      <div className="header-left">
        <div 
          className="header-logo" 
          onClick={() => onQuickFilter('all')}
          role="button"
          tabIndex={0}
          aria-label="UtilityForge Home - Show all utilities"
          onKeyDown={(e) => e.key === 'Enter' && onQuickFilter('all')}
        >
          <div className="logo-icon-wrapper" aria-hidden="true">
            <Anvil className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="logo-text-group">
            <div className="logo-title-row">
              <span className="logo-title">UtilityForge</span>
              <span className="badge-pill badge-primary">v1.0.0</span>
            </div>
            <span className="logo-subtitle">Powered by DevUtils</span>
          </div>
        </div>
      </div>

      <div className="header-center">
        <div className="search-bar-wrapper">
          <Search className="search-icon w-4 h-4 text-slate-400" aria-hidden="true" />
          <input
            type="text"
            className="search-input"
            placeholder="Search 31 functions in UtilityForge (e.g., slugify, chunk, email)..."
            aria-label="Search utility functions"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="search-clear-btn"
              title="Clear search"
              aria-label="Clear search query"
            >
              ×
            </button>
          )}
        </div>
      </div>

      <div className="header-right">
        <div className="header-badge-group">
          <span className="badge-pill badge-accent">
            <ShieldCheck className="w-3.5 h-3.5" /> Zero Deps
          </span>
          <span className="badge-pill badge-success">
            <Sparkles className="w-3.5 h-3.5" /> 99.1% Coverage
          </span>
        </div>

        <a
          href="https://www.npmjs.com/package/@aradhya2072007/devutils-npm"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-header-link btn-npm"
          title="View published package @aradhya2072007/devutils-npm on NPM"
          aria-label="View published DevUtils package on NPM"
        >
          <Terminal className="w-4 h-4" />
          <span>NPM</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>

        <a
          href="https://github.com/aradhya2072007/npm-package-asd-project"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-header-link btn-github"
          title="View DevUtils package source repository on GitHub"
          aria-label="View DevUtils source repository on GitHub"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
          <ExternalLink className="w-3 h-3 opacity-60" />
        </a>
      </div>
    </header>
  );
}
