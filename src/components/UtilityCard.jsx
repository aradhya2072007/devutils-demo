import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  Copy,
  Check,
  AlertTriangle,
  Clock,
  Code2
} from 'lucide-react';

export default function UtilityCard({ utility, onShowToast }) {
  // Initialize input state with defaults
  const [inputs, setInputs] = useState(() => {
    const initial = {};
    utility.inputs.forEach((inp) => {
      initial[inp.key] = inp.default;
    });
    return initial;
  });

  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [execTime, setExecTime] = useState(null);
  const [outputType, setOutputType] = useState(null);
  const [copied, setCopied] = useState(false);

  // Handle changing input fields
  const handleInputChange = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  // Run the actual utility function from @aradhya2072007/devutils-npm
  const handleExecute = () => {
    setError(null);
    const start = performance.now();
    try {
      const result = utility.execute(inputs);
      const duration = performance.now() - start;
      setOutput(result);
      setExecTime(duration.toFixed(3));

      // Resolve output data type
      if (result === null) setOutputType('null');
      else if (Array.isArray(result)) setOutputType('array');
      else setOutputType(typeof result);
    } catch (err) {
      const duration = performance.now() - start;
      setError(err.message || String(err));
      setOutput(null);
      setExecTime(duration.toFixed(3));
      setOutputType('error');
    }
  };

  // Reset inputs to default values
  const handleReset = () => {
    const initial = {};
    utility.inputs.forEach((inp) => {
      initial[inp.key] = inp.default;
    });
    setInputs(initial);
    setOutput(null);
    setError(null);
    setExecTime(null);
    setOutputType(null);
  };

  // Copy output to clipboard
  const handleCopyOutput = () => {
    if (output === null && !error) return;
    const textToCopy = error
      ? `Error: ${error}`
      : typeof output === 'object'
      ? JSON.stringify(output, null, 2)
      : String(output);

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        title: 'Output Copied!',
        message: `Result of ${utility.name}() copied to clipboard.`
      });
    }
    setTimeout(() => setCopied(false), 2000);
  };

  // Format display of result
  const renderFormattedOutput = () => {
    if (error) {
      return (
        <div className="output-error-box">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
          <span>{error}</span>
        </div>
      );
    }

    if (output === null && execTime === null) {
      return <span className="output-placeholder">Click "Run Function" to execute...</span>;
    }

    if (typeof output === 'object' && output !== null) {
      return (
        <pre className="output-pre">
          <code>{JSON.stringify(output, null, 2)}</code>
        </pre>
      );
    }

    if (typeof output === 'boolean') {
      return (
        <span className={`output-boolean ${output ? 'bool-true' : 'bool-false'}`}>
          {output ? 'true' : 'false'}
        </span>
      );
    }

    return <span className="output-primitive">{String(output)}</span>;
  };

  return (
    <div className="utility-card" id={utility.id}>
      {/* Card Header */}
      <div className="card-header">
        <div className="header-info">
          <div className="title-row">
            <h3 className="function-name">{utility.name}</h3>
            <span className={`category-tag tag-${utility.category}`}>
              {utility.category}
            </span>
          </div>
          <code className="signature-code">{utility.signature}</code>
        </div>
      </div>

      {/* Description */}
      <p className="utility-summary">{utility.summary}</p>

      {/* Input Parameters Form */}
      <div className="card-inputs-section">
        <div className="inputs-label-heading">
          <Code2 className="w-3.5 h-3.5 text-slate-400" />
          <span>Parameters</span>
        </div>

        <div className="inputs-grid">
          {utility.inputs.map((inp) => (
            <div key={inp.key} className="input-group">
              <label className="input-label" htmlFor={`${utility.id}-${inp.key}`}>
                {inp.label}
              </label>

              {inp.type === 'text' && (
                <input
                  id={`${utility.id}-${inp.key}`}
                  type="text"
                  className="control-input"
                  value={inputs[inp.key] ?? ''}
                  onChange={(e) => handleInputChange(inp.key, e.target.value)}
                />
              )}

              {inp.type === 'number' && (
                <input
                  id={`${utility.id}-${inp.key}`}
                  type="number"
                  className="control-input"
                  value={inputs[inp.key] ?? 0}
                  onChange={(e) => handleInputChange(inp.key, e.target.value)}
                />
              )}

              {inp.type === 'textarea' && (
                <textarea
                  id={`${utility.id}-${inp.key}`}
                  rows={3}
                  className="control-textarea"
                  value={inputs[inp.key] ?? ''}
                  onChange={(e) => handleInputChange(inp.key, e.target.value)}
                />
              )}

              {inp.type === 'boolean' && (
                <label className="toggle-switch-wrapper">
                  <input
                    id={`${utility.id}-${inp.key}`}
                    type="checkbox"
                    checked={Boolean(inputs[inp.key])}
                    onChange={(e) => handleInputChange(inp.key, e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                  <span className="toggle-text">
                    {inputs[inp.key] ? 'Enabled (true)' : 'Disabled (false)'}
                  </span>
                </label>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="card-actions">
        <button
          onClick={handleExecute}
          className="btn-action btn-run"
          title={`Execute ${utility.name}()`}
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Run Function</span>
        </button>

        <button
          onClick={handleReset}
          className="btn-action btn-reset"
          title="Reset to default values"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset</span>
        </button>
      </div>

      {/* Output Section */}
      <div className="card-output-section">
        <div className="output-header-row">
          <div className="output-title-group">
            <span className="output-heading">Output</span>
            {outputType && (
              <span className={`output-type-badge type-${outputType}`}>
                {outputType}
              </span>
            )}
            {execTime !== null && (
              <span className="exec-time-badge">
                <Clock className="w-3 h-3" />
                {execTime} ms
              </span>
            )}
          </div>

          {(output !== null || error) && (
            <button
              onClick={handleCopyOutput}
              className="btn-copy-output"
              title="Copy output to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>

        <div className="output-body">
          {renderFormattedOutput()}
        </div>
      </div>
    </div>
  );
}
