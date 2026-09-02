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
  'Dinde & Volailles',
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
    title: 'Smashed Burgers de bœuf maison & Patates Wedges à la plancha',
    subtitle: 'Croûte croustillante caramélisée, fromage fondant, sauce secrète et quartiers de patates dorées',
    proteinType: 'Boeuf haché',
    cookingMode: 'plancha',
    timeCategory: 'Rapide',
    prepTime: 12,
    cookTime: 15,
    calories: 680,
    allergens: ['Gluten', 'Lactose', 'Moutarde', 'Oeufs'],
    tags: ['Plancha Star', 'Coup de coeur famille', 'Fast-food maison'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'La cuisson suprême à la plancha : des smash burgers ultra juteux et croustillants servis avec de généreux quartiers de pommes de terre (wedges) assaisonnés au paprika fumé et herbes.',
    planchaTips: 'Plancha à 220°C pour les wedges (lancer 12-15 min avant en retournant souvent) et 250°C zone très chaude pour smasher les galettes de bœuf 2 min par face.',
    ingredients: [
      { id: 'ing-boeuf-hache', name: 'Bœuf haché mi-maigre', quantity: 600, unit: 'g', department: 'viandes' },
      { id: 'ing-pommes-de-terre-russet', name: 'Pommes de terre Russet (en quartiers wedges)', quantity: 4, unit: 'unité (600g)', department: 'fruits_legumes' },
      { id: 'ing-pains-burger', name: 'Pains briochés à hamburger', quantity: 4, unit: 'unité', department: 'non_perissable' },
      { id: 'ing-fromage-cheddar', name: 'Tranches de fromage cheddar vieilli', quantity: 8, unit: 'tranche', department: 'produits_laitiers' },
      { id: 'ing-oignon-jaune', name: 'Oignon jaune émincé très fin', quantity: 1, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-laitue-romaine', name: 'Feuilles de laitue romaine', quantity: 4, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-tomate-ronde', name: 'Tomate de serre en rondelles', quantity: 2, unit: 'unité', department: 'fruits_legumes' },
      { id: 'ing-paprika-fume', name: 'Paprika fumé & herbes à frites', quantity: 10, unit: 'g', department: 'non_perissable' },
      { id: 'ing-huile-cuisson', name: 'Huile végétale pour cuisson', quantity: 30, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-mayonnaise', name: 'Mayonnaise', quantity: 45, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-moutarde-dijon', name: 'Moutarde de Dijon ou relish', quantity: 20, unit: 'ml', department: 'non_perissable' },
      { id: 'ing-beurre', name: 'Beurre salé', quantity: 20, unit: 'g', department: 'produits_laitiers' }
    ],
    steps: [
      'Laver les pommes de terre et les couper en quartiers réguliers (wedges). Les enrober d\'huile, de paprika fumé, sel et poivre.',
      'Déposer les wedges sur la zone moyenne de la plancha (200°C) et cuire 12 à 15 minutes en les retournant régulièrement jusqu\'à ce qu\'elles soient tendres et croustillantes.',
      'Former 8 boules de 75g avec le bœuf haché sans trop tasser la viande. Saler généreusement l\'extérieur.',
      'Toaster les pains beurrés sur la plancha 1 minute, puis réserver.',
      'Poser les boules de bœuf sur la zone brûlante de la plancha avec les oignons émincés. Écraser très fermement avec une spatule plate.',
      'Cuire 2 minutes jusqu\'à belle croûte caramélisée, retourner, déposer immédiatement le cheddar et empiler 2 galettes par burger.',
      'Monter les burgers avec la sauce mayo-moutarde, laitue et rondelles de tomate. Servir immédiatement avec les wedges dorées.'
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
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
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
  },
  {
    "id": "rec-21",
    "title": "Poulet glacé à la mangue à la caribéenne",
    "subtitle": "Poitrines de poulet caramélisées au chutney de mangues et épices des îles",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "mixte",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 20,
    "calories": 580,
    "allergens": [],
    "tags": [
      "Exotique",
      "Sucré-Salé",
      "Plancha & Poêle",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/poulet-glace-a-la-mangue-a-la-caribeenne-f5ab9fee.jpg",
    "description": "De tendres poitrines de poulet laquées d'un glaçage tropical à la mangue et au cari doux, servies avec un riz parfumé et des poivrons grillés.",
    "planchaTips": "Faites saisir le poulet sur la zone chaude (200°C) 5 min par face, puis badigeonnez généreusement de chutney de mangues en fin de cuisson pour caraméliser sans brûler.",
    "ingredients": [
      {
        "id": "ing-poulet-poitrine",
        "name": "Poitrines de poulet",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-chutney-mangue",
        "name": "Chutney de mangues doux",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-poudre-cari",
        "name": "Poudre de cari doux",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-poivron-rouge",
        "name": "Poivrons rouges en lanières",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-riz-jasmin",
        "name": "Riz au jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-lime",
        "name": "Limes fraîches",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-oignon-vert",
        "name": "Oignons verts émincés",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Ail haché",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-huile-vegetale",
        "name": "Huile végétale",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz au jasmin dans 600 ml d'eau bouillante salée pendant 12 à 15 minutes.",
      "Couper les poivrons en lanières et émincer les oignons verts et l'ail.",
      "Dans un bol, mélanger le chutney de mangues avec le cari, la moitié de l'ail et le jus d'une lime.",
      "Assaisonner les poitrines de poulet avec sel, poivre et un filet d'huile.",
      "Chauffer la plancha ou la poêle à feu moyen-vif. Griller le poulet 5 à 6 minutes de chaque côté.",
      "Badigeonner le poulet avec la sauce mangue-cari dans les 2 dernières minutes pour caraméliser.",
      "Faire sauter les lanières de poivrons sur la plancha 4 à 5 minutes.",
      "Servir le poulet tranché sur le riz garni de poivrons et d'oignons verts."
    ]
  },
  {
    "id": "rec-22",
    "title": "Bols super rapides à la dinde et à l'ananas façon hawaïenne",
    "subtitle": "Dinde hachée dorée, ananas caramélisé et sauce teriyaki minute",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 12,
    "calories": 520,
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Express 15min",
      "Bol-Repas",
      "Sucré-Salé",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/28cd6798-96ce-5eaa-930a-796088810d00-75a33ee1.jpg",
    "description": "Un bol complet, coloré et ultra rapide mariant la dinde hachée assaisonnée, des morceaux d'ananas rôtis et du chou croquant sur un lit de riz.",
    "planchaTips": "Utilisez deux spatules sur la plancha : d'un côté la dinde hachée bien émiettée, de l'autre les dés d'ananas qui prennent un marquage doré irrésistible.",
    "ingredients": [
      {
        "id": "ing-dinde-hachee",
        "name": "Dinde hachée maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-ananas-morceaux",
        "name": "Morceaux d'ananas (frais ou en boîte)",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-sauce-teriyaki",
        "name": "Sauce teriyaki",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-chou-rouge-rape",
        "name": "Chou rouge émincé",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-riz-blanc",
        "name": "Riz blanc basmati",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-mayo-sriracha",
        "name": "Mayonnaise épicée sriracha",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-graines-sesame",
        "name": "Graines de sésame grillées",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-oignon-vert",
        "name": "Oignons verts",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Cuire le riz dans une casserole d'eau bouillante salée.",
      "Chauffer la plancha ou une grande poêle à feu vif avec un peu d'huile.",
      "Faire dorer la dinde hachée en l'émiettant pendant 6 à 7 minutes jusqu'à belle coloration.",
      "Ajouter les morceaux d'ananas et verser la sauce teriyaki. Laisser glacer 2 minutes.",
      "Dresser les bols : déposer le riz chaud, garnir avec le mélange dinde-ananas et le chou rouge croquant.",
      "Napper d'un filet de mayonnaise épicée et parsemer d'oignons verts et graines de sésame."
    ]
  },
  {
    "id": "rec-23",
    "title": "Bols au bœuf style fajita",
    "subtitle": "Lanières de bœuf saisies aux épices tex-mex, poivrons et maïs doux",
    "proteinType": "Boeuf haché",
    "cookingMode": "mixte",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 610,
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Tex-Mex",
      "Bol-Repas",
      "Plancha",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/bols-au-boeuf-style-fajita-333d6225.jpg",
    "description": "Toutes les saveurs fumées des fajitas dans un bol convivial : bœuf doré aux épices mexicaines, poivrons caramélisés, salsa fraîche et crème sure.",
    "planchaTips": "Cuisson ultra vive à 230°C sur la plancha. Faites sauter les légumes d'abord, puis poussez-les sur le côté pour saisir la viande à feu maximal.",
    "ingredients": [
      {
        "id": "ing-boeuf-laniere",
        "name": "Bœuf à bifteck ou haché maigre",
        "quantity": 550,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-epices-mexicaines",
        "name": "Mélange d'épices fajitas/tacos",
        "quantity": 20,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-poivron-trio",
        "name": "Poivrons de couleurs variées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-oignon-jaune",
        "name": "Oignon jaune émincé",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-mais-grains",
        "name": "Maïs en grains (égoutté ou surgelé)",
        "quantity": 200,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-riz-brun",
        "name": "Riz mexicain ou basmati",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-creme-sure",
        "name": "Crème sure 14%",
        "quantity": 80,
        "unit": "ml",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-fromage-cheddar-rape",
        "name": "Cheddar râpé",
        "quantity": 100,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-lime",
        "name": "Lime",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Lancer la cuisson du riz selon les indications de l'emballage.",
      "Trancher les poivrons et l'oignon en lanières.",
      "Chauffer la plancha à feu vif. Déposer les poivrons, l'oignon et le maïs avec un filet d'huile et cuire 6 minutes.",
      "Assaisonner le bœuf avec le mélange d'épices fajitas.",
      "Déposer le bœuf sur la plancha très chaude et saisir 3 à 4 minutes.",
      "Assembler les bols avec le riz, le bœuf, les légumes grillés, le cheddar râpé et une cuillerée de crème sure."
    ]
  },
  {
    "id": "rec-24",
    "title": "Bols de tofu Bang Bang",
    "subtitle": "Cubes de tofu croustillants enrobés d'une sauce crémeuse sucrée-pimentée",
    "proteinType": "Tofu",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 10,
    "calories": 490,
    "allergens": [
      "Soya",
      "Sésame",
      "Oeufs"
    ],
    "tags": [
      "Végétarien",
      "Croustillant",
      "Sauce Onctueuse",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/bols-de-tofu-bang-bang-28ea3c2a.jpg",
    "description": "Le tofu prend une texture extra croustillante avec la fécule de maïs, puis est enrobé de la fameuse sauce Bang Bang à base de mayo, sweet chili et sriracha.",
    "planchaTips": "Pressez bien le tofu avec un linge propre pour retirer l'eau avant de l'enrober de fécule. Sur la plancha bien huilée à 210°C, retournez-le sur chaque face.",
    "ingredients": [
      {
        "id": "ing-tofu-ferme",
        "name": "Tofu extra-ferme coupé en dés",
        "quantity": 450,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-fecule-mais",
        "name": "Fécule de maïs",
        "quantity": 40,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-sweet-chili",
        "name": "Sauce chili douce (sweet chili)",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-mayonnaise",
        "name": "Mayonnaise",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-sriracha",
        "name": "Sauce sriracha",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-concombre",
        "name": "Concombre libanais en rondelles",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-carotte-rapee",
        "name": "Carottes râpées",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-riz-jasmin",
        "name": "Riz jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-huile-vegetale",
        "name": "Huile végétale",
        "quantity": 40,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz au jasmin à couvert 12 minutes.",
      "Éponger les dés de tofu avec un essuie-tout, puis les rouler dans la fécule de maïs avec une pincée de sel.",
      "Dans un bol, fouetter la mayonnaise, la sauce chili douce et la sriracha pour créer la sauce Bang Bang.",
      "Chauffer une poêle antiadhésive ou la plancha avec l'huile à feu moyen-vif. Faire dorer le tofu 8 à 10 minutes en le retournant souvent.",
      "Transférer le tofu doré dans un grand bol et l'enrober immédiatement avec la moitié de la sauce Bang Bang.",
      "Dresser les bols avec le riz, le concombre, les carottes et le tofu Bang Bang. Napper du reste de sauce."
    ]
  },
  {
    "id": "rec-25",
    "title": "Sandwichs de porc grillé BBQ et salade de chou croquante",
    "subtitle": "Porc juteux badigeonné de sauce BBQ fumée dans des pains briochés grillés",
    "proteinType": "Filet de porc",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 630,
    "allergens": [
      "Gluten",
      "Moutarde",
      "Oeufs"
    ],
    "tags": [
      "Sandwich Gourmand",
      "Plancha",
      "BBQ Convivial",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/f7133c92-c0d8-5fc0-989d-c0519238fbe7-e299ff3a.jpg",
    "description": "De tendres médaillons de porc saisis à la plancha avec une laque BBQ fumée, servis dans des pains briochés dorés avec une salade de chou crémeuse à l'érable.",
    "planchaTips": "Faites dorer les pains briochés directement sur la plancha beurrée quelques secondes. Badigeonnez le porc de sauce BBQ uniquement dans les 2 dernières minutes.",
    "ingredients": [
      {
        "id": "ing-filet-porc",
        "name": "Filet de porc tranché en escalopes",
        "quantity": 550,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-pains-brioches",
        "name": "Pains à burger briochés",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-bbq",
        "name": "Sauce BBQ fumée de style érable",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-melange-salade-chou",
        "name": "Mélange de chou pour salade de chou",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-vinaigrette-cremeuse",
        "name": "Vinaigrette crémeuse pour salade de chou",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-beurre",
        "name": "Beurre salé",
        "quantity": 20,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-cornichons-aneth",
        "name": "Cornichons à l'aneth tranchés",
        "quantity": 60,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Mélanger le chou râpé avec la vinaigrette crémeuse et réfrigérer.",
      "Aplatir légèrement les escalopes de porc et les assaisonner de sel et poivre.",
      "Chauffer la plancha à feu moyen-vif. Cuire le porc 3 à 4 minutes de chaque côté.",
      "Badigeonner généreusement de sauce BBQ et laisser caraméliser 1 minute.",
      "Beurrer l'intérieur des pains briochés et les faire dorer sur la plancha.",
      "Monter les sandwichs : pain du bas, porc BBQ laqué, cornichons, salade de chou croquante et pain du haut."
    ]
  },
  {
    "id": "rec-26",
    "title": "Sauté de poulet au miel, cajous et sésame super rapide",
    "subtitle": "Lanières de poulet crousti-fondantes avec brocolis croquants et sauce mielleuse",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 12,
    "calories": 540,
    "allergens": [
      "Soya",
      "Sésame",
      "Noix & Arachides"
    ],
    "tags": [
      "Express 15min",
      "Wok & Plancha",
      "Familial",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y25_R1050_W10_CA_RC37028-1_Main_low-225d29f2.jpg",
    "description": "Un classique instantané : poulet sauté avec des fleurets de brocoli, enrobé d'une sauce brillante au miel, gingembre et soya, garni de cajous grillés.",
    "planchaTips": "À la plancha, saisissez le poulet à feu vif et arrosez les brocolis d'un filet d'eau sous une cloche pour les attendrir en 3 minutes.",
    "ingredients": [
      {
        "id": "ing-poulet-laniere",
        "name": "Lanières de poitrine de poulet",
        "quantity": 550,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-brocoli-fleurets",
        "name": "Brocoli coupé en petits fleurets",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-miel-pur",
        "name": "Miel pur québécois",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-soya",
        "name": "Sauce soya",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-huile-sesame-grille",
        "name": "Huile de sésame grillé",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-noix-cajou",
        "name": "Noix de cajou grillées",
        "quantity": 60,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Gousses d'ail émincées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-nouilles-ou-riz",
        "name": "Nouilles asiatiques ou riz",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire les nouilles ou le riz dans de l'eau bouillante.",
      "Dans un bol, mélanger le miel, la sauce soya, l'huile de sésame et l'ail.",
      "Chauffer une poêle wok ou la plancha à feu moyen-vif avec un filet d'huile.",
      "Saisir les lanières de poulet 5 à 6 minutes jusqu'à coloration dorée.",
      "Ajouter les fleurets de brocoli et faire sauter 3 minutes.",
      "Verser la sauce miel-soya et laisser mijoter 2 minutes jusqu'à épaississement.",
      "Servir sur les nouilles et parsemer de noix de cajou croquantes et graines de sésame."
    ]
  },
  {
    "id": "rec-27",
    "title": "Poulet pané au poivre au citron et légumes rôtis",
    "subtitle": "Escalopes de poulet ultra croustillantes parfumées au zeste de citron et poivre noir",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "mixte",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 15,
    "calories": 590,
    "allergens": [
      "Gluten",
      "Oeufs",
      "Lactose"
    ],
    "tags": [
      "Croustillant",
      "Citron & Poivre",
      "Confort Food",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y26_R1101_W34_CA_RC56807-2main_low-cdabbf6c.jpg",
    "description": "Une panure dorée et croustillante au panko assaisonnée d'épices poivre-citron, servie avec des pommes de terre grelots et haricots sautés au beurre.",
    "planchaTips": "Faites dorer les escalopes panées sur la plancha généreusement huilée à feu moyen (190°C) 4 à 5 min par face pour obtenir une croûte bien dorée sans brûler.",
    "ingredients": [
      {
        "id": "ing-poulet-poitrine",
        "name": "Poitrines de poulet tranchées en escalopes",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-chapelure-panko",
        "name": "Chapelure panko japonaise",
        "quantity": 100,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-epices-citron-poivre",
        "name": "Mélange d'épices poivre et citron",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-farine",
        "name": "Farine tout usage",
        "quantity": 40,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-oeufs",
        "name": "Œuf battu",
        "quantity": 1,
        "unit": "unité",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-pommes-terre-grelots",
        "name": "Pommes de terre grelots coupées en deux",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-haricots-verts",
        "name": "Haricots verts frais",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-beurre",
        "name": "Beurre fondu pour la cuisson",
        "quantity": 30,
        "unit": "g",
        "department": "produits_laitiers"
      }
    ],
    "steps": [
      "Préparer 3 assiettes creuses : farine / œuf battu / chapelure panko mélangée aux épices poivre-citron.",
      "Passer chaque escalope de poulet dans la farine, l'œuf puis presser dans la chapelure panko.",
      "Chauffer la poêle ou la plancha avec de l'huile et un peu de beurre à feu moyen.",
      "Cuire les escalopes 4 à 5 minutes par face jusqu'à ce que la panure soit bien croustillante et dorée.",
      "Parallèlement, faire sauter les grelots et les haricots verts avec une touche d'ail et de beurre.",
      "Servir avec des quartiers de citron frais à presser au moment de déguster."
    ]
  },
  {
    "id": "rec-28",
    "title": "Sauté de bœuf et de riz vietnamiens (Bò Lúc Lắc style)",
    "subtitle": "Dés de bœuf caramélisés à la sauce soya douce, riz à la tomate et concombres frais",
    "proteinType": "Boeuf haché",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 560,
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Express 15min",
      "Vietnam",
      "Saveurs Fraîches",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y26_R1049_W34_CA_RB57954-2main_low-1cb9992a.jpg",
    "description": "Inspiré du célèbre bœuf Luc Lac vietnamien : bœuf saisi à feu ardent avec une sauce parfumée à l'ail, sauce poisson et soya, servi avec du riz tomate.",
    "planchaTips": "Plancha à température maximale (240°C) ! Le secret est de saisir le bœuf très vite (3 à 4 minutes) pour qu'il reste tendre avec une croûte caramélisée.",
    "ingredients": [
      {
        "id": "ing-boeuf-cubes",
        "name": "Bifteck de surlonge ou bœuf haché maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-sauce-soya",
        "name": "Sauce soya",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-huitre",
        "name": "Sauce d'huître ou hoisin",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-sucre-brun",
        "name": "Cassonade ou sucre",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Ail haché finement",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-pate-tomate",
        "name": "Pâte de tomate (pour le riz rouge)",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-riz-jasmin",
        "name": "Riz jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-concombre",
        "name": "Concombre tranché",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-lime",
        "name": "Lime",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Cuire le riz avec la pâte de tomate et un filet d'ail pour créer un délicieux riz rouge parfumé.",
      "Dans un bol, mariner le bœuf avec la sauce soya, sauce d'huître, cassonade et poivre noir.",
      "Chauffer la plancha ou la poêle à feu très vif.",
      "Jeter le bœuf et l'ail sur la surface brûlante et cuire 3 à 4 minutes en remuant vivement.",
      "Dresser les assiettes avec le riz rouge, le bœuf bien laqué, des rondelles de concombre et de lime fraîche."
    ]
  },
  {
    "id": "rec-29",
    "title": "Bols de poulet glacé au miel et à l’ail",
    "subtitle": "Bouchées de poulet dorées dans une sauce collante au miel, ail et légumes sautés",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 510,
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Favori Enfants",
      "Express 20min",
      "Sucré-Salé",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y24_R1007_W49_CA_RC157529-4_Main_low-a5ae4628.jpg",
    "description": "Une recette réconfortante et rapide avec une sauce miel-ail maison qui enrobe à merveille le poulet doré et des légumes croquants sur du riz au jasmin.",
    "planchaTips": "Faites sauter les cubes de poulet sur la plancha chaude 6 min, ajoutez les carottes et pois mange-tout, puis versez la sauce pour enrober le tout.",
    "ingredients": [
      {
        "id": "ing-poulet-cubes",
        "name": "Poitrines de poulet en cubes",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-miel-pur",
        "name": "Miel",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-soya",
        "name": "Sauce soya",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Gousses d'ail pressées",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-pois-mange-tout",
        "name": "Pois mange-tout frais",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-carotte",
        "name": "Carottes en fines rondelles",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-riz-jasmin",
        "name": "Riz au jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-graines-sesame",
        "name": "Graines de sésame",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz jasmin dans 600 ml d'eau salée 12 minutes.",
      "Dans un bol, mélanger le miel, la sauce soya, l'ail pressé et 30 ml d'eau.",
      "Faire chauffer la poêle ou la plancha à feu moyen-vif avec un filet d'huile.",
      "Dorer les cubes de poulet 6 à 7 minutes jusqu'à cuisson complète.",
      "Ajouter les pois mange-tout et les carottes, faire sauter 3 minutes.",
      "Verser la sauce au miel et à l'ail. Laisser bouillir 2 minutes pour épaissir la sauce et napper le poulet.",
      "Servir dans des bols sur le riz chaud et parsemer de sésame."
    ]
  },
  {
    "id": "rec-30",
    "title": "Poulet grillé super rapide à la grecque et salade feta-concombre",
    "subtitle": "Poulet parfumé à l'origan et ail, salade méditerranéenne rafraîchissante et tzatziki",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 470,
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Méditerranéen",
      "Keto-friendly",
      "Plancha Express",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HFCARC-RC39637-1_Hero_SuperquickGreekInspiredGrilledChickenWithCucumberTomatoAndFetaSalad_W23-1050-2025_Web-5473f7ee.jpg",
    "description": "Des poitrines de poulet assaisonnées aux herbes grecques saisies à la plancha, accompagnées d'une salade croquante de concombres, tomates, feta et olives kalamata.",
    "planchaTips": "Plancha à 210°C. Grillez aussi des pains pitas ou naan coupés en pointes sur le coin de la plancha pour accompagner le tzatziki.",
    "ingredients": [
      {
        "id": "ing-poulet-poitrine",
        "name": "Poitrines de poulet",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-origan-grec",
        "name": "Épices grecques (origan, ail, thym)",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-concombre",
        "name": "Concombre anglais coupé en dés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-tomates-cerises",
        "name": "Tomates cerises coupées en deux",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-fromage-feta",
        "name": "Fromage feta émietté",
        "quantity": 150,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-olives-kalamata",
        "name": "Olives kalamata dénoyautées",
        "quantity": 60,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-tzatziki",
        "name": "Sauce tzatziki à l'ail et concombre",
        "quantity": 120,
        "unit": "ml",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-huile-olive",
        "name": "Huile d'olive extra vierge",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-citron",
        "name": "Citron frais",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Badigeonner les poitrines de poulet d'huile d'olive, jus de citron et épices grecques.",
      "Dans un saladier, mélanger les concombres, tomates cerises, olives, feta, huile d'olive et origan.",
      "Chauffer la plancha à 210°C. Cuire les poitrines de poulet 5 minutes de chaque côté.",
      "Laisser reposer le poulet 2 minutes sur une planche puis trancher en biseaux.",
      "Dresser les assiettes avec la salade grecque, le poulet grillé et une belle portion de tzatziki."
    ]
  },
  {
    "id": "rec-31",
    "title": "Poulet tikka au chutney de mangues et riz aux amandes",
    "subtitle": "Brochettes ou dés de poulet marinés aux épices tikka avec chutney fruité",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "mixte",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 18,
    "calories": 590,
    "allergens": [
      "Lactose",
      "Noix & Arachides"
    ],
    "tags": [
      "Saveurs d'Inde",
      "Plancha",
      "Sucré-Épicé",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HFCARC_RC155957-9_Hero_MangoChutneyChickenTikka_W30_1092_2026_low_Web-82d36ad2.jpg",
    "description": "Poulet mariné au yogourt et épices tikka garam masala, saisi avec un marquage doré et servi avec un chutney de mangue sucré et des amandes effilées.",
    "planchaTips": "La marinade au yogourt crée une croûte savoureuse à la plancha. Cuire à 200°C 4 minutes de chaque côté.",
    "ingredients": [
      {
        "id": "ing-poulet-poitrine",
        "name": "Poitrines de poulet en morceaux",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-pate-tikka",
        "name": "Pâte d'épices tikka ou curry masala",
        "quantity": 30,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-yogourt-nature",
        "name": "Yogourt grec nature",
        "quantity": 80,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-chutney-mangue",
        "name": "Chutney de mangues",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-riz-basmati",
        "name": "Riz basmati",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-amandes-effilees",
        "name": "Amandes effilées grillées",
        "quantity": 40,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-coriandre-fraiche",
        "name": "Coriandre fraîche hachée",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Mélanger le yogourt avec la pâte tikka et y enrober les morceaux de poulet.",
      "Cuire le riz basmati à couvert pendant 12 minutes.",
      "Chauffer la plancha à feu moyen-vif. Cuire le poulet tikka 8 à 10 minutes en le retournant.",
      "Griller les amandes effilées à sec 1 minute sur le coin de la plancha.",
      "Servir le poulet tikka avec le riz, le chutney de mangues, la coriandre et les amandes."
    ]
  },
  {
    "id": "rec-32",
    "title": "Bols burrito à l'haloumi grillé à la mexicaine",
    "subtitle": "Fromage haloumi doré, haricots noirs, maïs grillé et guacamole au citron vert",
    "proteinType": "Végétarien",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 10,
    "calories": 580,
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Végétarien",
      "Fromage Grillé",
      "Plancha Star",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/6e171b8b-e639-4fb4-9f99-2ae40587a30f-f96bf8a0.jpg",
    "description": "L'haloumi est le roi de la plancha : il dore sans fondre pour offrir une bouchée salée et croustillante, servie dans un bol burrito végétarien copieux.",
    "planchaTips": "Tranchez l'haloumi en tranches de 1 cm. Plancha très chaude (220°C). 2 minutes par face sans huile ajoutée : une croûte brune dorée spectaculaire !",
    "ingredients": [
      {
        "id": "ing-fromage-haloumi",
        "name": "Fromage haloumi tranché",
        "quantity": 400,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-haricots-noirs",
        "name": "Haricots noirs en boîte rincés",
        "quantity": 1,
        "unit": "boîte",
        "department": "non_perissable"
      },
      {
        "id": "ing-mais-grains",
        "name": "Maïs en grains",
        "quantity": 200,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-avocats",
        "name": "Avocats mûrs pour guacamole",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-tomates",
        "name": "Tomates en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-riz-blanc",
        "name": "Riz blanc ou quinoa",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-lime",
        "name": "Limes",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-epices-mexicaines",
        "name": "Épices mexicaines",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz avec une pincée de sel et le zeste d'une lime.",
      "Écraser les avocats avec le jus de lime, dés de tomates, sel et poivre pour le guacamole.",
      "Réchauffer les haricots noirs avec les épices mexicaines.",
      "Griller les tranches d'haloumi et le maïs sur la plancha chaude 2 minutes par côté.",
      "Dresser les bols avec le riz, les haricots, le maïs, le guacamole et les tranches d'haloumi grillé."
    ]
  },
  {
    "id": "rec-33",
    "title": "Sandwichs ouverts super rapides à la dinde et fromage fondant",
    "subtitle": "Tartines grillées façon melt avec dinde rissolée, oignons caramélisés et provolone",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 12,
    "calories": 530,
    "allergens": [
      "Gluten",
      "Lactose",
      "Moutarde"
    ],
    "tags": [
      "Express 15min",
      "Sandwich Chaud",
      "Confort Food",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y24_R1049_W34_CA_RP27775-1_MAIN_low-e0e96b55.jpg",
    "description": "Une version rapide et gourmande du patty melt : dinde hachée assaisonnée, moutarde de Dijon, oignons doux et fromage fondant sur du bon pain de campagne toasté.",
    "planchaTips": "Grillez les tranches de pain sur la plancha et utilisez une cloche pour faire fondre le fromage sur la dinde en 1 minute.",
    "ingredients": [
      {
        "id": "ing-dinde-hachee",
        "name": "Dinde hachée maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-pain-campagne",
        "name": "Tranches épaisses de pain de campagne",
        "quantity": 4,
        "unit": "tranche",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-provolone",
        "name": "Tranches de provolone ou suisse",
        "quantity": 8,
        "unit": "tranche",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-oignon-jaune",
        "name": "Oignons émincés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-moutarde-dijon",
        "name": "Moutarde de Dijon à l'ancienne",
        "quantity": 30,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-beurre",
        "name": "Beurre",
        "quantity": 25,
        "unit": "g",
        "department": "produits_laitiers"
      }
    ],
    "steps": [
      "Caraméliser les oignons sur la plancha ou dans une poêle avec un peu de beurre 6 minutes.",
      "Faire dorer la dinde hachée avec sel, poivre et moutarde de Dijon 6 minutes.",
      "Faire griller les tranches de pain beurrées sur la plancha.",
      "Déposer la dinde et les oignons sur chaque tranche de pain, couvrir de provolone.",
      "Couvrir d'une cloche de cuisson pour faire fondre le fromage et servir chaud."
    ]
  },
  {
    "id": "rec-34",
    "title": "Quesadillas fromagées au porc effiloché ou haché épicé",
    "subtitle": "Tortillas croustillantes garnies de porc savoureux, fromage coulant et salsa",
    "proteinType": "Porc haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 640,
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Plancha Idéale",
      "Tex-Mex",
      "Familial",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/quesadillas-fromagees-au-porc-f7b8ab48.jpg",
    "description": "La plancha est l'outil rêvé pour les quesadillas : elle dore uniformément 4 grandes tortillas en même temps pour un fromage parfaitement fondu et croustillant.",
    "planchaTips": "Chauffez la plancha à 190°C. Déposez les tortillas à plat, garnissez une moitié, repliez et pressez avec une spatule plate 3 min par face.",
    "ingredients": [
      {
        "id": "ing-porc-hache",
        "name": "Porc haché ou porc effiloché",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-tortillas-ble",
        "name": "Grandes tortillas de blé",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-monterey-jack",
        "name": "Mélange Monterey Jack et Cheddar râpé",
        "quantity": 200,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-epices-tacos",
        "name": "Assaisonnement pour tacos",
        "quantity": 20,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-poivron-rouge",
        "name": "Poivron rouge en petits dés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-salsa",
        "name": "Salsa douce ou moyenne",
        "quantity": 120,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-creme-sure",
        "name": "Crème sure pour servir",
        "quantity": 80,
        "unit": "ml",
        "department": "produits_laitiers"
      }
    ],
    "steps": [
      "Cuire le porc haché avec les épices pour tacos et les dés de poivrons pendant 6 minutes.",
      "Disposer les tortillas sur la plancha tiède-chaude (190°C).",
      "Saupoudrer de fromage sur une moitié de chaque tortilla, ajouter la garniture de porc et recouvrir d'un peu de fromage.",
      "Replier les tortillas en demi-lune.",
      "Cuire 3 minutes de chaque côté jusqu'à ce que les tortillas soient dorées et croustillantes.",
      "Couper en triangles et servir avec salsa et crème sure."
    ]
  },
  {
    "id": "rec-35",
    "title": "Taquitos croustillants au bœuf et au fromage fondant",
    "subtitle": "Rouleaux de tortillas dorés et croquants avec guacamole zesté",
    "proteinType": "Boeuf haché",
    "cookingMode": "mixte",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 15,
    "calories": 620,
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Croustillant",
      "Finger Food",
      "Ambiance Fiesta",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HFCARC-RB151661-18_Hero_CheesyBeefTaquitosWithZestyGuacamole_W15-1072-2025_low_Web-be308eca.jpg",
    "description": "Des tortillas roulées serrées avec du bœuf haché assaisonné et du fromage fondant, saisies à la plancha ou à la poêle pour un croustillant irrésistible.",
    "planchaTips": "Posez les taquitos la jointure vers le bas sur la plancha huilée pour les sceller immédiatement, puis roulez-les d'un quart de tour toutes les 2 minutes.",
    "ingredients": [
      {
        "id": "ing-boeuf-hache",
        "name": "Bœuf haché maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-petites-tortillas",
        "name": "Petites tortillas de maïs ou de blé",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-rape",
        "name": "Fromage râpé tex-mex",
        "quantity": 150,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-epices-mexicaines",
        "name": "Épices tex-mex (cumin, paprika, ail)",
        "quantity": 20,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-pate-tomate",
        "name": "Pâte de tomate",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-avocats",
        "name": "Avocats pour guacamole",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-lime",
        "name": "Lime",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Dorer le bœuf avec les épices tex-mex et la pâte de tomate 6 minutes.",
      "Réchauffer les tortillas quelques secondes pour les assouplir.",
      "Garnir chaque tortilla d'une ligne de bœuf et de fromage, puis rouler serré.",
      "Chauffer la plancha huilée à feu moyen. Poser les taquitos côté jointure.",
      "Cuire 6 à 8 minutes en les tournant pour dorer toutes les faces.",
      "Déguster trempés dans un guacamole frais au citron vert."
    ]
  },
  {
    "id": "rec-36",
    "title": "Poulet aux épices fumées au bois de pommier et sauce BBQ blanche",
    "subtitle": "Poulet grillé façon Alabama avec sauce crémeuse acidulée et maïs doux",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 15,
    "calories": 590,
    "allergens": [
      "Oeufs",
      "Moutarde"
    ],
    "tags": [
      "BBQ Style",
      "Sauce Alabama",
      "Plancha",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y26_R1110_W35_CA_RC57433-2main_low-85fa1b88.jpg",
    "description": "Une spécialité du Sud américain : le poulet frotté d'épices fumées au bois de pommier, servi avec la célèbre sauce BBQ blanche à base de mayo, vinaigre de cidre et raifort.",
    "planchaTips": "La sauce BBQ blanche (Alabama white sauce) s'ajoute en nappage sur le poulet chaud dès la sortie de plancha.",
    "ingredients": [
      {
        "id": "ing-poulet-poitrine",
        "name": "Poitrines de poulet",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-epices-fumees",
        "name": "Épices à frotter bois de pommier / fumé",
        "quantity": 20,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-mayonnaise",
        "name": "Mayonnaise",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-vinaigre-cidre",
        "name": "Vinaigre de cidre de pomme",
        "quantity": 20,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-moutarde-dijon",
        "name": "Moutarde de Dijon",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-epis-mais",
        "name": "Épis de maïs coupés en tronçons",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-salade-verte",
        "name": "Salade verte croquante",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Préparer la sauce BBQ blanche en fouettant la mayonnaise, le vinaigre de cidre, la moutarde, une pincée d'ail et de poivre noir.",
      "Enrober le poulet d'huile et des épices fumées.",
      "Chauffer la plancha à 200°C. Cuire les tronçons de maïs et le poulet 5 à 6 minutes de chaque côté.",
      "Trancher le poulet et napper généreusement de sauce BBQ blanche crémeuse.",
      "Servir avec le maïs grillé et la salade."
    ]
  },
  {
    "id": "rec-37",
    "title": "Fajitas de poulet grillé à la plancha fiesta",
    "subtitle": "Lanières de poulet marinées, poivrons et oignons caramélisés avec tortillas chaudes",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 550,
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Incontournable",
      "Plancha Spectacle",
      "Convivial",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/fajitas-de-poulet-grille-e10b7b11.jpg",
    "description": "Le grand classique de la plancha : la viande et les poivrons qui crépitent sur la plaque chaude, servis avec des tortillas chaudes et toutes les garnitures.",
    "planchaTips": "Cuisson simultanée : légumes d'un côté, poulet de l'autre. Rassemblez et mélangez le tout dans les 30 dernières secondes avec un squeeze de jus de lime.",
    "ingredients": [
      {
        "id": "ing-poulet-poitrine",
        "name": "Poitrines de poulet émincées",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-poivron-trio",
        "name": "Poivrons (rouge et vert)",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-oignon-espagnol",
        "name": "Gros oignon espagnol",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-epices-fajitas",
        "name": "Assaisonnement pour fajitas",
        "quantity": 25,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-tortillas-ble",
        "name": "Tortillas de blé souples",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-creme-sure",
        "name": "Crème sure",
        "quantity": 80,
        "unit": "ml",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-salsa-fraiche",
        "name": "Salsa fraîche",
        "quantity": 100,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-lime",
        "name": "Limes",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Trancher le poulet, les poivrons et l'oignon en lanières régulières.",
      "Enrober le poulet des épices fajitas et d'un filet d'huile d'olive.",
      "Préchauffer la plancha à 220°C. Faire sauter les poivrons et oignons 5 minutes.",
      "Ajouter le poulet et cuire 5 minutes en remuant avec deux spatules.",
      "Réchauffer les tortillas 30 secondes sur le coin de la plancha.",
      "Servir au centre de la table pour que chacun monte ses fajitas."
    ]
  },
  {
    "id": "rec-38",
    "title": "Linguines au bacon dans une sauce tomate crémeuse",
    "subtitle": "Pâtes réconfortantes avec lardons croustillants, sauce rosée maison et parmesan",
    "proteinType": "Porc haché",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 15,
    "calories": 680,
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Pâtes",
      "Sauce Rosée",
      "Favori Semaine",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/linguines-au-bacon-dans-une-sauce-tomate-cremeuse-ff90f16d.jpg",
    "description": "Des linguines al dente enrobées d'une onctueuse sauce rosée à la crème et aux tomates, relevées de morceaux de bacon bien croustillants et de basilic.",
    "planchaTips": "Vous pouvez faire dorer les lanières de bacon sur la plancha pour qu'elles soient extra croustillantes et dégraissées avant de les ajouter à la sauce.",
    "ingredients": [
      {
        "id": "ing-bacon-epais",
        "name": "Bacon fumé coupé en lardons",
        "quantity": 250,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-linguines",
        "name": "Pâtes linguines ou fettucines",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-tomate-passata",
        "name": "Sauce tomate passata ou concassée",
        "quantity": 400,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-creme-cuisson",
        "name": "Crème à cuisson 15% ou 35%",
        "quantity": 120,
        "unit": "ml",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Gousses d'ail émincées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-fromage-parmesan",
        "name": "Parmesan râpé frais",
        "quantity": 60,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-epinards-bebe",
        "name": "Bébés épinards frais",
        "quantity": 100,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Cuire les linguines dans une grande casserole d'eau bouillante salée.",
      "Dans une poêle, faire dorer les lardons de bacon jusqu'à ce qu'ils soient croustillants.",
      "Retirer l'excès de gras, ajouter l'ail et faire revenir 1 minute.",
      "Verser la sauce tomate et la crème, laisser mijoter 5 minutes.",
      "Ajouter les épinards et les linguines égouttées dans la sauce, bien enrober.",
      "Servir garni de parmesan râpé et de poivre noir frais."
    ]
  },
  {
    "id": "rec-39",
    "title": "Burgers de bœuf grillé façon resto avec oignons caramélisés",
    "subtitle": "Galettes de bœuf pur bœuf bien saisies, fromage cheddar fondant et sauce maison",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 10,
    "calories": 710,
    "allergens": [
      "Gluten",
      "Lactose",
      "Oeufs",
      "Moutarde"
    ],
    "tags": [
      "Burger Gourmet",
      "Plancha Star",
      "Cheddar Fondant",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/burgers-de-boeuf-grille-facon-resto-3650d530.jpg",
    "description": "Le secret des meilleurs burgers de restaurant : des galettes de bœuf saisies sur la plancha brûlante pour une croûte caramélisée, garnies d'oignons doux et de cheddar.",
    "planchaTips": "Plancha à 220°C. Formez des galettes un peu plus larges que les pains. Cuire 3 min par face. Mettez le fromage dès le retournement et toastez les pains sur la plaque.",
    "ingredients": [
      {
        "id": "ing-boeuf-hache-mi-maigre",
        "name": "Bœuf haché mi-maigre",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-pains-burger",
        "name": "Pains à burger aux graines de sésame",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-cheddar-tranches",
        "name": "Tranches de vrai cheddar vieilli",
        "quantity": 4,
        "unit": "tranche",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-oignon-rouge",
        "name": "Oignon rouge émincé",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-sauce-burger-maison",
        "name": "Mayonnaise, relish et moutarde pour sauce burger",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-laitue-tomate",
        "name": "Feuilles de laitue et tranches de tomate",
        "quantity": 1,
        "unit": "paquet",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Façonner 4 galettes de bœuf égales et assaisonner généreusement de sel et poivre.",
      "Mélanger la mayo, la relish et la moutarde pour créer la sauce secrète.",
      "Chauffer la plancha à feu vif. Cuire les oignons sur un côté.",
      "Déposer les galettes de bœuf et cuire 3 minutes sans les déplacer.",
      "Retourner les galettes, poser immédiatement le cheddar sur chaque burger pour le faire fondre.",
      "Toaster les pains briochés 1 minute sur la plancha.",
      "Assembler : pain, sauce, laitue, tomate, galette au cheddar fondant, oignons et chapeau."
    ]
  },
  {
    "id": "rec-40",
    "title": "Enchiladas gratinées au bœuf et sauce roja maison",
    "subtitle": "Tortillas roulées au bœuf épicé, nappées de sauce tomate pimentée et gratinées",
    "proteinType": "Boeuf haché",
    "cookingMode": "mixte",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 20,
    "calories": 670,
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Mexicain",
      "Plat Familial",
      "Gratiné",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/enchiladas-au-fromage-et-au-boeuf-et-sauce-maison-ced2840e.jpg",
    "description": "Des tortillas farcies de bœuf haché mijoté aux aromates tex-mex, nappées d'une riche sauce tomate aux épices enchiladas et gratinées sous une couche de fromage.",
    "planchaTips": "Faites dorer la viande et les oignons sur la plancha, roulez les tortillas puis terminez au four ou sous la cloche de la plancha pour faire gratiner le fromage.",
    "ingredients": [
      {
        "id": "ing-boeuf-hache",
        "name": "Bœuf haché maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-tortillas-souples",
        "name": "Tortillas de maïs ou blé",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-enchilada",
        "name": "Sauce enchilada ou coulis de tomate assaisonné",
        "quantity": 350,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-mozzarella-cheddar",
        "name": "Mélange de fromage râpé fondant",
        "quantity": 200,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-haricots-rouges",
        "name": "Haricots rouges en boîte",
        "quantity": 1,
        "unit": "boîte",
        "department": "non_perissable"
      },
      {
        "id": "ing-coriandre-fraiche",
        "name": "Coriandre fraîche",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Faire revenir le bœuf haché avec les oignons et les épices enchiladas 6 minutes.",
      "Ajouter la moitié de la sauce et les haricots rouges égouttés.",
      "Garnir les tortillas avec le mélange de bœuf et un peu de fromage, puis les rouler serré.",
      "Disposer dans un plat allant au four (ou sur une plaque à plancha couverte).",
      "Napper avec le reste de sauce et couvrir généreusement de fromage râpé.",
      "Gratiner 10 à 12 minutes jusqu'à ce que le fromage fasse des bulles dorées."
    ]
  },
  {
    "id": "rec-41",
    "title": "Riz frit maison style resto chinois (Le Meilleur)",
    "subtitle": "Riz sauté au wok ou à la plancha avec porc ou poulet, œufs battus, petits pois et sésame",
    "proteinType": "Porc haché",
    "cookingMode": "mixte",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 490,
    "allergens": [
      "Soya",
      "Sésame",
      "Oeufs"
    ],
    "tags": [
      "Classique Ricardo",
      "Plancha Magique",
      "Anti-Gaspillage",
      "Ricardo"
    ],
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "description": "La recette mythique du riz frit parfait : le riz froid de la veille sauté sur une plaque brûlante avec de l'huile de sésame, sauce soya, porc émincé, œufs brouillés et oignons verts.",
    "planchaTips": "La plancha est imbattable pour le riz frit ! Étalez tout le riz sur la surface très chaude (220°C). Cassez les œufs directement sur un coin pour les brouiller avant de mélanger.",
    "ingredients": [
      {
        "id": "ing-riz-cuit-froid",
        "name": "Riz blanc cuit et refroidi (de la veille)",
        "quantity": 600,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-porc-ou-poulet",
        "name": "Porc haché, poulet ou lanières de jambon",
        "quantity": 300,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-oeufs",
        "name": "Œufs battus",
        "quantity": 3,
        "unit": "unité",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-petits-pois-surgeles",
        "name": "Petits pois verts surgelés",
        "quantity": 150,
        "unit": "g",
        "department": "surgeles"
      },
      {
        "id": "ing-sauce-soya",
        "name": "Sauce soya",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-huile-sesame-grille",
        "name": "Huile de sésame grillé",
        "quantity": 20,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-oignon-vert",
        "name": "Oignons verts hachés",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-ail-gingembre",
        "name": "Ail et gingembre frais râpés",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Chauffer la plancha ou un grand wok à feu vif avec un peu d'huile.",
      "Faire sauter la viande avec l'ail et le gingembre 4 minutes.",
      "Pousser la viande sur le côté, verser les œufs battus et les brouiller rapidement.",
      "Ajouter le riz froid bien égrainé et les petits pois.",
      "Arroser de sauce soya et d'huile de sésame. Faire sauter vigoureusement 5 minutes.",
      "Parsemer d'oignons verts frais et servir immédiatement bien chaud."
    ]
  },
  {
    "id": "rec-42",
    "title": "Smash tacos style Big Mac à la plancha",
    "subtitle": "Boules de bœuf écrasées sur tortilla, cheddar fondu, sauce mac et cornichons",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 8,
    "calories": 590,
    "allergens": [
      "Gluten",
      "Lactose",
      "Oeufs",
      "Moutarde"
    ],
    "tags": [
      "Tendance Mordu",
      "Smash Burger",
      "Ultra Rapide",
      "Mordu"
    ],
    "image": "https://images.radio-canada.ca/q_auto,w_1200/v1/alimentation/recette/16x9/smash-tacos.jpg",
    "description": "Le phénomène culinaire québécois : une boulette de bœuf écrasée ultra fine directement sur une tortilla posée sur la plancha, garnie de cheddar, laitue et sauce burger crémeuse.",
    "planchaTips": "Plancha à 230°C. Déposez la boulette de bœuf, posez la tortilla dessus et appuyez fort avec une spatule en métal pour écraser la viande jusqu'au bord !",
    "ingredients": [
      {
        "id": "ing-boeuf-hache",
        "name": "Bœuf haché mi-maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-petites-tortillas",
        "name": "Petites tortillas de maïs ou de blé",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-cheddar-tranches",
        "name": "Tranches de fromage cheddar jaune",
        "quantity": 8,
        "unit": "tranche",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-laitue-iceberg",
        "name": "Laitue iceberg émincée finement",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-oignon-blanc",
        "name": "Oignon blanc haché très fin",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-cornichons-aneth",
        "name": "Cornichons à l'aneth tranchés",
        "quantity": 60,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-mac-maison",
        "name": "Mayonnaise, relish sucrée, moutarde et paprika",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Former 8 petites boules de bœuf de 60g chacune.",
      "Dans un bol, mélanger la mayo, la relish, la moutarde et le paprika pour faire la sauce Mac.",
      "Chauffer la plancha à feu très vif. Poser les boulettes de bœuf, saler et poivrer.",
      "Placer une tortilla sur chaque boulette et écraser fermement (smash) avec une spatule plate.",
      "Cuire 2 à 3 minutes pour créer une croûte croustillante, puis retourner viande vers le haut.",
      "Poser une tranche de cheddar sur chaque taco et laisser fondre 1 minute.",
      "Garnir de sauce, oignons hachés, laitue iceberg et cornichons, puis plier en deux."
    ]
  },
  {
    "id": "rec-43",
    "title": "Quesadillas vide-frigo antigaspillage",
    "subtitle": "Tortillas croustillantes garnies de restants de protéines, légumes rôtis et fromage fondant",
    "proteinType": "Végétarien",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 8,
    "calories": 490,
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Anti-Gaspillage",
      "Économique",
      "Plancha Express",
      "Mordu"
    ],
    "image": "https://images.radio-canada.ca/q_auto,w_1200/v1/alimentation/recette/16x9/quesadillas-vide-frigo.jpg",
    "description": "La recette anti-gaspillage par excellence de Savourer x Mordu : utilisez tous vos restes de poulet, porc, légumes flétris et fromages dans des quesadillas croustillantes à souhait.",
    "planchaTips": "Idéal pour vider le frigo le vendredi soir ! Faites griller tous vos légumes sur la plancha avant de les assembler dans les tortillas.",
    "ingredients": [
      {
        "id": "ing-restants-proteines",
        "name": "Restes de poulet, porc cuit, tofu ou haricots",
        "quantity": 350,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-tortillas-ble",
        "name": "Tortillas de blé",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromages-varies",
        "name": "Restes de fromages râpés (cheddar, mozzarella, gouda)",
        "quantity": 200,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-legumes-varies",
        "name": "Légumes du frigo (poivrons, courgettes, oignons, épinards)",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-salsa-ou-creme",
        "name": "Salsa ou trempette",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Couper les légumes en petits morceaux et les faire sauter 4 minutes sur la plancha.",
      "Ajouter vos restants de protéines pour les réchauffer avec un peu d'épices.",
      "Poser les tortillas sur la plancha à 190°C.",
      "Garnir une moitié de chaque tortilla avec le fromage et les légumes sautés.",
      "Replier en deux et cuire 3 minutes par côté jusqu'à belle dorure dorée.",
      "Servir avec de la salsa et un reste de crème sure."
    ]
  },
  {
    "id": "rec-44",
    "title": "Burritos déjeuner/souper aux œufs brouillés et chorizo grillé",
    "subtitle": "Chorizo croustillant, œufs moelleux, fromage fondu et salsa dans une tortilla grillée",
    "proteinType": "Porc haché",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 560,
    "allergens": [
      "Gluten",
      "Lactose",
      "Oeufs"
    ],
    "tags": [
      "Brunch & Souper",
      "Chorizo",
      "Convivial",
      "Mordu"
    ],
    "image": "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    "description": "Une recette réconfortante et rapide pour les soirs de semaine ou les brunchs du week-end : saucisses chorizo rissolées, œufs brouillés crémeux et fromage fondu.",
    "planchaTips": "Faites dorer le chorizo d'un côté, brouillez les œufs de l'autre, roulez les burritos et faites-les dorer sur la jointure à la plancha.",
    "ingredients": [
      {
        "id": "ing-chorizo-frais",
        "name": "Chorizo frais ou saucisses de porc épicées",
        "quantity": 350,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-oeufs",
        "name": "Œufs frais de ferme",
        "quantity": 6,
        "unit": "unité",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-tortillas-grandes",
        "name": "Grandes tortillas souples",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-monterey",
        "name": "Fromage râpé pour burritos",
        "quantity": 150,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-pommes-terre-hachees",
        "name": "Petits dés de pommes de terre rissolées (hashbrowns)",
        "quantity": 200,
        "unit": "g",
        "department": "surgeles"
      },
      {
        "id": "ing-salsa-fraiche",
        "name": "Salsa piquante ou douce",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Faire rissoler le chorizo en morceaux et les dés de pommes de terre sur la plancha 6 minutes.",
      "Battre les œufs et les brouiller doucement sur la plancha huilée.",
      "Remplir chaque tortilla avec les pommes de terre, le chorizo, les œufs, la salsa et le fromage.",
      "Replier les côtés et rouler serré en burrito.",
      "Poser les burritos sur la plancha chaude 1 minute pour sceller et rendre la tortilla croustillante."
    ]
  },
  {
    "id": "rec-45",
    "title": "Smash burgers aux oignons caramélisés et garam masala",
    "subtitle": "Galettes de bœuf épicées façon smash, épinards fondants et mayonnaise à la menthe",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 8,
    "calories": 620,
    "allergens": [
      "Gluten",
      "Lactose",
      "Oeufs"
    ],
    "tags": [
      "Épices Indiennes",
      "Smash Burger",
      "Original",
      "Mordu"
    ],
    "image": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    "description": "Une fusion irrésistible signée Mordu : la technique du smash burger appliquée avec des épices garam masala, des oignons ultra caramélisés et des épinards flétris au beurre.",
    "planchaTips": "Plancha à 230°C. Posez une poignée d'oignons très finement émincés sur la plancha, posez la boule de bœuf au garam masala dessus et smashez le tout ensemble !",
    "ingredients": [
      {
        "id": "ing-boeuf-hache",
        "name": "Bœuf haché mi-maigre",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-garam-masala",
        "name": "Épices garam masala",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-oignon-jaune",
        "name": "Oignons émincés à la mandoline",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-epinards-frais",
        "name": "Bébés épinards",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-pains-brioches",
        "name": "Pains à burger briochés",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-cheddar-fort",
        "name": "Cheddar fort ou gouda",
        "quantity": 4,
        "unit": "tranche",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-mayo-menthe",
        "name": "Mayonnaise mélangée à de la menthe fraîche hachée",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Assaisonner le bœuf avec le garam masala, sel et poivre. Former 4 grosses boules.",
      "Chauffer la plancha à feu très vif. Poser les oignons émincés en 4 petits tas.",
      "Déposer une boule de bœuf sur chaque tas d'oignons et écraser très fort avec une spatule.",
      "Cuire 2 à 3 minutes, retourner avec les oignons caramélisés incrustés.",
      "Ajouter le fromage sur la viande et faire tomber les épinards 1 minute sur la plaque.",
      "Toaster les pains briochés, garnir de mayo à la menthe, du smash burger aux oignons et des épinards."
    ]
  },
  {
    "id": "rec-46",
    "title": "Bulgogi de bœuf coréen authentique à la plancha",
    "subtitle": "Fines lamelles de bœuf marinées à la poire asiatique, soya, sésame et ail",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 20,
    "cookTime": 8,
    "calories": 520,
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Coréen",
      "Plancha BBQ",
      "Saveurs Sucrées-Salées",
      "Pekis"
    ],
    "image": "https://pekis.net/sites/default/files/styles/1200x675/public/2025-02/Korean%20Beef%20Bulgogi.webp?itok=-jMGzRPD",
    "description": "Le véritable barbecue coréen traditionnel : du bœuf tranché très fin, attendri dans une marinade à base de poire râpée, sauce soya, ail et huile de sésame grillé, cuit en quelques minutes.",
    "planchaTips": "Égouttez légèrement la viande avant de la poser sur la plancha fumante (220°C). Saisissez par petites quantités pour ne pas faire bouillir la viande.",
    "ingredients": [
      {
        "id": "ing-faux-filet-boeuf",
        "name": "Faux-filet ou surlonge tranché ultra fin",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-poire-asiatique",
        "name": "Poire nashi ou poire râpée (pour attendrir)",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-sauce-soya",
        "name": "Sauce soya",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-sucre-brun",
        "name": "Cassonade ou sirop d'érable",
        "quantity": 25,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-huile-sesame-grille",
        "name": "Huile de sésame grillé",
        "quantity": 20,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Ail haché",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-oignon-vert",
        "name": "Oignons verts",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-graines-sesame",
        "name": "Graines de sésame grillées",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-feuilles-laitue",
        "name": "Grandes feuilles de laitue boston pour emballer",
        "quantity": 1,
        "unit": "paquet",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Trancher le bœuf le plus finement possible (astuce : placer 30 min au congélateur avant de couper).",
      "Dans un bol, mélanger la poire râpée, la sauce soya, la cassonade, l'ail, l'huile de sésame et les oignons verts.",
      "Faire mariner la viande 15 à 30 minutes.",
      "Chauffer la plancha à feu vif avec un peu d'huile.",
      "Déposer le bœuf en lanières et cuire 3 à 4 minutes en remuant vivement avec des pinces.",
      "Servir avec du riz blanc, des graines de sésame et des feuilles de laitue pour manger à la coréenne (en bouchées ssam)."
    ]
  },
  {
    "id": "rec-47",
    "title": "Yakitori de poulet et oignons verts à la plancha",
    "subtitle": "Brochettes japonaises laquées à la sauce teriyaki douce et mirin",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 20,
    "cookTime": 10,
    "calories": 480,
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Japonais",
      "Brochettes",
      "Plancha Classique",
      "PetitsPlats"
    ],
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    "description": "Les célèbres brochettes japonaises Negima : morceaux de poulet moelleux et tronçons de blancs de poireaux ou d'oignons verts, laqués avec une sauce teriyaki sirupeuse et caramélisée.",
    "planchaTips": "Trempez les pics en bois dans l'eau 15 min avant. Badigeonnez de sauce teriyaki 3 fois pendant la cuisson pour créer une laque brillante et savoureuse.",
    "ingredients": [
      {
        "id": "ing-poulet-hauts-cuisses",
        "name": "Hauts de cuisses ou poitrines de poulet",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-oignons-verts-poireaux",
        "name": "Blancs de poireaux fins ou oignons verts en tronçons",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-sauce-soya",
        "name": "Sauce soya",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-mirin-ou-miel",
        "name": "Mirin japonais ou miel",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-sucre",
        "name": "Sucre ou cassonade",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-gingembre-moulu",
        "name": "Gingembre râpé",
        "quantity": 10,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-riz-sushi",
        "name": "Riz japonais ou basmati",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Couper le poulet en cubes et les poireaux/oignons en tronçons de 3 cm.",
      "Enfiler sur les pics en alternant poulet et oignons.",
      "Dans une petite casserole, faire réduire la sauce soya, le mirin, le sucre et le gingembre 5 minutes pour obtenir une sauce sirupeuse.",
      "Chauffer la plancha à 200°C. Déposer les brochettes et cuire 4 minutes.",
      "Badigeonner généreusement de sauce yakitori, retourner et badigeonner à nouveau.",
      "Cuire encore 4 à 5 minutes jusqu'à caramélisation complète.",
      "Servir bien chaud avec le riz parfumé."
    ]
  },
  {
    "id": "rec-48",
    "title": "Pizzas pains plats croustillantes aux tacos de dinde",
    "subtitle": "Pains naan dorés garnis de dinde épicée, maïs, fromage fondu et crème sure à la lime",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 590,
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Pizza Rapide",
      "Tex-Mex",
      "Familial Express",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF211209_R10_W04_CA_RT0449-9_KB_Main_low-9c1e2c84.jpg",
    "description": "Une fusion géniale et rapide : des pains plats ou naans croustillants recouverts de dinde hachée aux épices tex-mex, sauce tomate, maïs doux et fromage fondant.",
    "planchaTips": "Faites dorer le dessous des pains naan directement sur la plancha huilée, puis utilisez une cloche pour faire fondre le fromage sur le dessus.",
    "ingredients": [
      {
        "id": "ing-dinde-hachee",
        "name": "Dinde hachée",
        "quantity": 450,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-pains-naan-plats",
        "name": "Pains naan ou pains plats",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-tomate-epicee",
        "name": "Sauce tomate assaisonnée ou salsa",
        "quantity": 150,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-mozzarella-cheddar",
        "name": "Fromage râpé mozzarella et cheddar",
        "quantity": 180,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-epices-tacos",
        "name": "Assaisonnement tacos",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-mais-grains",
        "name": "Maïs en grains",
        "quantity": 150,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-creme-sure",
        "name": "Crème sure et quartiers de lime",
        "quantity": 60,
        "unit": "ml",
        "department": "produits_laitiers"
      }
    ],
    "steps": [
      "Faire revenir la dinde hachée avec les épices tacos 6 minutes.",
      "Étaler la sauce tomate sur chaque pain plat.",
      "Répartir la dinde cuite, le maïs et recouvrir généreusement de fromage râpé.",
      "Chauffer la plancha à feu moyen (ou le four à 210°C).",
      "Cuire les pizzas plates 6 à 8 minutes jusqu'à ce que le dessous soit croustillant et le fromage bien fondu.",
      "Arroser d'un filet de crème sure à la lime et couper en pointes."
    ]
  },
  {
    "id": "rec-49",
    "title": "Tacos de dinde super rapides au cheddar et salsa fraîche",
    "subtitle": "Dinde hachée mijotée aux épices mexicaines, coquilles croustillantes et garnitures fraîches",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 490,
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Express 15min",
      "Tacos Night",
      "Repas d'Enfants",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y25_R1047_W06_CA_RT32013-2_Main__1low-f5453c81.jpg",
    "description": "La soirée tacos minute par excellence : de la dinde hachée tendre cuite avec un assaisonnement mexicain savoureux, servie dans des tortillas tièdes avec cheddar et salsa.",
    "planchaTips": "Réchauffez et faites dorer légèrement toutes les tortillas sur la plancha en 30 secondes avant de les garnir.",
    "ingredients": [
      {
        "id": "ing-dinde-hachee",
        "name": "Dinde hachée maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-coquilles-ou-tortillas",
        "name": "Tortillas souples ou coquilles à tacos",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-epices-tacos",
        "name": "Épices pour tacos",
        "quantity": 20,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-cheddar-rape",
        "name": "Fromage cheddar râpé",
        "quantity": 150,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-laitue-tomate",
        "name": "Laitue émincée et tomates en dés",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-salsa",
        "name": "Salsa douce",
        "quantity": 100,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-creme-sure",
        "name": "Crème sure",
        "quantity": 60,
        "unit": "ml",
        "department": "produits_laitiers"
      }
    ],
    "steps": [
      "Faire dorer la dinde hachée dans une poêle ou sur la plancha 6 minutes.",
      "Ajouter les épices tacos et 60 ml d'eau, laisser mijoter 3 minutes.",
      "Chauffer les tortillas sur la plancha.",
      "Garnir chaque taco avec la dinde chaude, le fromage cheddar râpé, la laitue, la tomate et la crème sure."
    ]
  },
  {
    "id": "rec-50",
    "title": "Salade de poulet grillé à la moutarde de Dijon et à l’érable",
    "subtitle": "Poitrines de poulet laquées érable-moutarde sur salade gourmande aux pommes et canneberges",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 510,
    "allergens": [
      "Moutarde",
      "Lactose",
      "Noix & Arachides"
    ],
    "tags": [
      "Saveurs du Québec",
      "Salade Repas",
      "Plancha Sucré-Salé",
      "HelloFresh"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y24_R1003_W23_CA_RC155122-3_Main_low-c536e437.jpg",
    "description": "Une grande salade repas aux saveurs québécoises : poulet laqué au sirop d'érable et moutarde de Dijon saisi à la plancha, pommes croquantes, canneberges séchées et pacanes.",
    "planchaTips": "Faites dorer le poulet 5 min par face sur la plancha, badigeonnez du mélange érable-moutarde à la toute fin pour créer un glaçage caramélisé irrésistible.",
    "ingredients": [
      {
        "id": "ing-poulet-poitrine",
        "name": "Poitrines de poulet",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-sirop-erable",
        "name": "Sirop d'érable pur du Québec",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-moutarde-dijon",
        "name": "Moutarde de Dijon à l'ancienne",
        "quantity": 30,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-melange-mesclun",
        "name": "Mélange de verdures / mesclun",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-pomme-croquante",
        "name": "Pomme du Québec (Honeycrisp ou Cortland) en tranches",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-canneberges-sechees",
        "name": "Canneberges séchées",
        "quantity": 50,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-pacanes-ou-noix",
        "name": "Pacanes ou graines de citrouille grillées",
        "quantity": 40,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-cheddar-vieilli",
        "name": "Cheddar vieilli en copeaux",
        "quantity": 80,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-vinaigre-cidre",
        "name": "Vinaigre de cidre et huile d'olive pour la vinaigrette",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Dans un bol, mélanger le sirop d'érable, la moutarde de Dijon et une cuillère d'huile d'olive.",
      "Assaisonner le poulet et le faire griller sur la plancha à 200°C pendant 5 minutes de chaque côté.",
      "Badigeonner de laque à l'érable dans les 2 dernières minutes.",
      "Dans un grand saladier, assembler le mesclun, les tranches de pommes, les canneberges, les pacanes et les copeaux de cheddar.",
      "Trancher le poulet tiède et le déposer sur la salade.",
      "Arroser de vinaigrette au cidre et déguster."
    ]
  }
];
