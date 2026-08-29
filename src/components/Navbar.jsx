import React from 'react';
import { Flame, UtensilsCrossed, ShoppingCart, ExternalLink, Sparkles, Users, RefreshCw, Lock, Unlock, ShieldCheck, Plus } from 'lucide-react';

export default function Navbar({
  activeStep,
  setActiveStep,
  selectedCount,
  portions,
  setPortions,
  onResetMenu,
  isCloudActive,
  isAdmin,
  onOpenAdminAuth,
  onLockAdmin,
  onOpenCloudConfig,
  onOpenNewRecipe
}) {
  const steps = [
    { id: 1, label: 'Choisir les repas', icon: UtensilsCrossed, badge: `${selectedCount}/5` },
    { id: 2, label: 'Menu de la semaine', icon: Flame, badge: `${selectedCount} repas` },
    { id: 3, label: 'Liste d\'épicerie', icon: ShoppingCart },
    { id: 4, label: 'Commandes en ligne', icon: ExternalLink }
  ];

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo & Brand */}
        <div className="brand-section" onClick={() => setActiveStep(1)} role="button" tabIndex={0} id="nav-brand-logo">
          <div className="logo-badge">
            <Flame className="logo-icon-flame" size={24} />
          </div>
          <div className="brand-text">
            <div className="brand-title">
              Plancha<span className="brand-accent">Master</span>
            </div>
            <div className="brand-subtitle">Repas Familiaux & Épicerie Québec</div>
          </div>
        </div>

        {/* Global Controls: Portions, Admin, Reset */}
        <div className="header-controls">
          {/* Portion Adjuster */}
          <div className="portion-selector-pill" title="Ajuster le nombre de portions pour toutes les recettes et la liste d'épicerie">
            <Users size={16} className="portion-icon" />
            <span className="portion-label">Portions :</span>
            <div className="portion-buttons">
              <button
                type="button"
                className="btn-portion-step"
                onClick={() => setPortions(Math.max(1, portions - 1))}
                disabled={portions <= 1}
                id="btn-portion-decrease"
                aria-label="Diminuer les portions"
              >
                -
              </button>
              <span className="portion-value" id="current-portion-count">{portions}</span>
              <button
                type="button"
                className="btn-portion-step"
                onClick={() => setPortions(Math.min(12, portions + 1))}
                disabled={portions >= 12}
                id="btn-portion-increase"
                aria-label="Augmenter les portions"
              >
                +
              </button>
            </div>
          </div>

          {/* Admin Controls */}
          {isAdmin ? (
            <div className="admin-active-controls">
              <span className="admin-status-badge" title="Mode Administrateur activé : vous pouvez ajouter et modifier les recettes">
                <ShieldCheck size={14} className="text-green" />
                <span>Admin</span>
              </span>

              <button
                type="button"
                className="btn-nav-add-recipe"
                onClick={onOpenNewRecipe}
                id="btn-nav-create-recipe"
                title="Créer une nouvelle recette personnalisée"
              >
                <Plus size={14} />
                <span>Nouvelle Recette</span>
              </button>

              <button
                type="button"
                className={`btn-cloud-status ${isCloudActive ? 'is-cloud-connected' : 'is-cloud-local'}`}
                onClick={onOpenCloudConfig}
                title={isCloudActive ? "Connecté à Firebase Cloud Firestore" : "Mode local actif. Cliquez pour voir la configuration"}
                id="btn-nav-cloud-config"
              >
                <span className="cloud-dot"></span>
                <span className="cloud-btn-text">{isCloudActive ? "Cloud BD" : "BD Locale"}</span>
              </button>

              <button
                type="button"
                className="btn-lock-admin"
                onClick={onLockAdmin}
                title="Verrouiller le mode administrateur"
                id="btn-nav-lock-admin"
              >
                <Unlock size={14} />
                <span className="lock-text">Verrouiller</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn-unlock-trigger"
              onClick={onOpenAdminAuth}
              title="Accès Administrateur pour modifier ou ajouter des recettes"
              id="btn-nav-unlock-admin"
            >
              <Lock size={14} />
              <span>Espace Admin</span>
            </button>
          )}

          {selectedCount > 0 && (
            <button
              type="button"
              className="btn-reset-light"
              onClick={onResetMenu}
              title="Réinitialiser la sélection de la semaine"
              id="btn-reset-selection"
            >
              <RefreshCw size={14} />
              <span className="btn-reset-text">Réinitialiser</span>
            </button>
          )}
        </div>
      </div>

      {/* 4 Steps Navigation Bar */}
      <nav className="steps-nav-bar" aria-label="Étapes de planification">
        <div className="steps-nav-container">
          {steps.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            const isCompleted = activeStep > step.id || (step.id === 1 && selectedCount >= 5);

            return (
              <button
                key={step.id}
                type="button"
                id={`step-nav-btn-${step.id}`}
                className={`step-nav-item ${isActive ? 'is-active' : ''} ${isCompleted ? 'is-completed' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="step-number-circle">
                  {step.id}
                </div>
                <Icon size={18} className="step-icon" />
                <span className="step-title">{step.label}</span>
                {step.badge && (
                  <span className={`step-badge ${selectedCount >= 5 ? 'badge-full' : ''}`}>
                    {step.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
