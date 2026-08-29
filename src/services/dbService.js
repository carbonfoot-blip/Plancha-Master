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
 * Fusionne intelligemment deux listes de recettes par ID en garantissant qu'aucune recette par défaut n'est perdue
 */
function mergeRecipeLists(primaryList = [], fallbackList = RECIPES_DATA) {
  const map = new Map();

  // D'abord insérer la liste de secours (recettes de base)
  fallbackList.forEach((r) => {
    if (r && r.id) map.set(r.id, r);
  });

  // Ensuite écraser/ajouter avec les recettes modifiées ou créées
  primaryList.forEach((r) => {
    if (r && r.id) map.set(r.id, r);
  });

  return Array.from(map.values());
}

/**
 * Charge les recettes : depuis Firebase Firestore si connecté, sinon depuis le cache local, avec fusion de sécurité.
 */
export async function loadRecipesFromDb() {
  const db = await initFirebase();
  let cloudError = null;

  // 1. Tenter la lecture depuis le Cloud si Firebase est configuré
  if (db) {
    try {
      const { collection, getDocs } = await import('firebase/firestore');
      const snapshot = await getDocs(collection(db, 'recipes'));
      
      if (!snapshot.empty) {
        const cloudRecipes = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          cloudRecipes.push({ id: doc.id, ...data });
        });

        // Fusion de sécurité : on combine les recettes cloud avec les recettes de base pour ne rien perdre
        const merged = mergeRecipeLists(cloudRecipes, RECIPES_DATA);
        localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(merged));
        return { recipes: merged, isCloud: true, cloudError: null };
      } else {
        // La base cloud est neuve / vide : on l'initialise avec nos recettes
        await seedDefaultRecipesToCloud(db);
        const merged = mergeRecipeLists([], RECIPES_DATA);
        localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(merged));
        return { recipes: merged, isCloud: true, cloudError: null };
      }
    } catch (err) {
      console.warn('Erreur Firestore (règles de sécurité ou réseau) :', err);
      cloudError = err.code || err.message;
    }
  }

  // 2. Repli sur le cache local
  try {
    const local = localStorage.getItem(LOCAL_STORAGE_RECIPES_KEY);
    if (local) {
      const parsed = JSON.parse(local);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const merged = mergeRecipeLists(parsed, RECIPES_DATA);
        return { recipes: merged, isCloud: !!db && !cloudError, cloudError };
      }
    }
  } catch (e) {
    console.error('Erreur lecture localStorage:', e);
  }

  // 3. Initialisation par défaut
  localStorage.setItem(LOCAL_STORAGE_RECIPES_KEY, JSON.stringify(RECIPES_DATA));
  return { recipes: RECIPES_DATA, isCloud: !!db && !cloudError, cloudError };
}

/**
 * Envoie les recettes initiales dans la base Cloud
 */
async function seedDefaultRecipesToCloud(db) {
  try {
    const { doc, setDoc } = await import('firebase/firestore');
    for (const recipe of RECIPES_DATA) {
      const { id, ...data } = recipe;
      await setDoc(doc(db, 'recipes', id), data, { merge: true });
    }
  } catch (e) {
    console.warn('Erreur de seeding Cloud (vérifiez les règles Firestore) :', e);
  }
}

/**
 * Sauvegarde (Ajout ou Mise à jour) d'une recette dans le Cloud et le Cache local
 */
export async function saveRecipeToDb(recipeData) {
  const isNew = !recipeData.id || recipeData.id.startsWith('temp_') || recipeData.id.startsWith('rec-custom-');
  const recipeId = isNew ? (recipeData.id || `rec-${Date.now()}`) : recipeData.id;
  
  const fullRecipe = {
    ...recipeData,
    id: recipeId,
    updatedAt: new Date().toISOString()
  };

  // 1. Mise à jour immédiate du Cache local pour éviter toute perte
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

  // 2. Sauvegarde dans le Cloud Firestore si connecté
  const db = await initFirebase();
  let cloudError = null;

  if (db) {
    try {
      const { doc, setDoc } = await import('firebase/firestore');
      const { id, ...dataToSave } = fullRecipe;
      await setDoc(doc(db, 'recipes', recipeId), dataToSave, { merge: true });
    } catch (e) {
      console.warn('Erreur sauvegarde Cloud Firestore (vérifiez vos règles de sécurité) :', e);
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
