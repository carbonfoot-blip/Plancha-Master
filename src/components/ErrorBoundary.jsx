import React from 'react';
import { AlertTriangle, RefreshCw, Trash2, Home } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary a intercepté une erreur :", error, errorInfo);
    this.setState({ errorInfo });
  }

  handleHardRefresh = () => {
    try {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (let registration of registrations) {
            registration.unregister();
          }
        });
      }
      if ('caches' in window) {
        caches.keys().then((keys) => {
          keys.forEach((key) => caches.delete(key));
        });
      }
    } catch (e) {}
    window.location.reload(true);
  };

  handleClearCacheAndReset = () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (let registration of registrations) {
            registration.unregister();
          }
        });
      }
      if ('caches' in window) {
        caches.keys().then((keys) => {
          keys.forEach((key) => caches.delete(key));
        });
      }
    } catch (e) {}
    window.location.href = window.location.origin + window.location.pathname;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          color: '#f8fafc',
          padding: '1.5rem',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            maxWidth: '520px',
            width: '100%',
            backgroundColor: '#1e293b',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
            border: '1px solid #334155',
            textAlign: 'center'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(234, 88, 12, 0.15)',
              color: '#ea580c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <AlertTriangle size={28} />
            </div>

            <h1 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.5rem', color: '#ffffff' }}>
              Mise à jour en cours ou erreur de chargement
            </h1>

            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', marginBottom: '1.5rem' }}>
              Une nouvelle version de Plancha-Master a été déployée. Cliquez sur le bouton ci-dessous pour recharger l'application et appliquer la mise à jour.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <button
                onClick={this.handleHardRefresh}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#ea580c',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.95rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                <RefreshCw size={18} />
                <span>Recharger l'application</span>
              </button>

              <button
                onClick={this.handleClearCacheAndReset}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#cbd5e1',
                  border: '1px solid #334155',
                  borderRadius: '10px',
                  padding: '0.65rem 1.25rem',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                <Trash2 size={16} />
                <span>Vider le cache & réinitialiser</span>
              </button>
            </div>

            {this.state.error && (
              <details style={{ marginTop: '1.5rem', textAlign: 'left', fontSize: '0.75rem', color: '#64748b' }}>
                <summary style={{ cursor: 'pointer', marginBottom: '0.4rem' }}>Détails techniques</summary>
                <pre style={{
                  padding: '0.75rem',
                  backgroundColor: '#0f172a',
                  borderRadius: '8px',
                  overflowX: 'auto',
                  whiteSpace: 'pre-wrap'
                }}>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
