/**
 * Calcule les dates de la semaine active débutant le dimanche AM
 */
export function getCurrentWeekCycleInfo() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Dimanche, 1 = Lundi, ...
  
  // Date du dimanche le plus récent (début de la semaine de planification)
  const sunday = new Date(now);
  sunday.setDate(now.getDate() - dayOfWeek);
  sunday.setHours(6, 0, 0, 0);

  // Date du samedi suivant (fin de semaine)
  const saturday = new Date(sunday);
  saturday.setDate(sunday.getDate() + 6);

  const monthsFr = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];

  const sundayStr = `${sunday.getDate()} ${monthsFr[sunday.getMonth()]}`;
  const saturdayStr = `${saturday.getDate()} ${monthsFr[saturday.getMonth()]} ${saturday.getFullYear()}`;

  // Numéro de semaine dans l'année pour la rotation automatique
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((now - startOfYear) / 86400000) + startOfYear.getDay() + 1) / 7);

  return {
    weekNumber,
    startDate: sundayStr,
    endDate: saturdayStr,
    label: `Semaine du ${sundayStr} au ${saturdayStr}`,
    lastUpdated: `Dimanche ${sundayStr} à 06:00`
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
  { id: 'all', label: 'Tous les rabais', icon: '🏷️' },
  { id: 'viandes', label: 'Viandes & Poissons', icon: '🥩' },
  { id: 'fruits_legumes', label: 'Fruits & Légumes', icon: '🥦' },
  { id: 'produits_laitiers', label: 'Produits Laitiers & Œufs', icon: '🧀' },
  { id: 'collations_lunchs', label: 'Collations, Lunchs & Enfants', icon: '🍎' },
  { id: 'non_perissable', label: 'Garde-manger & Épicerie', icon: '🥫' },
  { id: 'surgeles', label: 'Surgelés', icon: '🧊' }
];

