import React, { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Image as ImageIcon,
  Flame,
  Clock,
  Save,
  AlertTriangle,
  ChefHat,
  Sparkles,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import { PROTEIN_TYPES, GROCERY_DEPARTMENTS, ALLERGENS_LIST } from '../data/recipes';

const QUICK_IMAGE_PRESETS = [
  { label: '🔥 Brochettes & Grillades', url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80' },
  { label: '🍔 Burgers & Plancha', url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80' },
  { label: '🐟 Saumon & Poissons', url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80' },
  { label: '🥩 Viandes & Steaks', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
  { label: '🍤 Crevettes & Wok', url: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80' },
  { label: '🥗 Végé & Tofu', url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80' },
  { label: '🍝 Pâtes & One-Pot', url: 'https://images.unsplash.com/photo-1621996346565-e3d5d628105d?auto=format&fit=crop&w=800&q=80' }
];

export default function RecipeEditorModal({
  recipeToEdit,
  onSaveRecipe,
  onDeleteRecipe,
  onClose
}) {
  const isEditing = !!(recipeToEdit && recipeToEdit.id);

  // États du formulaire
  const [title, setTitle] = useState(recipeToEdit?.title || '');
  const [subtitle, setSubtitle] = useState(recipeToEdit?.subtitle || '');
  const [description, setDescription] = useState(recipeToEdit?.description || '');
  const [proteinType, setProteinType] = useState(recipeToEdit?.proteinType || PROTEIN_TYPES[0]);
  const [cookingMode, setCookingMode] = useState(recipeToEdit?.cookingMode || 'plancha');
  const [prepTime, setPrepTime] = useState(recipeToEdit?.prepTime || 15);
  const [cookTime, setCookTime] = useState(recipeToEdit?.cookTime || 12);
  const [calories, setCalories] = useState(recipeToEdit?.calories || 450);
  const [proteins, setProteins] = useState(recipeToEdit?.macros?.proteins || 35);
  const [carbs, setCarbs] = useState(recipeToEdit?.macros?.carbs || 40);
  const [fats, setFats] = useState(recipeToEdit?.macros?.fats || 18);
  const [isCompleteMeal, setIsCompleteMeal] = useState(recipeToEdit?.isCompleteMeal ?? false);
  const [sideCarbs, setSideCarbs] = useState(recipeToEdit?.sideDishSuggestion?.carbs || '');
  const [sideVeggies, setSideVeggies] = useState(recipeToEdit?.sideDishSuggestion?.veggies || '');
  const [sideTip, setSideTip] = useState(recipeToEdit?.sideDishSuggestion?.planchaTip || '');
  const [image, setImage] = useState(recipeToEdit?.image || QUICK_IMAGE_PRESETS[0].url);
  const [planchaTips, setPlanchaTips] = useState(recipeToEdit?.planchaTips || '');
  const [allergens, setAllergens] = useState(recipeToEdit?.allergens || []);

  // Ingrédients
  const [ingredients, setIngredients] = useState(
    recipeToEdit?.ingredients && recipeToEdit.ingredients.length > 0
      ? recipeToEdit.ingredients
      : [
          { id: `ing-${Date.now()}-1`, name: 'Poitrine de poulet', quantity: 600, unit: 'g', department: 'viandes' },
          { id: `ing-${Date.now()}-2`, name: 'Poivron rouge', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
          { id: `ing-${Date.now()}-3`, name: 'Huile d\'olive', quantity: 30, unit: 'ml', department: 'non_perissable' }
        ]
  );

  // Étapes
  const [steps, setSteps] = useState(
    recipeToEdit?.steps && recipeToEdit.steps.length > 0
      ? recipeToEdit.steps
      : [
          'Préparer et découper les ingrédients en morceaux réguliers.',
          'Préchauffer la plancha à 220°C (feu moyen-fort).',
          'Cuire 10 à 12 minutes en retournant régulièrement pour bien dorer.'
        ]
  );

  // Gestion des allergènes
  const toggleAllergen = (alg) => {
    setAllergens(prev =>
      prev.includes(alg) ? prev.filter(a => a !== alg) : [...prev, alg]
    );
  };

  // Gestion des ingrédients
  const handleAddIngredient = () => {
    setIngredients(prev => [
      ...prev,
      {
        id: `ing-${Date.now()}-${prev.length + 1}`,
        name: '',
        quantity: 1,
        unit: 'unité',
        department: 'fruits_legumes'
      }
    ]);
  };

  const handleUpdateIngredient = (index, field, value) => {
    setIngredients(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleRemoveIngredient = (index) => {
    setIngredients(prev => prev.filter((_, i) => i !== index));
  };

  // Gestion des étapes
  const handleAddStep = () => {
    setSteps(prev => [...prev, '']);
  };

  const handleUpdateStep = (index, value) => {
    setSteps(prev => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleRemoveStep = (index) => {
    setSteps(prev => prev.filter((_, i) => i !== index));
  };

  const handleMoveStep = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= steps.length) return;
    setSteps(prev => {
      const updated = [...prev];
      const temp = updated[index];
      updated[index] = updated[targetIndex];
      updated[targetIndex] = temp;
      return updated;
    });
  };

  // Soumission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Veuillez renseigner un titre de recette.');
      return;
    }

    const cleanedIngredients = ingredients
      .filter(i => i.name.trim())
      .map(i => ({
        ...i,
        quantity: parseFloat(i.quantity) || 1
      }));

    const cleanedSteps = steps.filter(s => s.trim());

    // Déterminer la catégorie de temps
    const totalTime = (parseInt(prepTime, 10) || 0) + (parseInt(cookTime, 10) || 0);
    const timeCategory = totalTime <= 20 ? 'Rapide' : totalTime <= 35 ? 'Moyen' : 'Long';

    const recipeData = {
      id: isEditing ? recipeToEdit.id : `rec-custom-${Date.now()}`,
      title: title.trim(),
      subtitle: subtitle.trim() || 'Recette maison savoureuse',
      description: description.trim() || 'Délicieuse recette familiale pour 4 portions.',
      proteinType,
      cookingMode,
      timeCategory,
      prepTime: parseInt(prepTime, 10) || 10,
      cookTime: parseInt(cookTime, 10) || 10,
      calories: parseInt(calories, 10) || 450,
      macros: {
        proteins: parseInt(proteins, 10) || 0,
        carbs: parseInt(carbs, 10) || 0,
        fats: parseInt(fats, 10) || 0
      },
      isCompleteMeal,
      sideDishSuggestion: (!isCompleteMeal && (sideCarbs.trim() || sideVeggies.trim()))
        ? {
            carbs: sideCarbs.trim(),
            veggies: sideVeggies.trim(),
            planchaTip: sideTip.trim()
          }
        : null,
      allergens,
      image: image.trim() || QUICK_IMAGE_PRESETS[0].url,
      planchaTips: planchaTips.trim(),
      ingredients: cleanedIngredients,
      steps: cleanedSteps,
      tags: [cookingMode === 'plancha' ? 'Plancha' : 'Rapide', 'Maison', proteinType]
    };

    onSaveRecipe(recipeData);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" id="recipe-editor-modal">
      <div className="modal-content modal-editor-large animate-pop-in" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <ChefHat size={22} className="text-orange" />
            <h2 className="editor-modal-title">
              {isEditing ? 'Modifier la Recette' : 'Créer une Nouvelle Recette'}
            </h2>
          </div>
          <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Fermer">
            <X size={22} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="recipe-editor-form">
          {/* Section 1 : Infos Générales */}
          <div className="editor-form-section">
            <h3 className="editor-section-heading">1. Informations Générales & Nutrition</h3>

            <div className="form-group">
              <label htmlFor="recipe-title">Titre de la recette * :</label>
              <input
                id="recipe-title"
                type="text"
                className="form-control"
                placeholder="Ex: Brochettes de poulet mariné au miel et soya"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="recipe-subtitle">Sous-titre / Court descriptif :</label>
              <input
                id="recipe-subtitle"
                type="text"
                className="form-control"
                placeholder="Ex: Tendre et caramélisé, prêt en 15 minutes"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="recipe-desc">Description complète :</label>
              <textarea
                id="recipe-desc"
                rows="2"
                className="form-control"
                placeholder="Description gourmande pour la famille..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-row-3cols">
              <div className="form-group">
                <label htmlFor="recipe-protein">Type de Protéine :</label>
                <select
                  id="recipe-protein"
                  className="form-control"
                  value={proteinType}
                  onChange={(e) => setProteinType(e.target.value)}
                >
                  {PROTEIN_TYPES.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="recipe-mode">Mode de cuisson :</label>
                <select
                  id="recipe-mode"
                  className="form-control"
                  value={cookingMode}
                  onChange={(e) => setCookingMode(e.target.value)}
                >
                  <option value="plancha">🔥 Plancha</option>
                  <option value="rapide">⚡ Cuisine Rapide (Poêle/Four)</option>
                  <option value="mixte">🍳 Polyvalent (Plancha ou Poêle)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="recipe-cal">Calories (kcal / portion) :</label>
                <input
                  id="recipe-cal"
                  type="number"
                  className="form-control"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                  min="50"
                  max="1500"
                />
              </div>
            </div>

            {/* Macro-Nutriments Row */}
            <div className="form-row-3cols">
              <div className="form-group">
                <label htmlFor="recipe-proteins">🥩 Protéines (g / port.) :</label>
                <input
                  id="recipe-proteins"
                  type="number"
                  className="form-control"
                  value={proteins}
                  onChange={(e) => setProteins(e.target.value)}
                  min="0"
                  max="200"
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipe-carbs">🍞 Glucides (g / port.) :</label>
                <input
                  id="recipe-carbs"
                  type="number"
                  className="form-control"
                  value={carbs}
                  onChange={(e) => setCarbs(e.target.value)}
                  min="0"
                  max="300"
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipe-fats">🥑 Lipides (g / port.) :</label>
                <input
                  id="recipe-fats"
                  type="number"
                  className="form-control"
                  value={fats}
                  onChange={(e) => setFats(e.target.value)}
                  min="0"
                  max="150"
                />
              </div>
            </div>

            <div className="form-row-2cols">
              <div className="form-group">
                <label htmlFor="recipe-prep-time">Temps de préparation (min) :</label>
                <input
                  id="recipe-prep-time"
                  type="number"
                  className="form-control"
                  value={prepTime}
                  onChange={(e) => setPrepTime(e.target.value)}
                  min="0"
                />
              </div>

              <div className="form-group">
                <label htmlFor="recipe-cook-time">Temps de cuisson (min) :</label>
                <input
                  id="recipe-cook-time"
                  type="number"
                  className="form-control"
                  value={cookTime}
                  onChange={(e) => setCookTime(e.target.value)}
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Section Accompagnement Recommandé */}
          <div className="editor-form-section">
            <h3 className="editor-section-heading">2. Accompagnements & Équilibre du repas</h3>

            <div className="form-group">
              <label className="checkbox-label-styled">
                <input
                  type="checkbox"
                  checked={isCompleteMeal}
                  onChange={(e) => setIsCompleteMeal(e.target.checked)}
                />
                <span>✨ <strong>Repas complet tout-en-un</strong> (féculents et légumes déjà intégrés, aucun accompagnement requis)</span>
              </label>
            </div>

            {!isCompleteMeal && (
              <div className="side-dish-editor-fields">
                <div className="form-group">
                  <label htmlFor="side-carbs">🥔 Féculent suggéré :</label>
                  <input
                    id="side-carbs"
                    type="text"
                    className="form-control"
                    placeholder="Ex: Riz basmati au citron ou Pommes de terre grelots rôties"
                    value={sideCarbs}
                    onChange={(e) => setSideCarbs(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="side-veggies">🥗 Légume ou Salade suggéré :</label>
                  <input
                    id="side-veggies"
                    type="text"
                    className="form-control"
                    placeholder="Ex: Salade grecque croquante (tomates, concombres, feta)"
                    value={sideVeggies}
                    onChange={(e) => setSideVeggies(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="side-tip">💡 Conseil & Cuisson plancha pour l'accompagnement :</label>
                  <input
                    id="side-tip"
                    type="text"
                    className="form-control"
                    placeholder="Ex: Faites dorer les grelots sur la zone moyenne pendant la cuisson..."
                    value={sideTip}
                    onChange={(e) => setSideTip(e.target.value)}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Section 2 : Image de la recette */}
          <div className="editor-form-section">
            <h3 className="editor-section-heading">2. Image de la Recette</h3>

            <div className="image-editor-container">
              <div className="image-preview-card">
                {image ? (
                  <img src={image} alt="Aperçu" className="image-preview-img" onError={(e) => { e.target.src = QUICK_IMAGE_PRESETS[0].url; }} />
                ) : (
                  <div className="no-image-box">Pas d'image</div>
                )}
              </div>

              <div className="image-inputs-group">
                <div className="form-group">
                  <label htmlFor="recipe-image-url">URL de l'image (Web) :</label>
                  <input
                    id="recipe-image-url"
                    type="url"
                    className="form-control"
                    placeholder="https://..."
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </div>

                <div className="image-presets-selector">
                  <span className="presets-label">Suggestions rapides en 1 clic :</span>
                  <div className="preset-buttons-row">
                    {QUICK_IMAGE_PRESETS.map((preset, idx) => (
                      <button
                        key={idx}
                        type="button"
                        className="preset-btn-chip"
                        onClick={() => setImage(preset.url)}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 : Conseil Plancha */}
          <div className="editor-form-section">
            <h3 className="editor-section-heading">3. Conseils de Chef pour la Plancha</h3>
            <div className="form-group">
              <label htmlFor="recipe-plancha-tips">Température, temps par face et astuces :</label>
              <textarea
                id="recipe-plancha-tips"
                rows="2"
                className="form-control"
                placeholder="Ex: Plancha à 220°C. Saisir 4 minutes de chaque côté sans déplacer pour obtenir un beau quadrillage."
                value={planchaTips}
                onChange={(e) => setPlanchaTips(e.target.value)}
              />
            </div>
          </div>

          {/* Section 4 : Ingrédients structurés pour l'épicerie */}
          <div className="editor-form-section">
            <div className="section-header-flex">
              <h3 className="editor-section-heading">4. Ingrédients (Pour 4 portions standard)</h3>
              <button
                type="button"
                className="btn-add-item-small"
                onClick={handleAddIngredient}
              >
                <Plus size={14} />
                <span>Ajouter un ingrédient</span>
              </button>
            </div>

            <p className="editor-tip-text">
              💡 Associez chaque ingrédient au bon <strong>rayon d'épicerie</strong> pour qu'il soit automatiquement cumulé dans la liste d'épicerie hebdomadaire.
            </p>

            <div className="editor-ingredients-table">
              {ingredients.map((ing, idx) => (
                <div key={ing.id || idx} className="editor-ingredient-row">
                  <input
                    type="text"
                    placeholder="Nom (ex: Porc haché, Oignon...)"
                    className="form-control ing-name-input"
                    value={ing.name}
                    onChange={(e) => handleUpdateIngredient(idx, 'name', e.target.value)}
                    required
                  />

                  <input
                    type="number"
                    step="0.1"
                    placeholder="Qté"
                    className="form-control ing-qty-input"
                    value={ing.quantity}
                    onChange={(e) => handleUpdateIngredient(idx, 'quantity', e.target.value)}
                  />

                  <select
                    className="form-control ing-unit-input"
                    value={ing.unit}
                    onChange={(e) => handleUpdateIngredient(idx, 'unit', e.target.value)}
                  >
                    <option value="g">g</option>
                    <option value="kg">kg</option>
                    <option value="ml">ml</option>
                    <option value="L">L</option>
                    <option value="unité">unité</option>
                    <option value="tranche">tranche</option>
                    <option value="botte">botte</option>
                    <option value="boîte">boîte</option>
                    <option value="paquet">paquet</option>
                  </select>

                  <select
                    className="form-control ing-dept-input"
                    value={ing.department}
                    onChange={(e) => handleUpdateIngredient(idx, 'department', e.target.value)}
                  >
                    {Object.values(GROCERY_DEPARTMENTS).map((d) => (
                      <option key={d.id} value={d.id}>{d.icon} {d.name}</option>
                    ))}
                  </select>

                  <button
                    type="button"
                    className="btn-trash-row"
                    onClick={() => handleRemoveIngredient(idx)}
                    title="Supprimer cet ingrédient"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5 : Instructions / Étapes */}
          <div className="editor-form-section">
            <div className="section-header-flex">
              <h3 className="editor-section-heading">5. Instructions et Étapes de Préparation</h3>
              <button
                type="button"
                className="btn-add-item-small"
                onClick={handleAddStep}
              >
                <Plus size={14} />
                <span>Ajouter une étape</span>
              </button>
            </div>

            <div className="editor-steps-list">
              {steps.map((step, idx) => (
                <div key={idx} className="editor-step-row">
                  <span className="step-number-tag">{idx + 1}</span>
                  <textarea
                    rows="2"
                    className="form-control step-text-area"
                    placeholder={`Étape ${idx + 1}...`}
                    value={step}
                    onChange={(e) => handleUpdateStep(idx, e.target.value)}
                    required
                  />

                  <div className="step-actions-vertical">
                    <button
                      type="button"
                      className="btn-step-order"
                      onClick={() => handleMoveStep(idx, -1)}
                      disabled={idx === 0}
                      title="Monter d'un rang"
                    >
                      <ArrowUp size={13} />
                    </button>
                    <button
                      type="button"
                      className="btn-step-order"
                      onClick={() => handleMoveStep(idx, 1)}
                      disabled={idx === steps.length - 1}
                      title="Descendre d'un rang"
                    >
                      <ArrowDown size={13} />
                    </button>
                    <button
                      type="button"
                      className="btn-trash-row"
                      onClick={() => handleRemoveStep(idx)}
                      title="Supprimer l'étape"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 : Allergènes */}
          <div className="editor-form-section">
            <h3 className="editor-section-heading">6. Allergènes</h3>
            <div className="allergens-checkboxes-grid">
              {ALLERGENS_LIST.map((alg) => {
                const checked = allergens.includes(alg);
                return (
                  <button
                    key={alg}
                    type="button"
                    className={`allergen-select-pill ${checked ? 'is-checked-alg' : ''}`}
                    onClick={() => toggleAllergen(alg)}
                  >
                    {checked ? '✓ ' : '+ '} {alg}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="modal-footer-editor">
            {isEditing && (
              <button
                type="button"
                className="btn-delete-recipe-danger"
                onClick={() => {
                  if (window.confirm(`Êtes-vous sûr de vouloir supprimer la recette "${title}" ?`)) {
                    onDeleteRecipe(recipeToEdit.id);
                  }
                }}
              >
                <Trash2 size={16} />
                <span>Supprimer cette recette</span>
              </button>
            )}

            <div className="footer-save-group">
              <button type="button" className="btn-modal-back" onClick={onClose}>
                Annuler
              </button>
              <button type="submit" className="btn-primary-glow" id="btn-save-recipe-submit">
                <Save size={18} />
                <span>{isEditing ? 'Enregistrer les modifications' : 'Créer la recette'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
