import React, { useState } from 'react';
import { X, Cloud, Check, Database, AlertCircle, RefreshCw, Key, HelpCircle, ExternalLink, Copy, ShieldCheck } from 'lucide-react';
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
  const [copiedRules, setCopiedRules] = useState(false);

  const FIRESTORE_RULES_EXAMPLE = `rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}`;

  const handleCopyRules = () => {
    navigator.clipboard.writeText(FIRESTORE_RULES_EXAMPLE);
    setCopiedRules(true);
    setTimeout(() => setCopiedRules(false), 2500);
  };

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
          <button type=