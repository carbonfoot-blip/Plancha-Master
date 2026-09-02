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
import { decodeShareState, shareMenuAndGrocery } from './utils/shareUtils';
import Navbar from './components/Navbar';
import Step1Selection from './components/Step1Selection';
import StepRabaisSemaine from './components/StepRabaisSemaine';
import Step2WeeklyMenu from './components/Step2WeeklyMenu';
import Step3GroceryList from './components/Step3GroceryList';
import Step4OnlineStores from './components/Step4OnlineStores';
import RecipeDetailModal from './components/RecipeDetailModal';
import RecipeEditorModal from './components/RecipeEditorModal';
import CloudConfigModal from './components/CloudConfigModal';
import AdminAuthModal from './components/AdminAuthModal';
import PwaInstallModal from './components/PwaInstallModal';
import ReleaseNotesModal from './components/ReleaseNotesModal';
import { getActiveReleaseNotes } from './data/releaseNotes';
import './App.css';

const LOCAL_STORAGE_KEY_RECIPES = 'plancha_menu_selected_recipes';
const LOCAL_STORAGE_KEY_PORTIONS = 'plancha_menu_portions';
const LOCAL_STORAGE_KEY_CHECKED = 'plancha_menu_checked_grocery';
const LOCAL_STORAGE_KEY_CUSTOM = 'plancha_menu_custom_items';
const LOCAL_STORAGE_KEY_EXCLUDED = 'plancha_menu_excluded_ingredients';
const LOCAL_STORAGE_KEY_IS_ADMIN = 'plancha_master_is_admin_logged';
const LOCAL_STORAGE_KEY_LAST_SEEN_RELEASE = 'plancha_last_seen_release_id';
const LOCAL_STORAGE_KEY_DISMISSED_BROADCAST = 'plancha_dismissed_broadcast_id';

