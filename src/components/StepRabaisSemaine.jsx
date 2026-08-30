import React, { useState, useMemo } from 'react';
import { 
  GROCERY_STORES, 
  DEAL_CATEGORIES, 
  WEEKLY_DEALS_DATA, 
  findMatchingRecipesForDeal 
} from '../data/weeklyDeals';
import { 
  Tag, 
  Search, 
  ShoppingCart, 
  ChefHat, 
  ExternalLink, 
  Check, 
  Sparkles, 
  Plus, 
  X, 
  Info,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function StepRabaisSemaine({
  recipes = [],
  selectedRecipeIds = [],
  onToggleSelectRecipe,
  onAddDealToGrocery,
  onOpenRecipeDetail,
  onGoToStep
}) {
  const [selectedStore, setSelectedStore] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDealModal, setActiveDealModal] = useState(null);
  const [addedDealIds, setAddedDealIds] = useState(new Set());

  // Filtrage des rabais
  const filteredDeals = useMemo(() => {
    return WEEKLY_DEALS_DATA.filter(deal => {
      const matchesStore = selectedStore === 'all' || deal.store === selectedStore;
      const matchesCategory = selectedCategory === 'all' || deal.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        deal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.storeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deal.matchedKeywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesStore && matchesCategory && matchesSearch;
    });
  }, [selectedStore, selectedCategory, searchQuery]);

  // Gestion de l'ajout d'un article promo à l'épicerie
  const handleAddDeal = (deal) => {
    if (onAddDealToGrocery) {
      onAddDealToGrocery(deal);
      setAddedDealIds(prev => new Set([...prev, deal.id]));
      setTimeout(() => {
        setAddedDealIds(prev => {
          const next = new Set(prev);
          next.delete(deal.id);
          return next;
        });
      }, 2500);
    }
  };

  // Planificateur intelligent : sélectionne 5 repas optimisant les rabais
  const handleSmartPlan = () => {
    const dealsKeywords = WEEKLY_DEALS_DATA.filter(d => d.category === 'viandes' || d.category === 'fruits_legumes')
      .flatMap(d => d.matchedKeywords);

    // Score chaque recette selon le nombre d'ingrédients en spécial
    const scoredRecipes = recipes.map(recipe => {
      const text = `${recipe.title} ${recipe.proteinType} ${recipe.ingredients.map(i => i.name).join(' ')}`.toLowerCase();
      let score = 0;
      dealsKeywords.forEach(k => {
        if (text.includes(k.toLowerCase())) score += 1;
      });
      return { recipe, score };
    });

    // Trie par score décroissant et prend les 5 premières
    scoredRecipes.sort((a, b) => b.score - a.score);
    const top5 = scoredRecipes.slice(0, 5).map(s => s.recipe.id);

    top5.forEach(id => {
      if (!selectedRecipeIds.includes(id)) {
        onToggleSelectRecipe(id);
      }
    });

    if (onGoToStep) {
      onGoToStep(2); // Redirige vers le Menu de la semaine
    }
  };

  // Récupère l'URL de circulaire du magasin actif
  const currentStoreObj = GROCERY_STORES.find(s => s.id === selectedStore);
  const flyerUrl = currentStoreObj?.flyerUrl || 'https://www.reebee.com/fr-ca';

  return (
    <div className="step-rabais-container">
      {/* En-tête héro des rabais */}
      <div className="rabais-hero-card">
        <div className="rabais-hero-content">
          <div className="hero-badge-tag">
            <Tag size={16} />
            <span>Circulaires & Spéciaux de la semaine</span>
          </div>
          <h2 className="rabais-hero-title">
            Les Meilleurs Rabais d'Épicerie au Québec
          </h2>
          <p className="rabais-hero-desc">
            Repérez les spéciaux de la semaine (Super C, Maxi, IGA, Metro, Walmart), 
            choisissez vos recettes selon les rabais et ajoutez vos collations & lunchs 
            directement à votre liste d'épicerie !
          </p>

          <div className="rabais-hero-actions">
            <button 
              type="button" 
              className="btn-smart-plan" 
              onClick={handleSmartPlan}
              id="btn-plan-rabais-5repas"
            >
              <Sparkles size={18} />
              <span>Générer un menu 5 repas économique</span>
            </button>

            <a 
              href={flyerUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-reebee-link"
              title="Consulter les circulaires complètes sur Reebee"
            >
              <span>Circulaires en ligne (Reebee)</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Barre de Recherche et Filtres par Magasin */}
      <div className="rabais-filters-panel">
        <div className="rabais-search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="rabais-search-input"
            placeholder="Rechercher un rabais (ex: poulet, porc, barres tendres, fromage, pommes)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              type="button" 
              className="clear-search-btn" 
              onClick={() => setSearchQuery('')}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Sélecteur d'épiceries */}
        <div className="stores-selector-row">
          <span className="filter-row-label">Épiceries :</span>
          <div className="stores-scroll-chips">
            {GROCERY_STORES.map(store => (
              <button
                key={store.id}
                type="button"
                className={`store-chip ${selectedStore === store.id ? 'active' : ''}`}
                onClick={() => setSelectedStore(store.id)}
              >
                <span className="store-chip-icon">{store.icon}</span>
                <span className="store-chip-name">{store.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Sélecteur de rayons */}
        <div className="categories-selector-row">
          <span className="filter-row-label">Rayons :</span>
          <div className="categories-scroll-chips">
            {DEAL_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`cat-chip ${selectedCategory === cat.id ? 'active' : ''} ${cat.id === 'collations_lunchs' ? 'cat-lunch-highlight' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Résumé des résultats */}
      <div className="rabais-results-header">
        <span className="rabais-count-text">
          <strong>{filteredDeals.length}</strong> rabais trouvés
          {selectedStore !== 'all' && ` chez ${GROCERY_STORES.find(s => s.id === selectedStore)?.name}`}
        </span>
        <span className="rabais-validity-info">
          <Calendar size={14} />
          <span>Spéciaux en vigueur cette semaine</span>
        </span>
      </div>

      {/* Grille des Cartes de Rabais */}
      {filteredDeals.length === 0 ? (
        <div className="empty-deals-state">
          <Info size={40} />
          <h3>Aucun rabais trouvé pour cette recherche</h3>
          <p>Essayez de réinitialiser vos filtres ou de chercher un autre mot-clé.</p>
          <button 
            type="button" 
            className="btn-reset-filters"
            onClick={() => { setSelectedStore('all'); setSelectedCategory('all'); setSearchQuery(''); }}
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        <div className="deals-cards-grid">
          {filteredDeals.map(deal => {
            const matchingRecipes = findMatchingRecipesForDeal(deal, recipes);
            const isAdded = addedDealIds.has(deal.id);

            return (
              <div 
                key={deal.id} 
                className={`deal-card ${deal.isTopDeal ? 'top-deal-card' : ''} ${deal.isLunchSnack ? 'lunch-snack-card' : ''}`}
              >
                {/* Badge Magasin & Badge Promo */}
                <div className="deal-card-header">
                  <span className={`deal-store-badge store-${deal.store}`}>
                    {deal.storeName}
                  </span>

                  {deal.discount && (
                    <span className="deal-discount-badge">
                      {deal.discount}
                    </span>
                  )}
                </div>

                {/* Image du produit */}
                <div className="deal-image-container">
                  <img 
                    src={deal.image} 
                    alt={deal.name} 
                    className="deal-product-image" 
                    loading="lazy" 
                  />
                  {deal.isTopDeal && (
                    <span className="flame-deal-badge">
                      🔥 Vedette
                    </span>
                  )}
                  {deal.isLunchSnack && (
                    <span className="lunch-deal-badge">
                      🎒 Collation / Lunch
                    </span>
                  )}
                </div>

                {/* Corps de la carte */}
                <div className="deal-card-body">
                  <h4 className="deal-product-title">{deal.name}</h4>

                  <div className="deal-pricing-row">
                    <div className="deal-price-main">
                      <span className="price-number">{deal.promoPrice} $</span>
                      <span className="price-unit">/ {deal.unit}</span>
                    </div>
                    {deal.originalPrice && (
                      <span className="deal-original-price">
                        Rég. {deal.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="deal-valid-badge">
                    <span>Valide jusqu'à {deal.validUntil}</span>
                  </div>
                </div>

                {/* Actions : Ajouter à l'épicerie & Recettes associées */}
                <div className="deal-card-footer">
                  {/* Bouton 1 : Ajout direct à l'épicerie */}
                  <button
                    type="button"
                    className={`btn-add-to-grocery ${isAdded ? 'btn-deal-added' : ''}`}
                    onClick={() => handleAddDeal(deal)}
                    title="Ajouter à votre liste d'épicerie"
                    id={`btn-add-deal-${deal.id}`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={16} />
                        <span>Ajouté !</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={16} />
                        <span>+ Épicerie</span>
                      </>
                    )}
                  </button>

                  {/* Bouton 2 : Recettes associées */}
                  {matchingRecipes.length > 0 ? (
                    <button
                      type="button"
                      className="btn-linked-recipes"
                      onClick={() => setActiveDealModal({ deal, matchingRecipes })}
                      title="Voir les recettes associées à ce spécial"
                    >
                      <ChefHat size={16} />
                      <span>{matchingRecipes.length} recette{matchingRecipes.length > 1 ? 's' : ''}</span>
                    </button>
                  ) : (
                    <span className="no-recipes-hint">
                      {deal.isLunchSnack ? '🎒 Essentiel lunch' : '🛒 Hors-recette'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal / Tiroir des Recettes Associées au Rabais */}
      {activeDealModal && (
        <div className="deal-modal-overlay" onClick={() => setActiveDealModal(null)}>
          <div className="deal-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="deal-modal-header">
              <div className="deal-modal-header-info">
                <span className="deal-modal-store-tag">{activeDealModal.deal.storeName}</span>
                <h3 className="deal-modal-title">
                  Recettes avec : {activeDealModal.deal.name} ({activeDealModal.deal.promoPrice} $)
                </h3>
              </div>
              <button 
                type="button" 
                className="btn-close-modal" 
                onClick={() => setActiveDealModal(null)}
              >
                <X size={20} />
              </button>
            </div>

            <p className="deal-modal-subtitle">
              Cuisinez ce spécial de la semaine avec l'une des recettes du catalogue Plancha-Master :
            </p>

            <div className="deal-recipes-list">
              {activeDealModal.matchingRecipes.map(recipe => {
                const isSelected = selectedRecipeIds.includes(recipe.id);

                return (
                  <div key={recipe.id} className="deal-recipe-item">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="deal-recipe-thumb" 
                    />
                    <div className="deal-recipe-info">
                      <h4 className="deal-recipe-name">{recipe.title}</h4>
                      <div className="deal-recipe-meta">
                        <span className="recipe-tag-pill">{recipe.proteinType}</span>
                        <span className="recipe-time-pill">⏱️ {recipe.prepTime + recipe.cookTime} min</span>
                      </div>
                    </div>

                    <div className="deal-recipe-actions">
                      <button
                        type="button"
                        className="btn-view-recipe-link"
                        onClick={() => {
                          if (onOpenRecipeDetail) onOpenRecipeDetail(recipe);
                        }}
                      >
                        Voir
                      </button>

                      <button
                        type="button"
                        className={`btn-select-recipe-toggle ${isSelected ? 'selected' : ''}`}
                        onClick={() => onToggleSelectRecipe(recipe.id)}
                      >
                        {isSelected ? (
                          <>
                            <Check size={16} />
                            <span>Au menu</span>
                          </>
                        ) : (
                          <>
                            <Plus size={16} />
                            <span>+ Ajouter</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="deal-modal-footer">
              <button 
                type="button" 
                className="btn-done-modal"
                onClick={() => setActiveDealModal(null)}
              >
                Terminer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Barre d'action flottante de bas de page */}
      <div className="rabais-dock-banner">
        <div className="dock-banner-info">
          <Layers size={18} />
          <span>
            <strong>{selectedRecipeIds.length}</strong> / 5 repas au menu sélectionnés
          </span>
        </div>
        <button 
          type="button" 
          className="btn-dock-next"
          onClick={() => onGoToStep && onGoToStep(1)}
        >
          <span>Choisir les repas</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