export const WEEKLY_DEALS_DATA = [
  // --- VIANDES & POISSONS (PROTÉINES EN VEDETTE DANS LES CIRCULAIRES) ---
  {
    id: 'deal-01',
    name: 'Poitrines de poulet fraîches désossées sans peau',
    store: 'superc',
    storeName: 'Super C',
    category: 'viandes',
    promoPrice: '4.67',
    unit: '$/lb (10.30 $/kg)',
    originalPrice: '7.99 $/lb',
    discount: '-42%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['poitrine de poulet', 'poulet'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-02',
    name: 'Flanc de porc frais du Québec en tranches',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'viandes',
    promoPrice: '3.99',
    unit: '$/lb (8.80 $/kg)',
    originalPrice: '6.99 $/lb',
    discount: '-43%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['flanc de porc', 'porc', 'baos'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-03',
    name: 'Côtes de bœuf (Short ribs) ou Faux-filet vieilli AAA',
    store: 'metro',
    storeName: 'Metro',
    category: 'viandes',
    promoPrice: '7.99',
    unit: '$/lb (17.61 $/kg)',
    originalPrice: '14.49 $/lb',
    discount: '-45%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['côtes de boeuf', 'short ribs', 'galbi', 'boeuf', 'bœuf'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-04',
    name: 'Filets de saumon ou de truite fraîche de l\'Atlantique',
    store: 'superc',
    storeName: 'Super C',
    category: 'viandes',
    promoPrice: '8.88',
    unit: '$/lb (19.58 $/kg)',
    originalPrice: '14.99 $/lb',
    discount: '-41%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['saumon', 'truite', 'poisson'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-05',
    name: 'Hauts de cuisse de poulet désossés sans peau',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'viandes',
    promoPrice: '3.77',
    unit: '$/lb (8.31 $/kg)',
    originalPrice: '6.99 $/lb',
    discount: '-46%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['hauts de cuisse', 'poulet', 'jerk'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-06',
    name: 'Crevettes blanches du Pacifique crues 31-40 (340g)',
    store: 'superc',
    storeName: 'Super C',
    category: 'viandes',
    promoPrice: '5.88',
    unit: 'sac de 340g',
    originalPrice: '9.99 $',
    discount: '-41%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['crevettes', 'fruits de mer', 'tacos'],
    department: 'viandes',
    isTopDeal: true
  },
  {
    id: 'deal-07',
    name: 'Tofu biologique extra-ferme Unisoya / Sunrise (454g)',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'viandes',
    promoPrice: '1.99',
    unit: 'bloc de 454g',
    originalPrice: '3.49 $',
    discount: '-43%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['tofu', 'végé', 'satay'],
    department: 'viandes',
    isTopDeal: false
  },

  // --- FRUITS & LÉGUMES ---
  {
    id: 'deal-08',
    name: 'Poivrons doux de serre (sac de 4 couleurs)',
    store: 'superc',
    storeName: 'Super C',
    category: 'fruits_legumes',
    promoPrice: '2.99',
    unit: 'sac de 4 poivrons',
    originalPrice: '5.99 $',
    discount: '-50%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['poivron', 'fajitas', 'brochettes'],
    department: 'fruits_legumes',
    isTopDeal: true
  },
  {
    id: 'deal-09',
    name: 'Brocoli frais du Québec',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'fruits_legumes',
    promoPrice: '1.27',
    unit: 'la botte',
    originalPrice: '2.99 $',
    discount: '-58%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['brocoli', 'sauté'],
    department: 'fruits_legumes',
    isTopDeal: true
  },
  {
    id: 'deal-10',
    name: 'Avocats Hass prêts à manger (sac de 5)',
    store: 'walmart',
    storeName: 'Walmart',
    category: 'fruits_legumes',
    promoPrice: '2.88',
    unit: 'sac de 5 avocats',
    originalPrice: '4.97 $',
    discount: '-42%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['avocat', 'guacamole', 'tacos', 'burrito'],
    department: 'fruits_legumes',
    isTopDeal: false
  },
  {
    id: 'deal-11',
    name: 'Concombres anglais sans pépins du Québec',
    store: 'superc',
    storeName: 'Super C',
    category: 'fruits_legumes',
    promoPrice: '0.79',
    unit: 'l\'unité',
    originalPrice: '1.99 $',
    discount: '-60%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['concombre', 'tzatziki', 'baos'],
    department: 'fruits_legumes',
    isTopDeal: false
  },
  {
    id: 'deal-12',
    name: 'Carottes fraîches du Québec (sac de 3 lb / 1.36 kg)',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'fruits_legumes',
    promoPrice: '1.67',
    unit: 'sac de 3 lb',
    originalPrice: '3.49 $',
    discount: '-52%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['carottes', 'baos', 'salade'],
    department: 'fruits_legumes',
    isTopDeal: false
  },
  {
    id: 'deal-13',
    name: 'Oignons verts frais (échalotes)',
    store: 'metro',
    storeName: 'Metro',
    category: 'fruits_legumes',
    promoPrice: '0.88',
    unit: 'la botte',
    originalPrice: '1.79 $',
    discount: '-51%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['oignons verts', 'baos', 'asiatique'],
    department: 'fruits_legumes',
    isTopDeal: false
  },
  {
    id: 'deal-13b',
    name: 'Pains baos moelleux à la vapeur (paquet de 8 à 10)',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'non_perissable',
    promoPrice: '3.49',
    unit: 'paquet de 10',
    originalPrice: '4.99 $',
    discount: '-30%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['pains baos', 'baos'],
    department: 'non_perissable',
    isTopDeal: true
  },
  {
    id: 'deal-13c',
    name: 'Ananas doré frais entier Extra Sweet',
    store: 'iga',
    storeName: 'IGA',
    category: 'fruits_legumes',
    promoPrice: '1.99',
    unit: 'l\'unité',
    originalPrice: '3.99 $',
    discount: '-50%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['ananas', 'jerk', 'salsa'],
    department: 'fruits_legumes',
    isTopDeal: false
  },

  // --- PRODUITS LAITIERS & ŒUFS ---
  {
    id: 'deal-14',
    name: 'Fromage Cheddar ou Mozzarella Black Diamond (400g)',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'produits_laitiers',
    promoPrice: '4.44',
    unit: 'bloc de 400g',
    originalPrice: '7.49 $',
    discount: '-40%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['fromage', 'cheddar', 'quesadillas', 'burgers', 'tacos'],
    department: 'produits_laitiers',
    isTopDeal: true
  },
  {
    id: 'deal-15',
    name: 'Œufs gros blancs calibre A (douzaine)',
    store: 'superc',
    storeName: 'Super C',
    category: 'produits_laitiers',
    promoPrice: '2.88',
    unit: 'carton de 12',
    originalPrice: '4.19 $',
    discount: '-31%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['oeufs', 'riz frit', 'burrito'],
    department: 'produits_laitiers',
    isTopDeal: false
  },
  {
    id: 'deal-16',
    name: 'Mayonnaise japonaise de type Kewpie (500ml)',
    store: 'metro',
    storeName: 'Metro',
    category: 'non_perissable',
    promoPrice: '4.99',
    unit: 'bouteille de 500ml',
    originalPrice: '6.99 $',
    discount: '-28%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['mayonnaise', 'kewpie', 'baos'],
    department: 'non_perissable',
    isTopDeal: false
  },
  {
    id: 'deal-17',
    name: 'Beurre salé ou non salé Québon / Lactantia (454g)',
    store: 'walmart',
    storeName: 'Walmart',
    category: 'produits_laitiers',
    promoPrice: '4.88',
    unit: 'livre (454g)',
    originalPrice: '6.99 $',
    discount: '-30%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['beurre'],
    department: 'produits_laitiers',
    isTopDeal: false
  },

  // --- COLLATIONS & LUNCHS DES ENFANTS (HORS-RECETTE) ---
  {
    id: 'deal-18',
    name: 'Barres tendres Val Nature / Chewy (boîte de 5 à 8)',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'collations_lunchs',
    promoPrice: '1.99',
    unit: 'la boîte',
    originalPrice: '3.99 $',
    discount: '-50%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: [],
    department: 'non_perissable',
    isTopDeal: true,
    isLunchSnack: true
  },
  {
    id: 'deal-19',
    name: 'Compotes de pommes en gourde Mott\'s Fruitsations (boîte de 12)',
    store: 'superc',
    storeName: 'Super C',
    category: 'collations_lunchs',
    promoPrice: '4.99',
    unit: 'boîte de 12 x 90g',
    originalPrice: '7.49 $',
    discount: '-33%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: [],
    department: 'non_perissable',
    isTopDeal: true,
    isLunchSnack: true
  },
  {
    id: 'deal-20',
    name: 'Fromage Ficello Black Diamond (paquet de 12)',
    store: 'iga',
    storeName: 'IGA',
    category: 'collations_lunchs',
    promoPrice: '3.99',
    unit: 'paquet de 12 (252g)',
    originalPrice: '6.49 $',
    discount: '-38%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: [],
    department: 'produits_laitiers',
    isTopDeal: false,
    isLunchSnack: true
  },
  {
    id: 'deal-21',
    name: 'Yogourt à boire Yop ou DanActive (paquet de 8)',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'collations_lunchs',
    promoPrice: '3.88',
    unit: 'paquet de 8',
    originalPrice: '5.99 $',
    discount: '-35%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: [],
    department: 'produits_laitiers',
    isTopDeal: false,
    isLunchSnack: true
  },
  {
    id: 'deal-22',
    name: 'Craquelins Ritz / Breton ou Goldfish (boîte format familial)',
    store: 'walmart',
    storeName: 'Walmart',
    category: 'collations_lunchs',
    promoPrice: '2.47',
    unit: 'boîte de 200g à 250g',
    originalPrice: '3.97 $',
    discount: '-38%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: [],
    department: 'non_perissable',
    isTopDeal: false,
    isLunchSnack: true
  },
  {
    id: 'deal-23',
    name: 'Boîtes de jus Oasis 100% pur (paquet de 8 x 200ml)',
    store: 'superc',
    storeName: 'Super C',
    category: 'collations_lunchs',
    promoPrice: '2.22',
    unit: 'paquet de 8',
    originalPrice: '3.99 $',
    discount: '-44%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: [],
    department: 'non_perissable',
    isTopDeal: false,
    isLunchSnack: true
  },

  // --- GARDE-MANGER & SURGELÉS ---
  {
    id: 'deal-24',
    name: 'Riz au jasmin ou basmati Royal (sac de 2 kg)',
    store: 'maxi',
    storeName: 'Maxi',
    category: 'non_perissable',
    promoPrice: '4.99',
    unit: 'sac de 2 kg',
    originalPrice: '8.49 $',
    discount: '-41%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['riz'],
    department: 'non_perissable',
    isTopDeal: false
  },
  {
    id: 'deal-25',
    name: 'Pâtes alimentaires Catelli / Primo (boîte de 500g)',
    store: 'superc',
    storeName: 'Super C',
    category: 'non_perissable',
    promoPrice: '1.25',
    unit: 'la boîte de 500g',
    originalPrice: '2.49 $',
    discount: '-50%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['linguines', 'pâtes'],
    department: 'non_perissable',
    isTopDeal: false
  },
  {
    id: 'deal-26',
    name: 'Sauce soya Kikkoman ou Passata Mutti (796ml)',
    store: 'metro',
    storeName: 'Metro',
    category: 'non_perissable',
    promoPrice: '2.99',
    unit: 'bouteille de 796ml',
    originalPrice: '4.49 $',
    discount: '-33%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['sauce soya', 'soya', 'passata', 'baos'],
    department: 'non_perissable',
    isTopDeal: false
  },
  {
    id: 'deal-27',
    name: 'Maïs en grains surgelé ou Légumes Arctic Gardens (750g)',
    store: 'iga',
    storeName: 'IGA',
    category: 'surgeles',
    promoPrice: '2.88',
    unit: 'sac de 750g',
    originalPrice: '4.99 $',
    discount: '-42%',
    validUntil: 'Mercredi prochain',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80',
    matchedKeywords: ['maïs', 'pois', 'surgelés', 'tacos'],
    department: 'surgeles',
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
    // Vérifie correspondance dans le titre, protéine, tags ou ingrédients
    const recipeText = `${recipe.title} ${recipe.proteinType} ${recipe.tags?.join(' ') || ''} ${recipe.ingredients?.map(i => i.name).join(' ') || ''}`.toLowerCase();
    return deal.matchedKeywords.some(keyword => recipeText.includes(keyword.toLowerCase()));
  });
}
