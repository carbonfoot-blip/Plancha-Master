import React, { useState, useMemo } from 'react';
import {
  Search,
  Flame,
  Zap,
  Clock,
  Filter,
  Sparkles,
  Plus,
  Check,
  Eye,
  ArrowRight,
  ShieldAlert,
  RotateCcw
} from 'lucide-react';
import { PROTEIN_TYPES, COOKING_MODES, TIME_CATEGORIES, ALLERGENS_LIST } from '../data/recipes';

export default function Step1Selection({
  recipes,
  selectedRecipes,
  onToggleRecipe,
  onSelectRandom5,
  onViewRecipe,
  onNextStep
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProtein, setSelectedProtein] = useState('all');
  const [selectedMode, setSelectedMode] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [excludedAllergens, setExcludedAllergens] = useState([]);
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);

  // Toggle exclusion d'allergènes
  const toggleAllergenExclusion = (allergen) => {
    setExcludedAllergens(prev =>
      prev.includes(allergen) ? prev.filter(a => a !== allergen) : [...prev, allergen]
    );
  };

  // Réinitialiser les filtres
  const resetFilters = () => {
    setSearchQuery('');
    setSelectedProtein('all');
    setSelectedMode('all');
    setSelectedTime('all');
    setExcludedAllergens([]);
  };

  // Filtrage des recettes
  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Recherche textuelle
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = recipe.title.toLowerCase().includes(q);
        const matchDesc = recipe.description.toLowerCase().includes(q);
        const matchIng = recipe.ingredients.some(i => i.name.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchIng) return false;
      }

      // Filtre Protéine
      if (selectedProtein !== 'all' && recipe.proteinType !== selectedProtein) {
        return false;
      }

      // Filtre Mode de cuisson
      if (selectedMode !== 'all') {
        if (selectedMode === 'plancha' && recipe.cookingMode !== 'plancha' && recipe.cookingMode !== 'mixte') return false;
        if (selectedMode === 'rapide' && recipe.cookingMode !== 'rapide' && recipe.cookingMode !== 'mixte') return false;
        if (selectedMode === 'mixte' && recipe.cookingMode !== 'mixte') return false;
      }

      // Filtre Temps
      if (selectedTime !== 'all' && recipe.timeCategory !== selectedTime) {
        return false;
      }

      // Filtre Allergènes exclus
      if (excludedAllergens.length > 0 && recipe.allergens) {
        const hasExcluded = recipe.allergens.some(alg => excludedAllergens.includes(alg));
        if (hasExcluded) return false;
      }

      return true;
    });
  }, [recipes, searchQuery, selectedProtein, selectedMode, selectedTime, excludedAllergens]);

  const selectedCount = selectedRecipes.length;
  const isSelected = (id) => selectedRecipes.some(r => r.id === id);

  return (
    <div className="step-page-container animate-fade-in" id="step-1-selection-screen">
      {/* Hero Banner with Summary & Magic Button */}
      <div className="selection-hero-card">
        <div className="selection-hero-content">
          <div className="hero-tagline">
            <span className="hero-pill">Étape 1 sur 4</span>
            <span className="hero-subpill">Standard familial : 4 portions</span>
          </div>
          <h1 className="hero-main-title">Composez vos repas de la semaine</h1>
          <p className="hero-description">
            Sélectionnez 5 recettes adaptées à la <strong>plancha</strong> ou à la <strong>cuisine rapide de semaine</strong>.
            Les ingrédients seront automatiquement cumulés dans votre liste d'épicerie !
          </p>

          <div className="selection-actions-row">
            <button
              type="button"
              id="btn-magic-random-menu"
              className="btn-magic-generate"
              onClick={onSelectRandom5}
              title="Générer automatiquement une sélection variée de 5 repas"
            >
              <Sparkles size={18} className="sparkle-anim" />
              <span>Générateur Magique (5 repas variés)</span>
            </button>

            {selectedCount >= 5 && (
              <button
                type="button"
                id="btn-goto-step2-top"
                className="btn-primary-glow"
                onClick={onNextStep}
              >
                <span>Voir mon Menu de la Semaine</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Progress Tracker */}
        <div className="selection-progress-box">
          <div className="progress-top-info">
            <span className="progress-label">Repas sélectionnés :</span>
            <span className="progress-counter-highlight" id="selection-counter-display">
              {selectedCount} / 5 repas
            </span>
          </div>
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${Math.min(100, (selectedCount / 5) * 100)}%` }}
            ></div>
          </div>
          <div className="progress-status-hint">
            {selectedCount === 0 && '💡 Choisissez vos 5 coups de cœur de la semaine ci-dessous.'}
            {selectedCount > 0 && selectedCount < 5 && `Encore ${5 - selectedCount} repas à sélectionner pour compléter votre semaine.`}
            {selectedCount === 5 && '🎉 Parfait ! Votre semaine de 5 repas est prête.'}
            {selectedCount > 5 && `✨ Vous avez sélectionné ${selectedCount} repas.`}
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="filters-control-panel">
        <div className="search-input-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            id="input-search-recipes"
            placeholder="Rechercher par titre, ingrédient (ex: poulet, citron, brocoli)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-text-input"
          />
          {searchQuery && (
            <button
              type="button"
              className="btn-clear-search"
              onClick={() => setSearchQuery('')}
            >
              ×
            </button>
          )}
        </div>

        {/* Cooking Modes Pills */}
        <div className="mode-toggle-group" role="radiogroup" aria-label="Mode de cuisson">
          {COOKING_MODES.map((mode) => (
            <button
              key={mode.id}
              type="button"
              id={`filter-mode-${mode.id}`}
              className={`mode-toggle-btn ${selectedMode === mode.id ? 'is-active' : ''}`}
              onClick={() => setSelectedMode(mode.id)}
            >
              {mode.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          id="btn-toggle-advanced-filters"
          className={`btn-filter-drawer-toggle ${excludedAllergens.length > 0 || selectedProtein !== 'all' || selectedTime !== 'all' ? 'has-active-filters' : ''}`}
          onClick={() => setShowFiltersDrawer(!showFiltersDrawer)}
        >
          <Filter size={16} />
          <span>Filtres avancés</span>
          {(excludedAllergens.length > 0 || selectedProtein !== 'all' || selectedTime !== 'all') && (
            <span className="active-filters-dot"></span>
          )}
        </button>
      </div>

      {/* Advanced Filters Expandable Drawer */}
      {showFiltersDrawer && (
        <div className="advanced-filters-drawer animate-pop-in" id="advanced-filters-section">
          {/* Protein types */}
          <div className="filter-block">
            <h4 className="filter-block-title">Type de protéine :</h4>
            <div className="filter-pills-row">
              <button
                type="button"
                className={`filter-pill ${selectedProtein === 'all' ? 'is-active' : ''}`}
                onClick={() => setSelectedProtein('all')}
              >
                Toutes les protéines
              </button>
              {PROTEIN_TYPES.map((prot) => (
                <button
                  key={prot}
                  type="button"
                  id={`filter-protein-${prot.replace(/\s+/g, '-').toLowerCase()}`}
                  className={`filter-pill ${selectedProtein === prot ? 'is-active' : ''}`}
                  onClick={() => setSelectedProtein(prot)}
                >
                  {prot}
                </button>
              ))}
            </div>
          </div>

          {/* Time Categories */}
          <div className="filter-block">
            <h4 className="filter-block-title">Temps de préparation :</h4>
            <div className="filter-pills-row">
              <button
                type="button"
                className={`filter-pill ${selectedTime === 'all' ? 'is-active' : ''}`}
                onClick={() => setSelectedTime('all')}
              >
                Tous les temps
              </button>
              {TIME_CATEGORIES.map((time) => (
                <button
                  key={time.id}
                  type="button"
                  className={`filter-pill ${selectedTime === time.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedTime(time.id)}
                >
                  {time.icon} {time.label}
                </button>
              ))}
            </div>
          </div>

          {/* Allergen Exclusions */}
          <div className="filter-block">
            <div className="filter-block-header">
              <h4 className="filter-block-title">
                <ShieldAlert size={15} />
                <span>Exclure les allergènes :</span>
              </h4>
            </div>
            <div className="filter-pills-row">
              {ALLERGENS_LIST.map((alg) => {
                const isExcluded = excludedAllergens.includes(alg);
                return (
                  <button
                    key={alg}
                    type="button"
                    className={`allergen-toggle-chip ${isExcluded ? 'is-excluded' : ''}`}
                    onClick={() => toggleAllergenExclusion(alg)}
                  >
                    {isExcluded ? '✕ Sans ' : '+ '} {alg}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="filters-footer-reset">
            <button
              type="button"
              className="btn-reset-all-filters"
              onClick={resetFilters}
            >
              <RotateCcw size={14} />
              <span>Réinitialiser tous les filtres</span>
            </button>
          </div>
        </div>
      )}

      {/* Results Header & Counter */}
      <div className="recipes-grid-header">
        <div className="results-count-text">
          <strong>{filteredRecipes.length}</strong> recettes disponibles
          {selectedProtein !== 'all' && ` • Protéine: ${selectedProtein}`}
          {selectedMode !== 'all' && ` • Mode: ${selectedMode}`}
        </div>
      </div>

      {/* Recipes Cards Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="empty-results-box">
          <p className="empty-title">Aucune recette ne correspond à ces critères</p>
          <p className="empty-subtitle">Essayez d'ajuster ou de réinitialiser vos filtres.</p>
          <button
            type="button"
            className="btn-reset-light"
            onClick={resetFilters}
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="recipes-cards-grid">
          {filteredRecipes.map((recipe) => {
            const selected = isSelected(recipe.id);

            return (
              <div
                key={recipe.id}
                id={`recipe-card-${recipe.id}`}
                className={`recipe-card ${selected ? 'is-in-menu' : ''}`}
              >
                {/* Card Top Image & Badges */}
                <div className="card-image-box" onClick={() => onViewRecipe(recipe)}>
                  <img src={recipe.image} alt={recipe.title} loading="lazy" className="card-img" />
                  <div className="card-top-badges">
                    <span className="badge-protein">{recipe.proteinType}</span>
                    <span className={`badge-mode mode-${recipe.cookingMode}`}>
                      {recipe.cookingMode === 'plancha' ? '🔥 Plancha' : recipe.cookingMode === 'rapide' ? '⚡ Rapide' : '🍳 Mixte'}
                    </span>
                  </div>

                  <div className="card-hover-overlay">
                    <button
                      type="button"
                      className="btn-view-card-detail"
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewRecipe(recipe);
                      }}
                    >
                      <Eye size={16} />
                      <span>Consulter la recette</span>
                    </button>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="card-body">
                  <div className="card-meta-line">
                    <span className="card-meta-item" title="Temps total de préparation et cuisson">
                      <Clock size={14} />
                      <span>{recipe.prepTime + recipe.cookTime} min</span>
                    </span>
                    <span className="card-meta-item" title="Calories par portion (4 portions standard)">
                      <Flame size={14} />
                      <span>{recipe.calories} kcal / port.</span>
                    </span>
                  </div>

                  <h3 className="card-title" onClick={() => onViewRecipe(recipe)}>
                    {recipe.title}
                  </h3>

                  <p className="card-subtitle">{recipe.subtitle}</p>

                  {/* Main Ingredients preview */}
                  <div className="card-ingredients-preview">
                    <span className="ing-preview-label">Ingrédients clés :</span>
                    <p className="ing-preview-text">
                      {recipe.ingredients.slice(0, 4).map(i => i.name).join(', ')}...
                    </p>
                  </div>

                  {/* Allergens warning chip if any */}
                  {recipe.allergens && recipe.allergens.length > 0 && (
                    <div className="card-allergens-chips">
                      {recipe.allergens.slice(0, 3).map((alg) => (
                        <span key={alg} className="allergen-mini-chip">{alg}</span>
                      ))}
                      {recipe.allergens.length > 3 && (
                        <span className="allergen-mini-chip">+{recipe.allergens.length - 3}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Footer Actions */}
                <div className="card-footer">
                  <button
                    type="button"
                    className="btn-card-details"
                    onClick={() => onViewRecipe(recipe)}
                    id={`btn-view-${recipe.id}`}
                  >
                    Détails & Cuisson
                  </button>

                  <button
                    type="button"
                    id={`btn-select-${recipe.id}`}
                    className={`btn-select-toggle ${selected ? 'is-selected' : ''}`}
                    onClick={() => onToggleRecipe(recipe)}
                    aria-label={selected ? 'Retirer du menu' : 'Ajouter au menu'}
                  >
                    {selected ? (
                      <>
                        <Check size={16} />
                        <span>Sélectionné</span>
                      </>
                    ) : (
                      <>
                        <Plus size={16} />
                        <span>Ajouter</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Floating Bottom Sticky Bar if meals selected */}
      {selectedCount > 0 && (
        <div className="selection-floating-dock animate-pop-in">
          <div className="floating-dock-content">
            <div className="floating-left-info">
              <span className="floating-count-badge">{selectedCount}</span>
              <div className="floating-text-group">
                <strong>{selectedCount} repas au menu</strong>
                <span className="floating-subtext">
                  {selectedCount >= 5 ? 'Semaine complète prête !' : `Ajoutez encore ${5 - selectedCount} pour faire 5 jours`}
                </span>
              </div>
            </div>

            <button
              type="button"
              id="btn-goto-step2-floating"
              className="btn-primary-glow floating-cta-btn"
              onClick={onNextStep}
            >
              <span>Continuer : Menu de la semaine</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
