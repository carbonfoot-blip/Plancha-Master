/**
 * Utilitaires pour le partage collaboratif du menu et de l'épicerie
 */

/**
 * Encode l'état du menu et de l'épicerie en chaîne URL
 */
export function encodeShareState({ selectedRecipeIds = [], portions = 4, customItems = [], excludedKeys = [] }) {
  const payload = {
    m: selectedRecipeIds,
    p: portions,
    c: customItems.map(item => ({
      id: item.id,
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
      department: item.department,
      storeBadge: item.storeBadge,
      promoPrice: item.promoPrice
    })),
    ex: excludedKeys
  };

  try {
    const jsonStr = JSON.stringify(payload);
    // Base64 UTF-8 safe encoding
    const b64 = btoa(encodeURIComponent(jsonStr).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode('0x' + p1);
    }));
    return b64;
  } catch (e) {
    console.error('Erreur encodage partage:', e);
    return null;
  }
}

/**
 * Décode la chaîne de partage depuis l'URL
 */
export function decodeShareState(rawHashOrQuery) {
  if (!rawHashOrQuery) return null;

  try {
    let token = '';
    if (rawHashOrQuery.includes('share=')) {
      const match = rawHashOrQuery.match(/share=([^&/#]+)/);
      if (match) token = match[1];
    } else {
      token = rawHashOrQuery.replace(/^[#?]/, '');
    }

    if (!token) return null;

    // Base64 UTF-8 safe decoding
    const jsonStr = decodeURIComponent(Array.prototype.map.call(atob(token), (c) => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const parsed = JSON.parse(jsonStr);

    return {
      selectedRecipeIds: Array.isArray(parsed.m) ? parsed.m : [],
      portions: typeof parsed.p === 'number' ? parsed.p : 4,
      customItems: Array.isArray(parsed.c) ? parsed.c : [],
      excludedKeys: Array.isArray(parsed.ex) ? parsed.ex : []
    };
  } catch (e) {
    console.warn('Lien de partage invalide ou expiré:', e);
    return null;
  }
}

/**
 * Génère l'URL complète de partage
 */
export function generateShareUrl(state) {
  const token = encodeShareState(state);
  if (!token) return window.location.href;

  const url = new URL(window.location.href);
  url.search = '';
  url.hash = `share=${token}`;
  return url.toString();
}

/**
 * Déclenche le partage natif (téléphone) ou copie l'URL dans le presse-papier
 */
export async function shareMenuAndGrocery(state) {
  const shareUrl = generateShareUrl(state);
  const shareData = {
    title: 'Plancha-Master : Notre Menu & Épicerie de la Semaine',
    text: `Voici nos ${state.selectedRecipeIds?.length || 5} repas planifiés pour la semaine avec la liste d'épicerie complète !`,
    url: shareUrl
  };

  // Si l'API de partage native est disponible (ex: iPhone, Android)
  if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return { success: true, method: 'native', url: shareUrl };
    } catch (e) {
      if (e.name === 'AbortError') {
        return { success: true, method: 'aborted', url: shareUrl };
      }
    }
  }

  // Fallback : copie dans le presse-papier
  try {
    await navigator.clipboard.writeText(shareUrl);
    return { success: true, method: 'clipboard', url: shareUrl };
  } catch (e) {
    console.error('Erreur copie presse-papier:', e);
    return { success: false, url: shareUrl };
  }
}
