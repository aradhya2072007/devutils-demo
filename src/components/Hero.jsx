import React, { useState } from 'react';
import {
  Copy,
  Check,
  Package,
  ShieldCheck,
  Activity,
  Layers,
  Anvil,
  Sparkles
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
    <section className="hero-banner" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-badge">
          <Anvil className="w-3.5 h-3.5 text-indigo-400" />
          <span>UtilityForge Workspace • Powered by DevUtils</span>
        </div>

        <h1 id="hero-title" className="hero-title">
          Forge Better <span className="gradient-text">JavaScript</span> Workflows
        </h1>

        <p className="hero-description">
          A modern interactive workspace for exploring and executing 31 reusable JavaScript utility functions.
          Powered by the high-performance, zero-dependency <code className="inline-pkg-code">@aradhya2072007/devutils-npm</code> toolkit.
        </p>

        {/* Install Command Terminal Box */}
        <div className="install-box">
          <div className="install-prefix" aria-hidden="true">$</div>
          <code className="install-command">{installCmd}</code>
          <button
            onClick={handleCopyInstall}
            className="btn-copy-install"
            title="Copy install command"
            aria-label="Copy npm install command to clipboard"
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
              <span className="stat-label">Powered by DevUtils</span>
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
