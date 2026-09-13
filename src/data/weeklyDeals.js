/**
 * Gestion et données des spéciaux de la semaine axés exclusivement sur les PROTÉINES.
 * Au Québec (Super C, Maxi, IGA, Metro, Walmart), les circulaires sont en vigueur du JEUDI au MERCREDI.
 */

/**
 * Calcule dynamiquement les dates du cycle de circulaire actif (du jeudi au mercredi)
 */
export function getCurrentWeekCycleInfo() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Dimanche, 1 = Lundi, ..., 4 = Jeudi, 5 = Vendredi, 6 = Samedi
  
  // Les circulaires débutent le JEUDI matin et se terminent le MERCREDI soir.
  // Détermination du jeudi le plus récent :
  const daysSinceThursday = (dayOfWeek + 3) % 7;
  const thursday = new Date(now);
  thursday.setDate(now.getDate() - daysSinceThursday);
  thursday.setHours(6, 0, 0, 0);

  // Mercredi suivant (fin du cycle de circulaire)
  const wednesday = new Date(thursday);
  wednesday.setDate(thursday.getDate() + 6);
  wednesday.setHours(23, 59, 59, 999);

  const monthsFr = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];

  const thursdayStr = `${thursday.getDate()} ${monthsFr[thursday.getMonth()]}`;
  const wednesdayStr = `${wednesday.getDate()} ${monthsFr[wednesday.getMonth()]} ${wednesday.getFullYear()}`;

  // Numéro de semaine dans l'année
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((now - startOfYear) / 86400000) + startOfYear.getDay() + 1) / 7);

  return {
    weekNumber,
    startDate: thursdayStr,
    endDate: wednesdayStr,
    label: `Circulaires du ${thursdayStr} au ${wednesdayStr}`,
    shortLabel: `Du ${thursday.getDate()} au ${wednesday.getDate()} ${monthsFr[wednesday.getMonth()]}`,
    lastUpdated: `En vigueur du ${thursdayStr} au ${wednesdayStr}`
  };
}

export const GROCERY_STORES = [
  { id: 'all', name: 'Toutes les épiceries', icon: '🛒', color: '#64748b', flyerUrl: 'https://www.circulaires.com/' },
  { id: 'superc', name: 'Super C', icon: '🔴', color: '#dc2626', flyerUrl: 'https://www.circulaires.com/super-c/' },
  { id: 'maxi', name: 'Maxi', icon: '🟡', color: '#eab308', flyerUrl: 'https://www.circulaires.com/maxi/' },
  { id: 'iga', name: 'IGA', icon: '🔴', color: '#e11d48', flyerUrl: 'https://www.circulaires.com/iga/' },
  { id: 'metro', name: 'Metro', icon: '🔵', color: '#2563eb', flyerUrl: 'https://www.circulaires.com/metro/' },
  { id: 'walmart', name: 'Walmart', icon: '🟡', color: '#0284c7', flyerUrl: 'https://www.circulaires.com/walmart/' }
];

export const DEAL_CATEGORIES = [
  { id: 'all', label: 'Toutes les protéines', icon: '🥩' },
  { id: 'poulet', label: 'Poulet & Volaille', icon: '🍗' },
  { id: 'boeuf', label: 'Bœuf & Veau', icon: '🥩' },
  { id: 'porc', label: 'Porc', icon: '🥓' },
  { id: 'poissons', label: 'Poissons & Fruits de mer', icon: '🐟' },
  { id: 'vege', label: 'Tofu & Végé', icon: '🌱' }
];

