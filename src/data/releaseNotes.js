/**
 * Historique des notes de mise à jour (Release Notes / Broadcast)
 * Règle : Les notes s'empilent et restent actives pendant une période de 5 jours.
 */

export const RELEASE_NOTES_DATA = [
  {
    id: 'rel-2026-09-02',
    date: '2026-09-02',
    displayDate: '2 septembre 2026',
    version: 'v2.5',
    tag: 'Mise à jour majeure',
    tagColor: '#ea580c',
    title: 'Repas Complets, Macros, Rabais Ciblés & Mode Garde-manger',
    summary: 'Une vague d\'améliorations majeures pour vos soupers de semaine à la plancha et vos courses d\'épicerie.',
    highlights: [
      {
        icon: '🏷️',
        title: 'Rabais de la semaine ciblés sur les Protéines',
        description: 'Le badge « 🔥 En spécial » s\'affiche désormais uniquement lorsque la protéine principale de la recette est en rabais dans les circulaires (Super C, Maxi, IGA, Metro).'
      },
      {
        icon: '🥗',
        title: 'Recettes 100% complètes avec accompagnements',
        description: 'Toutes les 50 recettes incluent désormais leur féculent sans gluten (riz, wedges, grelots, vermicelles) et leur légume/salade fraîche directement dans les ingrédients et la cuisson plancha.'
      },
      {
        icon: '📊',
        title: 'Macro-nutriments par portion',
        description: 'Consultez en un coup d\'œil les protéines (g), glucides (g), lipides (g) et calories réelles par portion, adaptés dynamiquement selon le nombre de personnes.'
      },
      {
        icon: '🏠',
        title: 'Fonction « J\'ai déjà à la maison »',
        description: 'Dans votre Liste d\'épicerie (Étape 3), cochez en 1 clic les ingrédients que vous avez déjà en réserve pour épurer votre panier avant les courses.'
      },
      {
        icon: '📱',
        title: 'PWA Mobile & Sauvegarde Cloud sécurisée',
        description: 'Conservez vos photos personnalisées dans le Cloud Firebase et profitez d\'une application ultra-rapide sur votre iPhone ou ordinateur.'
      }
    ]
  },
  {
    id: 'rel-2026-08-30',
    date: '2026-08-30',
    displayDate: '30 août 2026',
    version: 'v2.4',
    tag: 'Nouveauté',
    tagColor: '#10b981',
    title: 'Autopilot d\'épicerie en ligne & PWA iPhone',
    summary: 'Automatisation de la recherche de vos ingrédients sur les sites des épiceries québécoises.',
    highlights: [
      {
        icon: '🛒',
        title: 'Autopilot Épicerie en ligne',
        description: 'Basculez vers l\'Étape 4 pour rechercher vos articles en 1 clic sur Super C, Maxi, IGA, Metro et Walmart.'
      },
      {
        icon: '📲',
        title: 'Installation PWA plein écran',
        description: 'Installez Plancha-Master sur l\'écran d\'accueil de votre téléphone pour une expérience sans barre de navigation.'
      }
    ]
  }
];

/**
 * Retourne les notes de mise à jour actives (publiées dans les N derniers jours)
 * @param {number} maxAgeDays - Nombre de jours d'affichage (défaut = 5)
 */
export function getActiveReleaseNotes(maxAgeDays = 5) {
  const now = new Date();
  const cutoffTime = now.getTime() - (maxAgeDays * 24 * 60 * 60 * 1000);

  return RELEASE_NOTES_DATA.filter((note) => {
    const noteDate = new Date(note.date).getTime();
    return noteDate >= cutoffTime;
  });
}
