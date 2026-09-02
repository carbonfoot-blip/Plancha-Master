import { Flame, UtensilsCrossed, ShoppingCart, ExternalLink, Sparkles, Users, RefreshCw, Lock, Unlock, ShieldCheck, Plus, Tag, Smartphone, X } from 'lucide-react';

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
  onOpenNewRecipe,
  onOpenPwaModal,
  onOpenReleaseNotes,
  hasUnreadReleaseNotes,
  activeReleaseNotes,
  showBroadcastBanner,
  onDismissBroadcast
}) {
  const steps = [
    { id: 0, label: 'Rabais de la semaine', shortLabel: 'Rabais', icon: Tag, isDeals: true, badge: '🔥 Spéciaux' },
    { id: 1, label: 'Choisir les repas', shortLabel: 'Repas', icon: UtensilsCrossed, badge: `${selectedCount}/5` },
    { id: 2, label: 'Menu de la semaine', shortLabel: 'Menu', icon: Flame, badge: `${selectedCount}` },
    { id: 3, label: 'Liste d\'épicerie', shortLabel: 'Épicerie', icon: ShoppingCart },
    { id: 4, label: 'Commandes en ligne', shortLabel: 'Épiceries', icon: ExternalLink }
  ];

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo & Brand */}
        <div className="brand-section" onClick={() => setActiveStep(1)} role="button" tabIndex={0} id="nav-brand-logo">
          <div className="logo-badge">
            <Flame className="logo-icon-flame" size={22} />
          </div>
          <div className="brand-text">
            <div className="brand-title">
              Plancha<span className="brand-accent">Master</span>
            </div>
            <div className="brand-subtitle">Repas Familiaux & Épicerie</div>
          </div>
        </div>

        {/* Global Controls: Portions, Admin, Reset */}
        <div className="header-controls">
          {/* Portion Adjuster */}
          <div className="portion-selector-pill" title="Ajuster le nombre de portions">
            <Users size={15} className="portion-icon" />
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
              <button
                type="button"
                className="btn-nav-add-recipe"
                onClick={onOpenNewRecipe}
                id="btn-nav-create-recipe"
                title="Créer une nouvelle recette"
              >
                <Plus size={14} />
                <span className="btn-text-hide-mobile">Nouvelle Recette</span>
              </button>

              <button
                type="button"
                className={`btn-cloud-status ${isCloudActive ? 'is-cloud-connected' : 'is-cloud-local'}`}
                onClick={onOpenCloudConfig}
                title={isCloudActive ? "Connecté à Firebase Cloud Firestore" : "Mode local actif"}
                id="btn-nav-cloud-config"
              >
                <span className="cloud-dot"></span>
                <span className="cloud-btn-text btn-text-hide-mobile">{isCloudActive ? "Cloud BD" : "BD Locale"}</span>
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
              title="Accès Administrateur"
              id="btn-nav-unlock-admin"
            >
              <Lock size={14} />
              <span className="admin-btn-text">Admin</span>
            </button>
          )}

          {/* Bouton Nouveautés & Mises à Jour (Broadcast) */}
          <button
            type="button"
            className={`btn-release-notes ${hasUnreadReleaseNotes ? 'has-unread' : ''}`}
            onClick={onOpenReleaseNotes}
            title="Consulter les dernières nouveautés de l'application"
            id="btn-nav-release-notes"
          >
            <Sparkles size={14} className="release-sparkle-icon" />
            <span className="pwa-install-text btn-text-hide-mobile">Nouveautés</span>
            {hasUnreadReleaseNotes && <span className="release-unread-dot" title="Nouvelles mises à jour disponibles" />}
          </button>

          {/* Bouton Installer l'Application (PWA) */}
          <button
            type="button"
            className="btn-pwa-install-trigger"
            onClick={onOpenPwaModal}
            title="Installer l'application sur votre téléphone (iOS / Android)"
            id="btn-nav-install-pwa"
          >
            <Smartphone size={14} />
            <span className="pwa-install-text btn-text-hide-mobile">Installer l'App</span>
          </button>

          {selectedCount > 0 && (
            <button
              type="button"
              className="btn-reset-light"
              onClick={onResetMenu}
              title="Réinitialiser la sélection"
              id="btn-reset-selection"
            >
              <RefreshCw size={13} />
              <span className="btn-reset-text">Vider</span>
            </button>
          )}
        </div>
      </div>

      {/* Broadcast Top Strip (Affiché subtilement si des nouveautés récentes existent) */}
      {showBroadcastBanner && activeReleaseNotes && activeReleaseNotes.length > 0 && (
        <div className="broadcast-top-strip animate-fade-in" id="navbar-broadcast-strip">
          <div className="broadcast-strip-content" onClick={onOpenReleaseNotes} role="button" tabIndex={0}>
            <span className="broadcast-sparkle-pill">✨ {activeReleaseNotes[0].version}</span>
            <span className="broadcast-strip-text">{activeReleaseNotes[0].title}</span>
            <span className="broadcast-strip-cta">Voir les nouveautés →</span>
          </div>
          <button
            type="button"
            className="broadcast-strip-close"
            onClick={(e) => {
              e.stopPropagation();
              if (onDismissBroadcast) onDismissBroadcast();
            }}
            title="Masquer cette notification"
            aria-label="Fermer"
          >
            <X size={14} />
          </button>
        </div>
      )}

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
                className={`step-nav-item ${step.isDeals ? 'step-deals-item' : ''} ${isActive ? 'is-active' : ''} ${isCompleted ? 'is-completed' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className={`step-number-circle ${step.isDeals ? 'deals-circle' : ''}`}>
                  {step.isDeals ? <Tag size={13} /> : step.id}
                </div>
                <Icon size={16} className="step-icon" />
                <span className="step-title step-title-full">{step.label}</span>
                <span className="step-title step-title-short">{step.shortLabel}</span>
                {step.badge && (
                  <span className={`step-badge ${step.isDeals ? 'badge-deals-hot' : ''} ${selectedCount >= 5 && !step.isDeals ? 'badge-full' : ''}`}>
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