export default function App() {
  const [activeStep, setActiveStep] = useState(1);

  const [recipes, setRecipes] = useState(RECIPES_DATA);
  const [isCloudActive, setIsCloudActive] = useState(false);
  const [isLoadingDb, setIsLoadingDb] = useState(true);

  // Release notes (publiées dans les 5 derniers jours)
  const activeReleaseNotes = useMemo(() => {
    return getActiveReleaseNotes(5);
  }, []);

  const [showReleaseNotesModal, setShowReleaseNotesModal] = useState(false);

  const [lastSeenReleaseId, setLastSeenReleaseId] = useState(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEY_LAST_SEEN_RELEASE) || '';
    } catch (e) {
      return '';
    }
  });

  const [dismissedBroadcastId, setDismissedBroadcastId] = useState(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEY_DISMISSED_BROADCAST) || '';
    } catch (e) {
      return '';
    }
  });

  const latestReleaseId = activeReleaseNotes[0]?.id || '';
  const hasUnreadReleaseNotes = Boolean(latestReleaseId && lastSeenReleaseId !== latestReleaseId);
  const showBroadcastBanner = Boolean(latestReleaseId && dismissedBroadcastId !== latestReleaseId);

  const handleOpenReleaseNotes = () => {
    setShowReleaseNotesModal(true);
  };

  const handleMarkAllReleasesAsRead = () => {
    if (latestReleaseId) {
      setLastSeenReleaseId(latestReleaseId);
      setDismissedBroadcastId(latestReleaseId);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY_LAST_SEEN_RELEASE, latestReleaseId);
        localStorage.setItem(LOCAL_STORAGE_KEY_DISMISSED_BROADCAST, latestReleaseId);
      } catch (e) {}
    }
  };

  const handleDismissBroadcast = () => {
    if (latestReleaseId) {
      setDismissedBroadcastId(latestReleaseId);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY_DISMISSED_BROADCAST, latestReleaseId);
      } catch (e) {}
    }
  };

  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEY_IS_ADMIN) === 'true';
    } catch (e) {
      return false;
    }
  });
  const [showAdminAuthModal, setShowAdminAuthModal] = useState(false);

  const [showCloudModal, setShowCloudModal] = useState(false);
  const [showPwaModal, setShowPwaModal] = useState(false);
  const [deferredPwaPrompt, setDeferredPwaPrompt] = useState(null);
  const [recipeToEdit, setRecipeToEdit] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  const [selectedRecipeIds, setSelectedRecipeIds] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_RECIPES);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lecture localStorage:', e);
    }
    return ['rec-01', 'rec-02', 'rec-03', 'rec-04', 'rec-05'];
  });

  const [portions, setPortions] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_PORTIONS);
      if (saved) return parseInt(saved, 10) || 4;
    } catch (e) {
      console.error('Erreur lecture portions:', e);
    }
    return 4;
  });

  const [customItems, setCustomItems] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_CUSTOM);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lecture custom items:', e);
    }
    return [];
  });

  const [excludedIngredientKeys, setExcludedIngredientKeys] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_EXCLUDED);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lecture excluded keys:', e);
    }
    return [];
  });

  const [checkedState, setCheckedState] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_CHECKED);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Erreur lecture checked state:', e);
    }
    return {};
  });

  const [activeModalRecipe, setActiveModalRecipe] = useState(null);

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

  useEffect(() => {
    const raw = window.location.hash || window.location.search;
    if (raw && raw.includes('share=')) {
      const shared = decodeShareState(raw);
      if (shared) {
        if (shared.selectedRecipeIds?.length) setSelectedRecipeIds(shared.selectedRecipeIds);
        if (shared.portions) setPortions(shared.portions);
        if (shared.customItems) setCustomItems(shared.customItems);
        if (shared.excludedKeys) setExcludedIngredientKeys(shared.excludedKeys);

        setActiveStep(2);

        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.4 }
        });
      }
    }
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPwaPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  }, []);

  const handleTriggerPwaInstall = async () => {
    if (!deferredPwaPrompt) return;
    deferredPwaPrompt.prompt();
    const { outcome } = await deferredPwaPrompt.userChoice;
    if (outcome === 'accepted') {
      setDeferredPwaPrompt(null);
      setShowPwaModal(false);
    }
  };

  const handleUnlockAdmin = () => {
    setIsAdmin(true);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_IS_ADMIN, 'true');
    } catch (e) {}
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.2 }
    });
  };

  const handleLockAdmin = () => {
    setIsAdmin(false);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_IS_ADMIN, 'false');
    } catch (e) {}
  };

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

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_EXCLUDED, JSON.stringify(excludedIngredientKeys));
  }, [excludedIngredientKeys]);

  const selectedRecipes = useMemo(() => {
    return selectedRecipeIds
      .map(id => recipes.find(r => r.id === id))
      .filter(Boolean);
  }, [selectedRecipeIds, recipes]);

  const groceryDepartments = useMemo(() => {
    return buildGroceryList(selectedRecipes, portions, customItems, checkedState, excludedIngredientKeys);
  }, [selectedRecipes, portions, customItems, checkedState, excludedIngredientKeys]);

  const groceryStats = useMemo(() => {
    return getGroceryStats(groceryDepartments);
  }, [groceryDepartments]);

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

  const handleRemoveRecipe = (recipeId) => {
    setSelectedRecipeIds(prev => prev.filter(id => id !== recipeId));
  };

  const handleResetMenu = () => {
    if (window.confirm('Voulez-vous réinitialiser votre sélection de repas pour la semaine ?')) {
      setSelectedRecipeIds([]);
      setCheckedState({});
    }
  };

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

  const handleSaveRecipe = async (recipeData) => {
    const res = await saveRecipeToDb(recipeData);
    if (res.success) {
      setRecipes(res.allRecipes);
      setRecipeToEdit(null);
      setIsCreatingNew(false);

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

  const handleResetDefaults = async () => {
    if (window.confirm('Voulez-vous synchroniser et restaurer l\'intégralité des 50 recettes du catalogue officiel dans la base de données ?')) {
      const reset = await resetAllRecipesToDefaults();
      setRecipes(reset);
      setShowCloudModal(false);
      alert('Les 50 recettes du catalogue ont été synchronisées et restaurées dans la base de données Cloud avec succès.');
    }
  };

  const handleToggleItemCheck = (itemKey) => {
    setCheckedState(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

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

  const handleAddCustomItem = (newItem) => {
    setCustomItems(prev => [...prev, newItem]);
  };

  const handleAddDealToGrocery = (deal) => {
    const newItem = {
      id: `deal-${Date.now()}-${deal.id}`,
      name: deal.name,
      quantity: 1,
      unit: deal.unit?.includes('/') ? deal.unit.split('/')[0].trim() : 'unité',
      department: deal.department || 'non_perissable',
      storeBadge: `${deal.storeName} (${deal.promoPrice} $) me`,
      promoPrice: deal.promoPrice,
      isDeal: true
    };
    setCustomItems(prev => [...prev, newItem]);
  };

  const handleRemoveCustomItem = (itemId) => {
    setCustomItems(prev => prev.filter(item => item.id !== itemId));
  };

  const goToStep = (stepNumber) => {
    setActiveStep(stepNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      <Navbar
        activeStep={activeStep}
        setActiveStep={goToStep}
        selectedCount={selectedRecipeIds.length}
        portions={portions}
        setPortions={setPortions}
        onResetMenu={handleResetMenu}
        isCloudActive={isCloudActive}
        isAdmin={isAdmin}
        onOpenAdminAuth={() => setShowAdminAuthModal(true)}
        onLockAdmin={handleLockAdmin}
        onOpenCloudConfig={() => setShowCloudModal(true)}
        onOpenNewRecipe={() => setIsCreatingNew(true)}
        onOpenPwaModal={() => setShowPwaModal(true)}
        onOpenReleaseNotes={handleOpenReleaseNotes}
        hasUnreadReleaseNotes={hasUnreadReleaseNotes}
        activeReleaseNotes={activeReleaseNotes}
        showBroadcastBanner={showBroadcastBanner}
        onDismissBroadcast={handleDismissBroadcast}
      />

      <main className="main-content-area">
        {activeStep === 0 && (
          <StepRabaisSemaine
            recipes={recipes}
            selectedRecipeIds={selectedRecipeIds}
            onToggleSelectRecipe={handleToggleRecipe}
            onAddDealToGrocery={handleAddDealToGrocery}
            onOpenRecipeDetail={(r) => setActiveModalRecipe(r)}
            onGoToStep={goToStep}
          />
        )}

        {activeStep === 1 && (
          <Step1Selection
            recipes={recipes}
            selectedRecipes={selectedRecipes}
            onToggleRecipe={handleToggleRecipe}
            onSelectRandom5={handleSelectRandom5}
            onViewRecipe={(r) => setActiveModalRecipe(r)}
            onOpenNewRecipe={() => setIsCreatingNew(true)}
            onEditRecipe={(r) => setRecipeToEdit(r)}
            isAdmin={isAdmin}
            onNextStep={() => goToStep(2)}
            onGoToDeals={() => goToStep(0)}
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
            onShareMenu={() => shareMenuAndGrocery({
              selectedRecipeIds,
              portions,
              customItems,
              excludedKeys: excludedIngredientKeys
            })}
          />
        )}

        {activeStep === 3 && (
          <Step3GroceryList
            groceryDepartments={groceryDepartments}
            groceryStats={groceryStats}
            checkedState={checkedState}
            onToggleItemCheck={handleToggleItemCheck}
            onToggleAllDept={handleToggleAllDept}
            onResetAllChecks={() => setCheckedState({})}
            customItems={customItems}
            onAddCustomItem={handleAddCustomItem}
            onRemoveCustomItem={handleRemoveCustomItem}
            onToggleExcludeItem={(itemKey) => {
              setExcludedIngredientKeys(prev => {
                if (prev.includes(itemKey)) {
                  return prev.filter(k => k !== itemKey);
                } else {
                  return [...prev, itemKey];
                }
              });
            }}
            onShareMenu={() => shareMenuAndGrocery({
              selectedRecipeIds,
              portions,
              customItems,
              excludedKeys: excludedIngredientKeys
            })}
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

      {activeModalRecipe && (
        <RecipeDetailModal
          recipe={activeModalRecipe}
          portions={portions}
          isSelected={selectedRecipeIds.includes(activeModalRecipe.id)}
          onToggleSelect={handleToggleRecipe}
          onEditRecipe={(r) => setRecipeToEdit(r)}
          isAdmin={isAdmin}
          onClose={() => setActiveModalRecipe(null)}
        />
      )}

      {isAdmin && (recipeToEdit || isCreatingNew) && (
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

      {showAdminAuthModal && (
        <AdminAuthModal
          isOpen={showAdminAuthModal}
          onUnlockSuccess={handleUnlockAdmin}
          onClose={() => setShowAdminAuthModal(false)}
        />
      )}

      {isAdmin && showCloudModal && (
        <CloudConfigModal
          isCloudActive={isCloudActive}
          onConfigUpdated={fetchRecipes}
          onResetDefaults={handleResetDefaults}
          onClose={() => setShowCloudModal(false)}
        />
      )}

      <PwaInstallModal
        isOpen={showPwaModal}
        onClose={() => setShowPwaModal(false)}
        deferredPrompt={deferredPwaPrompt}
        onTriggerInstall={handleTriggerPwaInstall}
      />

      {showReleaseNotesModal && (
        <ReleaseNotesModal
          releaseNotes={activeReleaseNotes}
          onClose={() => setShowReleaseNotesModal(false)}
          onMarkAllAsRead={handleMarkAllReleasesAsRead}
        />
      )}

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <strong>Plancha-Master</strong> — Planificateur de repas familiaux & épicerie hebdomadaire
          </div>
          <p className="footer-text">
            Base de données Cloud partagée • Protection par Mode Administrateur • Liens directs Super C, Maxi, IGA, Metro & Walmart
          </p>
          {!isAdmin && (
            <button
              type="button"
              className="footer-admin-link"
              onClick={() => setShowAdminAuthModal(true)}
            >
              🔒 Espace Administrateur
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
