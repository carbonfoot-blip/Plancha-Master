import React, { useState } from 'react';
import { X, Crown, Check, Zap, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SubscriptionModal({
  isOpen,
  currentUser,
  onUpgradePlan,
  onOpenAuth,
  onClose
}) {
  const [selectedPlan, setSelectedPlan] = useState('annual'); // 'monthly' | 'annual'
  const [isProcessing, setIsProcessing] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = () => {
    if (!currentUser || !currentUser.isLoggedIn) {
      onClose();
      onOpenAuth('register');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      onUpgradePlan(selectedPlan);
      setIsProcessing(false);
      setSuccessNotice(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        setSuccessNotice(false);
        onClose();
      }, 1800);
    }, 600);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" id="subscription-modal">
      <div className="modal-content modal-subscription-card animate-pop-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header sub-header-gradient">
          <div className="modal-header-meta">
            <div className="crown-badge-glow">
              <Crown size={22} className="crown-icon-gold" />
            </div>
            <div>
              <h2 className="editor-modal-title sub-gold-title">
                Passez à Plancha-Master Premium
              </h2>
              <p className="auth-subtitle-text">
                Planifiez vos repas, générez votre liste d'épicerie et économisez chaque semaine
              </p>
            </div>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer">
            <X size={22} />
          </button>
        </div>

        <div className="subscription-modal-body">
          {successNotice ? (
            <div className="sub-success-card animate-scale-up">
              <div className="sub-success-icon-wrap">
                <Crown size={36} className="text-gold" />
              </div>
              <h3>Félicitations et bienvenue dans Plancha-Master Premium !</h3>
              <p>Votre forfait est désormais actif. Toutes les étapes et fonctionnalités sont entièrement déverrouillées.</p>
            </div>
          ) : (
            <>
              {/* Sélecteur des 2 forfaits */}
              <div className="pricing-grid-container">
                {/* Forfait Mensuel */}
                <div
                  className={`pricing-card ${selectedPlan === 'monthly' ? 'is-selected' : ''}`}
                  onClick={() => setSelectedPlan('monthly')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pricing-card-badge">Mensuel</div>
                  <div className="pricing-price-wrap">
                    <span className="pricing-currency">2.99 $</span>
                    <span className="pricing-period"> / mois</span>
                  </div>
                  <p className="pricing-desc">Idéal pour tester sans engagement, annulable à tout moment en 1 clic.</p>
                  <div className="pricing-radio-check">
                    <input
                      type="radio"
                      name="plan_choice"
                      checked={selectedPlan === 'monthly'}
                      onChange={() => setSelectedPlan('monthly')}
                    />
                    <span>Sélectionner le forfait mensuel</span>
                  </div>
                </div>

                {/* Forfait Annuel */}
                <div
                  className={`pricing-card is-popular ${selectedPlan === 'annual' ? 'is-selected' : ''}`}
                  onClick={() => setSelectedPlan('annual')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="pricing-popular-pill">
                    <Sparkles size={12} /> Économisez 30% — Choix Famille n°1
                  </div>
                  <div className="pricing-card-badge">Annuel</div>
                  <div className="pricing-price-wrap">
                    <span className="pricing-currency">24.99 $</span>
                    <span className="pricing-period"> / an</span>
                  </div>
                  <p className="pricing-desc">
                    Revient à seulement <strong>2.08 $ / mois</strong> pour une année complète de repas sans stress.
                  </p>
                  <div className="pricing-radio-check">
                    <input
                      type="radio"
                      name="plan_choice"
                      checked={selectedPlan === 'annual'}
                      onChange={() => setSelectedPlan('annual')}
                    />
                    <span>Sélectionner le forfait annuel</span>
                  </div>
                </div>
              </div>

              {/* Tableau comparatif Gratuit vs Premium */}
              <div className="features-comparison-table">
                <h4 className="comparison-table-title">Comparatif des fonctionnalités :</h4>
                <div className="comparison-row">
                  <span className="feature-name">Voir les spéciaux et rabais circulaires de la semaine</span>
                  <span className="feature-status free-status">✅ Gratuit</span>
                  <span className="feature-status premium-status">⭐ Inclus</span>
                </div>
                <div className="comparison-row">
                  <span className="feature-name">Consulter les recettes et ingrédients</span>
                  <span className="feature-status free-status">✅ Gratuit</span>
                  <span className="feature-status premium-status">⭐ Inclus</span>
                </div>
                <div className="comparison-row highlighted">
                  <span className="feature-name"><strong>Menu de la semaine & planification complète</strong></span>
                  <span className="feature-status free-status">🔒 Verrouillé</span>
                  <span className="feature-status premium-status">⭐ Débloqué</span>
                </div>
                <div className="comparison-row highlighted">
                  <span className="feature-name"><strong>Génération automatique de la liste d'épicerie par rayon</strong></span>
                  <span className="feature-status free-status">🔒 Verrouillé</span>
                  <span className="feature-status premium-status">⭐ Débloqué</span>
                </div>
                <div className="comparison-row highlighted">
                  <span className="feature-name"><strong>Ajustement dynamique des portions (1 à 12 personnes)</strong></span>
                  <span className="feature-status free-status">🔒 Verrouillé</span>
                  <span className="feature-status premium-status">⭐ Débloqué</span>
                </div>
                <div className="comparison-row highlighted">
                  <span className="feature-name"><strong>Préparation de paniers & commandes directes en ligne</strong></span>
                  <span className="feature-status free-status">🔒 Verrouillé</span>
                  <span className="feature-status premium-status">⭐ Débloqué</span>
                </div>
              </div>

              {/* Zone d'action */}
              <div className="sub-action-footer">
                <button
                  type="button"
                  className="btn-primary-glow btn-sub-subscribe"
                  onClick={handleSubscribe}
                  disabled={isProcessing}
                  id="btn-confirm-subscription"
                >
                  <Zap size={18} />
                  <span>
                    {isProcessing
                      ? 'Activation en cours...'
                      : !currentUser?.isLoggedIn
                        ? 'Créer un compte et Débloquer Premium'
                        : `Activer le forfait ${selectedPlan === 'annual' ? 'Annuel (24.99$/an)' : 'Mensuel (2.99$/mois)'}`}
                  </span>
                </button>

                <div className="sub-guarantee-note">
                  <ShieldCheck size={16} />
                  <span>Garantie satisfaction • Sans engagement • Paiement 100% sécurisé</span>
                </div>

                {!currentUser?.isLoggedIn && (
                  <div className="sub-login-prompt">
                    <span>Vous avez déjà un abonnement ? </span>
                    <button
                      type="button"
                      className="btn-link-subtle"
                      onClick={() => {
                        onClose();
                        onOpenAuth('login');
                      }}
                    >
                      Connectez-vous ici
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
