import React, { useState, useEffect } from 'react';
import { X, Cloud, Check, Database, AlertCircle, RefreshCw, Key, HelpCircle, ExternalLink } from 'lucide-react';
import { getStoredFirebaseConfig, saveFirebaseConfig, resetAllRecipesToDefaults } from '../services/dbService';

export default function CloudConfigModal({ isCloudActive, onConfigUpdated, onResetDefaults, onClose }) {
  const currentConfig = getStoredFirebaseConfig();

  const [apiKey, setApiKey] = useState(currentConfig?.apiKey || '');
  const [authDomain, setAuthDomain] = useState(currentConfig?.authDomain || '');
  const [projectId, setProjectId] = useState(currentConfig?.projectId || '');
  const [storageBucket, setStorageBucket] = useState(currentConfig?.storageBucket || '');
  const [messagingSenderId, setMessagingSenderId] = useState(currentConfig?.messagingSenderId || '');
  const [appId, setAppId] = useState(currentConfig?.appId || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (!apiKey.trim() || !projectId.trim()) {
      alert('Veuillez renseigner au minimum la clé API (apiKey) et le Project ID.');
      return;
    }

    const config = {
      apiKey: apiKey.trim(),
      authDomain: authDomain.trim(),
      projectId: projectId.trim(),
      storageBucket: storageBucket.trim(),
      messagingSenderId: messagingSenderId.trim(),
      appId: appId.trim()
    };

    saveFirebaseConfig(config);
    setSavedSuccess(true);
    setTimeout(() => {
      onConfigUpdated();
      onClose();
    }, 1200);
  };

  const handleDisconnect = () => {
    if (window.confirm('Voulez-vous déconnecter Firebase et revenir au mode stockage local du navigateur ?')) {
      saveFirebaseConfig(null);
      onConfigUpdated();
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" id="cloud-config-modal">
      <div className="modal-content modal-cloud-card animate-pop-in" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-meta">
            <Cloud size={22} className="text-orange" />
            <h2 className="editor-modal-title">Base de Données Cloud (Firebase)</h2>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer">
            <X size={22} />
          </button>
        </div>

        <div className="cloud-modal-body">
          <div className={`cloud-status-banner ${isCloudActive ? 'status-connected' : 'status-local'}`}>
            <Database size={20} />
            <div>
              <strong>{isCloudActive ? 'Connecté à Firebase Cloud Firestore' : 'Mode Stockage Local Actif (Hors-ligne / Navigateur)'}</strong>
              <p>
                {isCloudActive
                  ? 'Toutes vos recettes ajoutées ou modifiées sont synchronisées en temps réel dans le Cloud.'
                  : 'Vos recettes et modifications sont sauvegardées dans votre navigateur. Connectez Firebase ci-dessous pour les synchroniser sur tous vos appareils.'}
              </p>
            </div>
          </div>

          <div className="cloud-guide-note">
            <HelpCircle size={18} className="text-orange" />
            <div>
              <strong>Comment créer votre base de données Cloud gratuite ?</strong>
              <p>
                1. Rendez-vous sur <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="link-inline">console.firebase.google.com <ExternalLink size={12} /></a> (100% gratuit).<br/>
                2. Créez un projet → Ajoutez une application Web → Activez <strong>Cloud Firestore</strong>.<br/>
                3. Copiez les clés de configuration dans le formulaire ci-dessous :
              </p>
            </div>
          </div>

          <form onSubmit={handleSave} className="cloud-config-form">
            <div className="form-group">
              <label htmlFor="cfg-api-key">API Key * :</label>
              <input
                id="cfg-api-key"
                type="text"
                className="form-control"
                placeholder="AIzaSy..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cfg-proj-id">Project ID * :</label>
              <input
                id="cfg-proj-id"
                type="text"
                className="form-control"
                placeholder="plancha-master-12345"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                required
              />
            </div>

            <div className="form-row-2cols">
              <div className="form-group">
                <label htmlFor="cfg-auth-domain">Auth Domain :</label>
                <input
                  id="cfg-auth-domain"
                  type="text"
                  className="form-control"
                  placeholder="plancha-master.firebaseapp.com"
                  value={authDomain}
                  onChange={(e) => setAuthDomain(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cfg-app-id">App ID :</label>
                <input
                  id="cfg-app-id"
                  type="text"
                  className="form-control"
                  placeholder="1:123456789:web:abcdef"
                  value={appId}
                  onChange={(e) => setAppId(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer-cloud">
              {currentConfig && (
                <button
                  type="button"
                  className="btn-disconnect-cloud"
                  onClick={handleDisconnect}
                >
                  Déconnecter Firebase
                </button>
              )}

              <div className="cloud-save-actions">
                <button type="button" className="btn-modal-back" onClick={onClose}>
                  Fermer
                </button>
                <button type="submit" className="btn-primary-glow" id="btn-save-cloud-config">
                  {savedSuccess ? <Check size={18} /> : <Cloud size={18} />}
                  <span>{savedSuccess ? 'Connexion enregistrée !' : 'Enregistrer la connexion'}</span>
                </button>
              </div>
            </div>
          </form>

          {/* Section Réinitialisation */}
          <div className="cloud-reset-section">
            <h4 className="reset-section-title">Réinitialiser les recettes de base</h4>
            <p className="reset-section-desc">
              Si vous souhaitez restaurer les 20 recettes d'origine de l'application Plancha-Master :
            </p>
            <button
              type="button"
              className="btn-reset-recipes-light"
              onClick={onResetDefaults}
            >
              <RefreshCw size={14} />
              <span>Restaurer les 20 recettes par défaut</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
