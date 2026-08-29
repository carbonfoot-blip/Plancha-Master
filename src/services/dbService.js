import { RECIPES_DATA } from '../data/recipes';

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
  return null;
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
 * Charge les recettes : depuis Firebase Firestore si connecté, sinon depuis le cache local (initialisé avec RECIPES_DATA).
 */
export async function loadRecipesFromDb() {
  const db = await initFirebase();

  // Si Firebase est connecté, on tente de récupérer la collection 'recipes'
  if (db) {
    try {
      const { collection, getDocs } = await import('firebase/firestore');
      const snapshot = await getDocs(collection(db, 'recipes'));
      
      if (!snapshot.empty) {
        const cloudRecipes = [];
        snapshot.forEach((doc) => {
          cloudRecipes.push({ id: doc.id, ...doc.data() });
        });

        // Sauvegarder dans le cache local
        localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(cloudRecipes));
        return { recipes: cloudRecipes, isCloud: true };
      } else {
        // La collection est vide sur le cloud : on initialise avec nos 20 recettes par défaut
        await seedDefaultRecipesToCloud(db);
      }
    } catch (err) {
      console.warn('Erreur de lecture Firestore, utilisation du cache local:', err);
    }
  }

  // Repli sur le cache local
  try {
    const local = localStorage.getItem(LOCAL_STORAGE_RECIPES_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return { recipes: parsed, isCloud: !!db };
      }
    }
  } catch (e) {
    console.error('Erreur lecture localStorage:', e);
  }

  // Initialisation par défaut si premier lancement
  localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(RECIPES_DATA));
  return { recipes: RECIPES_DATA, isCloud: !!db };
}

/**
 * Envoie les 20 recettes initiales dans la base Cloud
 */
async function seedDefaultRecipesToCloud(db) {
  try {
    const { doc, setDoc } = await import('firebase/firestore');
    for (const recipe of RECIPES_DATA) {
      const { id, ...data } = recipe;
      await setDoc(doc(db, 'recipes', id), data);
    }
  } catch (e) {
    console.error('Erreur de seeding Cloud:', e);
  }
}

/**
 * Sauvegarde (Ajout ou Mise à jour) d'une recette dans le Cloud et le Cache local
 */
export async function saveRecipeToDb(recipeData) {
  const isNew = !recipeData.id || recipeData.id.startsWith('temp_');
  const recipeId = isNew ? `rec-${Date.now()}` : recipeData.id;
  const fullRecipe = {
    ...recipeData,
    id: recipeId,
    updatedAt: new Date().toISOString()
  };

  // 1. Sauvegarde dans le Cloud si disponible
  const db = await initFirebase();
  if (db) {
    try {
      const { doc, setDoc } = await import('firebase/firestore');
      const { id, ...dataToSave } = fullRecipe;
      await setDoc(doc(db, 'recipes', recipeId), dataToSave, { merge: true });
    } catch (e) {
      console.error('Erreur sauvegarde Cloud Firestore:', e);
    }
  }

  // 2. Sauvegarde dans le Cache local
  try {
    const local = localStorage.getItem(LOCAL_STORAGE_RECIPES_KEY);
    let recipes = local ? JSON.parse(local) : [...RECIPES_DATA];
    
    const existingIndex = recipes.findIndex(r => r.id === recipeId);
    if (existingIndex >= 0) {
      recipes[existingIndex] = fullRecipe;
    } else {
      recipes.unshift(fullRecipe);
    }

    localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(recipes));
    return { success: true, recipe: fullRecipe, allRecipes: recipes };
  } catch (e) {
    console.error('Erreur sauvegarde cache local:', e);
    return { success: false, error: e.message };
  }
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
      console.error('Erreur suppression Cloud Firestore:', e);
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
 * Réinitialise aux recettes d'usine par défaut
 */
export async function resetAllRecipesToDefaults() {
  localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(RECIPES_DATA));
  const db = await initFirebase();
  if (db) {
    await seedDefaultRecipesToCloud(db);
  }
  return RECIPES_DATA;
}
