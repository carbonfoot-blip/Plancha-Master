import { RECIPES_DATA } from '../data/recipes';
import { DEFAULT_FIREBASE_CONFIG } from './firebaseConfig';

const LOCAL_STORAGE_RECIPES_KEY = 'plancha_master_all_recipes_db';
const LOCAL_STORAGE_FIREBASE_CONFIG_KEY = 'plancha_master_firebase_config';

let firebaseApp = null;
let firestoreDb = null;

/**
 * Initialise ou récupère la configuration Firebase si elle est fournie
 */
export function getStoredFirebaseConfig() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_FIREBASE_CONFIG_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('Erreur lecture config Firebase:', e);
  }
  return DEFAULT_FIREBASE_CONFIG;
}

export function saveFirebaseConfig(config) {
  try {
    if (!config) {
      localStorage.removeItem(LOCAL_STORAGE_FIREBASE_CONFIG_KEY);
    } else {
      localStorage.setItem(LOCAL_STORAGE_FIREBASE_CONFIG_KEY, JSON.stringify(config));
    }
  } catch (e) {
    console.error('Erreur sauvegarde config Firebase:', e);
  }
}

/**
 * Initialise le SDK Firebase Firestore dynamiquement
 */
async function initFirebase() {
  const config = getStoredFirebaseConfig();
  if (!config || !config.apiKey || !config.projectId) {
    return null;
  }

  try {
    const { initializeApp, getApps } = await import('firebase/app');
    const { getFirestore } = await import('firebase/firestore');

    const apps = getApps();
    firebaseApp = apps.length === 0 ? initializeApp(config) : apps[0];
    firestoreDb = getFirestore(firebaseApp);
    return firestoreDb;
  } catch (error) {
    console.warn('Impossible d\'initialiser Firebase Firestore:', error);
    return null;
  }
}

/**
 * Fusionne deux listes de recettes en conservant l'intégralité du catalogue
 */
function mergeRecipeLists(primaryList = [], fallbackList = RECIPES_DATA) {
  const map = new Map();

  // D'abord insérer la liste officielle du code
  fallbackList.forEach((r) => {
    if (r && r.id) map.set(r.id, r);
  });

  // Ensuite fusionner les recettes chargées de la BD (cloud ou custom)
  primaryList.forEach((r) => {
    if (r && r.id) map.set(r.id, r);
  });

  return Array.from(map.values());
}

/**
 * Synchronise les recettes officielles dans Firestore si elles sont absentes ou lors d'un reset forcé
 */
export async function seedDefaultRecipesToCloud(db, force = false) {
  if (!db) return;
  try {
    const { doc, setDoc, getDoc } = await import('firebase/firestore');
    for (const recipe of RECIPES_DATA) {
      const { id, ...data } = recipe;
      const ref = doc(db, 'recipes', id);
      if (force) {
        await setDoc(ref, data, { merge: true });
      } else {
        const existing = await getDoc(ref);
        if (!existing.exists()) {
          await setDoc(ref, data, { merge: true });
        }
      }
    }
  } catch (e) {
    console.warn('Erreur de synchro Cloud Firestore :', e);
  }
}

/**
 * Charge les recettes depuis Firestore ou le stockage local, et force l'ajout des nouvelles recettes du code dans la BD
 */
