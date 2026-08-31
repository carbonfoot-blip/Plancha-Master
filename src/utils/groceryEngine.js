import { GROCERY_DEPARTMENTS } from '../data/recipes';

/**
 * Normalise et cumule la liste d'épicerie pour une liste de recettes sélectionnées et un nombre de portions donné.
 * @param {Array} selectedRecipes - Liste des recettes choisies
 * @param {number} portions - Nombre de portions désirées (base = 4)
 * @param {Array} customItems - Articles ajoutés manuellement par l'utilisateur
 * @param {Object} checkedState - Dictionnaire d'état des cases cochées { [id]: boolean }
 * @param {Array} excludedIngredientKeys - Clés des ingrédients exclus (déjà en réserve à la maison)
 * @returns {Object} Rayons avec liste d'ingrédients cumulés et liste d'articles exclus
 */
export function buildGroceryList(
  selectedRecipes = [], 
  portions = 4, 
  customItems = [], 
  checkedState = {}, 
  excludedIngredientKeys = []
) {
  const portionFactor = portions / 4;
  const aggregatedMap = new Map();

  // Parcourir toutes les recettes sélectionnées
  selectedRecipes.forEach((recipe) => {
    if (!recipe || !recipe.ingredients) return;

    recipe.ingredients.forEach((ing) => {
      // Clé unique pour grouper les ingrédients identiques (par ID ou nom normalisé + unité)
      const key = `${ing.id || ing.name.toLowerCase().trim()}_${ing.unit}`;
      const scaledQuantity = (ing.quantity || 1) * portionFactor;

      if (aggregatedMap.has(key)) {
        const existing = aggregatedMap.get(key);
        existing.quantity += scaledQuantity;
        if (!existing.recipeSources.includes(recipe.title)) {
          existing.recipeSources.push(recipe.title);
        }
      } else {
        aggregatedMap.set(key, {
          id: ing.id || `custom-${Math.random()}`,
          key,
          name: ing.name,
          quantity: scaledQuantity,
          unit: ing.unit,
          department: ing.department || 'non_perissable',
          recipeSources: [recipe.title],
          isCustom: false
        });
      }
    });
  });

  // Ajouter les articles personnalisés et rabais circulaires
  customItems.forEach((custom) => {
    const key = `custom-${custom.id}`;
    aggregatedMap.set(key, {
      id: custom.id,
      key,
      name: custom.name,
      quantity: custom.quantity || 1,
      unit: custom.unit || 'unité',
      department: custom.department || 'non_perissable',
      recipeSources: custom.storeBadge ? [`🏷️ ${custom.storeBadge} (${custom.promoPrice || ''} $)`] : ['Ajout manuel'],
      storeBadge: custom.storeBadge || null,
      promoPrice: custom.promoPrice || null,
      isDeal: !!custom.isDeal,
      isCustom: true
    });
  });

  // Organiser les ingrédients par rayon
  const departmentsResult = {};
  Object.keys(GROCERY_DEPARTMENTS).forEach((deptKey) => {
    departmentsResult[deptKey] = {
      ...GROCERY_DEPARTMENTS[deptKey],
      items: []
    };
  });

  const excludedItemsList = [];

  // Répartir et formater chaque article
  aggregatedMap.forEach((item) => {
    const deptKey = departmentsResult[item.department] ? item.department : 'non_perissable';
    const isChecked = !!checkedState[item.key];
    const isExcluded = excludedIngredientKeys.includes(item.key) || excludedIngredientKeys.includes(item.id);

    // Formatage propre de la quantité (arrondi esthétique)
    let displayQuantity = item.quantity;
    let displayUnit = item.unit;

    if (displayUnit === 'g' && displayQuantity >= 1000) {
      displayQuantity = +(displayQuantity / 1000).toFixed(2);
      displayUnit = 'kg';
    } else if (displayUnit === 'ml' && displayQuantity >= 1000) {
      displayQuantity = +(displayQuantity / 1000).toFixed(2);
      displayUnit = 'L';
    } else {
      displayQuantity = +(Math.round(displayQuantity * 100) / 100).toFixed(displayQuantity % 1 === 0 ? 0 : 1);
    }

    const formattedItem = {
      ...item,
      displayQuantity,
      displayUnit,
      isChecked,
      isExcluded
    };

    if (isExcluded) {
      excludedItemsList.push(formattedItem);
    } else {
      departmentsResult[deptKey].items.push(formattedItem);
    }
  });

  // Trier les articles de chaque rayon par ordre alphabétique
  Object.keys(departmentsResult).forEach((deptKey) => {
    departmentsResult[deptKey].items.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  });

  excludedItemsList.sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  departmentsResult._excludedItems = excludedItemsList;

  return departmentsResult;
}

/**
 * Calcule les statistiques de la liste d'épicerie (total articles, articles cochés, articles exclus)
 */
export function getGroceryStats(departmentsResult) {
  let totalItems = 0;
  let checkedItems = 0;
  const excludedItemsCount = departmentsResult?._excludedItems?.length || 0;

  Object.entries(departmentsResult).forEach(([key, dept]) => {
    if (key === '_excludedItems' || !dept.items) return;
    dept.items.forEach((item) => {
      totalItems += 1;
      if (item.isChecked) checkedItems += 1;
    });
  });

  const progressPercent = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;

  return {
    totalItems,
    checkedItems,
    excludedItemsCount,
    progressPercent
  };
}
