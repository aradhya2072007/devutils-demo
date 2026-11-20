import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400" />,
    info: <Info className="w-5 h-5 text-indigo-400" />
  };

  return (
    <div className="toast-container">
      <div className={`toast-card toast-${toast.type || 'info'}`}>
        <div className="toast-icon">
          {icons[toast.type] || icons.info}
        </div>
        <div className="toast-content">
          <p className="toast-title">{toast.title}</p>
          {toast.message && <p className="toast-message">{toast.message}</p>}
        </div>
        <button onClick={onClose} className="toast-close-btn" aria-label="Close notification">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
