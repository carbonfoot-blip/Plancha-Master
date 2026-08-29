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
  CheckCircle2
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
  portions,
  selectedRecipes,
  onGoToStep2,
  onNextStep
}) {
  const [copied, setCopied] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  // Formulaire d'ajout personnalisé
  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('1');
  const [newItemUnit, setNewItemUnit] = useState('unité');
  const [newItemDept, setNewItemDept] = useState('fruits_legumes');

  const handleCopyList = () => {
    const formatted = formatGroceryListForClipboard(groceryDepartments, portions, selectedRecipes);
    navigator.clipboard.writeText(formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
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
            <span className="hero-subpill">Cumul automatique des 5 repas</span>
          </div>
          <h1 className="grocery-page-title">Votre Liste d'Épicerie Intelligente</h1>
          <p className="grocery-page-subtitle">
            Tous les ingrédients sont automatiquement additionnés et classés par rayon pour magasiner efficacement en magasin ou en ligne.
          </p>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="grocery-toolbar-actions">
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

      {/* Stats and Progress Dashboard */}
      <div className="grocery-stats-dashboard">
        <div className="stats-card">
          <div className="stats-card-icon bg-orange-soft">
            <ShoppingCart size={22} className="text-orange" />
          </div>
          <div className="stats-card-data">
            <span className="stats-number">{groceryStats.totalItems}</span>
            <span className="stats-label">Articles au total</span>
          </div>
        </div>

        <div className="stats-card">
          <div className="stats-card-icon bg-green-soft">
            <CheckCircle2 size={22} className="text-green" />
          </div>
          <div className="stats-card-data">
            <span className="stats-number">{groceryStats.checkedItems} / {groceryStats.totalItems}</span>
            <span className="stats-label">Articles cochés / achetés</span>
          </div>
        </div>

        <div className="stats-card stats-card-progress">
          <div className="stats-progress-header">
            <span className="progress-perc-title">Progression de vos courses :</span>
            <strong className="progress-perc-val">{groceryStats.progressPercent}%</strong>
          </div>
          <div className="progress-bar-track">
            <div
              className="progress-bar-fill fill-accent"
              style={{ width: `${groceryStats.progressPercent}%` }}
            ></div>
          </div>
          {groceryStats.progressPercent === 100 && groceryStats.totalItems > 0 && (
            <div className="progress-congrats-tag" onClick={handleTriggerConfetti} role="button" tabIndex={0}>
              🎉 Tous les articles sont prêts ! (Cliquer pour confettis)
            </div>
          )}
        </div>
      </div>

      {/* Grocery Departments List */}
      <div className="grocery-departments-container">
        {Object.values(groceryDepartments).map((dept) => {
          if (dept.items.length === 0) return null;

          const checkedInDept = dept.items.filter(i => i.isChecked).length;
          const allDeptChecked = checkedInDept === dept.items.length;

          return (
            <div key={dept.id} className="grocery-dept-section" id={`dept-section-${dept.id}`}>
              <div className="dept-header-bar" style={{ borderLeftColor: dept.color }}>
                <div className="dept-title-group">
                  <span className="dept-icon-emoji">{dept.icon}</span>
                  <h3 className="dept-title-name">{dept.name}</h3>
                  <span className="dept-count-badge">
                    {checkedInDept}/{dept.items.length}
                  </span>
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
                        {item.recipeSources && (
                          <span className="item-source-recipes">
                            {item.recipeSources.join(' + ')}
                          </span>
                        )}
                      </div>

                      <div className="item-quantity-pill">
                        <strong>{item.displayQuantity}</strong> {item.displayUnit}
                      </div>

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
                    step="0.1"
                    min="0.1"
                    value={newItemQty}
                    onChange={(e) => setNewItemQty(e.target.value)}
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
                    <option value="g">g (grammes)</option>
                    <option value="kg">kg</option>
                    <option value="ml">ml</option>
                    <option value="L">L (litres)</option>
                    <option value="boîte">boîte</option>
                    <option value="paquet">paquet</option>
                    <option value="sac">sac</option>
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
                  {Object.values(GROCERY_DEPARTMENTS).map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.icon} {dept.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-actions-footer">
                <button
                  type="button"
                  className="btn-modal-back"
                  onClick={() => setShowAddModal(false)}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  id="btn-submit-custom-item"
                  className="btn-primary-glow"
                >
                  Ajouter l'article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="grocery-bottom-actions">
        <button
          type="button"
          className="btn-back-link"
          onClick={onGoToStep2}
        >
          ← Retour au Menu de la Semaine
        </button>

        <button
          type="button"
          id="btn-goto-step4-bottom"
          className="btn-primary-glow btn-large-cta"
          onClick={onNextStep}
        >
          <span>Passer aux Commandes en Ligne (Super C, Maxi, IGA...)</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
