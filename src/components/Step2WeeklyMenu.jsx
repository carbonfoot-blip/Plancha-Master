import React, { useState } from 'react';
import {
  Flame,
  Clock,
  Users,
  Eye,
  Trash2,
  ArrowRight,
  PlusCircle,
  ChefHat,
  Sparkles,
  AlertCircle,
  Thermometer,
  ShieldCheck,
  CheckCircle2,
  Share2,
  Check
} from 'lucide-react';
import { GROCERY_DEPARTMENTS } from '../data/recipes';

const DAYS_OF_WEEK = [
  { id: 1, name: 'Lundi', tag: 'Jour 1' },
  { id: 2, name: 'Mardi', tag: 'Jour 2' },
  { id: 3, name: 'Mercredi', tag: 'Jour 3' },
  { id: 4, name: 'Jeudi', tag: 'Jour 4' },
  { id: 5, name: 'Vendredi', tag: 'Jour 5' },
  { id: 6, name: 'Samedi', tag: 'Jour 6' },
  { id: 7, name: 'Dimanche', tag: 'Jour 7' }
];

export default function Step2WeeklyMenu({
  selectedRecipes,
  portions,
  setPortions,
  onRemoveRecipe,
  onViewRecipe,
  onGoToStep1,
  onNextStep,
  onShareMenu
}) {
  const [shareCopied, setShareCopied] = useState(false);
  const portionFactor = portions / 4;

  const handleShare = async () => {
    if (onShareMenu) {
      const res = await onShareMenu();
      if (res && res.method === 'clipboard') {
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 3000);
      }
    }
  };

  return (
    <div className="step-page-container animate-fade-in" id="step-2-weekly-menu-screen">
      {/* Top Banner */}
      <div className="menu-header-bar">
        <div className="menu-header-left">
          <div className="hero-tagline">
            <span className="hero-pill">Étape 2 sur 4</span>
            <span className="hero-subpill">Menu hebdomadaire</span>
          </div>
          <h1 className="menu-page-title">Votre Menu de la Semaine</h1>
          <p className="menu-page-subtitle">
            Consultez les recettes de vos {selectedRecipes.length} repas, vérifiez les temps de cuisson et les conseils pour la plancha.
          </p>
        </div>

        <div className="menu-header-right">
          {/* Share Button */}
          {selectedRecipes.length > 0 && (
            <button
              type="button"
              className="btn-toolbar-action btn-share-highlight"
              onClick={handleShare}
              title="Partager le menu et la liste d'épicerie avec votre conjointe / famille"
            >
              {shareCopied ? <Check size={16} color="#16a34a" /> : <Share2 size={16} />}
              <span>{shareCopied ? 'Lien copié !' : 'Partager le menu'}</span>
            </button>
          )}

          {/* Quick Portions Selector */}
          <div className="portions-card-box">
            <div className="portions-card-header">
              <Users size={16} />
              <span>Ajuster les portions :</span>
            </div>
            <div className="portions-card-controls">
              <button
                type="button"
                className="btn-stepper"
                onClick={() => setPortions(Math.max(1, portions - 1))}
                disabled={portions <= 1}
                id="btn-menu-portion-minus"
              >
                -
              </button>
              <div className="portions-display-value">
                <strong>{portions}</strong>
                <span>portions</span>
              </div>
              <button
                type="button"
                className="btn-stepper"
                onClick={() => setPortions(Math.min(12, portions + 1))}
                disabled={portions >= 12}
                id="btn-menu-portion-plus"
              >
                +
              </button>
            </div>
          </div>

          {selectedRecipes.length > 0 && (
            <button
              type="button"
              id="btn-goto-grocery-top"
              className="btn-primary-glow"
              onClick={onNextStep}
            >
              <span>Voir la Liste d'Épicerie</span>
              <ArrowRight size={18} />
            </button>
          )}
        </div>
      </div>

      {selectedRecipes.length === 0 ? (
        <div className="empty-state-menu">
          <AlertCircle size={48} className="empty-icon" />
          <h3 className="empty-state-title">Aucun repas n'a encore été sélectionné</h3>
          <p className="empty-state-text">
            Revenez à l'étape 1 pour sélectionner 5 délicieuses recettes ou laissez le générateur automatique composer votre semaine.
          </p>
          <button
            type="button"
            className="btn-primary-glow"
            onClick={onGoToStep1}
            id="btn-back-to-step1-empty"
          >
            Choisir mes recettes
          </button>
        </div>
      ) : (
        <>
          {/* Weekly Days Grid */}
          <div className="weekly-days-grid">
            {selectedRecipes.map((recipe, index) => {
              const day = DAYS_OF_WEEK[index] || { name: `Repas ${index + 1}`, tag: `Jour ${index + 1}` };

              return (
                <div key={recipe.id} className="day-menu-card animate-pop-in" id={`day-card-${index + 1}`}>
                  {/* Day Header Badge */}
                  <div className="day-badge-header">
                    <div className="day-name-wrapper">
                      <span className="day-tag-pill">{day.tag}</span>
                      <h3 className="day-name-title">{day.name}</h3>
                    </div>

                    <button
                      type="button"
                      className="btn-remove-day-meal"
                      onClick={() => onRemoveRecipe(recipe.id)}
                      title="Retirer cette recette du menu"
                      aria-label={`Retirer ${recipe.title}`}
                      id={`btn-remove-recipe-${recipe.id}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  {/* Day Recipe Body */}
                  <div className="day-recipe-content">
                    <div className="day-image-row" onClick={() => onViewRecipe(recipe)}>
                      <img
                        src={recipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'}
                        alt={recipe.title}
                        className="day-recipe-img"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="day-image-badge-mode">
                        {recipe.cookingMode === 'plancha' ? '🔥 Plancha' : recipe.cookingMode === 'rapide' ? '⚡ Rapide' : '🍳 Mixte'}
                      </div>
                    </div>

                    <div className="day-text-details">
                      <div className="day-meta-chips">
                        <span className="meta-chip-prot">{recipe.proteinType}</span>
                        <span className="meta-chip-time">
                          <Clock size={13} />
                          <span>{recipe.prepTime + recipe.cookTime} min</span>
                        </span>
                        <span className="meta-chip-cal">
                          {recipe.calories} kcal / port.
                        </span>
                      </div>

                      <h4 className="day-recipe-title" onClick={() => onViewRecipe(recipe)}>
                        {recipe.title}
                      </h4>

                      <p className="day-recipe-desc">{recipe.subtitle}</p>

                      {/* Ingredients Mini Checklist scaled */}
                      <div className="day-ingredients-box">
                        <span className="day-ing-title">
                          Ingrédients principaux ({portions} portions) :
                        </span>
                        <ul className="day-ing-mini-list">
                          {recipe.ingredients.slice(0, 5).map((ing, i) => {
                            const scaled = +(ing.quantity * portionFactor).toFixed(ing.quantity * portionFactor % 1 === 0 ? 0 : 1);
                            return (
                              <li key={i} className="day-ing-item">
                                • {ing.name} : <strong>{scaled} {ing.unit}</strong>
                              </li>
                            );
                          })}
                          {recipe.ingredients.length > 5 && (
                            <li className="day-ing-more">
                              + {recipe.ingredients.length - 5} autres ingrédients...
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* Plancha tips preview */}
                      {recipe.planchaTips && (
                        <div className="day-plancha-tip-snip">
                          <Flame size={14} className="flame-tip-icon" />
                          <span><strong>Conseil plancha :</strong> {recipe.planchaTips}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Day Card Footer */}
                  <div className="day-card-footer">
                    <button
                      type="button"
                      className="btn-day-view-full"
                      onClick={() => onViewRecipe(recipe)}
                      id={`btn-open-day-recipe-${recipe.id}`}
                    >
                      <Eye size={16} />
                      <span>Consulter la fiche complète</span>
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Add more recipes tile if less than 5 */}
            {selectedRecipes.length < 5 && (
              <div className="add-more-day-card" onClick={onGoToStep1} role="button" tabIndex={0} id="btn-add-more-to-menu">
                <PlusCircle size={36} className="add-day-icon" />
                <h4>Ajouter un repas</h4>
                <p>Complétez votre semaine jusqu'à 5 repas ou plus</p>
                <span className="btn-add-day-label">Parcourir le catalogue</span>
              </div>
            )}
          </div>

          {/* Guide des Maîtres de la Plancha */}
          <div className="plancha-guide-container">
            <div className="plancha-guide-header">
              <ChefHat size={24} className="guide-icon" />
              <div>
                <h3 className="guide-title">Guide Rapide : Les 3 Règles d'Or de la Plancha</h3>
                <p className="guide-subtitle">Pour des cuissons parfaites sans attacher et pleines de sucs savoureux</p>
              </div>
            </div>

            <div className="plancha-rules-grid">
              <div className="plancha-rule-item">
                <div className="rule-badge">
                  <Thermometer size={18} />
                  <span>1. Chaleur Vive</span>
                </div>
                <p>
                  Préchauffez toujours votre plancha <strong>8 à 10 minutes</strong>. Faites le test de la goutte d'eau : si elle perle et roule en bille, la plaque est prête (200°C - 250°C).
                </p>
              </div>

              <div className="plancha-rule-item">
                <div className="rule-badge">
                  <Flame size={18} />
                  <span>2. Huiler l'Aliment</span>
                </div>
                <p>
                  Huilez et assaisonnez directement la viande ou les légumes dans un bol avant la cuisson plutôt que d'inonder la plaque. Moins de fumée et meilleure caramélisation !
                </p>
              </div>

              <div className="plancha-rule-item">
                <div className="rule-badge">
                  <ShieldCheck size={18} />
                  <span>3. Déglaçage Minute</span>
                </div>
                <p>
                  En fin de cuisson, versez un filet d'eau ou de jus de citron sur la plaque encore chaude et grattez avec votre spatule en inox vers le bac récupérateur. Nettoyage en 30 secondes !
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="menu-bottom-actions">
            <button
              type="button"
              className="btn-back-link"
              onClick={onGoToStep1}
            >
              ← Modifier la sélection des repas
            </button>

            <button
              type="button"
              id="btn-goto-step3-bottom"
              className="btn-primary-glow btn-large-cta"
              onClick={onNextStep}
            >
              <span>Générer la Liste d'Épicerie Intelligente</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