export async function loadRecipesFromDb() {
  const db = await initFirebase();
  let cloudError = null;

  if (db) {
    try {
      const { collection, getDocs } = await import('firebase/firestore');
      const snapshot = await getDocs(collection(db, 'recipes'));
      
      const cloudRecipes = [];
      if (!snapshot.empty) {
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          cloudRecipes.push({ id: docSnap.id, ...data });
        });
      }

      // Détecter si des recettes de RECIPES_DATA sont absentes de Firestore
      const cloudIds = new Set(cloudRecipes.map(r => r.id));
      const missingDefaultRecipes = RECIPES_DATA.filter(r => !cloudIds.has(r.id));

      if (snapshot.empty || missingDefaultRecipes.length > 0) {
        // Injection automatique des recettes manquantes dans Firestore
        await seedDefaultRecipesToCloud(db, false);

        // Re-charger la collection mise à jour
        const updatedSnapshot = await getDocs(collection(db, 'recipes'));
        cloudRecipes.length = 0;
        updatedSnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          cloudRecipes.push({ id: docSnap.id, ...data });
        });
      }

      const merged = mergeRecipeLists(cloudRecipes, RECIPES_DATA);
      localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(merged));
      return { recipes: merged, isCloud: true, cloudError: null };
    } catch (err) {
      console.warn('Erreur Firestore (règles de sécurité ou réseau) :', err);
      cloudError = err.code || err.message;
    }
  }

  // Repli local si pas de cloud
  try {
    const local = localStorage.getItem(LOCAL_STORAGE_RECIPES_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const merged = mergeRecipeLists(parsed, RECIPES_DATA);
        localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(merged));
        return { recipes: merged, isCloud: !!db && !cloudError, cloudError };
      }
    }
  } catch (e) {
    console.error('Erreur lecture localStorage:', e);
  }

  localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(RECIPES_DATA));
  return { recipes: RECIPES_DATA, isCloud: !!db && !cloudError, cloudError };
}

/**
 * Sauvegarde (Ajout ou Modification) d'une recette dans le Cloud et le Cache local
 */
export async function saveRecipeToDb(recipeData) {
  const isNew = !recipeData.id || recipeData.id.startsWith('temp_') || recipeData.id.startsWith('rec-custom-');
  const recipeId = isNew ? (recipeData.id || `rec-${Date.now()}`) : recipeData.id;
  
  const fullRecipe = {
    ...recipeData,
    id: recipeId,
    updatedAt: new Date().toISOString()
  };

  let updatedRecipes = [];
  try {
    const local = localStorage.getItem(LOCAL_STORAGE_RECIPES_KEY);
    let currentRecipes = local ? JSON.parse(local) : [...RECIPES_DATA];
    currentRecipes = mergeRecipeLists(currentRecipes, RECIPES_DATA);
    
    const existingIndex = currentRecipes.findIndex(r => r.id === recipeId);
    if (existingIndex >= 0) {
      currentRecipes[existingIndex] = fullRecipe;
    } else {
      currentRecipes.unshift(fullRecipe);
    }

    updatedRecipes = currentRecipes;
    localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(updatedRecipes));
  } catch (e) {
    console.error('Erreur sauvegarde cache local:', e);
    updatedRecipes = mergeRecipeLists([fullRecipe], RECIPES_DATA);
  }

  const db = await initFirebase();
  let cloudError = null;

  if (db) {
    try {
      const { doc, setDoc } = await import('firebase/firestore');
      const { id, ...dataToSave } = fullRecipe;
      await setDoc(doc(db, 'recipes', recipeId), dataToSave, { merge: true });
    } catch (e) {
      console.warn('Erreur sauvegarde Cloud Firestore :', e);
      cloudError = e.code || e.message;
    }
  }

  return {
    success: true,
    recipe: fullRecipe,
    allRecipes: updatedRecipes,
    cloudError
  };
}

/**
 * Supprime une recette de la base Cloud et du Cache local
 */
export async function deleteRecipeFromDb(recipeId) {
  const db = await initFirebase();
  if (db) {
    try {
      const { doc, deleteDoc } = await import('firebase/firestore');
      await deleteDoc(doc(db, 'recipes', recipeId));
    } catch (e) {
      console.warn('Erreur suppression Cloud Firestore:', e);
    }
  }

  try {
    const local = localStorage.getItem(LOCAL_STORAGE_RECIPES_KEY);
    let recipes = local ? JSON.parse(local) : [...RECIPES_DATA];
    recipes = recipes.filter(r => r.id !== recipeId);
    localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(recipes));
    return { success: true, allRecipes: recipes };
  } catch (e) {
    console.error('Erreur suppression cache local:', e);
    return { success: false, error: e.message };
  }
}

/**
 * Force la réinitialisation et synchronise les 50 recettes du code dans la BD Cloud
 */
export async function resetAllRecipesToDefaults() {
  localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(RECIPES_DATA));
  const db = await initFirebase();
  if (db) {
    await seedDefaultRecipesToCloud(db, true);
  }
  return RECIPES_DATA;
}
