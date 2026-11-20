/**
 * Historique des notes de mise à jour (Release Notes / Broadcast)
 * Règle : Les notes s'empilent et restent actives pour l'alerte pendant une période de 7 jours.
 */

export const RELEASE_NOTES_DATA = [
  {
    id: 'rel-2026-11-20',
    date: '2026-11-20',
    displayDate: '20 novembre 2026',
    version: 'v3.1',
    tag: 'Mise à jour majeure',
    tagColor: '#10b981',
    title: '10 Nouvelles Recettes Stars sur Plancha : Protéines Variées & Nouveautés Exclusives',
    summary: 'Arrivée de 10 nouvelles recettes équilibrées (protéine + féculent + légume) couvrant une vaste diversité de viandes, volailles, poissons, fruits de mer et végétarien, portant le catalogue à 80 repas complets, avec rotation exclusive du badge Nouveauté.',
    highlights: [
      {
        icon: '✨',
        title: '10 Nouvelles Recettes Complètes & Équilibrées',
        description: 'Pavés de saumon croustillants érable & Dijon, Tacos de bavette de bœuf au chimichurri, Hauts de cuisse de poulet au paprika fumé, Brochettes de crevettes géantes ail & lime, Smash burgers de porc haché au gingembre, Médaillons de filet de porc miel & moutarde à l\'ancienne, Escalopes de dinde au pesto de basilic, Pavés de tofu croustillants au cari jaune, Koftas de bœuf haché à la menthe, et Filets de morue dorés au beurre blanc citronné & câpres.'
      },
      {
        icon: '🥩',
        title: 'Diversité Maximale de Protéines',
        description: 'Un éventail complet pour plaire à toute la famille : Saumon frais de l\'Atlantique, Bavette de bœuf AAA québécoise, Hauts de cuisse de poulet désossés, Crevettes blanches 16/20, Porc haché maigre, Filet de porc tendre, Escalopes fines de dinde, Tofu extra-ferme biologique, Bœuf haché assaisonné et Filets épais de morue fraîche.'
      },
      {
        icon: '🥗',
        title: 'Trio Équilibré : Protéine + Féculent + Légume',
        description: 'Chaque recette intègre rigoureusement son féculent (riz basmati, tortillas de maïs, grelots rissolés, quinoa, patates douces, orzo, pitas, riz sauvage) et ses légumes frais rôtis ou sautés à la plaque (asperges, poivrons, courgettes, haricots verts, épinards, brocoli, concombre, champignons).'
      },
      {
        icon: '🔄',
        title: 'Rotation Stricte des Nouveautés',
        description: 'Seules ces 10 nouvelles créations bénéficient du badge vert « ✨ NOUVEAUTÉ » et s\'affichent en tête de sélection. L\'ensemble des créations précédentes demeure accessible dans le grand catalogue permanent (80 recettes au total).'
      }
    ]
  },

  {
    id: 'rel-2026-11-01',
    date: '2026-11-01',
    displayDate: '1er novembre 2026',
    version: 'v3.0',
    tag: 'Mise à jour majeure',
    tagColor: '#10b981',
    title: '5 Nouvelles Recettes Stars sur Plancha & Rotation des Nouveautés',
    summary: 'Arrivée de 5 nouvelles recettes exclusives adaptées à la plancha québécoise, catalogue étendu à 70 repas complets et rotation exclusive du badge Nouveauté.',
    highlights: [
      {
        icon: '✨',
        title: '5 Nouvelles Recettes Exclusives sur Plancha',
        description: 'Brochettes de poulet teriyaki & ananas caramélisé, Bavette de bœuf marinée à l\'ail noir & romarin, Médaillons de filet de porc au poivre de Madagascar & miel, Crevettes géantes & pétoncles sautés ail-lime-coriandre, et Burgers d\'halloumi grillé croustillant & pesto de poivrons.'
      },
      {
        icon: '🥩',
        title: 'Spéciaux Circulaires Protéines de la Semaine',
        description: 'Sélection des meilleures aubaines québécoises pour vos repas : Poitrines de poulet frais à 4,77 $/lb (Super C), Bavette de bœuf marinée AAA à 8,99 $/lb (Metro), Filets de porc frais du Québec à 3,49 $/lb (Super C), Crevettes blanches crues à 5,99 $ (Maxi) et Fromage Halloumi à griller à 4,79 $ (Super C).'
      },
      {
        icon: '🔄',
        title: 'Rotation Stricte des Nouveautés',
        description: 'Les 5 nouvelles recettes profitent désormais en exclusivité du badge vert « ✨ NOUVEAUTÉ » et du tri prioritaire en tête de sélection. Les 5 créations précédentes intègrent le grand catalogue permanent (70 recettes au total).'
      },
      {
        icon: '🥗',
        title: '100% Ingrédients Séparés & Précis',
        description: 'Comme l\'ensemble du catalogue, chaque nouvelle recette intègre son féculent sans gluten, ses légumes frais, sauces et aromates soigneusement séparés avec quantités exactes et rayons d\'épicerie attitrés.'
      }
    ]
  },
  {
    id: 'rel-2026-09-28',
    date: '2026-09-28',
    displayDate: '28 septembre 2026',
    version: 'v2.9',
    tag: 'Mise à jour majeure',
    tagColor: '#10b981',
    title: '5 Nouvelles Recettes Stars, Spéciaux Circulaires & Refonte 100% Ingrédients Séparés',
    summary: 'Spéciaux protéines à jour, 5 nouvelles recettes vedettes sur plancha et refonte complète des ingrédients de toutes les recettes pour des listes d\'épicerie irréprochables.',
    highlights: [
      {
        icon: '🥩',
        title: 'Spéciaux Circulaires Protéines (Du 24 au 30 sept. 2026)',
        description: 'Sélection ciblée sur les meilleures aubaines québécoises : Poitrines de poulet à 4,77 $/lb (Super C), Bœuf haché familial à 3,88 $/lb (Maxi), Bavette de bœuf marinée à 8,99 $/lb (Metro), Filet de porc à 3,49 $/lb (Super C), Côtelettes de porc à 2,88 $/lb (Maxi), Filets de saumon frais à 8,97 $/lb (Super C), Bacon fumé à 4,44 $ (Super C), Tofu extra-ferme à 1,99 $ (Maxi).'
      },
      {
        icon: '🍔',
        title: '5 Nouvelles Recettes Vedettes à la Plancha',
        description: 'Smash burgers au bacon fumé & oignons caramélisés à l\'érable, Pavés de saumon laqués miel & sauce soya sur plancha, Brochettes de poulet souvlaki au citron & tzatziki frais en pita, Côtelettes de porc glacées érable & moutarde à l\'ancienne, et Fajitas de bavette de bœuf marinée à la lime & cumin.'
      },
      {
        icon: '🛒',
        title: 'Refonte intégrale : 100% Ingrédients Séparés & Précis',
        description: 'Éradication de tous les ingrédients groupés ou vagues sur l\'ensemble des 65 recettes du catalogue. Finis les mélanges mystères ou légumes combinés : chaque sauce, épice, condiment, féculent et légume est désormais séparé avec sa quantité exacte et son rayon d\'épicerie attitré !'
      },
      {
        icon: '✨',
        title: 'Rotation des Nouveautés',
        description: 'Les 5 recettes de la semaine précédente intègrent le grand livre de recettes régulier, laissant la place exclusive du badge « ✨ NOUVEAUTÉ » aux 5 nouvelles créations.'
      }
    ]
  },
  {
    id: 'rel-2026-09-13',
    date: '2026-09-13',
    displayDate: '13 septembre 2026',
    version: 'v2.8',
    tag: 'Mise à jour hebdomadaire',
    tagColor: '#3b82f6',
    title: 'Spéciaux Protéines du Dimanche & Pains Baos au Flanc de Porc Sticky',
    summary: 'Nouvelle rotation hebdomadaire : spéciaux circulaires axés sur les protéines et 5 nouvelles recettes savoureuses adaptées à la plancha.',
    highlights: [
      {
        icon: '🥩',
        title: 'Spéciaux Circulaires Protéines (Du 10 au 16 sept. 2026)',
        description: 'Sélection ciblée sur les protéines québécoises : Poitrines de poulet à 4,67 $/lb (Super C), Flanc de porc frais à 3,99 $/lb (Maxi), Short ribs / Faux-filet à 7,99 $/lb (Metro), Filets de saumon à 8,88 $/lb (Super C), Hauts de cuisse à 3,77 $/lb (Maxi), Bœuf haché à 3,97 $/lb (Walmart), Filets de porc à 3,49 $/lb (Super C), Crevettes à 5,88 $ (Super C).'
      },
      {
        icon: '🥟',
        title: 'Pains baos au flanc de porc sticky grillé',
        description: 'Recette vedette inspirée du livre : flanc de porc croustillant saisi à la plancha, laqué à la sauce soya, gingembre, sriracha, anis étoilé et cannelle, servi dans des pains baos moelleux avec mayo Kewpie épicée.'
      },
      {
        icon: '🔥',
        title: '4 Autres Nouvelles Recettes de la Semaine',
        description: 'Côtes de bœuf Galbi coréennes marinées, Hauts de cuisse jerk jamaïcains & ananas grillé, Tacos de crevettes lime-coriandre salsa de maïs, et Brochettes de tofu croustillant satay arachides.'
      },
      {
        icon: '✨',
        title: 'Filtre Nouveautés & Mode Admin',
        description: 'Retrouvez facilement les 5 nouveautés en tête de liste avec le badge vert « ✨ NOUVEAUTÉ » et activez/désactivez le flag Nouveauté pour vos recettes en mode Admin.'
      }
    ]
  },
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
