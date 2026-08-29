import React, { useState } from 'react';
import { X, Lock, Key, ShieldCheck, Check, AlertCircle } from 'lucide-react';

const ADMIN_PIN_KEY = 'plancha_master_admin_pin';
const DEFAULT_PIN = '1234';

export function getAdminPin() {
  try {
    return localStorage.getItem(ADMIN_PIN_KEY) || DEFAULT_PIN;
  } catch (e) {
    return DEFAULT_PIN;
  }
}

export function saveAdminPin(newPin) {
  try {
    localStorage.setItem(ADMIN_PIN_KEY, newPin);
  } catch (e) {
    console.error('Erreur sauvegarde PIN:', e);
  }
}

export default function AdminAuthModal({ isOpen, onUnlockSuccess, onClose }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isChangingPin, setIsChangingPin] = useState(false);
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [newPinConfirm, setNewPinConfirm] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const currentPin = getAdminPin();

  const handleUnlock = (e) => {
    e.preventDefault();
    if (pin.trim() === currentPin) {
      setError('');
      onUnlockSuccess();
      onClose();
    } else {
      setError('Code PIN incorrect. Veuillez réessayer.');
      setPin('');
    }
  };

  const handleChangePin = (e) => {
    e.preventDefault();
    if (oldPin.trim() !== currentPin) {
      setError('L\'ancien code PIN est incorrect.');
      return;
    }
    if (newPin.trim().length < 4) {
      setError('Le nouveau code PIN doit comporter au moins 4 caractères.');
      return;
    }
    if (newPin !== newPinConfirm) {
      setError('La confirmation du nouveau PIN ne correspond pas.');
      return;
    }

    saveAdminPin(newPin.trim());
    setSuccessMsg('Code PIN modifié avec succès !');
    setError('');
    setTimeout(() => {
      setIsChangingPin(false);
      setSuccessMsg('');
      setOldPin('');
      setNewPin('');
      setNewPinConfirm('');
    }, 1500);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" id="admin-auth-modal">
      <div className="modal-content modal-auth-card animate-pop-in" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-meta">
            <Lock size={20} className="text-orange" />
            <h2 className="editor-modal-title">
              {isChangingPin ? 'Modifier le Code PIN Admin' : 'Accès Administrateur'}
            </h2>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer">
            <X size={22} />
          </button>
        </div>

        <div className="auth-modal-body">
          {!isChangingPin ? (
            <form onSubmit={handleUnlock} className="admin-pin-form">
              <p className="auth-desc-text">
                Entrez votre code PIN secret pour déverrouiller le <strong>Mode Administrateur</strong> (création, modification d'images, étapes et gestion de la BD).
              </p>

              <div className="form-group">
                <label htmlFor="admin-pin-input">Code PIN Administrateur :</label>
                <input
                  id="admin-pin-input"
                  type="password"
                  maxLength="8"
                  placeholder="Code PIN (défaut: 1234)"
                  className="form-control pin-input-field"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setError('');
                  }}
                  autoFocus
                  required
                />
              </div>

              {error && (
                <div className="auth-error-banner">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}

              <div className="auth-form-footer">
                <button
                  type="button"
                  className="btn-link-subtle"
                  onClick={() => {
                    setIsChangingPin(true);
                    setError('');
                  }}
                >
                  Modifier mon code PIN
                </button>

                <div className="auth-buttons-right">
                  <button type="button" className="btn-modal-back" onClick={onClose}>
                    Annuler
                  </button>
                  <button type="submit" className="btn-primary-glow" id="btn-submit-unlock-admin">
                    <ShieldCheck size={18} />
                    <span>Déverrouiller</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleChangePin} className="admin-pin-form">
              <div className="form-group">
                <label htmlFor="old-pin-input">Ancien Code PIN :</label>
                <input
                  id="old-pin-input"
                  type="password"
                  className="form-control"
                  placeholder="Ancien PIN (ex: 1234)"
                  value={oldPin}
                  onChange={(e) => setOldPin(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="new-pin-input">Nouveau Code PIN (min 4 chiffres/lettres) :</label>
                <input
                  id="new-pin-input"
                  type="password"
                  className="form-control"
                  placeholder="Nouveau PIN"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirm-pin-input">Confirmer le Nouveau Code PIN :</label>
                <input
                  id="confirm-pin-input"
                  type="password"
                  className="form-control"
                  placeholder="Répétez le nouveau PIN"
                  value={newPinConfirm}
                  onChange={(e) => setNewPinConfirm(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="auth-error-banner">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}

              {successMsg && (
                <div className="auth-success-banner">
                  <Check size={16} />
                  <span>{successMsg}</span>
                </div>
              )}

              <div className="auth-form-footer">
                <button
                  type="button"
                  className="btn-link-subtle"
                  onClick={() => {
                    setIsChangingPin(false);
                    setError('');
                  }}
                >
                  ← Retour au déverrouillage
                </button>

                <button type="submit" className="btn-primary-glow">
                  <Check size={18} />
                  <span>Enregistrer le nouveau PIN</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
