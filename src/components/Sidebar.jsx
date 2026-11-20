import React from 'react';
import {
  LayoutGrid,
  Type,
  ListOrdered,
  ShieldCheck,
  Boxes,
  Binary,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { CATEGORIES } from '../data/utilityDefinitions';

const ICON_MAP = {
  LayoutGrid,
  Type,
  ListOrdered,
  ShieldCheck,
  Boxes,
  Binary,
  Calendar
};

export default function Sidebar({ activeCategory, onSelectCategory, countsByCategory }) {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-section">
        <div className="sidebar-heading">
          <Layers className="w-3.5 h-3.5 text-indigo-400" />
          <span>Utility Categories</span>
        </div>

        <nav className="sidebar-nav">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || LayoutGrid;
            const isActive = activeCategory === cat.id;
            const count = cat.id === 'all' ? 31 : (countsByCategory[cat.id] || cat.count);

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                data-category={cat.id}
              >
                <div className="nav-item-left">
                  <Icon className={`w-4 h-4 nav-item-icon ${cat.id}`} />
                  <span className="nav-item-label">{cat.name}</span>
                </div>
                <span className={`nav-item-count ${isActive ? 'count-active' : ''}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="sidebar-footer-card">
        <div className="footer-card-header">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span className="footer-card-title">Live NPM Package</span>
        </div>
        <p className="footer-card-desc">
          Installed from registry:
        </p>
        <code className="footer-card-code">
          @aradhya2072007/devutils-npm
        </code>
        <div className="footer-card-meta">
          <span>Author: Aradhya Tiwari</span>
          <span>Version: 1.0.0</span>
        </div>
      </div>
    </aside>
  );
}
