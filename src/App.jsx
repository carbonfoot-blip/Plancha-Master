import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { RECIPES_DATA } from './data/recipes';
import {
  loadRecipesFromDb,
  saveRecipeToDb,
  deleteRecipeFromDb,
  resetAllRecipesToDefaults
} from './services/dbService';
import { buildGroceryList, getGroceryStats } from './utils/groceryEngine';
import Navbar from './components/Navbar';
import Step1Selection from './components/Step1Selection';
import Step2WeeklyMenu from './components/Step2WeeklyMenu';
import Step3GroceryList from './components/Step3GroceryList';
import Step4OnlineStores from './components/Step4OnlineStores';
import RecipeDetailModal from './components/RecipeDetailModal';
import RecipeEditorModal from './components/RecipeEditorModal';
import CloudConfigModal from './components/CloudConfigModal';
import './App.css';

const LOCAL_STORAGE_KEY_RECIPES = 'plancha_menu_selected_recipes';
const LOCAL_STORAGE_KEY_PORTIONS = 'plancha_menu_portions';
const LOCAL_STORAGE_KEY_CHECKED = 'plancha_menu_checked_grocery';
const LOCAL_STORAGE_KEY_CUSTOM = 'plancha_menu_custom_items';

export default function App() {
  // Navigation entre les 4 étapes
  const [activeStep, setActiveStep] = useState(1);

  // État des recettes chargées depuis Cloud DB / Local Cache
  const [recipes, setRecipes] = useState(RECIPES_DATA);
  const [isCloudActive, setIsCloudActive] = useState(false);
  const [isLoadingDb, setIsLoadingDb] = useState(true);

  // Modals d'administration et de configuration
  const [showCloudModal, setShowCloudModal] = useState(false);
  const [recipeToEdit, setRecipeToEdit] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Recettes sélectionnées pour la semaine (initialisé avec 5 recettes par défaut)
  const [selectedRecipeIds, setSelectedRecipeIds] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_RECIPES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lecture localStorage:', e);
    }
    return ['rec-01', 'rec-02', 'rec-03', 'rec-04', 'rec-05'];
  });

  // Nombre de portions (défaut = 4 portions familiales)
  const [portions, setPortions] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PORTIONS);
      if (saved) return parseInt(saved, 10) || 4;
    } catch (e) {
      console.error('Erreur lecture portions:', e);
    }
    return 4;
  });

  // Articles personnalisés d'épicerie
  const [customItems, setCustomItems] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_CUSTOM);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lecture custom items:', e);
    }
    return [];
  });

  // État des cases à cocher de l'épicerie
  const [checkedState, setCheckedState] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_CHECKED);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lecture checked state:', e);
    }
    return {};
  });

  // Modal recette active (vue détaillée)
  const [activeModalRecipe, setActiveModalRecipe] = useState(null);

  // Charger les recettes depuis la BD Cloud au démarrage
  const fetchRecipes = async () => {
    setIsLoadingDb(true);
    try {
      const { recipes: loaded, isCloud } = await loadRecipesFromDb();
      setRecipes(loaded);
      setIsCloudActive(isCloud);
    } catch (err) {
      console.error('Erreur lors du chargement des recettes:', err);
    } finally {
      setIsLoadingDb(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  // Sauvegarde dans localStorage pour les sélections utilisateur
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_RECIPES, JSON.stringify(selectedRecipeIds));
  }, [selectedRecipeIds]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_PORTIONS, portions.toString());
  }, [portions]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_CHECKED, JSON.stringify(checkedState));
  }, [checkedState]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_CUSTOM, JSON.stringify(customItems));
  }, [customItems]);

  // Recettes complètes sélectionnées
  const selectedRecipes = useMemo(() => {
    return selectedRecipeIds
      .map(id => recipes.find(r => r.id === id))
      .filter(Boolean);
  }, [selectedRecipeIds, recipes]);

  // Moteur d'épicerie cumulée
  const groceryDepartments = useMemo(() => {
    return buildGroceryList(selectedRecipes, portions, customItems, checkedState);
  }, [selectedRecipes, portions, customItems, checkedState]);

  // Statistiques d'épicerie
  const groceryStats = useMemo(() => {
    return getGroceryStats(groceryDepartments);
  }, [groceryDepartments]);

  // Gestion de la sélection des recettes
  const handleToggleRecipe = (recipe) => {
    setSelectedRecipeIds((prev) => {
      if (prev.includes(recipe.id)) {
        return prev.filter(id => id !== recipe.id);
      } else {
        const next = [...prev, recipe.id];
        if (next.length === 5) {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 }
          });
        }
        return next;
      }
    });
  };

  // Retirer une recette
  const handleRemoveRecipe = (recipeId) => {
    setSelectedRecipeIds(prev => prev.filter(id => id !== recipeId));
  };

  // Réinitialiser le menu
  const handleResetMenu = () => {
    if (window.confirm('Voulez-vous réinitialiser votre sélection de repas pour la semaine ?')) {
      setSelectedRecipeIds([]);
      setCheckedState({});
    }
  };

  // Générateur aléatoire de 5 repas équilibrés
  const handleSelectRandom5 = () => {
    const shuffled = [...recipes].sort(() => 0.5 - Math.random());
    const random5 = shuffled.slice(0, 5).map(r => r.id);
    setSelectedRecipeIds(random5);

    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  // Sauvegarde (Création / Modification) d'une recette dans la BD
  const handleSaveRecipe = async (recipeData) => {
    const res = await saveRecipeToDb(recipeData);
    if (res.success) {
      setRecipes(res.allRecipes);
      setRecipeToEdit(null);
      setIsCreatingNew(false);

      // Si la recette sauvegardée était ouverte dans le modal détail, mettre à jour
      if (activeModalRecipe && activeModalRecipe.id === recipeData.id) {
        setActiveModalRecipe(res.recipe);
      }

      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      alert('Erreur lors de la sauvegarde : ' + res.error);
    }
  };

  // Suppression d'une recette de la BD
  const handleDeleteRecipe = async (recipeId) => {
    const res = await deleteRecipeFromDb(recipeId);
    if (res.success) {
      setRecipes(res.allRecipes);
      setSelectedRecipeIds(prev => prev.filter(id => id !== recipeId));
      setRecipeToEdit(null);
      if (activeModalRecipe && activeModalRecipe.id === recipeId) {
        setActiveModalRecipe(null);
      }
    } else {
      alert('Erreur lors de la suppression.');
    }
  };

  // Restaurer les 20 recettes par défaut
  const handleResetDefaults = async () => {
    if (window.confirm('Voulez-vous réinitialiser toutes les recettes avec les 20 recettes d\'origine ?')) {
      const reset = await resetAllRecipesToDefaults();
      setRecipes(reset);
      setShowCloudModal(false);
      alert('Les 20 recettes d\'origine ont été restaurées avec succès.');
    }
  };

  // Gestion des cases à cocher de l'épicerie
  const handleToggleItemCheck = (itemKey) => {
    setCheckedState(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  // Cocher/Décocher tout un rayon
  const handleToggleAllDept = (deptId, targetChecked) => {
    const dept = groceryDepartments[deptId];
    if (!dept) return;

    setCheckedState(prev => {
      const next = { ...prev };
      dept.items.forEach(item => {
        next[item.key] = targetChecked;
      });
      return next;
    });
  };

  // Ajout / Suppression d'articles personnalisés
  const handleAddCustomItem = (newItem) => {
    setCustomItems(prev => [...prev, newItem]);
  };

  const handleRemoveCustomItem = (itemId) => {
    setCustomItems(prev => prev.filter(item => item.id !== itemId));
  };

  // Navigation fluide
  const goToStep = (stepNumber) => {
    setActiveStep(stepNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* Barre de navigation principale avec étapes, portions et contrôle Cloud */}
      <Navbar
        activeStep={activeStep}
        setActiveStep={goToStep}
        selectedCount={selectedRecipeIds.length}
        portions={portions}
        setPortions={setPortions}
        onResetMenu={handleResetMenu}
        isCloudActive={isCloudActive}
        onOpenCloudConfig={() => setShowCloudModal(true)}
        onOpenNewRecipe={() => setIsCreatingNew(true)}
      />

      {/* Corps principal selon l'étape active */}
      <main className="main-content-area">
        {activeStep === 1 && (
          <Step1Selection
            recipes={recipes}
            selectedRecipes={selectedRecipes}
            onToggleRecipe={handleToggleRecipe}
            onSelectRandom5={handleSelectRandom5}
            onViewRecipe={(r) => setActiveModalRecipe(r)}
            onOpenNewRecipe={() => setIsCreatingNew(true)}
            onEditRecipe={(r) => setRecipeToEdit(r)}
            onNextStep={() => goToStep(2)}
          />
        )}

        {activeStep === 2 && (
          <Step2WeeklyMenu
            selectedRecipes={selectedRecipes}
            portions={portions}
            setPortions={setPortions}
            onRemoveRecipe={handleRemoveRecipe}
            onViewRecipe={(r) => setActiveModalRecipe(r)}
            onGoToStep1={() => goToStep(1)}
            onNextStep={() => goToStep(3)}
          />
        )}

        {activeStep === 3 && (
          <Step3GroceryList
            groceryDepartments={groceryDepartments}
            groceryStats={groceryStats}
            checkedState={checkedState}
            onToggleItemCheck={handleToggleItemCheck}
            onToggleAllDept={handleToggleAllDept}
            customItems={customItems}
            onAddCustomItem={handleAddCustomItem}
            onRemoveCustomItem={handleRemoveCustomItem}
            portions={portions}
            selectedRecipes={selectedRecipes}
            onGoToStep2={() => goToStep(2)}
            onNextStep={() => goToStep(4)}
          />
        )}

        {activeStep === 4 && (
          <Step4OnlineStores
            groceryDepartments={groceryDepartments}
            portions={portions}
            selectedRecipes={selectedRecipes}
            onGoToStep3={() => goToStep(3)}
          />
        )}
      </main>

      {/* Modal Détail Recette */}
      {activeModalRecipe && (
        <RecipeDetailModal
          recipe={activeModalRecipe}
          portions={portions}
          isSelected={selectedRecipeIds.includes(activeModalRecipe.id)}
          onToggleSelect={handleToggleRecipe}
          onEditRecipe={(r) => setRecipeToEdit(r)}
          onClose={() => setActiveModalRecipe(null)}
        />
      )}

      {/* Modal Studio Éditeur / Créateur de Recette */}
      {(recipeToEdit || isCreatingNew) && (
        <RecipeEditorModal
          recipeToEdit={recipeToEdit}
          onSaveRecipe={handleSaveRecipe}
          onDeleteRecipe={handleDeleteRecipe}
          onClose={() => {
            setRecipeToEdit(null);
            setIsCreatingNew(false);
          }}
        />
      )}

      {/* Modal Configuration Cloud DB (Firebase) */}
      {showCloudModal && (
        <CloudConfigModal
          isCloudActive={isCloudActive}
          onConfigUpdated={fetchRecipes}
          onResetDefaults={handleResetDefaults}
          onClose={() => setShowCloudModal(false)}
        />
      )}

      {/* Footer informatif */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <strong>Plancha-Master</strong> — Planificateur de repas familiaux & épicerie hebdomadaire
          </div>
          <p className="footer-text">
            Conçu pour le Québec • Base de données Cloud & Studio de recettes • Liens directs Super C, Maxi, IGA, Metro & Walmart
          </p>
        </div>
      </footer>
    </div>
  );
}
