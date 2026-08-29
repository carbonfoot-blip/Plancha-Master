/**
 * Configuration des bannières d'épicerie du Québec et utilitaires de recherche en ligne
 */

export const GROCERY_CHAINS = [
  {
    id: 'superc',
    name: 'Super C',
    logoText: 'SUPER C',
    tagline: 'Les bas prix d\'abord',
    themeColor: '#e11d48',
    bgColor: '#ffe4e6',
    borderBadge: '#fda4af',
    searchUrl: (query) => `https://www.superc.ca/recherche?filter=${encodeURIComponent(query)}`,
    homeUrl: 'https://www.superc.ca',
    advantages: ['Prix imbattables sur les viandes et porc', 'Formats familiaux économiques', 'Idéal pour le bœuf haché et la volaille']
  },
  {
    id: 'maxi',
    name: 'Maxi',
    logoText: 'MAXI',
    tagline: 'Imbattable. Point final.',
    themeColor: '#ea580c',
    bgColor: '#ffedd5',
    borderBadge: '#fdba74',
    searchUrl: (query) => `https://www.maxi.ca/search?search-bar=${encodeURIComponent(query)}`,
    homeUrl: 'https://www.maxi.ca',
    advantages: ['Politique d\'égalisation des prix', 'Programme PC Optimum avantageux', 'Grand choix de produits Sans Nom et PC']
  },
  {
    id: 'iga',
    name: 'IGA',
    logoText: 'IGA Extra',
    tagline: 'Vive la bouffe',
    themeColor: '#dc2626',
    bgColor: '#fee2e2',
    borderBadge: '#fca5a5',
    searchUrl: (query) => `https://www.iga.net/fr/recherche?k=${encodeURIComponent(query)}`,
    homeUrl: 'https://www.iga.net',
    advantages: ['Viandes de boucherie de qualité supérieure', 'Grand choix de produits locaux du Québec', 'Rayon poissonnerie frais']
  },
  {
    id: 'metro',
    name: 'Metro',
    logoText: 'METRO',
    tagline: 'L\'épicier',
    themeColor: '#2563eb',
    bgColor: '#dbeafe',
    borderBadge: '#93c5fd',
    searchUrl: (query) => `https://www.metro.ca/recherche?filter=${encodeURIComponent(query)}`,
    homeUrl: 'https://www.metro.ca',
    advantages: ['Programme de récompenses Moi', 'Rayon fruits et légumes très frais', 'Commande en ligne et cueillette rapide']
  },
  {
    id: 'walmart',
    name: 'Walmart Canada',
    logoText: 'WALMART',
    tagline: 'Économisez plus. Vivez mieux.',
    themeColor: '#0284c7',
    bgColor: '#e0f2fe',
    borderBadge: '#7dd3fc',
    searchUrl: (query) => `https://www.walmart.ca/fr/search?q=${encodeURIComponent(query)}`,
    homeUrl: 'https://www.walmart.ca',
    advantages: ['Garde-manger et non périssable à bas prix', 'Livraison et cueillette à l\'auto', 'Grandes marques populaires']
  }
];

/**
 * Nettoie le nom de l'ingrédient pour une requête de recherche efficace sur les épiceries en ligne
 */
export function cleanSearchQuery(ingredientName) {
  if (!ingredientName) return '';
  return ingredientName
    .replace(/\(.*?\)/g, '') // Supprime le contenu entre parenthèses
    .replace(/(frais|fraîche|fraîches|émincé|émincée|coupé|coupée|râpé|râpée|crues|cuits|extra-ferme|avec peau|paré|maigre|mi-maigre)/gi, '')
    .trim();
}

/**
 * Génère le texte formaté pour copier toute la liste dans le presse-papier
 */
export function formatGroceryListForClipboard(departmentsResult, portions = 4, selectedRecipes = []) {
  let text = `🛒 LISTE D'ÉPICERIE FAMILIALE (${portions} portions)\n`;
  text += `📅 Menu de la semaine : ${selectedRecipes.map(r => r.title).join(' | ')}\n`;
  text += `--------------------------------------------------\n\n`;

  Object.values(departmentsResult).forEach((dept) => {
    if (dept.items.length === 0) return;
    text += `${dept.icon} ${dept.name.toUpperCase()}\n`;
    dept.items.forEach((item) => {
      const checkMark = item.isChecked ? ' [✓]' : ' [ ]';
      text += `${checkMark} ${item.name} : ${item.displayQuantity} ${item.displayUnit}\n`;
    });
    text += `\n`;
  });

  text += `--------------------------------------------------\n`;
  text += `Généré via Mon Menu Plancha & Cuisine Rapide Québec`;
  return text;
}
