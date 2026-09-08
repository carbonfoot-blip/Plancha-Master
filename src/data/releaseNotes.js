/**
 * Historique des notes de mise à jour (Release Notes / Broadcast)
 * Règle : Les notes s'empilent et restent actives pour l'alerte pendant une période de 7 jours.
 */

export const RELEASE_NOTES_DATA = [
  {
    id: 'rel-2026-09-08',
    date: '2026-09-08',
    displayDate: '8 septembre 2026',
    version: 'v2.7',
    tag: 'Mise à jour majeure',
    tagColor: '#ea580c',
    title: 'Favoris Partageables, 5 Nouvelles Recettes & Ergonomie iPhone',
    summary: 'Une vague d\'améliorations majeures pour vos soupers familiaux, l\'ergonomie iPhone et le partage de recettes.',
    highlights: [
      {
        icon: '📱',
        title: 'Correctif UI pour la barre du haut & iPhone Safe Area',
        description: 'Prise en charge native de l\'encoche (notch), de l\'îlot dynamique et de la barre d\'état iOS. Tous les boutons d\'en-tête sont parfaitement dégagés et cliquables au pouce.'
      },
      {
        icon: '❤️',
        title: 'Système de Favoris & Partage entre Conjoints',
        description: 'Enregistrez vos coups de cœur en 1 clic (profil local). Filtrez instantanément vos repas préférés et partagez votre liste de favoris par lien direct avec votre conjointe avec import automatique !'
      },
      {
        icon: '🥩',
        title: '5 Nouvelles Recettes Familiales de la Semaine',
        description: 'Ajout de 5 recettes complètes et savoureuses : Bavette de bœuf chimichurri, Poulet glacé mangue-lime, Pavé de saumon érable-moutarde, Filet de porc souvlaki tzatziki et Halloumi grillé méditerranéen.'
      },
      {
        icon: '📅',
        title: 'Feature Hebdomadaire Automatisée (Dimanche AM)',
        description: 'Rotation et mise à jour automatique chaque dimanche matin à 6h00 des spéciaux de circulaires québécoises (Super C, Maxi, IGA, Metro, Walmart) et des nouvelles recettes de la semaine.'
      }
    ]
  },
  {
    id: 'rel-2026-09-02',
    date: '2026-09-02',
    displayDate: '2 septembre 2026',
    version: 'v2.5',
    tag: 'Nouveauté',
    tagColor: '#3b82f6',
    title: 'Repas Complets, Macros, Rabais Ciblés & Mode Garde-manger',
    summary: 'Une vague d\'améliorations majeures pour vos soupers de semaine à la plancha et vos courses d\'épicerie.',
    highlights: [
      {
        icon: '🏷️',
        title: 'Rabais de la semaine ciblés sur les Protéines',
        description: 'Le badge « 🔥 En spécial » s\'affiche désormais uniquement lorsque la protéine principale de la recette est en rabais dans les circulaires.'
      },
      {
        icon: '🥗',
        title: 'Recettes 100% complètes avec accompagnements',
        description: 'Toutes les recettes incluent désormais leur féculent sans gluten et leur légume/salade fraîche directement dans les ingrédients.'
      },
      {
        icon: '📊',
        title: 'Macro-nutriments par portion',
        description: 'Consultez en un coup d\'œil les protéines (g), glucides (g), lipides (g) et calories réelles par portion.'
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
 * @param {number} maxAgeDays - Nombre de jours d'affichage (défaut = 7)
 */
export function getActiveReleaseNotes(maxAgeDays = 7) {
  const now = new Date();
  const cutoffTime = now.getTime() - (maxAgeDays * 24 * 60 * 60 * 1000);

  const active = RELEASE_NOTES_DATA.filter((note) => {
    const noteDate = new Date(note.date).getTime();
    return noteDate >= cutoffTime;
  });

  return active.length > 0 ? active : [RELEASE_NOTES_DATA[0]];
}

