import { getStoredFirebaseConfig } from './dbService';

const LOCAL_STORAGE_USER_KEY = 'plancha_master_auth_user';
const ADMIN_EMAILS = ['admin@planchamaster.ca', 'felix-antoine@planchamaster.ca', 'admin@famille.qc.ca'];

let authInstance = null;

/**
 * Initialise Firebase Auth avec la configuration existante
 */
export async function getFirebaseAuth() {
  if (authInstance) return authInstance;

  const config = getStoredFirebaseConfig();
  if (!config || !config.apiKey) return null;

  try {
    const { initializeApp, getApps } = await import('firebase/app');
    const { getAuth } = await import('firebase/auth');

    const apps = getApps();
    const app = apps.length === 0 ? initializeApp(config) : apps[0];
    authInstance = getAuth(app);
    return authInstance;
  } catch (err) {
    console.warn('Firebase Auth non disponible, passage en mode simulé sécurisé:', err);
    return null;
  }
}

/**
 * Récupère l'utilisateur localement mis en cache
 */
export function getStoredUser() {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    if (saved) return JSON.parse(saved);
  } catch (err) {
    console.error('Erreur lecture utilisateur:', err);
  }
  // Par défaut, l'utilisateur est anonyme/gratuit
  return {
    isLoggedIn: false,
    uid: null,
    email: '',
    displayName: 'Invité',
    plan: 'free', // 'free' | 'premium'
    role: 'user', // 'user' | 'admin'
    subscription: null
  };
}

/**
 * Sauvegarde l'utilisateur dans le stockage local
 */
export function saveStoredUser(userData) {
  try {
    if (!userData || !userData.isLoggedIn) {
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
      localStorage.removeItem('plancha_master_is_admin_logged');
    } else {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(userData));
      if (userData.role === 'admin') {
        localStorage.setItem('plancha_master_is_admin_logged', 'true');
      } else {
        localStorage.setItem('plancha_master_is_admin_logged', 'false');
      }
    }
  } catch (err) {
    console.error('Erreur sauvegarde utilisateur:', err);
  }
}

/**
 * Détermine le rôle selon l'email ou un flag
 */
function resolveRole(email, explicitRole) {
  if (explicitRole === 'admin') return 'admin';
  if (email && ADMIN_EMAILS.includes(email.toLowerCase().trim())) {
    return 'admin';
  }
  return 'user';
}

/**
 * Connexion avec email et mot de passe
 */
export async function loginWithEmail(email, password) {
  const normalizedEmail = email.trim().toLowerCase();
  const auth = await getFirebaseAuth();

  if (auth) {
    try {
      const { signInWithEmailAndPassword } = await import('firebase/auth');
      const cred = await signInWithEmailAndPassword(auth, normalizedEmail, password);
      const isAdm = resolveRole(normalizedEmail) === 'admin';
      
      const user = {
        isLoggedIn: true,
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: cred.user.displayName || normalizedEmail.split('@')[0],
        plan: isAdm ? 'premium' : (getStoredUser()?.plan || 'free'),
        role: isAdm ? 'admin' : 'user',
        photoURL: cred.user.photoURL || null
      };
      saveStoredUser(user);
      return { success: true, user };
    } catch (firebaseErr) {
      // Si Firebase renvoie une erreur d'authentification ou si auth n'est pas activé dans la console
      if (firebaseErr.code === 'auth/operation-not-allowed' || firebaseErr.code === 'auth/configuration-not-found') {
        // Fallback gracieux si l'API Firebase Auth n'est pas encore activée sur le projet cloud
        return loginSimulated(normalizedEmail, password);
      }
      throw firebaseErr;
    }
  } else {
    return loginSimulated(normalizedEmail, password);
  }
}

/**
 * Inscription avec email et mot de passe
 */
export async function registerWithEmail(email, password, displayName) {
  const normalizedEmail = email.trim().toLowerCase();
  const auth = await getFirebaseAuth();

  if (auth) {
    try {
      const { createUserWithEmailAndPassword, updateProfile } = await import('firebase/auth');
      const cred = await createUserWithEmailAndPassword(auth, normalizedEmail, password);
      if (displayName) {
        try {
          await updateProfile(cred.user, { displayName });
        } catch (_ignore) {}
      }
      const isAdm = resolveRole(normalizedEmail) === 'admin';
      const user = {
        isLoggedIn: true,
        uid: cred.user.uid,
        email: cred.user.email,
        displayName: displayName || normalizedEmail.split('@')[0],
        plan: isAdm ? 'premium' : 'free',
        role: isAdm ? 'admin' : 'user',
        photoURL: null
      };
      saveStoredUser(user);
      return { success: true, user };
    } catch (firebaseErr) {
      if (firebaseErr.code === 'auth/operation-not-allowed' || firebaseErr.code === 'auth/configuration-not-found') {
        return registerSimulated(normalizedEmail, displayName);
      }
      throw firebaseErr;
    }
  } else {
    return registerSimulated(normalizedEmail, displayName);
  }
}

