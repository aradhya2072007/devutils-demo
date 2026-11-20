import React, { useState } from 'react';
import {
  Copy,
  Check,
  Package,
  ShieldCheck,
  Activity,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Hero({ onSelectCategory, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const installCmd = 'npm install @aradhya2072007/devutils-npm';

  const handleCopyInstall = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Command Copied!',
        message: 'npm install @aradhya2072007/devutils-npm copied to clipboard.'
      });
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span>Advanced Software Development — Live Demo Application</span>
        </div>

        <h1 className="hero-title">
          Explore the <span className="gradient-text">DevUtils</span> JavaScript Toolkit
        </h1>

        <p className="hero-description">
          A high-performance, zero-dependency utility library for modern JavaScript developers.
          Interactive playground executing live from the published NPM package with 100% pure functions.
        </p>

        {/* Install Command Terminal Box */}
        <div className="install-box">
          <div className="install-prefix">$</div>
          <code className="install-command">{installCmd}</code>
          <button
            onClick={handleCopyInstall}
            className="btn-copy-install"
            title="Copy install command"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Stats Cards */}
        <div className="hero-stats-grid">
          <div className="hero-stat-card">
            <div className="stat-icon-wrapper stat-indigo">
              <Package className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="stat-info">
              <span className="stat-value">v1.0.0</span>
              <span className="stat-label">Published on NPM</span>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-wrapper stat-purple">
              <Layers className="w-5 h-5 text-purple-400" />
            </div>
            <div className="stat-info">
              <span className="stat-value">31 Functions</span>
              <span className="stat-label">Across 6 Categories</span>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-wrapper stat-emerald">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="stat-info">
              <span className="stat-value">0 Dependencies</span>
              <span className="stat-label">100% Native & Clean</span>
            </div>
          </div>

          <div className="hero-stat-card">
            <div className="stat-icon-wrapper stat-sky">
              <Activity className="w-5 h-5 text-sky-400" />
            </div>
            <div className="stat-info">
              <span className="stat-value">99.1% Coverage</span>
              <span className="stat-label">126 Automated Tests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
