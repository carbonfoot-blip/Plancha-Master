import React, { useState } from 'react';
import { X, Flame, Zap, Clock, Users, AlertTriangle, CheckCircle2, ChefHat, Plus, Check, Edit2, Salad, Sparkles, Activity } from 'lucide-react';
import { GROCERY_DEPARTMENTS } from '../data/recipes';

export default function RecipeDetailModal({ recipe, portions, isSelected, onToggleSelect, onEditRecipe, isAdmin, onClose }) {
  const [completedSteps, setCompletedSteps] = useState({});

  if (!recipe) return null;

  const toggleStep = (index) => {
    setCompletedSteps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const portionRatio = portions / 4;
  const singleProt = recipe.macros?.proteins || 35;
  const singleCarb = recipe.macros?.carbs || 40;
  const singleFat = recipe.macros?.fats || 18;
  const singleCal = recipe.calories || 450;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" id="recipe-modal-backdrop">
      <div className="modal-content animate-pop-in" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="recipe-protein-tag">{recipe.proteinType}</span>
            <span className="recipe-mode-badge">
              {recipe.cookingMode === 'plancha' ? (
                <>🔥 Plancha</>
              ) : recipe.cookingMode === 'rapide' ? (
                <>⚡ Cuisine Rapide</>
              ) : (
                <>🍳 Plancha / Poêle</>
              )}
            </span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fermer la fenêtre"
            id="btn-close-modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Hero Body */}
        <div className="modal-hero-grid">
          <div className="modal-image-wrapper">
            <img
              src={recipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'}
              alt={recipe.title}
              className="modal-recipe-img"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
              }}
            />
            <div className="modal-image-overlay">
              <div className="modal-quick-stats">
                <div className="quick-stat-item">
                  <Clock size={16} />
                  <span>Prépa: {recipe.prepTime} min</span>
                </div>
                <div className="quick-stat-item">
                  <Flame size={16} />
                  <span>Cuisson: {recipe.cookTime} min</span>
                </div>
                <div className="quick-stat-item">
                  <span>🔥 {Math.round(singleCal * portionRatio)} kcal ({portions} port.)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-title-desc">
            <h2 className="modal-recipe-title">{recipe.title}</h2>
            <p className="modal-recipe-subtitle">{recipe.subtitle}</p>
            <p className="modal-recipe-desc">{recipe.description}</p>

            {/* Macro-Nutriments Bar */}
            <div className="modal-macros-box">
              <div className="macros-header">
                <Activity size={16} className="macros-icon" />
                <span className="macros-title">Macro-nutriments par portion ({singleCal} kcal) :</span>
              </div>
              <div className="macros-grid">
                <div className="macro-chip macro-prot">
                  <span className="macro-name">🥩 Protéines</span>
                  <span className="macro-val">{singleProt}g</span>
                </div>
                <div className="macro-chip macro-carb">
                  <span className="macro-name">🍞 Glucides</span>
                  <span className="macro-val">{singleCarb}g</span>
                </div>
                <div className="macro-chip macro-fat">
                  <span className="macro-name">🥑 Lipides</span>
                  <span className="macro-val">{singleFat}g</span>
                </div>
              </div>
            </div>

            {recipe.allergens && recipe.allergens.length > 0 && (
              <div className="modal-allergens-bar">
                <AlertTriangle size={16} className="allergen-alert-icon" />
                <span className="allergen-alert-title">Allergènes potentiels :</span>
                <div className="allergen-chips">
                  {recipe.allergens.map((alg) => (
                    <span key={alg} className="allergen-chip">{alg}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>


        {/* Plancha Pro Advice Box */}
        {recipe.planchaTips && (
          <div className="plancha-pro-box">
            <div className="plancha-pro-header">
              <ChefHat size={20} className="plancha-pro-icon" />
              <h4>Conseil du Chef & Spécialité Plancha</h4>
            </div>
            <p className="plancha-pro-text">{recipe.planchaTips}</p>
          </div>
        )}

        {/* Grid 2 Columns: Ingredients & Steps */}
        <div className="modal-recipe-details-grid">
          {/* Ingredients Column */}
          <div className="modal-ingredients-column">
            <div className="section-title-wrapper">
              <h3 className="section-block-title">
                Ingrédients <span className="portion-note">({portions} portions)</span>
              </h3>
            </div>

            <ul className="modal-ingredients-list">
              {recipe.ingredients.map((ing, idx) => {
                const scaledQty = +(ing.quantity * portionRatio).toFixed(ing.quantity * portionRatio % 1 === 0 ? 0 : 1);
                const dept = GROCERY_DEPARTMENTS[ing.department] || GROCERY_DEPARTMENTS.non_perissable;

                return (
                  <li key={idx} className="modal-ingredient-row">
                    <span className="ingredient-dept-dot" title={dept.name} style={{ backgroundColor: dept.color }}></span>
                    <span className="ingredient-name">{ing.name}</span>
                    <span className="ingredient-qty">
                      {scaledQty} {ing.unit}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Steps Column */}
          <div className="modal-steps-column">
            <div className="section-title-wrapper">
              <h3 className="section-block-title">Étapes de préparation</h3>
              <span className="steps-count">{recipe.steps.length} étapes</span>
            </div>

            <ol className="modal-steps-list">
              {recipe.steps.map((step, idx) => {
                const isDone = !!completedSteps[idx];
                return (
                  <li
                    key={idx}
                    className={`modal-step-item ${isDone ? 'step-done' : ''}`}
                    onClick={() => toggleStep(idx)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="step-check-circle">
                      {isDone ? <Check size={14} /> : idx + 1}
                    </div>
                    <p className="step-text">{step}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Modal Bottom Action Footer */}
        <div className="modal-footer">
          <div className="modal-footer-left">
            <button
              type="button"
              className="btn-modal-back"
              onClick={onClose}
            >
              Fermer
            </button>

            {isAdmin && onEditRecipe && (
              <button
                type="button"
                className="btn-modal-edit-recipe"
                onClick={() => {
                  onClose();
                  onEditRecipe(recipe);
                }}
                id="btn-modal-edit-trigger"
              >
                <Edit2 size={16} />
                <span>Modifier la recette</span>
              </button>
            )}
          </div>

          <button
            type="button"
            id="btn-modal-toggle-select"
            className={`btn-modal-select ${isSelected ? 'is-selected-btn' : 'is-not-selected-btn'}`}
            onClick={() => {
              onToggleSelect(recipe);
            }}
          >
            {isSelected ? (
              <>
                <CheckCircle2 size={18} />
                <span>Retirer du menu de la semaine</span>
              </>
            ) : (
              <>
                <Plus size={18} />
                <span>Ajouter à mon menu de la semaine</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
