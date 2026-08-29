/**
 * Base de données des recettes familiales (standardisées pour 4 portions)
 * Rayons disponibles :
 * - 'fruits_legumes' (Fruits et Légumes)
 * - 'viandes' (Viandes, Volailles et Poissons)
 * - 'non_perissable' (Non Périssable - Allées & Épicerie)
 * - 'produits_laitiers' (Produits Laitiers et Frais)
 * - 'surgeles' (Surgelés)
 */

export const PROTEIN_TYPES = [
  'Poitrine de Poulet',
  'Porc haché',
  'Tofu',
  'Boeuf haché',
  'Filet de porc',
  'Saumon & Poissons',
  'Crevettes',
  'Végétarien'
];

export const COOKING_MODES = [
  { id: 'all', label: 'Tous les modes' },
  { id: 'plancha', label: '🔥 Plancha', description: 'Saisie vive, grillades et légumes caramélisés' },
  { id: 'rapide', label: '⚡ Cuisine Rapide (< 25 min)', description: 'Poêle, one-pot ou cuisson express' },
  { id: 'mixte', label: '🍳 Polyvalent (Plancha ou Poêle)', description: 'Adaptable selon votre équipement' }
];

export const TIME_CATEGORIES = [
  { id: 'Rapide', label: 'Rapide (< 20 min)', icon: '⚡' },
  { id: 'Moyen', label: 'Moyen (20 - 35 min)', icon: '⏱️' },
  { id: 'Long', label: 'Long (> 35 min)', icon: '⏳' }
];

export const ALLERGENS_LIST = [
  'Gluten',
  'Lactose',
  'Soya',
  'Noix & Arachides',
  'Fruits de mer',
  'Oeufs',
  'Moutarde',
  'Sésame'
];

export const GROCERY_DEPARTMENTS = {
  fruits_legumes: {
    id: 'fruits_legumes',
    name: 'Fruits et Légumes',
    icon: '🥦',
    color: '#22c55e',
    order: 1
  },
  viandes: {
    id: 'viandes',
    name: 'Viandes & Poissons',
    icon: '🥩',
    color: '#ef4444',
    order: 2
  },
  non_perissable: {
    id: 'non_perissable',
    name: 'Non Périssable (Allées & Garde-manger)',
    icon: '🥫',
    color: '#f59e0b',
    order: 3
  },
  produits_laitiers: {
    id: 'produits_laitiers',
    name: 'Produits Laitiers & Frais',
    icon: '🧀',
    color: '#3b82f6',
    order: 4
  },
  surgeles: {
    id: 'surgeles',
    name: 'Surgelés',
    icon: '🧊',
    color: '#06b6d4',
    order: 5
  }
};