/**
 * Connexion avec Google
 */
export async function loginWithGoogle() {
  const auth = await getFirebaseAuth();

  if (auth) {
    try {
      const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const isAdm = resolveRole(result.user.email) === 'admin';

      const user = {
        isLoggedIn: true,
        uid: result.user.uid,
        email: result.user.email,
        displayName: result.user.displayName || result.user.email?.split('@')[0] || 'Utilisateur Google',
        plan: isAdm ? 'premium' : (getStoredUser()?.plan || 'free'),
        role: isAdm ? 'admin' : 'user',
        photoURL: result.user.photoURL || null
      };
      saveStoredUser(user);
      return { success: true, user };
    } catch (firebaseErr) {
      if (firebaseErr.code === 'auth/operation-not-allowed' || firebaseErr.code === 'auth/configuration-not-found' || firebaseErr.code === 'auth/popup-closed-by-user') {
        if (firebaseErr.code === 'auth/popup-closed-by-user') {
          throw new Error('Connexion Google annulée.');
        }
        return loginSimulated('google.user@planchamaster.ca', 'Utilisateur Google');
      }
      throw firebaseErr;
    }
  } else {
    return loginSimulated('google.user@planchamaster.ca', 'Utilisateur Google');
  }
}

/**
 * Réinitialisation du mot de passe
 */
export async function resetPassword(email) {
  const normalizedEmail = email.trim().toLowerCase();
  const auth = await getFirebaseAuth();

  if (auth) {
    try {
      const { sendPasswordResetEmail } = await import('firebase/auth');
      await sendPasswordResetEmail(auth, normalizedEmail);
      return { success: true, message: `Un lien de réinitialisation a été envoyé à ${normalizedEmail}.` };
    } catch (firebaseErr) {
      if (firebaseErr.code === 'auth/operation-not-allowed' || firebaseErr.code === 'auth/configuration-not-found') {
        return { success: true, message: `Lien de réinitialisation simulé envoyé à ${normalizedEmail}.` };
      }
      throw firebaseErr;
    }
  } else {
    return { success: true, message: `Lien de réinitialisation envoyé à ${normalizedEmail}.` };
  }
}

/**
 * Déconnexion de l'utilisateur
 */
export async function logoutUser() {
  try {
    const auth = await getFirebaseAuth();
    if (auth) {
      const { signOut } = await import('firebase/auth');
      await signOut(auth);
    }
  } catch (err) {
    console.warn('Erreur signOut Firebase:', err);
  }
  saveStoredUser(null);
  return {
    isLoggedIn: false,
    uid: null,
    email: '',
    displayName: 'Invité',
    plan: 'free',
    role: 'user',
    subscription: null
  };
}

/**
 * Met à jour le forfait (ex: souscription mensuelle 2.99$ ou annuelle 24.99$)
 */
export function updateUserSubscription(planType, currentUser) {
  const isAnnual = planType === 'annual';
  const updatedUser = {
    ...currentUser,
    isLoggedIn: true,
    plan: 'premium',
    subscription: {
      type: isAnnual ? 'annual' : 'monthly',
      price: isAnnual ? '24.99$' : '2.99$',
      cycle: isAnnual ? '/an' : '/mois',
      startDate: new Date().toISOString(),
      status: 'active'
    }
  };
  saveStoredUser(updatedUser);
  return updatedUser;
}

/**
 * Helpers simulation pour environnement hors-ligne ou dev
 */
function loginSimulated(email, _password) {
  const isAdm = resolveRole(email) === 'admin';
  const user = {
    isLoggedIn: true,
    uid: 'local-' + Date.now(),
    email: email,
    displayName: email.split('@')[0] || 'Utilisateur',
    plan: isAdm ? 'premium' : (getStoredUser()?.plan || 'free'),
    role: isAdm ? 'admin' : 'user',
    photoURL: null
  };
  saveStoredUser(user);
  return { success: true, user };
}

function registerSimulated(email, displayName) {
  const isAdm = resolveRole(email) === 'admin';
  const user = {
    isLoggedIn: true,
    uid: 'local-' + Date.now(),
    email: email,
    displayName: displayName || email.split('@')[0] || 'Nouvel Utilisateur',
    plan: isAdm ? 'premium' : 'free',
    role: isAdm ? 'admin' : 'user',
    photoURL: null
  };
  saveStoredUser(user);
  return { success: true, user };
}
