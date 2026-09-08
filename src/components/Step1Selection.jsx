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
  RotateCcw,
  Edit2,
  ChefHat,
  Tag,
  Heart,
  Share2
} from 'lucide-react';
import { PROTEIN_TYPES, COOKING_MODES, TIME_CATEGORIES, ALLERGENS_LIST } from '../data/recipes';
import { WEEKLY_DEALS_DATA } from '../data/weeklyDeals';

export default function Step1Selection({
  recipes,
  selectedRecipes,
  favoriteRecipeIds = [],
  onToggleFavorite,
  onShareFavorites,
  onToggleRecipe,
  onSelectRandom5,
  onResetMenu,
  onViewRecipe,
  onOpenNewRecipe,
  onEditRecipe,
  isAdmin,
  onNextStep,
  onGoToDeals
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProtein, setSelectedProtein] = useState('all');
  const [selectedMode, setSelectedMode] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [onlyOnSale, setOnlyOnSale] = useState(false);
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyNewWeekly, setOnlyNewWeekly] = useState(false);
  const [favShareCopied, setFavShareCopied] = useState(false);
  const [excludedAllergens, setExcludedAllergens] = useState([]);
  const [showFiltersDrawer, setShowFiltersDrawer] = useState(false);

  // Mots-clés des rabais sur les PROTÉINES en circulaire cette semaine
  const activeProteinDeals = useMemo(() => {
    return WEEKLY_DEALS_DATA.filter(d => d.category === 'viandes');
  }, []);

  const isRecipeOnSale = (recipe) => {
    if (!recipe) return false;
    const proteinTypeStr = (recipe.proteinType || '').toLowerCase();
    const recipeTitleStr = (recipe.title || '').toLowerCase();
    const primaryMeat = recipe.ingredients?.find(i => i.department === 'viandes')?.name?.toLowerCase() || '';

    return activeProteinDeals.some(deal => {
      return deal.matchedKeywords.some(keyword => {
        const kw = keyword.toLowerCase().trim();
        if (kw.length < 3) return false;
        return proteinTypeStr.includes(kw) || primaryMeat.includes(kw) || recipeTitleStr.includes(kw);
      });
    });
  };

  const isNewWeeklyRecipe = (recipe) => {
    return Boolean(recipe?.isNewWeekly || recipe?.tags?.includes('Nouveauté Semaine'));
  };

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
    setOnlyNewWeekly(false);
    setOnlyOnSale(false);
    setOnlyFavorites(false);
    setExcludedAllergens([]);
  };

  // Filtrage et tri des recettes (avec les NOUVEAUTÉS en haut de la liste)
  const filteredRecipes = useMemo(() => {
    const list = recipes.filter((recipe) => {
      // Filtre Nouveautés de la semaine
      if (onlyNewWeekly && !isNewWeeklyRecipe(recipe)) {
        return false;
      }

      // Filtre Favoris
      if (onlyFavorites && !favoriteRecipeIds.includes(recipe.id)) {
        return false;
      }

      // Recherche textuelle
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = recipe.title.toLowerCase().includes(q);
        const matchDesc = recipe.description.toLowerCase().includes(q);
        const matchIng = recipe.ingredients.some(i => i.name.toLowerCase().includes(q));
        if (!matchTitle && !matchDesc && !matchIng) return false;
      }

      // Filtre Seulement en rabais
      if (onlyOnSale && !isRecipeOnSale(recipe)) {
        return false;
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

    // Tri prioritaire : placer les nouvelles recettes de la semaine au tout début de la liste
    return [...list].sort((a, b) => {
      const aIsNew = isNewWeeklyRecipe(a) ? 1 : 0;
      const bIsNew = isNewWeeklyRecipe(b) ? 1 : 0;
      if (bIsNew !== aIsNew) {
        return bIsNew - aIsNew; // 1 avant 0
      }
      return 0;
    });
  }, [recipes, searchQuery, onlyNewWeekly, onlyFavorites, favoriteRecipeIds, onlyOnSale, selectedProtein, selectedMode, selectedTime, excludedAllergens, activeProteinDeals]);

  const selectedCount = selectedRecipes.length;
  const isSelected = (id) => selectedRecipes.some(r => r.id === id);
  const favoriteCount = recipes.filter(r => favoriteRecipeIds.includes(r.id)).length;
  const newWeeklyCount = recipes.filter(isNewWeeklyRecipe).length;

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

            {selectedCount > 0 && onResetMenu && (
              <button
                type="button"
                className="btn-hero-reset-selection"
                onClick={onResetMenu}
                title="Vider la sélection actuelle"
                id="btn-hero-reset"
              >
                <RotateCcw size={16} />
                <span>Vider la sélection ({selectedCount})</span>
              </button>
            )}

            {isAdmin && (
              <button
                type="button"
                id="btn-hero-add-recipe"
                className="btn-hero-create"
                onClick={onOpenNewRecipe}
                title="Ajouter une nouvelle recette personnalisée"
              >
                <Plus size={18} />
                <span>Ajouter une Recette</span>
              </button>
            )}

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
            {selectedCount > 0 && selectedCount < 5 && `Encore ${5 - selectedCount} recette${5 - selectedCount > 1 ? 's' : ''} à ajouter pour compléter vos 5 jours.`}
            {selectedCount === 5 && '🎉 Parfait ! Vos 5 repas sont prêts pour la semaine.'}
            {selectedCount > 5 && `Vous avez sélectionné ${selectedCount} repas.`}
          </div>
        </div>
      </div>

      {/* Primary Filtering and Search Controls */}
      <div className="search-filter-toolbar" id="main-search-filter-toolbar">
        {/* Search Input Box */}
        <div className="search-bar-unified">
          <Search className="search-bar-icon" size={18} />
          <input
            type="text"
            id="search-recipes-input"
            className="search-bar-field"
            placeholder="Rechercher une recette, ingrédient (ex: poulet, saumon, mangue, riz)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="search-bar-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Effacer la recherche"
            >
              ✕
            </button>
          )}
        </div>

        {/* Quick Filter Pills Row */}
        <div className="quick-filter-pills-row">
          {/* Quick Filter: Nouveautés de la semaine */}
          <button
            type="button"
            id="btn-filter-only-new-weekly"
            className={`pill-filter-btn pill-new-weekly-filter ${onlyNewWeekly ? 'is-active' : ''}`}
            onClick={() => setOnlyNewWeekly(!onlyNewWeekly)}
            title="Afficher uniquement les nouvelles recettes ajoutées cette semaine"
          >
            <Sparkles size={15} className={onlyNewWeekly ? 'sparkle-icon-active' : ''} />
            <span>✨ Nouveautés de la semaine ({newWeeklyCount})</span>
          </button>

          {/* Quick Filter: Favoris */}
          <button
            type="button"
            id="btn-filter-only-favorites"
            className={`pill-filter-btn pill-fav-filter ${onlyFavorites ? 'is-active' : ''}`}
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            title="Afficher uniquement mes recettes favorites"
          >
            <Heart size={15} className={onlyFavorites ? 'heart-icon-filled' : 'heart-icon-empty'} />
            <span>Favoris ({favoriteCount})</span>
          </button>

          {/* Bouton Partager les favoris */}
          {favoriteCount > 0 && onShareFavorites && (
            <button
              type="button"
              id="btn-share-favorites-pill"
              className={`pill-filter-btn pill-share-favs ${favShareCopied ? 'is-copied' : ''}`}
              onClick={async (e) => {
                e.stopPropagation();
                const res = await onShareFavorites(favoriteRecipeIds);
                if (res && res.method === 'clipboard') {
                  setFavShareCopied(true);
                  setTimeout(() => setFavShareCopied(false), 3000);
                }
              }}
              title="Partager vos recettes coups de cœur avec votre conjointe / famille"
            >
              {favShareCopied ? <Check size={14} color="#16a34a" /> : <Share2 size={14} />}
              <span>{favShareCopied ? 'Lien favoris copié !' : 'Partager favoris'}</span>
            </button>
          )}

          {/* Quick Rabais Filter Button */}
          <button
            type="button"
            id="btn-filter-only-deals"
            className={`pill-filter-btn pill-deals-filter ${onlyOnSale ? 'is-active' : ''}`}
            onClick={() => setOnlyOnSale(!onlyOnSale)}
            title="Afficher uniquement les recettes avec des ingrédients en spécial cette semaine"
          >
            <Tag size={15} />
            <span>🔥 En rabais ({recipes.filter(isRecipeOnSale).length})</span>
          </button>

          {/* Quick Cooking Mode Tabs */}
          <div className="modes-segmented-control" role="tablist">
            {COOKING_MODES.map((mode) => (
              <button
                key={mode.id}
                type="button"
                id={`filter-mode-${mode.id}`}
                className={`segmented-btn ${selectedMode === mode.id ? 'is-active' : ''}`}
                onClick={() => setSelectedMode(mode.id)}
              >
                {mode.label}
              </button>
            ))}
          </div>

          {/* Advanced Filters Button */}
          <button
            type="button"
            id="btn-toggle-advanced-filters"
            className={`pill-filter-btn pill-advanced-filter ${excludedAllergens.length > 0 || selectedProtein !== 'all' || selectedTime !== 'all' ? 'has-active-filters' : ''}`}
            onClick={() => setShowFiltersDrawer(!showFiltersDrawer)}
          >
            <Filter size={15} />
            <span>Filtres avancés</span>
            {(excludedAllergens.length > 0 || selectedProtein !== 'all' || selectedTime !== 'all') && (
              <span className="active-filter-indicator"></span>
            )}
          </button>
        </div>
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
          <p className="empty-title">
            {onlyFavorites ? "Aucun coup de cœur enregistré pour l'instant ❤️" : onlyNewWeekly ? "Aucune nouveauté ne correspond aux critères sélectionnés ✨" : "Aucune recette ne correspond à ces critères"}
          </p>
          <p className="empty-subtitle">
            {onlyFavorites ? "Cliquez sur l'icône cœur ❤️ sur n'importe quelle recette pour l'ajouter à vos favoris !" : onlyNewWeekly ? "Désactivez les autres filtres pour découvrir les 5 nouvelles recettes de la semaine." : "Essayez d'ajuster ou de réinitialiser vos filtres."}
          </p>
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
            const isFav = favoriteRecipeIds.includes(recipe.id);

            return (
              <div
                key={recipe.id}
                id={`recipe-card-${recipe.id}`}
                className={`recipe-card ${selected ? 'is-in-menu' : ''} ${isFav ? 'is-favorited-card' : ''}`}
              >
                {/* Card Top Image & Badges */}
                <div className="card-image-box" onClick={() => onViewRecipe(recipe)}>
                  <img
                    src={recipe.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'}
                    alt={recipe.title}
                    loading="lazy"
                    className="card-img"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="card-top-badges">
                    <span className="badge-protein">{recipe.proteinType}</span>
                    <span className={`badge-mode mode-${recipe.cookingMode}`}>
                      {recipe.cookingMode === 'plancha' ? '🔥 Plancha' : recipe.cookingMode === 'rapide' ? '⚡ Rapide' : '🍳 Mixte'}
                    </span>
                    {isNewWeeklyRecipe(recipe) && (
                      <span className="badge-new-weekly" title="Nouvelle recette ajoutée cette semaine">
                        ✨ Nouveauté
                      </span>
                    )}
                    {isRecipeOnSale(recipe) && (
                      <span className="badge-deal-sale" title="Ingrédient en rabais cette semaine">
                        🔥 En spécial
                      </span>
                    )}
                  </div>

                  {/* Bouton Like / Favori direct */}
                  <button
                    type="button"
                    className={`btn-card-favorite ${isFav ? 'is-fav' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onToggleFavorite) onToggleFavorite(recipe.id);
                    }}
                    title={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
                    aria-label={isFav ? "Retirer des favoris" : "Ajouter aux favoris"}
                    id={`btn-fav-${recipe.id}`}
                  >
                    <Heart size={18} className={isFav ? 'heart-icon-filled' : 'heart-icon-empty'} />
                  </button>

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

                  {/* Macros line */}
                  <div className="card-macros-summary" title="Macro-nutriments par portion standard">
                    <span className="macro-stat-pill"><span className="macro-stat-lbl">P:</span> {recipe.macros?.proteins || 35}g</span>
                    <span className="macro-stat-pill"><span className="macro-stat-lbl">G:</span> {recipe.macros?.carbs || 40}g</span>
                    <span className="macro-stat-pill"><span className="macro-stat-lbl">L:</span> {recipe.macros?.fats || 18}g</span>
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
                  <div className="card-footer-left-btns">
                    <button
                      type="button"
                      className="btn-card-details"
                      onClick={() => onViewRecipe(recipe)}
                      id={`btn-view-${recipe.id}`}
                    >
                      Détails
                    </button>

                    {isAdmin && (
                      <button
                        type="button"
                        className="btn-card-edit-quick"
                        onClick={() => onEditRecipe(recipe)}
                        id={`btn-edit-${recipe.id}`}
                        title="Modifier cette recette (titre, image, ingrédients, étapes...)"
                      >
                        <Edit2 size={14} />
                        <span>Modifier</span>
                      </button>
                    )}
                  </div>

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

            <div className="floating-dock-actions">
              {onResetMenu && (
                <button
                  type="button"
                  className="btn-dock-reset"
                  onClick={onResetMenu}
                  title="Vider la sélection de repas"
                  id="btn-dock-reset-selection"
                >
                  <RotateCcw size={15} />
                  <span>Vider</span>
                </button>
              )}

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
        </div>
      )}
    </div>
  );
}