export const RECIPES_DATA = [
  {
    id: 'rec-01',
    title: 'Brochettes de poulet mariné au citron et origan à la plancha',
    subtitle: 'Poulet tendre et doré avec poivrons et oignons rouges grillés',
    proteinType: 'Poitrine de Poulet',
    cookingMode: 'plancha',
    timeCategory: 'Rapide',
    prepTime: 15,
    cookTime: 12,
    calories: 420,
    allergens: [],
    tags: ['Plancha', 'Été & Plein air', 'Keto-friendly', 'Familial'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    description: 'Une marinade rapide à l\'huile d\'olive, jus de citron et origan qui rend la poitrine de poulet ultra juteuse sur la plancha chaude.',
    planchaTips: 'Chauffez la plancha à 220°C (feu moyen-fort). Huilez légèrement. Cuire 5 à 6 minutes par face sans trop les bouger pour obtenir un beau marquage doré.',
    ingredients: [
      { id: 'ing-poulet-poitrine', name: 'Poitrine de poulet', quantity: 600, unit: 'g', department: 'viandes' },
      { id: 'ing-poivron-rouge', name: 'Poivron rouge', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-oignon-rouge', name: 'Oignon rouge', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-citron', name: 'Citron (jus et zeste)', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-olive', name: 'Huile d\'olive', quantity: 45, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-origan-seche', name: 'Origan séché', quantity: 10, unit: 'g', department: 'non_perissable' },
      { id: 'ing-ail-gousses', name: 'Ail (gousses)', quantity: 3, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-sel-poivre', name: 'Sel et poivre moulu', quantity: 5, unit: 'g', department: 'non_perissable' }
    ],
    steps: [
      'Couper les poitrines de poulet en cubes réguliers de 3 cm.',
      'Dans un bol, mélanger l\'huile d\'olive, le jus de citron, l\'ail émincé, l\'origan, le sel et le poivre.',
      'Couper les poivrons et l\'oignon rouge en gros morceaux.',
      'Enfiler en alternance poulet, poivron et oignon sur les pics à brochettes.',
      'Préchauffer la plancha à feu moyen-vif (220°C). Déposer les brochettes et cuire 12 minutes en tournant d\'un quart de tour toutes les 3 minutes.',
      'Servir chaud avec une salade croquante ou du riz.'
    ]
  },
  {
    id: 'rec-02',
    title: 'Sauté express de porc haché au gingembre et haricots croquants',
    subtitle: 'Cuisine minute parfumée style asiatique prête en 15 minutes',
    proteinType: 'Porc haché',
    cookingMode: 'rapide',
    timeCategory: 'Rapide',
    prepTime: 10,
    cookTime: 10,
    calories: 460,
    allergens: ['Soya', 'Sésame'],
    tags: ['Express 15min', 'One-Pan', 'Saveurs d\'Asie', 'Semaine pressée'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Le porc haché caramélise vite et s\'imprègne de sauce soya, de gingembre frais et d\'huile de sésame pour un souper express adoré des enfants.',
    planchaTips: 'Peut aussi se faire sur la plancha : étaler le porc haché sur une zone très chaude et les haricots sur la zone moyenne avec 2 spatules.',
    ingredients: [
      { id: 'ing-porc-hache', name: 'Porc haché maigre', quantity: 500, unit: 'g', department: 'viandes' },
      { id: 'ing-haricots-verts', name: 'Haricots verts frais éboutés', quantity: 350, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-sauce-soya', name: 'Sauce soya réduite en sodium', quantity: 45, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-sirop-erable', name: 'Sirop d\'érable pur', quantity: 30, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-gingembre-frais', name: 'Gingembre frais râpé', quantity: 15, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-ail-gousses', name: 'Ail (gousses)', quantity: 3, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-sesame', name: 'Huile de sésame grillé', quantity: 15, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-oignons-verts', name: 'Oignons verts (échalotes)', quantity: 3, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-graines-sesame', name: 'Graines de sésame', quantity: 10, unit: 'g', department: 'non_perissable' }
    ],
    steps: [
      'Chauffer une grande poêle ou un wok à feu vif avec l\'huile de sésame.',
      'Ajouter le porc haché, l\'ail et le gingembre. Défaire la viande à la spatule et dorer 5-6 minutes.',
      'Ajouter les haricots verts et 2 c. à soupe d\'eau. Couvrir 3 minutes pour attendrir les haricots.',
      'Verser la sauce soya et le sirop d\'érable, laisser caraméliser 2 minutes à découvert.',
      'Garnir d\'oignons verts ciselés et de graines de sésame. Servir sur du riz jasmin.'
    ]
  },
  {
    id: 'rec-03',
    title: 'Smashed Burgers de bœuf maison sur la plancha',
    subtitle: 'Croûte croustillante caramélisée, fromage fondant et sauce secrète',
    proteinType: 'Boeuf haché',
    cookingMode: 'plancha',
    timeCategory: 'Rapide',
    prepTime: 10,
    cookTime: 8,
    calories: 580,
    allergens: ['Gluten', 'Lactose', 'Moutarde', 'Oeufs'],
    tags: ['Plancha Star', 'Coup de coeur famille', 'Fast-food maison'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'La cuisson suprême à la plancha : presser fortement des boules de bœuf haché pour créer une réaction de Maillard croustillante incomparable.',
    planchaTips: 'Plancha à 250°C (très chaude). Utiliser une spatule solide en inox pour écraser fermement dès la pose. 2 minutes de la 1ère face, retourner, poser le fromage et couvrir avec une cloche 1 minute.',
    ingredients: [
      { id: 'ing-boeuf-hache', name: 'Bœuf haché mi-maigre', quantity: 600, unit: 'g', department: 'viandes' },
      { id: 'ing-pains-burger', name: 'Pains briochés à hamburger', quantity: 4, unit: 'unité', department: 'non_perissable' },
      { id: 'ing-fromage-cheddar', name: 'Tranches de fromage cheddar vieilli', quantity: 8, unit: 'tranche', department: 'produits_laitiers' },
      { id: 'ing-oignon-jaune', name: 'Oignon jaune émincé très fin', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-laitue-romaine', name: 'Feuilles de laitue romaine', quantity: 4, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-tomate-ronde', name: 'Tomate de serre en rondelles', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-mayonnaise', name: 'Mayonnaise', quantity: 45, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-moutarde-dijon', name: 'Moutarde de Dijon ou relish', quantity: 20, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-beurre', name: 'Beurre salé', quantity: 20, unit: 'g', department: 'produits_laitiers' }
    ],
    steps: [
      'Former 8 boules de 75g avec le bœuf haché sans trop tasser la viande. Saler généreusement l\'extérieur.',
      'Toaster les pains beurrés sur la plancha 1 minute, puis réserver.',
      'Poser les boules de bœuf sur la plancha brûlante et les oignons émincés sur le dessus.',
      'Écraser très fermement avec une spatule plate pour former des galettes minces.',
      'Cuire 2 minutes jusqu\'à belle croûte brune, retourner, déposer immédiatement le cheddar et empiler 2 galettes par burger.',
      'Monter les burgers avec la sauce mayo-moutarde, la laitue et les tranches de tomates fraîches.'
    ]
  },
  {
    id: 'rec-04',
    title: 'Pavés de saumon croustillant à l\'aneth et asperges à la plancha',
    subtitle: 'Peau croustillante, chair nacrée et asperges tendres au beurre citronné',
    proteinType: 'Saumon & Poissons',
    cookingMode: 'plancha',
    timeCategory: 'Rapide',
    prepTime: 10,
    cookTime: 10,
    calories: 490,
    allergens: ['Lactose'],
    tags: ['Plancha', 'Oméga-3', 'Santé & Gourmand', 'Sans Gluten'],
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    description: 'Le saumon à la plancha est d\'une simplicité déconcertante : une peau ultra-croquante et une cuisson rosée préservée à cœur.',
    planchaTips: 'Plancha à 200°C. Poser le saumon côté peau en premier et laisser cuire 6 à 7 minutes à 80% de la cuisson sans y toucher. Retourner 2 minutes seulement pour la finition.',
    ingredients: [
      { id: 'ing-saumon-paves', name: 'Pavés de saumon avec peau', quantity: 4, unit: 'unité (600g)', department: 'viandes' },
      { id: 'ing-asperges', name: 'Botte d\'asperges fraîches du Québec', quantity: 1, unit: 'botte (400g)', department: 'fruits_legumes' },
      { id: 'ing-beurre', name: 'Beurre doux', quantity: 30, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-citron', name: 'Citron jaune en quartiers', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-aneth-frais', name: 'Aneth frais ciselé', quantity: 15, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-huile-olive', name: 'Huile d\'olive', quantity: 25, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-sel-poivre', name: 'Fleur de sel et poivre', quantity: 5, unit: 'g', department: 'non_perissable' }
    ],
    steps: [
      'Bien éponger la peau des pavés de saumon avec du papier absorbant. Huiler et saler.',
      'Casser le pied fibreux des asperges et les mélanger avec un filet d\'huile d\'olive.',
      'Poser les asperges sur la plancha à feu moyen et les retourner régulièrement pendant 8 minutes.',
      'Poser le saumon côté peau sur la plancha chaude. Cuire 6 minutes sans bouger.',
      'Retourner le saumon délicatement avec une spatule large, ajouter le beurre et l\'aneth pour arroser le poisson.',
      'Servir avec les asperges dorées et des quartiers de citron grillés.'
    ]
  },
  {
    id: 'rec-05',
    title: 'Médaillons de filet de porc glacés à l\'érable et moutarde à l\'ancienne',
    subtitle: 'Viande fondante enrobée d\'un glaçage sucré-salé irrésistible',
    proteinType: 'Filet de porc',
    cookingMode: 'mixte',
    timeCategory: 'Moyen',
    prepTime: 12,
    cookTime: 14,
    calories: 430,
    allergens: ['Moutarde'],
    tags: ['Saveur locale', 'Classique québécois', 'Plancha ou Poêle'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Le filet de porc coupé en médaillons cuit en un temps record. La sauce érable-moutarde caramélise sur la plaque.',
    planchaTips: 'Plancha à 200°C. Saisir les médaillons 3 minutes par face. Verser la marinade à l\'érable lors des 2 dernières minutes pour un glaçage brillant.',
    ingredients: [
      { id: 'ing-filet-porc', name: 'Filet de porc paré', quantity: 650, unit: 'g', department: 'viandes' },
      { id: 'ing-sirop-erable', name: 'Sirop d\'érable pur', quantity: 60, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-moutarde-ancienne', name: 'Moutarde à l\'ancienne en grains', quantity: 30, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-sauce-soya', name: 'Sauce soya', quantity: 20, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-ail-gousses', name: 'Ail (gousses)', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-courgettes', name: 'Courgettes moyennes en rondelles', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-olive', name: 'Huile d\'olive', quantity: 30, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-sel-poivre', name: 'Sel et poivre', quantity: 5, unit: 'g', department: 'non_perissable' }
    ],
    steps: [
      'Trancher le filet de porc en médaillons d\'environ 2.5 cm d\'épaisseur.',
      'Dans un ramequin, fouetter le sirop d\'érable, la moutarde à l\'ancienne, la sauce soya et l\'ail haché.',
      'Huiler les rondelles de courgettes et les médaillons de porc.',
      'Sur la plancha chaude, cuire les courgettes et le porc 4 minutes de chaque côté.',
      'Badigeonner généreusement le porc avec la sauce à l\'érable et laisser laquer 2 minutes en retournant.',
      'Laisser reposer la viande 3 minutes avant de servir.'
    ]
  },
  {
    id: 'rec-06',
    title: 'Tacos de tofu croustillant BBQ tex-mex et salsa d\'avocat',
    subtitle: 'Repas végétarien croustillant plein de protéines et de fraîcheur',
    proteinType: 'Tofu',
    cookingMode: 'plancha',
    timeCategory: 'Rapide',
    prepTime: 15,
    cookTime: 10,
    calories: 390,
    allergens: ['Soya', 'Gluten'],
    tags: ['Végétarien', 'Fiesta Tex-Mex', 'Riche en protéines'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    description: 'Le secret du tofu croustillant : le couper en lamelles, l\'enrober de fécule et d\'épices à tacos avant de le dorer sur la plancha.',
    planchaTips: 'Plancha à 210°C avec une fine couche d\'huile. Ne pas surcharger la plaque pour que le tofu reste bien croquant sur toutes ses faces.',
    ingredients: [
      { id: 'ing-tofu-ferme', name: 'Tofu extra-ferme pressé', quantity: 450, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-epices-tacos', name: 'Mélange d\'épices mexicaines/tacos', quantity: 20, unit: 'g', department: 'non_perissable' },
      { id: 'ing-fecule-mais', name: 'Fécule de maïs (Maïzena)', quantity: 25, unit: 'g', department: 'non_perissable' },
      { id: 'ing-tortillas', name: 'Petites tortillas de maïs ou blé', quantity: 8, unit: 'unité', department: 'non_perissable' },
      { id: 'ing-avocats', name: 'Avocats mûrs en dés', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-tomate-ronde', name: 'Tomates fraîches en dés', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-coriandre-fraiche', name: 'Coriandre fraîche', quantity: 15, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-lime', name: 'Limes (jus)', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-vegetale', name: 'Huile végétale pour cuisson', quantity: 30, unit: 'ml', department: 'non_perissable' }
    ],
    steps: [
      'Éponger le tofu et le couper en bâtonnets de 1.5 cm.',
      'Dans un grand sac ou bol, mélanger fécule de maïs, épices mexicaines et une pincée de sel. Y enrober le tofu.',
      'Préparer la salsa : mélanger dés d\'avocats, tomates, jus de lime et coriandre.',
      'Chauffer la plancha avec l\'huile. Disposer le tofu et cuire 8-10 minutes en le tournant jusqu\'à ce qu\'il soit bien doré et croustillant.',
      'Tiédir les tortillas sur le bord de la plancha 30 secondes.',
      'Garnir les tortillas de tofu croustillant et de salsa d\'avocat fraîche.'
    ]
  },
  {
    id: 'rec-07',
    title: 'Quesadillas express au poulet effiloché et fromage fondu',
    subtitle: 'Croquant à l\'extérieur, coulant à l\'intérieur en moins de 15 minutes',
    proteinType: 'Poitrine de Poulet',
    cookingMode: 'rapide',
    timeCategory: 'Rapide',
    prepTime: 10,
    cookTime: 8,
    calories: 510,
    allergens: ['Gluten', 'Lactose'],
    tags: ['Express 15min', 'Repas réconfort', 'Favori des enfants'],
    image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80',
    description: 'Une recette ultra-rapide qui utilise des poitrines de poulet cuites ou des restes, du fromage tex-mex fondant et une touche de salsa.',
    planchaTips: 'Sur la plancha, on peut cuire 4 grandes quesadillas en même temps ! Cuire à 180°C (feu modéré) pour que le fromage fonde avant de brûler la tortilla.',
    ingredients: [
      { id: 'ing-poulet-poitrine', name: 'Poitrine de poulet cuite et effilochée', quantity: 450, unit: 'g', department: 'viandes' },
      { id: 'ing-tortillas-grandes', name: 'Grandes tortillas de blé', quantity: 4, unit: 'unité', department: 'non_perissable' },
      { id: 'ing-fromage-rape-texmex', name: 'Fromage râpé mélange tex-mex (cheddar/mozzarella)', quantity: 250, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-salsa-bocal', name: 'Salsa douce ou moyenne en pot', quantity: 150, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-creme-sure', name: 'Crème sure 14%', quantity: 120, unit: 'ml', department: 'produits_laitiers' },
      { id: 'ing-poivron-rouge', name: 'Poivron rouge coupé en fines lanières', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-beurre', name: 'Beurre pour dorer les tortillas', quantity: 20, unit: 'g', department: 'produits_laitiers' }
    ],
    steps: [
      'Dans un bol, mélanger le poulet effiloché avec la moitié de la salsa et les lanières de poivron.',
      'Beurrer légèrement l\'extérieur des tortillas.',
      'Garnir une moitié de chaque tortilla avec le fromage râpé et le mélange de poulet.',
      'Replier en demi-lune et déposer dans une poêle chaude ou sur la plancha à 180°C.',
      'Cuire 3-4 minutes de chaque côté jusqu\'à ce que la tortilla soit dorée et croustillante et le fromage bien fondu.',
      'Couper en triangles et servir avec la crème sure et le reste de salsa.'
    ]
  },
  {
    id: 'rec-08',
    title: 'Brochettes de crevettes à l\'ail, lime et poivrons colorés',
    subtitle: 'Cuisson éclair à la plancha pour des crevettes juteuses et parfumées',
    proteinType: 'Crevettes',
    cookingMode: 'plancha',
    timeCategory: 'Rapide',
    prepTime: 10,
    cookTime: 6,
    calories: 320,
    allergens: ['Fruits de mer'],
    tags: ['Plancha Flash', 'Ultra Léger', 'Prêt en 15min', 'Sans Gluten'],
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
    description: 'Les crevettes cuisent en seulement 4 à 5 minutes sur la plancha vive, enrobées d\'ail, de jus de lime et de coriandre.',
    planchaTips: 'Plancha à 220°C. Les crevettes cuisent très vite : 2 minutes sur la 1ère face jusqu\'à coloration rose, 1 minute sur la 2e face.',
    ingredients: [
      { id: 'ing-crevettes-crues', name: 'Grosses crevettes crues décortiquées (décongelées)', quantity: 500, unit: 'g', department: 'surgeles' },
      { id: 'ing-poivron-rouge', name: 'Poivron rouge en carrés', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-poivron-jaune', name: 'Poivron jaune en carrés', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-lime', name: 'Limes (jus et quartiers)', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-ail-gousses', name: 'Ail (gousses)', quantity: 4, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-olive', name: 'Huile d\'olive', quantity: 30, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-paprika-fume', name: 'Paprika fumé', quantity: 5, unit: 'g', department: 'non_perissable' },
      { id: 'ing-coriandre-fraiche', name: 'Coriandre fraîche', quantity: 10, unit: 'g', department: 'fruits_legumes' }
    ],
    steps: [
      'Dans un saladier, mélanger les crevettes avec l\'huile d\'olive, l\'ail pressé, le jus d\'une lime et le paprika fumé.',
      'Monter sur des pics à brochettes en alternant crevettes et carrés de poivrons colorés.',
      'Déposer sur la plancha bien chaude graissée.',
      'Cuire 2 à 3 minutes de chaque côté en arrosant avec le reste de marinade.',
      'Parsemer de coriandre fraîche et servir avec des quartiers de lime.'
    ]
  },
  {
    id: 'rec-09',
    title: 'One-Pot Pasta crémeux au bœuf haché et cheddar (Style Cheeseburger)',
    subtitle: 'Tout cuit dans le même chaudron en 20 minutes sans vaisselle superflue',
    proteinType: 'Boeuf haché',
    cookingMode: 'rapide',
    timeCategory: 'Moyen',
    prepTime: 10,
    cookTime: 18,
    calories: 550,
    allergens: ['Gluten', 'Lactose', 'Moutarde'],
    tags: ['One-Pot', 'Famille nombreuse', 'Semaine sans stress'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d628105d?auto=format&fit=crop&w=800&q=80',
    description: 'Les pâtes cuisent directement dans le bouillon avec la viande et la sauce tomate, absorbant toutes les saveurs avant l\'ajout du fromage crémeux.',
    planchaTips: 'Plat mijoté de semaine par excellence en grand faitout.',
    ingredients: [
      { id: 'ing-boeuf-hache', name: 'Bœuf haché maigre', quantity: 500, unit: 'g', department: 'viandes' },
      { id: 'ing-pates-macaroni', name: 'Pâtes courtes (macaroni ou coquilles)', quantity: 350, unit: 'g', department: 'non_perissable' },
      { id: 'ing-bouillon-boeuf', name: 'Bouillon de bœuf', quantity: 800, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-sauce-tomate', name: 'Sauce tomate ou coulis', quantity: 398, unit: 'ml (1 boîte)', department: 'non_perissable' },
      { id: 'ing-oignon-jaune', name: 'Oignon jaune haché', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-fromage-cheddar-rape', name: 'Fromage cheddar râpé', quantity: 200, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-lait-2pourcent', name: 'Lait 2%', quantity: 120, unit: 'ml', department: 'produits_laitiers' },
      { id: 'ing-moutarde-dijon', name: 'Moutarde de Dijon', quantity: 15, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-ail-poudre', name: 'Poudre d\'ail et d\'oignon', quantity: 10, unit: 'g', department: 'non_perissable' }
    ],
    steps: [
      'Dans un grand faitout à feu moyen-vif, faire dorer le bœuf haché et l\'oignon haché pendant 5 minutes. Égoutter le surplus de gras si désiré.',
      'Ajouter la poudre d\'ail, la moutarde, la sauce tomate, le bouillon de bœuf et les pâtes crues.',
      'Porter à ébullition, puis réduire à feu doux-moyen. Couvrir et laisser mijoter 10 à 12 minutes en remuant de temps en temps jusqu\'à ce que les pâtes soient tendres.',
      'Retirer du feu, incorporer le lait et le cheddar râpé jusqu\'à consistance onctueuse et crémeuse.',
      'Assaisonner de poivre frais et servir aussitôt.'
    ]
  },
  {
    id: 'rec-10',
    title: 'Côtelettes de porc croustillantes aux herbes de Provence et courgettes',
    subtitle: 'Dorure parfaite à la plancha avec des légumes d\'accompagnement grillés',
    proteinType: 'Porc haché', // Classé dans porc / filet
    cookingMode: 'plancha',
    timeCategory: 'Moyen',
    prepTime: 10,
    cookTime: 14,
    calories: 450,
    allergens: [],
    tags: ['Plancha Tradition', 'Repas complet', 'Sans Gluten'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Des côtelettes de porc avec os, assaisonnées simplement à l\'ail et herbes de Provence, cuites en simultané avec de belles tranches de courgettes.',
    planchaTips: 'Plancha à 200°C. Saisir les côtelettes 4-5 minutes sur la première face pour créer une belle croûte, retourner et finir 4-5 minutes jusqu\'à 63°C à cœur.',
    ingredients: [
      { id: 'ing-cotelettes-porc', name: 'Côtelettes de porc avec os (ou filet)', quantity: 4, unit: 'unité (700g)', department: 'viandes' },
      { id: 'ing-courgettes', name: 'Courgettes vertes en rondelles épaisses', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-poivron-rouge', name: 'Poivron rouge en lamelles', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-herbes-provence', name: 'Herbes de Provence', quantity: 15, unit: 'g', department: 'non_perissable' },
      { id: 'ing-huile-olive', name: 'Huile d\'olive', quantity: 30, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-ail-gousses', name: 'Ail (gousses)', quantity: 3, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-sel-poivre', name: 'Sel et poivre', quantity: 5, unit: 'g', department: 'non_perissable' }
    ],
    steps: [
      'Badigeonner les côtelettes de porc et les légumes avec l\'huile d\'olive, l\'ail écrasé, les herbes de Provence, le sel et le poivre.',
      'Chauffer la plancha à feu moyen-fort (200°C).',
      'Déposer le porc et les légumes sur la surface de cuisson.',
      'Laisser dorer le porc 5 minutes par face, et retourner régulièrement les légumes jusqu\'à ce qu\'ils soient tendres et grillés.',
      'Laisser reposer le porc 3 minutes sous une feuille d\'aluminium avant de servir.'
    ]
  },
  {
    id: 'rec-11',
    title: 'Fajitas de poulet express sur la plaque avec poivrons tri-couleurs',
    subtitle: 'Poulet mariné tex-mex, oignons caramélisés et poivrons croustillants',
    proteinType: 'Poitrine de Poulet',
    cookingMode: 'plancha',
    timeCategory: 'Rapide',
    prepTime: 12,
    cookTime: 10,
    calories: 470,
    allergens: ['Gluten', 'Lactose'],
    tags: ['Plancha Party', 'Convivial', 'Repas de groupe'],
    image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=800&q=80',
    description: 'La plancha est l\'outil roi des fajitas : on fait griller en même temps les lanières de poulet et une montagne de poivrons et oignons.',
    planchaTips: 'Plancha à 220°C. Séparer la plancha en 2 zones : zone très chaude pour le poulet et zone moyenne pour faire suer poivrons et oignons avec 2 spatules.',
    ingredients: [
      { id: 'ing-poulet-poitrine', name: 'Poitrines de poulet coupées en lanières', quantity: 600, unit: 'g', department: 'viandes' },
      { id: 'ing-poivron-rouge', name: 'Poivron rouge en lanières', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-poivron-jaune', name: 'Poivron jaune en lanières', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-poivron-vert', name: 'Poivron vert en lanières', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-oignon-jaune', name: 'Gros oignon jaune en lamelles', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-epices-tacos', name: 'Assaisonnement pour fajitas/tacos', quantity: 25, unit: 'g', department: 'non_perissable' },
      { id: 'ing-tortillas', name: 'Tortillas de blé souples', quantity: 8, unit: 'unité', department: 'non_perissable' },
      { id: 'ing-creme-sure', name: 'Crème sure', quantity: 120, unit: 'ml', department: 'produits_laitiers' },
      { id: 'ing-salsa-bocal', name: 'Salsa piquante ou douce', quantity: 120, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-huile-vegetale', name: 'Huile végétale pour cuisson', quantity: 30, unit: 'ml', department: 'non_perissable' }
    ],
    steps: [
      'Enrober le poulet et les légumes d\'huile et d\'épices pour fajitas.',
      'Chauffer la plancha à 220°C. Déposer le poulet d\'un côté et les légumes de l\'autre.',
      'Saisir vivement le poulet 6 à 8 minutes en remuant avec deux spatules.',
      'Faire griller les poivrons et oignons jusqu\'à ce qu\'ils soient dorés et tendres.',
      'Mélanger viande et légumes sur la plaque, tiédir les tortillas sur le côté.',
      'Servir avec crème sure et salsa au centre de la table.'
    ]
  },
  {
    id: 'rec-12',
    title: 'Bowl de nouilles express au bœuf haché teriyaki et brocolis',
    subtitle: 'Souper de semaine savoureux prêt en 15 minutes chrono',
    proteinType: 'Boeuf haché',
    cookingMode: 'rapide',
    timeCategory: 'Rapide',
    prepTime: 10,
    cookTime: 10,
    calories: 520,
    allergens: ['Gluten', 'Soya', 'Sésame'],
    tags: ['Express 15min', 'Saveur Teriyaki', 'Bowl équilibré'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
    description: 'Une façon ultra rapide et économique de déguster des nouilles asiatiques avec du bœuf haché caramélisé et des fleurettes de brocoli tendres.',
    planchaTips: 'Excellente adaptation sur plancha ou wok antiadhésif à feu très vif.',
    ingredients: [
      { id: 'ing-boeuf-hache', name: 'Bœuf haché maigre', quantity: 500, unit: 'g', department: 'viandes' },
      { id: 'ing-nouilles-ramen', name: 'Nouilles asiatiques (ramen ou udon)', quantity: 300, unit: 'g', department: 'non_perissable' },
      { id: 'ing-brocoli', name: 'Fleurettes de brocoli frais', quantity: 350, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-sauce-teriyaki', name: 'Sauce teriyaki de qualité', quantity: 80, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-sauce-soya', name: 'Sauce soya', quantity: 20, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-ail-gousses', name: 'Ail (gousses)', quantity: 3, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-gingembre-frais', name: 'Gingembre frais râpé', quantity: 15, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-huile-sesame', name: 'Huile de sésame grillé', quantity: 15, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-oignons-verts', name: 'Oignons verts ciselés', quantity: 2, unit: 'unité', department: 'fruits_legumes' }
    ],
    steps: [
      'Cuire les nouilles selon les instructions du paquet (2 à 3 minutes dans l\'eau bouillante), égoutter et rincer à l\'eau froide.',
      'Dans une grande poêle à feu vif, chauffer l\'huile de sésame et faire revenir le bœuf haché avec l\'ail et le gingembre 5 minutes.',
      'Ajouter les brocolis et 3 c. à soupe d\'eau, couvrir 3 minutes pour attendrir les brocolis à la vapeur.',
      'Ajouter les nouilles, la sauce teriyaki et la sauce soya. Sauter 2 minutes pour bien enrober l\'ensemble.',
      'Dresser dans des bols et garnir d\'oignons verts.'
    ]
  },
  {
    id: 'rec-13',
    title: 'Pavés de truite saumonée et courgettes grillées au pesto sur plancha',
    subtitle: 'Poisson québécois délicat relevé au pesto de basilic maison ou du commerce',
    proteinType: 'Saumon & Poissons',
    cookingMode: 'plancha',
    timeCategory: 'Rapide',
    prepTime: 10,
    cookTime: 10,
    calories: 460,
    allergens: ['Lactose', 'Noix & Arachides'],
    tags: ['Plancha Poisson', 'Local Québec', 'Santé & Fraîcheur'],
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    description: 'La truite saumonée est fine et riche en saveurs. Sur la plancha bien chaude, la peau devient ultra croustillante en moins de 10 minutes.',
    planchaTips: 'Plancha à 200°C. Poser sur une feuille de papier cuisson spéciale plancha ou directement sur plaque bien huilée côté peau.',
    ingredients: [
      { id: 'ing-truite-filets', name: 'Filets de truite saumonée avec peau', quantity: 4, unit: 'unité (600g)', department: 'viandes' },
      { id: 'ing-pesto-basilic', name: 'Pesto au basilic (pot)', quantity: 80, unit: 'g', department: 'non_perissable' },
      { id: 'ing-courgettes', name: 'Courgettes en fines tranches longitudinales', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-citron', name: 'Citron jaune', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-olive', name: 'Huile d\'olive', quantity: 25, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-tomates-cerises', name: 'Tomates cerises en grappes', quantity: 250, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-sel-poivre', name: 'Sel et poivre', quantity: 5, unit: 'g', department: 'non_perissable' }
    ],
    steps: [
      'Badigeonner la chair de truite avec une couche de pesto et arroser d\'un peu de jus de citron.',
      'Huiler et assaisonner les tranches de courgettes et les tomates cerises.',
      'Déposer les courgettes et les tomates sur la plancha à 200°C pendant 6 minutes en les retournant.',
      'Poser la truite côté peau pendant 6 minutes, puis retourner délicatement 2 minutes pour caraméliser le pesto.',
      'Servir les filets accompagnés des courgettes grillées et des tomates éclatées.'
    ]
  },
  {
    id: 'rec-14',
    title: 'Stir-fry de tofu croustillant et légumes croquants à la sauce arachide',
    subtitle: 'Riche en protéines végétales et sauce crémeuse réconfortante',
    proteinType: 'Tofu',
    cookingMode: 'rapide',
    timeCategory: 'Moyen',
    prepTime: 15,
    cookTime: 12,
    calories: 440,
    allergens: ['Noix & Arachides', 'Soya', 'Sésame'],
    tags: ['Végétarien Gourmand', 'Sauce Satay', 'Riche en fibres'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    description: 'Un classique indémodable : des cubes de tofu croustillants enrobés d\'une sauce crémeuse au beurre d\'arachide, lime et soya.',
    planchaTips: 'Dorer le tofu et les légumes sur la plancha, puis verser la sauce au dernier moment pour ne pas brûler les arachides.',
    ingredients: [
      { id: 'ing-tofu-ferme', name: 'Tofu extra-ferme en cubes', quantity: 450, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-beurre-arachide', name: 'Beurre d\'arachide crémeux ou naturel', quantity: 60, unit: 'g', department: 'non_perissable' },
      { id: 'ing-sauce-soya', name: 'Sauce soya', quantity: 30, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-sirop-erable', name: 'Sirop d\'érable pur', quantity: 20, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-lime', name: 'Jus de lime', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-poivron-rouge', name: 'Poivron rouge émincé', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-pois-mange-tout', name: 'Pois mange-tout frais', quantity: 150, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-carottes', name: 'Carottes en fines juliennes', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-vegetale', name: 'Huile végétale', quantity: 25, unit: 'ml', department: 'non_perissable' }
    ],
    steps: [
      'Dans un bol, mélanger le beurre d\'arachide, la sauce soya, le sirop d\'érable, le jus de lime et 4 c. à soupe d\'eau tiède pour créer une sauce onctueuse.',
      'Dans une grande poêle ou un wok, chauffer l\'huile et dorer les cubes de tofu 6 à 8 minutes jusqu\'à belle coloration.',
      'Ajouter les légumes (poivron, carottes, pois mange-tout) et sauter à feu vif 3 à 4 minutes.',
      'Verser la sauce aux arachides, mélanger pour bien napper le tout et laisser épaissir 1 minute.',
      'Servir avec du riz brun ou des vermicelles de riz.'
    ]
  },
  {
    id: 'rec-15',
    title: 'Boulettes de porc haché style banh mi à la plancha',
    subtitle: 'Boulettes parfumées à la citronnelle, coriandre et sauce aigre-douce',
    proteinType: 'Porc haché',
    cookingMode: 'plancha',
    timeCategory: 'Moyen',
    prepTime: 15,
    cookTime: 12,
    calories: 470,
    allergens: ['Soya', 'Oeufs', 'Sésame'],
    tags: ['Plancha Découverte', 'Street Food', 'Très populaire'],
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80',
    description: 'Des petites boulettes de porc croustillantes à l\'extérieur et moelleuses à cœur avec les arômes frais de la cuisine vietnamienne.',
    planchaTips: 'Plancha à 200°C. Faire rouler les boulettes sur les 4 côtés pour qu\'elles caramélisent uniformément sans sécher.',
    ingredients: [
      { id: 'ing-porc-hache', name: 'Porc haché mi-maigre', quantity: 600, unit: 'g', department: 'viandes' },
      { id: 'ing-oignons-verts', name: 'Oignons verts hachés finement', quantity: 3, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-ail-gousses', name: 'Ail (gousses)', quantity: 3, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-sauce-poisson', name: 'Sauce poisson (nuoc mam) ou sauce soya', quantity: 25, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-sucre-brun', name: 'Cassonade ou sucre brun', quantity: 15, unit: 'g', department: 'non_perissable' },
      { id: 'ing-oeuf', name: 'Œuf calibre gros', quantity: 1, unit: 'unité', department: 'produits_laitiers' },
      { id: 'ing-chapelure-panko', name: 'Chapelure Panko', quantity: 45, unit: 'g', department: 'non_perissable' },
      { id: 'ing-concombre', name: 'Concombre anglais en fines rondelles', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-coriandre-fraiche', name: 'Coriandre fraîche', quantity: 15, unit: 'g', department: 'fruits_legumes' }
    ],
    steps: [
      'Dans un bol, mélanger le porc haché, l\'oignon vert, l\'ail, la sauce poisson, la cassonade, l\'œuf et la chapelure.',
      'Façonner environ 16 boulettes légèrement aplaties pour une meilleure cuisson sur la plancha.',
      'Chauffer la plancha à 200°C avec un léger film d\'huile.',
      'Cuire les boulettes 10 à 12 minutes en les retournant régulièrement pour bien dorer toutes les faces.',
      'Servir dans des petits pains ou sur un bol de vermicelles avec rondelles de concombre frais et brins de coriandre.'
    ]
  },
  {
    id: 'rec-16',
    title: 'Brochettes de filet de porc à la grecque et tzatziki crémeux',
    subtitle: 'Porc tendre mariné à l\'origan, ail et jus de citron servi avec sauce fraîche',
    proteinType: 'Filet de porc',
    cookingMode: 'plancha',
    timeCategory: 'Moyen',
    prepTime: 15,
    cookTime: 12,
    calories: 410,
    allergens: ['Lactose'],
    tags: ['Plancha Méditerranée', 'Frais & Gourmand', 'Souvlaki maison'],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    description: 'Le filet de porc en cubes mariné façon Souvlaki devient tendre comme du beurre sur la plancha.',
    planchaTips: 'Plancha à 210°C. 3 minutes par face pour garder le filet de porc légèrement rosé et juteux.',
    ingredients: [
      { id: 'ing-filet-porc', name: 'Filet de porc en cubes de 3 cm', quantity: 650, unit: 'g', department: 'viandes' },
      { id: 'ing-oignon-rouge', name: 'Oignon rouge en quartiers', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-poivron-rouge', name: 'Poivron rouge en carrés', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-origan-seche', name: 'Origan séché', quantity: 10, unit: 'g', department: 'non_perissable' },
      { id: 'ing-citron', name: 'Citron (jus)', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-olive', name: 'Huile d\'olive', quantity: 40, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-ail-gousses', name: 'Ail (gousses)', quantity: 3, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-tzatziki', name: 'Sauce tzatziki au yogourt grec', quantity: 200, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-pitas', name: 'Pains pitas grecs', quantity: 4, unit: 'unité', department: 'non_perissable' }
    ],
    steps: [
      'Mariner les cubes de filet de porc dans l\'huile d\'olive, l\'origan, l\'ail pressé et le jus de citron pendant 10 minutes.',
      'Monter sur des pics à brochettes en intercalant oignon rouge et poivron.',
      'Chauffer la plancha à feu moyen-fort (210°C).',
      'Faire griller les brochettes 10 à 12 minutes en tournant régulièrement.',
      'Réchauffer les pitas sur le bord de la plancha 1 minute.',
      'Servir avec une généreuse portion de sauce tzatziki fraîche.'
    ]
  },
  {
    id: 'rec-17',
    title: 'Escalopes de poulet parmigiana express à la poêle',
    subtitle: 'Poulet doré croustillant recouvert de sauce marinara et mozzarella fondante',
    proteinType: 'Poitrine de Poulet',
    cookingMode: 'rapide',
    timeCategory: 'Rapide',
    prepTime: 10,
    cookTime: 12,
    calories: 530,
    allergens: ['Gluten', 'Lactose', 'Oeufs'],
    tags: ['Classique Italien', 'Express 20min', 'Ultra Réconfort'],
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80',
    description: 'Une version rapide sans friture profonde : les poitrines sont amincies en escalopes pour dorer en quelques minutes.',
    planchaTips: 'Plat poêle ou plancha sous cloche pour faire fondre la mozzarella.',
    ingredients: [
      { id: 'ing-poulet-poitrine', name: 'Poitrines de poulet coupées en escalopes fines', quantity: 600, unit: 'g', department: 'viandes' },
      { id: 'ing-sauce-tomate', name: 'Sauce marinara ou tomate basilic', quantity: 300, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-mozzarella-tranches', name: 'Fromage mozzarella frais ou râpé', quantity: 200, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-parmesan-rape', name: 'Parmesan râpé', quantity: 40, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-chapelure-italienne', name: 'Chapelure assaisonnée italienne', quantity: 80, unit: 'g', department: 'non_perissable' },
      { id: 'ing-oeuf', name: 'Œuf battu', quantity: 1, unit: 'unité', department: 'produits_laitiers' },
      { id: 'ing-huile-olive', name: 'Huile d\'olive pour dorer', quantity: 30, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-basilic-frais', name: 'Feuilles de basilic frais', quantity: 10, unit: 'g', department: 'fruits_legumes' }
    ],
    steps: [
      'Tremper les escalopes de poulet dans l\'œuf battu puis dans la chapelure italienne mélangée avec la moitié du parmesan.',
      'Dans une grande poêle avec l\'huile d\'olive à feu moyen-vif, dorer le poulet 4 minutes de chaque côté.',
      'Napper chaque escalope de sauce marinara, recouvrir de mozzarella et du reste de parmesan.',
      'Couvrir la poêle 3 minutes à feu doux pour faire fondre et bouillonner le fromage.',
      'Garnir de basilic frais et servir avec des pâtes ou des légumes verts.'
    ]
  },
  {
    id: 'rec-18',
    title: 'Brochettes de légumes du marché et halloumi grillé à la plancha',
    subtitle: 'Fromage grillé doré et croustillant, champignons, courgettes et poivrons',
    proteinType: 'Végétarien',
    cookingMode: 'plancha',
    timeCategory: 'Rapide',
    prepTime: 12,
    cookTime: 10,
    calories: 380,
    allergens: ['Lactose'],
    tags: ['Végétarien', 'Plancha Cheese', 'Estival & Croquant'],
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    description: 'Le fromage halloumi ne fond pas sur la plancha : il forme une croûte dorée salée irrésistible avec les légumes d\'été.',
    planchaTips: 'Plancha à 200°C. Faire dorer les cubes de halloumi 2 minutes par côté sans ajouter de sel car le fromage est déjà bien assaisonné.',
    ingredients: [
      { id: 'ing-fromage-halloumi', name: 'Fromage halloumi en gros cubes', quantity: 400, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-champignons-paris', name: 'Champignons de Paris entiers lavés', quantity: 250, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-courgettes', name: 'Courgette en grosses rondelles', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-poivron-rouge', name: 'Poivron rouge en carrés', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-oignon-rouge', name: 'Oignon rouge en morceaux', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-olive', name: 'Huile d\'olive', quantity: 35, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-herbes-provence', name: 'Herbes de Provence et poivre', quantity: 10, unit: 'g', department: 'non_perissable' }
    ],
    steps: [
      'Couper les légumes et le fromage halloumi en morceaux de taille égale.',
      'Enfiler sur des pics à brochettes en alternant légumes et fromage.',
      'Badigeonner d\'huile d\'olive et d\'herbes de Provence.',
      'Chauffer la plancha à 200°C.',
      'Cuire les brochettes 8 à 10 minutes en tournant régulièrement pour dorer le halloumi et attendrir les légumes.',
      'Servir immédiatement avec un filet de jus de citron.'
    ]
  },
  {
    id: 'rec-19',
    title: 'Chili rapide à la dinde ou bœuf haché et haricots noirs express',
    subtitle: 'Un bol réconfortant prêt en 25 minutes avec garniture avocat-cheddar',
    proteinType: 'Boeuf haché',
    cookingMode: 'rapide',
    timeCategory: 'Moyen',
    prepTime: 10,
    cookTime: 18,
    calories: 490,
    allergens: ['Lactose'],
    tags: ['Express 25min', 'Riche en fibres', 'Congélation facile'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    description: 'Une version express de chili con carne qui ne nécessite pas des heures de mijotage grâce aux haricots noirs en conserve.',
    planchaTips: 'Plat mijoté rapide en casserole ou cocotte.',
    ingredients: [
      { id: 'ing-boeuf-hache', name: 'Bœuf haché maigre (ou dinde hachée)', quantity: 500, unit: 'g', department: 'viandes' },
      { id: 'ing-haricots-noirs-conserve', name: 'Haricots noirs en boîte rincés et égouttés', quantity: 540, unit: 'ml (1 grosse boîte)', department: 'non_perissable' },
      { id: 'ing-tomates-des-conserve', name: 'Tomates en dés en conserve', quantity: 796, unit: 'ml (1 grosse boîte)', department: 'non_perissable' },
      { id: 'ing-mais-surgeles', name: 'Grains de maïs sucré surgelés', quantity: 150, unit: 'g', department: 'surgeles' },
      { id: 'ing-oignon-jaune', name: 'Oignon jaune haché', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-poivron-vert', name: 'Poivron vert coupé en dés', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-epices-chili', name: 'Poudre de chili et cumin moulu', quantity: 20, unit: 'g', department: 'non_perissable' },
      { id: 'ing-fromage-cheddar-rape', name: 'Fromage cheddar râpé pour servir', quantity: 100, unit: 'g', department: 'produits_laitiers' },
      { id: 'ing-coriandre-fraiche', name: 'Coriandre fraîche', quantity: 10, unit: 'g', department: 'fruits_legumes' }
    ],
    steps: [
      'Dans un grand chaudron, faire dorer le bœuf avec l\'oignon et le poivron vert 6 minutes.',
      'Ajouter la poudre de chili, le cumin et le sel. Remuer 1 minute pour libérer les arômes.',
      'Verser les tomates en dés, les haricots noirs et le maïs surgelé.',
      'Laisser mijoter à feu moyen 12 à 15 minutes en remuant régulièrement jusqu\'à épaississement.',
      'Servir dans des bols avec du cheddar râpé et de la coriandre fraîche.'
    ]
  },
  {
    id: 'rec-20',
    title: 'Wok express de crevettes et légumes asiatiques sautés au sésame',
    subtitle: 'Légumes croquants, crevettes dorées et sauce soya-gingembre en 12 minutes',
    proteinType: 'Crevettes',
    cookingMode: 'rapide',
    timeCategory: 'Rapide',
    prepTime: 8,
    cookTime: 7,
    calories: 340,
    allergens: ['Fruits de mer', 'Soya', 'Sésame'],
    tags: ['Ultra Rapide', 'Léger & Équilibré', 'One-Pan'],
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
    description: 'Une cuisson ultra-rapide qui préserve le croquant des légumes et le moelleux des crevettes.',
    planchaTips: 'Sur plancha, étalez les crevettes et les légumes pour une saisie uniforme en moins de 5 minutes.',
    ingredients: [
      { id: 'ing-crevettes-crues', name: 'Grosses crevettes décortiquées crues', quantity: 500, unit: 'g', department: 'surgeles' },
      { id: 'ing-legumes-wok-surgeles', name: 'Mélange de légumes pour wok asiatique', quantity: 500, unit: 'g', department: 'surgeles' },
      { id: 'ing-sauce-soya', name: 'Sauce soya', quantity: 35, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-sirop-erable', name: 'Sirop d\'érable pur', quantity: 15, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-gingembre-frais', name: 'Gingembre frais râpé', quantity: 15, unit: 'g', department: 'fruits_legumes' },
      { id: 'ing-ail-gousses', name: 'Ail (gousses)', quantity: 3, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-huile-sesame', name: 'Huile de sésame grillé', quantity: 15, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-graines-sesame', name: 'Graines de sésame pour garnir', quantity: 10, unit: 'g', department: 'non_perissable' }
    ],
    steps: [
      'Chauffer l\'huile de sésame dans un wok ou une grande poêle à feu très vif.',
      'Ajouter l\'ail et le gingembre 30 secondes, puis ajouter les légumes pour wok.',
      'Faire sauter 4 minutes à feu vif pour garder les légumes croquants.',
      'Ajouter les crevettes, la sauce soya et le sirop d\'érable. Sauter 3 minutes jusqu\'à ce que les crevettes soient roses et opaques.',
      'Saupoudrer de graines de sésame et servir avec du riz ou des nouilles.'
    ]
  }
];
