import React from 'react';
import { Smartphone, Apple, Check, Share2, PlusSquare, Download, X } from 'lucide-react';

export default function PwaInstallModal({ isOpen, onClose, deferredPrompt, onTriggerInstall }) {
  if (!isOpen) return null;

  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog">
      <div className="modal-pwa-card animate-pop-in" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="pwa-modal-title-group">
            <Smartphone className="pwa-header-icon" size={24} />
            <h3>Installer Plancha-Master sur votre téléphone</h3>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="pwa-modal-body">
          <div className="pwa-app-preview">
            <img src="./pwa-icon.svg" alt="PlanchaMaster" className="pwa-preview-icon" />
            <div>
              <div className="pwa-preview-name">Plancha-Master Québec</div>
              <div className="pwa-preview-desc">Application rapide, plein écran & hors-ligne</div>
            </div>
          </div>

          {/* Si navigateur Android / Chrome avec prompt natif disponible */}
          {deferredPrompt ? (
            <div className="pwa-native-install-box">
              <p>Cliquez sur le bouton ci-dessous pour ajouter l'application directement à votre écran d'accueil :</p>
              <button
                type="button"
                className="btn-primary-glow btn-install-cta"
                onClick={onTriggerInstall}
              >
                <Download size={18} />
                <span>Installer sur mon appareil</span>
              </button>
            </div>
          ) : (
            <div className="pwa-instructions-tabs">
              {/* Instructions iPhone / iPad */}
              <div className="pwa-step-guide">
                <div className="step-guide-header">
                  <Apple size={18} />
                  <strong>Sur iPhone & iPad (Safari) :</strong>
                </div>
                <ol className="pwa-steps-list">
                  <li>
                    Ouvrez ce site dans <strong>Safari</strong>.
                  </li>
                  <li>
                    Appuyez sur le bouton <strong>Partager</strong> <Share2 size={16} className="inline-icon" /> (le carré avec une flèche vers le haut au bas de l'écran).
                  </li>
                  <li>
                    Faites défiler vers le bas et touchez <strong>« Sur l'écran d'accueil »</strong> <PlusSquare size={16} className="inline-icon" />.
                  </li>
                  <li>
                    Appuyez sur <strong>« Ajouter »</strong> en haut à droite.
                  </li>
                </ol>
              </div>

              {/* Instructions Android */}
              <div className="pwa-step-guide">
                <div className="step-guide-header">
                  <Smartphone size={18} />
                  <strong>Sur Android (Chrome) :</strong>
                </div>
                <ol className="pwa-steps-list">
                  <li>Appuyez sur le menu <strong>(3 petits points)</strong> en haut à droite dans Chrome.</li>
                  <li>Sélectionnez <strong>« Installer l'application »</strong> ou <strong>« Ajouter à l'écran d'accueil »</strong>.</li>
                </ol>
              </div>
            </div>
          )}

          <div className="pwa-benefits-list">
            <div className="benefit-item">
              <Check size={16} className="text-green-600" />
              <span>Accès instantané sans ouvrir le navigateur</span>
            </div>
            <div className="benefit-item">
              <Check size={16} className="text-green-600" />
              <span>Fonctionne même sans réseau ou dans l'épicerie</span>
            </div>
            <div className="benefit-item">
              <Check size={16} className="text-green-600" />
              <span>100 % gratuit et sans passer par l'App Store</span>
            </div>
          </div>
        </div>

        <div className="modal-actions-footer">
          <button type="button" className="btn-primary-glow" onClick={onClose}>
            J'ai compris !
          </button>
        </div>
      </div>
    </div>
  );
}
