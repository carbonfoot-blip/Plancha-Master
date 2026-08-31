import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  Plus,
  Copy,
  Printer,
  Trash2,
  Check,
  Sparkles,
  ArrowRight,
  ShoppingCart,
  Layers,
  RotateCcw,
  CheckCircle2,
  Share2,
  PackageCheck,
  Home,
  ChevronDown,
  ChevronUp,
  Undo2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { GROCERY_DEPARTMENTS } from '../data/recipes';
import { formatGroceryListForClipboard } from '../utils/storeLinks';

export default function Step3GroceryList({
  groceryDepartments,
  groceryStats,
  checkedState,
  onToggleItemCheck,
  onToggleAllDept,
  onResetAllChecks,
  customItems,
  onAddCustomItem,
  onRemoveCustomItem,
  onToggleExcludeItem,
  onShareMenu,
  portions,
  selectedRecipes,
  onGoToStep2,
  onNextStep
}) {
  const [copied, setCopied] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showExcludedSection, setShowExcludedSection] = useState(true);

  // Formulaire d'ajout personnalisé
  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('1');
  const [newItemUnit, setNewItemUnit] = useState('unité');
  const [newItemDept, setNewItemDept] = useState('fruits_legumes');

  const excludedItems = groceryDepartments?._excludedItems || [];

  const handleCopyList = () => {
    const formatted = formatGroceryListForClipboard(groceryDepartments, portions, selectedRecipes);
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (onShareMenu) {
      const res = await onShareMenu();
      if (res && res.method === 'clipboard') {
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 3000);
      }
    }
  };

  const handleAddItemSubmit = (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    onAddCustomItem({
      id: `user-${Date.now()}`,
      name: newItemName.trim(),
      quantity: parseFloat(newItemQty) || 1,
      unit: newItemUnit,
      department: newItemDept
    });

    setNewItemName('');
    setNewItemQty('1');
    setNewItemUnit('unité');
    setShowAddModal(false);
  };

  const handleTriggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="step-page-container animate-fade-in" id="step-3-grocery-screen">
      {/* Top Banner */}
      <div className="grocery-header-bar">
        <div className="grocery-header-info">
          <div className="hero-tagline">
            <span className="hero-pill">Étape 3 sur 4</span>
            <span className="hero-subpill">Cumul automatique des {selectedRecipes.length} repas</span>
          </div>
          <h1 className="grocery-page-title">Votre Liste d'Épicerie Intelligente</h1>
          <p className="grocery-page-subtitle">
            Tous les ingrédients sont automatiquement additionnés et classés par rayon. Vous pouvez exclure les articles que vous avez déjà en réserve !
          </p>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="grocery-toolbar-actions">
          <button
            type="button"
            className="btn-toolbar-action btn-share-highlight"
            onClick={handleShare}
            id="btn-share-grocery-list"
            title="Partager le menu et la liste d'épicerie avec votre conjointe / famille"
          >
            {shareCopied ? <Check size={16} color="#16a34a" /> : <Share2 size={16} />}
            <span>{shareCopied ? 'Lien de partage copié !' : 'Partager le menu'}</span>
          </button>

          <button
            type="button"
            className="btn-toolbar-action"
            onClick={() => setShowAddModal(true)}
            id="btn-open-add-custom-item"
            title="Ajouter un article hors recette (ex: lait, café, collations)"
          >
            <Plus size={16} />
            <span>Ajouter un article</span>
          </button>

          <button
            type="button"
            className="btn-toolbar-action"
            onClick={handleCopyList}
            id="btn-copy-grocery-list"
          >
            {copied ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
            <span>{copied ? 'Copié dans le presse-papier !' : 'Copier la liste'}</span>
          </button>

          <button
            type="button"
            className="btn-toolbar-action"
            onClick={handlePrint}
            id="btn-print-grocery-list"
          >
            <Printer size={16} />
            <span>Imprimer</span>
          </button>

          <button
            type="button"
            id="btn-goto-step4-top"
            className="btn-primary-glow"
            onClick={onNextStep}
          >
            <span>Commander en ligne</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Progress & Stats Card */}
      <div className="grocery-stats-dashboard">
        <div className="stats-card">
          <div className="stats-card-icon bg-orange-soft">
            <ShoppingCart size={22} className="text-orange" />
          </div>
          <div className="stats-card-data">
            <span className="stats-number" id="stats-total-items-count">{groceryStats.totalItems}</span>
            <span className="stats-label">Articles à acheter</span>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-card-icon bg-green-soft">
            <CheckCircle2 size={22} className="text-green" />
          </div>
          <div className="stats-card-data">
            <span className="stats-number" id="stats-checked-items-count">
              {groceryStats.checkedItems} / {groceryStats.totalItems}
            </span>
            <span className="stats-label">Articles cochés ({groceryStats.progressPercent}%)</span>
          </div>
        </div>

        {excludedItems.length > 0 && (
          <div className="stats-card">
            <div className="stats-card-icon bg-slate-soft">
              <Home size={22} className="text-slate" />
            </div>
            <div className="stats-card-data">
              <span className="stats-number" id="stats-excluded-items-count">
                {excludedItems.length}
              </span>
              <span className="stats-label">En réserve à la maison</span>
            </div>
          </div>
        )}

        <div className="stats-card-actions">
          {groceryStats.checkedItems > 0 && (
            <button
              type="button"
              className="btn-reset-checks"
              onClick={onResetAllChecks}
              title="Décocher toutes les cases"
            >
              <RotateCcw size={14} />
              <span>Décocher tout</span>
            </button>
          )}

          {groceryStats.progressPercent === 100 && groceryStats.totalItems > 0 && (
            <button
              type="button"
              className="btn-celebrate-done"
              onClick={handleTriggerConfetti}
            >
              <Sparkles size={16} />
              <span>Épicerie terminée ! 🎉</span>
            </button>
          )}
        </div>
      </div>

      {/* Grocery Departments List */}
      <div className="departments-list-container">
        {Object.keys(GROCERY_DEPARTMENTS).map((deptKey) => {
          const dept = groceryDepartments[deptKey];
          if (!dept || dept.items.length === 0) return null;

          const allDeptChecked = dept.items.every(item => item.isChecked);

          return (
            <div key={dept.id} className="grocery-department-block" id={`dept-section-${dept.id}`}>
              <div className="department-header-row">
                <div className="department-title-left">
                  <span className="dept-icon-symbol">{dept.icon}</span>
                  <h3 className="dept-name-heading">{dept.name}</h3>
                  <span className="dept-items-count-badge">{dept.items.length}</span>
                </div>

                <button
                  type="button"
                  className="btn-check-all-dept"
                  onClick={() => onToggleAllDept(dept.id, !allDeptChecked)}
                >
                  {allDeptChecked ? 'Tout décocher' : 'Tout cocher ce rayon'}
                </button>
              </div>

              <ul className="grocery-items-grid">
                {dept.items.map((item) => {
                  return (
                    <li
                      key={item.key}
                      id={`grocery-item-${item.key}`}
                      className={`grocery-item-row ${item.isChecked ? 'is-item-checked' : ''}`}
                      onClick={() => onToggleItemCheck(item.key)}
                      role="button"
                      tabIndex={0}
                    >
                      <div className="item-checkbox-visual">
                        {item.isChecked ? (
                          <CheckSquare size={20} className="check-icon-active" />
                        ) : (
                          <Square size={20} className="check-icon-empty" />
                        )}
                      </div>

                      <div className="item-name-sources">
                        <span className="item-display-name">{item.name}</span>
                        {item.storeBadge ? (
                          <span className="item-promo-store-tag">
                            🏷️ Spécial {item.storeBadge} • {item.promoPrice} $
                          </span>
                        ) : item.recipeSources ? (
                          <span className="item-source-recipes">
                            {item.recipeSources.join(' + ')}
                          </span>
                        ) : null}
                      </div>

                      <div className="item-quantity-pill">
                        <strong>{item.displayQuantity}</strong> {item.displayUnit}
                      </div>

                      {/* Action 1 : J'en ai déjà (Exclure de la liste d'achat) */}
                      {!item.isCustom && (
                        <button
                          type="button"
                          className="btn-exclude-ingredient"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onToggleExcludeItem) onToggleExcludeItem(item.key);
                          }}
                          title="J'ai déjà cet ingrédient à la maison (retirer de la liste d'achats)"
                          aria-label={`J'ai déjà ${item.name}`}
                        >
                          <Home size={14} />
                          <span className="exclude-btn-text">J'en ai</span>
                        </button>
                      )}

                      {/* Action 2 : Supprimer un article personnalisé */}
                      {item.isCustom && (
                        <button
                          type="button"
                          className="btn-delete-custom-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveCustomItem(item.id);
                          }}
                          title="Supprimer cet article personnalisé"
                          aria-label={`Supprimer ${item.name}`}
                        >
                          <Trash2 size={15} />
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Section des Articles en Réserve (Exclus) */}
      {excludedItems.length > 0 && (
        <div className="excluded-items-section">
          <div 
            className="excluded-section-header" 
            onClick={() => setShowExcludedSection(!showExcludedSection)}
            role="button"
            tabIndex={0}
          >
            <div className="excluded-title-left">
              <Home size={18} className="text-slate-500" />
              <h3 className="excluded-heading">
                En réserve à la maison ({excludedItems.length} article{excludedItems.length > 1 ? 's' : ''} exclu{excludedItems.length > 1 ? 's' : ''})
              </h3>
            </div>
            <div className="excluded-toggle-arrow">
              <span className="excluded-hint-text">
                {showExcludedSection ? 'Masquer' : 'Afficher'}
              </span>
              {showExcludedSection ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </div>

          {showExcludedSection && (
            <div className="excluded-items-body animate-fade-in">
              <p className="excluded-description-hint">
                Ces ingrédients sont dans vos recettes mais ont été exclus de vos achats car vous les avez déjà chez vous :
              </p>
              <ul className="excluded-items-list">
                {excludedItems.map(item => (
                  <li key={item.key} className="excluded-item-row">
                    <div className="excluded-item-info">
                      <span className="excluded-item-name">{item.name}</span>
                      <span className="excluded-item-qty">({item.displayQuantity} {item.displayUnit})</span>
                      {item.recipeSources && (
                        <span className="excluded-item-recipe">
                          • {item.recipeSources.join(', ')}
                        </span>
                      )}
                    </div>
                    <button
                      type="button"
                      className="btn-reinclude-item"
                      onClick={() => onToggleExcludeItem && onToggleExcludeItem(item.key)}
                      title="Réintégrer cet article dans la liste d'épicerie à acheter"
                    >
                      <Undo2 size={14} />
                      <span>Réintégrer</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Modal Ajout Article Personnalisé */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)} role="dialog">
          <div className="modal-custom-item-card animate-pop-in" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Ajouter un article à l'épicerie</h3>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowAddModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleAddItemSubmit} className="custom-item-form">
              <div className="form-group">
                <label htmlFor="custom-item-name">Nom de l'article :</label>
                <input
                  id="custom-item-name"
                  type="text"
                  placeholder="Ex: Lait 2%, Pommes Gala, Café..."
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  autoFocus
                  required
                  className="form-control"
                />
              </div>

              <div className="form-row-2cols">
                <div className="form-group">
                  <label htmlFor="custom-item-qty">Quantité :</label>
                  <input
                    id="custom-item-qty"
                    type="number"
                    step="any"
                    min="0.1"
                    value={newItemQty}
                    onChange={(e) => setNewItemQty(e.target.value)}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="custom-item-unit">Unité :</label>
                  <select
                    id="custom-item-unit"
                    value={newItemUnit}
                    onChange={(e) => setNewItemUnit(e.target.value)}
                    className="form-control"
                  >
                    <option value="unité">unité</option>
                    <option value="paquet">paquet</option>
                    <option value="boîte">boîte</option>
                    <option value="sac">sac</option>
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="ml">ml</option>
                    <option value="L">L</option>
                    <option value="lb">lb</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="custom-item-dept">Rayon d'épicerie :</label>
                <select
                  id="custom-item-dept"
                  value={newItemDept}
                  onChange={(e) => setNewItemDept(e.target.value)}
                  className="form-control"
                >
                  <option value="fruits_legumes">🥦 Fruits & Légumes</option>
                  <option value="viandes">🥩 Viandes & Poissons</option>
                  <option value="produits_laitiers">🧀 Produits Laitiers & Frais</option>
                  <option value="non_perissable">🥫 Garde-manger & Non Périssable</option>
                  <option value="surgeles">🧊 Surgelés</option>
                </select>
              </div>

              <div className="modal-actions-footer">
                <button
                  type="button"
                  className="btn-modal-back"
                  onClick={() => setShowAddModal(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="btn-primary-glow"
                  id="btn-submit-custom-item"
                >
                  <Plus size={16} />
                  <span>Ajouter à la liste</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Bottom Dock */}
      <div className="grocery-floating-dock">
        <div className="dock-left-progress">
          <Layers size={18} className="dock-icon" />
          <span className="dock-progress-text">
            <strong>{groceryStats.checkedItems}</strong> sur <strong>{groceryStats.totalItems}</strong> articles cochés
          </span>
        </div>

        <div className="dock-right-actions">
          <button
            type="button"
            className="btn-dock-back"
            onClick={onGoToStep2}
          >
            ← Retour au Menu
          </button>
          <button
            type="button"
            className="btn-dock-next"
            onClick={onNextStep}
            id="btn-goto-step4-dock"
          >
            <span>Commander en ligne</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