export const WEEKLY_DEALS_DATA = [
  // --- 1. POULET & VOLAILLE ---
  {
    id: 'deal-01',
    name: 'Poitrines de poulet fraîches désossées sans peau',
    store: 'superc',
    storeName: 'Super C',
    category: 'poulet',
    promoPrice: '4.67',
    unit: '$/lb (10.30 $/kg)',
    originalPrice: '7.99 $/lb',
    discount: '-42%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['poitrine de poulet', 'poitrines de poulet', 'poulet'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-05',
    name: 'Hauts de cuisse de poulet désossés sans peau',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'poulet',
    promoPrice: '3.77',
    unit: '$/lb (8.31 $/kg)',
    originalPrice: '6.99 $/lb',
    discount: '-46%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['hauts de cuisse', 'haut de cuisse', 'poulet', 'jerk'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-13',
    name: 'Pilons de poulet frais format économique',
    store: 'superc',
    storeName: 'Super C',
    category: 'poulet',
    promoPrice: '2.49',
    unit: '$/lb (5.49 $/kg)',
    originalPrice: '4.49 $/lb',
    discount: '-44%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['pilons', 'pilon', 'poulet'],
    department: 'viandes',
    isTopDeal: false
  },

  // --- 2. PORC ---
  {
    id: 'deal-02',
    name: 'Flanc de porc frais du Québec en tranches',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'porc',
    promoPrice: '3.99',
    unit: '$/lb (8.80 $/kg)',
    originalPrice: '6.99 $/lb',
    discount: '-43%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['flanc de porc', 'flanc', 'porc', 'baos', 'sticky'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-09',
    name: 'Filet de porc frais du Québec sous vide (paquet de 2)',
    store: 'superc',
    storeName: 'Super C',
    category: 'porc',
    promoPrice: '3.49',
    unit: '$/lb (7.69 $/kg)',
    originalPrice: '6.49 $/lb',
    discount: '-46%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['filet de porc', 'porc', 'souvlaki', 'brochettes de porc'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-14',
    name: 'Côtelettes de porc avec os coupe du centre',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'porc',
    promoPrice: '2.99',
    unit: '$/lb (6.59 $/kg)',
    originalPrice: '4.99 $/lb',
    discount: '-40%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['côtelettes de porc', 'cotelettes', 'porc'],
    department: 'viandes',
    isTopDeal: false
  },
  {
    id: 'deal-15',
    name: 'Saucisses fraîches italiennes douces ou fortes',
    store: 'walmart',
    storeName: 'Walmart',
    category: 'porc',
    promoPrice: '3.97',
    unit: 'paquet de 500g',
    originalPrice: '5.97 $',
    discount: '-35%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['saucisse', 'saucisses', 'porc'],
    department: 'viandes',
    isTopDeal: false
  },

  // --- 3. BŒUF & VEAU ---
  {
    id: 'deal-03',
    name: 'Côtes de bœuf marinées (Short ribs) ou Faux-filet vieilli AAA',
    store: 'metro',
    storeName: 'Metro',
    category: 'boeuf',
    promoPrice: '7.99',
    unit: '$/lb (17.61 $/kg)',
    originalPrice: '14.49 $/lb',
    discount: '-45%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['côtes de boeuf', 'short ribs', 'galbi', 'boeuf', 'bœuf', 'faux-filet', 'steak'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-08',
    name: 'Bœuf haché mi-maigre ou maigre format familial',
    store: 'walmart',
    storeName: 'Walmart',
    category: 'boeuf',
    promoPrice: '3.97',
    unit: '$/lb (8.75 $/kg)',
    originalPrice: '6.47 $/lb',
    discount: '-38%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1588347818036-558601350947?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['boeuf haché', 'bœuf haché', 'viande hachée', 'burger', 'boulettes', 'boeuf', 'bœuf'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-10',
    name: 'Bavette de bœuf marinée ou Biftecks d\'aloyau AAA',
    store: 'iga',
    storeName: 'IGA',
    category: 'boeuf',
    promoPrice: '9.99',
    unit: '$/lb (22.02 $/kg)',
    originalPrice: '15.99 $/lb',
    discount: '-38%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['bavette', 'bavette de boeuf', 'bavette de bœuf', 'steak', 'boeuf', 'bœuf', 'chimichurri'],
    department: 'viandes',
    isTopDeal: true
  },

  // --- 4. POISSONS & FRUITS DE MER ---
  {
    id: 'deal-04',
    name: 'Filets de saumon frais de l\'Atlantique ou truite',
    store: 'superc',
    storeName: 'Super C',
    category: 'poissons',
    promoPrice: '8.88',
    unit: '$/lb (19.58 $/kg)',
    originalPrice: '14.99 $/lb',
    discount: '-41%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['saumon', 'truite', 'poisson'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-06',
    name: 'Crevettes blanches du Pacifique crues 31-40 déveinées (340g)',
    store: 'superc',
    storeName: 'Super C',
    category: 'poissons',
    promoPrice: '5.88',
    unit: 'sac de 340g',
    originalPrice: '9.99 $',
    discount: '-41%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['crevettes', 'crevette', 'fruits de mer', 'tacos'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-11',
    name: 'Filets de morue fraîche ou d\'aiglefin de l\'Atlantique',
    store: 'metro',
    storeName: 'Metro',
    category: 'poissons',
    promoPrice: '9.99',
    unit: '$/lb (22.02 $/kg)',
    originalPrice: '14.99 $/lb',
    discount: '-33%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['morue', 'aiglefin', 'poisson', 'poisson blanc'],
    department: 'viandes',
    isTopDeal: false
  },

  // --- 5. TOFU & VÉGÉTARIEN ---
  {
    id: 'deal-07',
    name: 'Tofu biologique extra-ferme Unisoya / Fontaine Santé (454g)',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'vege',
    promoPrice: '1.99',
    unit: 'bloc de 454g',
    originalPrice: '3.49 $',
    discount: '-43%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['tofu', 'satay', 'végé'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-12',
    name: 'Fromage Halloumi à griller ou Doré-Mi (250g)',
    store: 'iga',
    storeName: 'IGA',
    category: 'vege',
    promoPrice: '4.99',
    unit: 'paquet de 250g',
    originalPrice: '6.99 $',
    discount: '-28%',
    validUntil: 'Mercredi 16 septembre',
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['halloumi', 'fromage', 'grillé', 'végé'],
    department: 'viandes',
    isTopDeal: false
  }
];

/**
 * Trouve les recettes du catalogue qui correspondent aux rabais actifs
 */
export function findMatchingRecipesForDeal(deal, recipesList = []) {
  if (!deal || !deal.matchedKeywords || deal.matchedKeywords.length === 0) {
    return [];
  }

  return recipesList.filter((recipe) => {
    const title = (recipe.title || '').toLowerCase();
    const proteinType = (recipe.proteinType || '').toLowerCase();
    const tags = Array.isArray(recipe.tags) ? recipe.tags.join(' ').toLowerCase() : '';
    const ingredients = Array.isArray(recipe.ingredients) 
      ? recipe.ingredients.map(i => (i.name || '')).join(' ').toLowerCase() 
      : '';
    const combined = `${title} ${proteinType} ${tags} ${ingredients}`;

    return deal.matchedKeywords.some(keyword => {
      const kw = keyword.toLowerCase().trim();
      if (kw.length < 3) return false;
      return combined.includes(kw);
    });
  });
}
