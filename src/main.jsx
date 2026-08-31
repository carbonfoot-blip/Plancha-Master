import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Enregistrement du Service Worker pour PWA & Mode Hors-ligne
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('PWA Service Worker actif avec succès :', reg.scope);
      })
      .catch((err) => {
        console.warn('Erreur enregistrement Service Worker :', err);
      });
  });
}
