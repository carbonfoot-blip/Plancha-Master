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
    "id": "rec-01",
    "title": "Brochettes de poulet mariné au citron, Riz basmati & Salade grecque",
    "subtitle": "Poulet tendre au citron et origan, riz parfumé et salade croquante concombres-tomates-feta",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 580,
    "macros": {
      "proteins": 46,
      "carbs": 58,
      "fats": 16
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Familial",
      "Repas Équilibré"
    ],
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas méditerranéen complet et frais : brochettes de poulet et poivrons marinés au citron et à l'origan, servies avec un riz basmati parfumé et une authentique salade grecque au fromage feta.",
    "planchaTips": "Plancha à 220°C. Huilez légèrement. Cuire les brochettes 12 minutes en tournant d'un quart de tour toutes les 3 minutes. Grillez des quartiers de citron pour arroser le riz.",
    "ingredients": [
      {
        "id": "ing-poulet-poitrine",
        "name": "Poitrine de poulet en cubes",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-riz-basmati",
        "name": "Riz basmati (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-concombre-anglais",
        "name": "Concombre anglais en dés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-tomates-serre",
        "name": "Tomates de serre en quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-fromage-feta",
        "name": "Fromage feta émietté",
        "quantity": 100,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-poivron-rouge",
        "name": "Poivron rouge en carrés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-oignon-rouge",
        "name": "Oignon rouge en morceaux",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-citrons-frais",
        "name": "Citrons (jus et zeste)",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-huile-olive",
        "name": "Huile d'olive extra-vierge",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-origan-seche",
        "name": "Origan séché",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz basmati dans 600 ml d'eau salée pendant 12 minutes avec un peu de zeste de citron.",
      "Dans un bol, mélanger l'huile d'olive, le jus de citron, l'ail et l'origan. Enrober le poulet et les poivrons.",
      "Monter les brochettes en alternant poulet, poivron et oignon rouge.",
      "Préparer la salade grecque : mélanger le concombre, les tomates, l'oignon rouge restant, la feta et un filet d'huile d'olive.",
      "Préchauffer la plancha à 220°C et griller les brochettes 12 minutes jusqu'à belle dorure.",
      "Dresser les assiettes avec le riz chaud, les brochettes grillées et la salade grecque bien fraîche."
    ]
  },
  {
    "id": "rec-02",
    "title": "Sauté de porc au gingembre, Riz jasmin & Fèves vertes croquantes",
    "subtitle": "Porc caramélisé sucré-salé, riz au jasmin à la vapeur et haricots verts sautés à l'ail",
    "proteinType": "Porc haché",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 590,
    "macros": {
      "proteins": 36,
      "carbs": 64,
      "fats": 20
    },
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Saveurs d'Asie",
      "Repas Équilibré"
    ],
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "description": "Un sauté asiatique complet : porc haché doré au gingembre frais et sauce tamari sans gluten, servi avec du riz au jasmin moelleux et une généreuse portion de fèves vertes croquantes.",
    "planchaTips": "Faites dorer le porc haché d'un côté de la plancha et faites sauter les haricots verts avec un filet d'eau et d'huile de sésame sur l'autre zone.",
    "ingredients": [
      {
        "id": "ing-porc-hache",
        "name": "Porc haché maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-riz-jasmin",
        "name": "Riz au jasmin (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-feves-vertes",
        "name": "Fèves vertes (haricots verts) frais éboutés",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-sauce-soya-tamari",
        "name": "Sauce tamari (soya sans gluten)",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-sirop-erable",
        "name": "Sirop d'érable pur",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-gingembre-frais",
        "name": "Gingembre frais râpé",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Ail émincé",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-huile-sesame",
        "name": "Huile de sésame grillé",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-oignons-verts",
        "name": "Oignons verts tranchés",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Cuire le riz au jasmin dans 600 ml d'eau bouillante salée pendant 12 minutes.",
      "Chauffer la poêle ou plancha à feu vif avec l'huile de sésame.",
      "Faire sauter le porc haché avec l'ail et le gingembre 5 minutes en l'émiettant.",
      "Ajouter les fèves vertes et 30 ml d'eau, couvrir 3 minutes pour les attendrir tout en gardant leur croquant.",
      "Verser la sauce tamari et le sirop d'érable, laisser caraméliser 2 minutes.",
      "Servir le porc caramélisé et les fèves vertes chaudes sur le lit de riz au jasmin, garni d'oignons verts."
    ]
  },
  {
    "id": "rec-03",
    "title": "Smashed Burgers de bœuf maison, Patates Wedges & Salade de chou",
    "subtitle": "Burgers croustillants au cheddar, quartiers de patates dorées au paprika et salade de chou",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 15,
    "calories": 690,
    "macros": {
      "proteins": 45,
      "carbs": 62,
      "fats": 26
    },
    "allergens": [
      "Gluten",
      "Lactose",
      "Moutarde",
      "Oeufs"
    ],
    "tags": [
      "Plancha Star",
      "Coup de coeur famille",
      "Fast-food maison",
      "Repas Complet"
    ],
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "description": "Le classique américain revisité en assiette complète : smash burgers ultra croustillants, accompagnés de savoureuses patates wedges rôties au paprika et d'une salade de chou fraîche et croquante.",
    "planchaTips": "Plancha à 200°C sur zone 1 pour les wedges (15 min) et 250°C très vive sur zone 2 pour smasher les galettes de bœuf 2 min par face avec les oignons.",
    "ingredients": [
      {
        "id": "ing-boeuf-hache",
        "name": "Bœuf haché mi-maigre",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-patates-russet",
        "name": "Pommes de terre Russet en wedges (féculent sans gluten)",
        "quantity": 4,
        "unit": "unité (600g)",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-chou-rape",
        "name": "Mélange de chou et carottes pour salade de chou",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-pains-burger",
        "name": "Pains briochés à burger",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-cheddar",
        "name": "Tranches de fromage cheddar vieilli",
        "quantity": 8,
        "unit": "tranche",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-oignon-jaune",
        "name": "Oignon jaune émincé très fin",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-laitue-romaine",
        "name": "Feuilles de laitue romaine",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-tomate-ronde",
        "name": "Tomates de serre en rondelles",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-paprika-fume",
        "name": "Paprika fumé & herbes à frites",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-huile-vegetale",
        "name": "Huile végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-vinaigrette-chou",
        "name": "Vinaigrette crémeuse pour salade de chou",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Couper les pommes de terre en quartiers (wedges). Les mélanger avec 20 ml d'huile, le paprika fumé, sel et poivre.",
      "Déposer les wedges sur la zone moyenne de la plancha (200°C) et cuire 12 à 15 minutes en retournant souvent.",
      "Dans un bol, mélanger le chou râpé avec la vinaigrette pour préparer la salade de chou croquante.",
      "Former 8 boules de bœuf haché. Les déposer sur la zone très chaude de la plancha avec les oignons.",
      "Écraser très fermement à la spatule plate. Cuire 2 min, retourner, couvrir de cheddar et empiler 2 galettes par burger.",
      "Toaster les pains 1 minute sur la plaque et monter les burgers. Servir avec les patates wedges dorées et la salade de chou."
    ]
  },
  {
    "id": "rec-04",
    "title": "Pavés de saumon croustillant à l'aneth, Riz basmati & Asperges grillées",
    "subtitle": "Peau croustillante, riz au zeste de citron et asperges tendres au beurre fondu",
    "proteinType": "Saumon & Poissons",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 590,
    "macros": {
      "proteins": 40,
      "carbs": 54,
      "fats": 22
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Oméga-3",
      "Repas Équilibré"
    ],
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "description": "L'élégance saine à la plancha : saumon à la peau ultra-croustillante, accompagné d'asperges vertes fraîches grillées et d'un riz basmati parfumé au citron et à l'aneth frais.",
    "planchaTips": "Plancha à 200°C. Posez le saumon côté peau et les asperges à côté. Cuire le saumon 6 min côté peau sans y toucher pour un croustillant parfait.",
    "ingredients": [
      {
        "id": "ing-saumon-paves",
        "name": "Pavés de saumon frais avec peau",
        "quantity": 4,
        "unit": "unité (600g)",
        "department": "viandes"
      },
      {
        "id": "ing-riz-basmati",
        "name": "Riz basmati (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-asperges-fraiches",
        "name": "Botte d'asperges fraîches du Québec",
        "quantity": 1,
        "unit": "botte (400g)",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-beurre-doux",
        "name": "Beurre doux",
        "quantity": 30,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-citrons-jaunes",
        "name": "Citron jaune en quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-aneth-frais",
        "name": "Aneth frais ciselé",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-huile-olive",
        "name": "Huile d'olive",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz basmati dans 600 ml d'eau salée 12 minutes avec un filet de jus de citron.",
      "Casser le pied fibreux des asperges et les enrober d'un filet d'huile d'olive et de fleur de sel.",
      "Éponger parfaitement la peau des pavés de saumon, huiler et saler la peau.",
      "Déposer les asperges et le saumon côté peau sur la plancha chaude à 200°C.",
      "Cuire les asperges 8 minutes en les roulant. Cuire le saumon 6 min côté peau, puis 2 min de l'autre côté avec le beurre et l'aneth.",
      "Dresser le saumon nappé de beurre à l'aneth sur le riz chaud avec les asperges dorées et du citron grillé."
    ]
  },
  {
    "id": "rec-05",
    "title": "Médaillons de porc à l'érable, Grelots rôtis & Fèves vertes à l'ail",
    "subtitle": "Filet de porc glacé à la moutarde et érable, grelots dorés et haricots verts croquants",
    "proteinType": "Filet de porc",
    "cookingMode": "mixte",
    "timeCategory": "Moyen",
    "prepTime": 12,
    "cookTime": 14,
    "calories": 580,
    "macros": {
      "proteins": 42,
      "carbs": 52,
      "fats": 18
    },
    "allergens": [
      "Moutarde"
    ],
    "tags": [
      "Saveur locale",
      "Sans Gluten",
      "Classique québécois",
      "Repas Équilibré"
    ],
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "description": "Un festin québécois complet : médaillons de porc fondants enrobés d'un glaçage érable-moutarde de Dijon, accompagnés de grelots rissolés à la plancha et de fèves vertes fraîches sautées à l'ail.",
    "planchaTips": "Lancez les grelots coupés en deux sur la plancha huilée 12 minutes avant le porc. Le porc ne demande que 3 à 4 min par face.",
    "ingredients": [
      {
        "id": "ing-filet-porc",
        "name": "Filet de porc en médaillons de 2 cm",
        "quantity": 650,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-pommes-grelots",
        "name": "Pommes de terre grelots coupées en 2 (sans gluten)",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-feves-vertes",
        "name": "Fèves vertes fraîches (haricots verts)",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-sirop-erable",
        "name": "Sirop d'érable pur du Québec",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-moutarde-ancienne",
        "name": "Moutarde à l'ancienne ou de Dijon",
        "quantity": 30,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Ail pressé",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-huile-canola",
        "name": "Huile végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Mélanger le sirop d'érable, la moutarde et la moitié de l'ail pressé pour préparer le glaçage.",
      "Déposer les demi-grelots sur la plancha à 200°C avec de l'huile, du sel et du poivre. Cuire 12-14 min en les remuant.",
      "Faire sauter les fèves vertes à côté des grelots 6 à 7 minutes avec le reste d'ail.",
      "Déposer les médaillons de porc sur la zone vive. Saisir 3 minutes, retourner et badigeonner généreusement du glaçage à l'érable.",
      "Cuire encore 3 minutes jusqu'à caramélisation brillante de la viande.",
      "Dresser les assiettes avec les médaillons laqués, les grelots dorés et les fèves vertes croustillantes."
    ]
  },
  {
    "id": "rec-06",
    "title": "Tacos de tofu BBQ, Tortillas de maïs & Salade de chou à l'avocat",
    "subtitle": "Tofu croustillant à la plancha, tortillas de maïs sans gluten, avocat et salade de chou croquante",
    "proteinType": "Végétarien",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 530,
    "macros": {
      "proteins": 26,
      "carbs": 58,
      "fats": 22
    },
    "allergens": [
      "Soya"
    ],
    "tags": [
      "Végé Gourmand",
      "Sans Gluten",
      "Plancha",
      "Repas Complet"
    ],
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas tex-mex végétarien et sans gluten : cubes de tofu pressés et caramélisés à la sauce BBQ, servis dans des tortillas de maïs chaudes avec salade de chou croquante et avocat crémeux.",
    "planchaTips": "Bien presser le tofu dans du papier absorbant avant de le couper en lanières. La plancha à 220°C crée une croûte croustillante irrésistible.",
    "ingredients": [
      {
        "id": "ing-tofu-ferme",
        "name": "Tofu extra-ferme en bâtonnets",
        "quantity": 450,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-tortillas-mais",
        "name": "Petites tortillas de maïs pur (sans gluten)",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-chou-rape",
        "name": "Chou rouge et carottes râpées",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-avocats-murs",
        "name": "Avocats mûrs en tranches",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-sauce-bbq",
        "name": "Sauce BBQ sans gluten",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-limes",
        "name": "Limes (jus et quartiers)",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-huile-vegetale",
        "name": "Huile de cuisson",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Éponger le tofu et le couper en bâtonnets réguliers. Badigeonner d'un filet d'huile.",
      "Mélanger le chou râpé avec le jus d'une lime, sel et un filet d'huile.",
      "Déposer le tofu sur la plancha chaude à 220°C. Dorer 3 minutes par face.",
      "Napper le tofu de sauce BBQ dans les 2 dernières minutes pour caraméliser.",
      "Chauffer les tortillas de maïs 30 secondes sur la plancha.",
      "Garnir chaque tortilla de tofu BBQ, de salade de chou croquante et de tranches d'avocat."
    ]
  },
  {
    "id": "rec-07",
    "title": "Quesadillas au poulet effiloché, Riz mexicain & Salade verte maïs",
    "subtitle": "Tortillas dorées au fromage fondu, riz assaisonné à la tomate et salade croquante",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 610,
    "macros": {
      "proteins": 42,
      "carbs": 58,
      "fats": 22
    },
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Express 15min",
      "Fast-food maison",
      "Convivial",
      "Repas Complet"
    ],
    "image": "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas mexicain complet : quesadillas croustillantes au poulet et fromage fondu, servies avec un riz rouge mexicain parfumé et une salade verte fraîche au maïs doux.",
    "planchaTips": "Cuire les quesadillas à feu moyen (190°C) pour que le fromage fonde avant que la tortilla ne brûle. Replier en deux pour retourner facilement.",
    "ingredients": [
      {
        "id": "ing-poulet-cuit",
        "name": "Poulet effiloché ou cuit en lanières",
        "quantity": 400,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-tortillas-ble",
        "name": "Tortillas souples",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-riz-mexicain",
        "name": "Riz blanc (féculent sans gluten)",
        "quantity": 250,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-fromage-rape",
        "name": "Mélange de fromage râpé tex-mex",
        "quantity": 200,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-poivrons-melange",
        "name": "Poivrons en lanières",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-mais-doux",
        "name": "Maïs en grains",
        "quantity": 150,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-laitue-romaine",
        "name": "Salade de mesclun ou laitue",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-sauce-tomate",
        "name": "Pâte ou coulis de tomate pour le riz",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz dans 500 ml d'eau avec la pâte de tomate et une pincée d'ail 12 minutes pour faire le riz mexicain.",
      "Faire sauter les poivrons 4 minutes sur la plancha, puis ajouter le poulet pour le réchauffer.",
      "Poser les tortillas sur la plancha, garnir une moitié avec le fromage, les poivrons et le poulet.",
      "Replier en deux et presser. Cuire 3 minutes de chaque côté jusqu'à belle dorure.",
      "Préparer la salade avec la laitue et le maïs doux.",
      "Couper les quesadillas en pointes et servir avec le riz mexicain et la salade fraîche."
    ]
  },
  {
    "id": "rec-08",
    "title": "Brochettes de crevettes à la lime, Riz basmati & Courgettes grillées",
    "subtitle": "Crevettes au paprika fumé, riz basmati étuvé et courgettes dorées à la plancha",
    "proteinType": "Crevettes & Fruits de mer",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 8,
    "calories": 520,
    "macros": {
      "proteins": 36,
      "carbs": 56,
      "fats": 14
    },
    "allergens": [
      "Crustacés"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Léger & Santé",
      "Repas Équilibré"
    ],
    "image": "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
    "description": "Légèreté et saveurs ensoleillées : crevettes marinées au paprika fumé et jus de lime, servies sur un lit de riz basmati avec des tranches de courgettes tendres grillées sur la plaque.",
    "planchaTips": "La cuisson des crevettes est éclair : 2 à 3 minutes par face à 220°C. Saisissez les courgettes en premier car elles demandent 6 à 8 minutes.",
    "ingredients": [
      {
        "id": "ing-crevettes-crues",
        "name": "Grosses crevettes crues décortiquées (31/40)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-riz-basmati",
        "name": "Riz basmati (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-courgettes-vertes",
        "name": "Courgettes vertes en rondelles épaisses",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-limes-fraiches",
        "name": "Limes (jus et zeste)",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Ail émincé",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-paprika-fume",
        "name": "Paprika fumé espagnol",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-huile-olive",
        "name": "Huile d'olive extra-vierge",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-coriandre-fraiche",
        "name": "Coriandre fraîche ciselée",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Cuire le riz basmati dans 600 ml d'eau salée pendant 12 minutes.",
      "Dans un bol, mélanger les crevettes avec l'huile d'olive, l'ail, le jus d'une lime et le paprika fumé. Enfiler sur les pics.",
      "Enrober les rondelles de courgettes d'un filet d'huile d'olive et de sel.",
      "Déposer les courgettes sur la plancha chaude (220°C). Cuire 4 minutes, puis ajouter les brochettes de crevettes.",
      "Cuire les crevettes 2 à 3 minutes de chaque côté jusqu'à ce qu'elles soient rosées et opaques.",
      "Dresser le riz basmati chaud, les brochettes de crevettes juteuses et les courgettes grillées parsemées de coriandre."
    ]
  },
  {
    "id": "rec-09",
    "title": "One-Pot Pasta au bœuf et cheddar & Fleurets de brocoli vapeur",
    "subtitle": "Macaroni crémeux façon cheeseburger maison servi avec brocoli tendre",
    "proteinType": "Boeuf haché",
    "cookingMode": "rapide",
    "timeCategory": "Moyen",
    "prepTime": 10,
    "cookTime": 18,
    "calories": 620,
    "macros": {
      "proteins": 40,
      "carbs": 62,
      "fats": 22
    },
    "allergens": [
      "Gluten",
      "Lactose",
      "Moutarde"
    ],
    "tags": [
      "One-Pot",
      "Famille nombreuse",
      "Semaine sans stress",
      "Repas Complet"
    ],
    "image": "https://images.unsplash.com/photo-1621996346565-e3d5d628105d?auto=format&fit=crop&w=800&q=80",
    "description": "Le souper réconfortant préféré des familles : pâtes cuites dans le bouillon de bœuf avec sauce tomate et cheddar fondu, accompagnées de fleurets de brocoli frais pour un repas complet équilibré.",
    "planchaTips": "Plat mijoté en grand faitout. Les fleurets de brocoli peuvent aussi être saisis à la plancha 5 minutes avec un filet d'eau sous cloche.",
    "ingredients": [
      {
        "id": "ing-boeuf-hache",
        "name": "Bœuf haché maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-pates-macaroni",
        "name": "Pâtes macaroni ou coquilles (féculent)",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-brocoli-frais",
        "name": "Fleurets de brocoli frais",
        "quantity": 1,
        "unit": "pied (350g)",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-bouillon-boeuf",
        "name": "Bouillon de bœuf",
        "quantity": 800,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-sauce-tomate",
        "name": "Sauce tomate pure",
        "quantity": 398,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-oignon-jaune",
        "name": "Oignon jaune haché",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-fromage-cheddar",
        "name": "Fromage cheddar râpé",
        "quantity": 180,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-lait-2pourcent",
        "name": "Lait 2%",
        "quantity": 120,
        "unit": "ml",
        "department": "produits_laitiers"
      }
    ],
    "steps": [
      "Dans un faitout, dorer le bœuf haché et l'oignon 5 minutes.",
      "Ajouter les macaronis crus, la sauce tomate et le bouillon de bœuf.",
      "Porter à ébullition, réduire à feu moyen, couvrir et laisser mijoter 10 minutes.",
      "Cuire les fleurets de brocoli à la vapeur ou à la plancha sous cloche 5 minutes avec un filet d'eau.",
      "Incorporer le lait et le cheddar râpé dans les pâtes jusqu'à texture onctueuse.",
      "Servir les pâtes crémeuses bien chaudes accompagnées des fleurets de brocoli vert éclatant."
    ]
  },
  {
    "id": "rec-10",
    "title": "Côtelettes de porc aux herbes, Grelots rôtis & Courgettes grillées",
    "subtitle": "Porc doré aux herbes de Provence, pommes de terre grelots et rondelles de courgettes",
    "proteinType": "Porc haché",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 10,
    "cookTime": 15,
    "calories": 590,
    "macros": {
      "proteins": 45,
      "carbs": 50,
      "fats": 22
    },
    "allergens": [],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Classique",
      "Repas Équilibré"
    ],
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "description": "Un grand classique de la cuisine sur plaque : côtelettes de porc croustillantes aux herbes de Provence, servies avec des pommes de terre grelots dorées et des courgettes tendres grillées.",
    "planchaTips": "Plancha à 210°C. Déposez les demi-grelots en premier (15 min). Ajoutez les courgettes et le porc à mi-cuisson (5 min par face pour le porc).",
    "ingredients": [
      {
        "id": "ing-cotelettes-porc",
        "name": "Côtelettes de porc désossées",
        "quantity": 4,
        "unit": "unité (600g)",
        "department": "viandes"
      },
      {
        "id": "ing-pommes-grelots",
        "name": "Pommes de terre grelots coupées en 2 (sans gluten)",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-courgettes-vertes",
        "name": "Courgettes en rondelles",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-herbes-provence",
        "name": "Herbes de Provence séchées",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-ail-gousses",
        "name": "Ail émincé",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-huile-olive",
        "name": "Huile d'olive",
        "quantity": 35,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Enrober les demi-grelots d'huile d'olive, d'ail, de sel et d'herbes de Provence.",
      "Assaisonner les côtelettes de porc et les rondelles de courgettes.",
      "Déposer les grelots sur la plancha à 210°C et cuire 15 minutes en remuant.",
      "Poser les côtelettes de porc et les courgettes à côté. Cuire le porc 5 minutes par face jusqu'à belle dorure.",
      "Faire griller les courgettes 3 minutes par côté.",
      "Dresser une belle assiette avec la côtelette juteuse, les grelots rôtis croustillants et les courgettes."
    ]
  },
  {
    "id": "rec-11",
    "title": "Fajitas de poulet express, Tortillas & Salade de maïs avocat",
    "subtitle": "Poulet épicé tex-mex, poivrons tri-couleurs, tortillas chaudes et salade de maïs à la lime",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 590,
    "macros": {
      "proteins": 44,
      "carbs": 58,
      "fats": 18
    },
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Poulet épicé tex-mex, poivrons tri-couleurs, tortillas chaudes et salade de maïs à la lime. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-11-prot",
        "name": "Poitrines de poulet tranchées en lanières",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-11-tortillas",
        "name": "Tortillas souples (maïs ou blé)",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-11-poivron-r",
        "name": "Poivron rouge émincé en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-11-poivron-j",
        "name": "Poivron jaune émincé en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-11-oignon",
        "name": "Oignon jaune moyen tranché",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-11-mais",
        "name": "Maïs doux en grains égoutté",
        "quantity": 150,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-11-avocat",
        "name": "Avocats mûrs coupés en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-11-limes",
        "name": "Limes pour jus et quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-11-epices",
        "name": "Mélange d'épices à fajitas (chili, cumin, ail)",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-11-huile",
        "name": "Huile d'olive",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-11-coriandre",
        "name": "Coriandre fraîche ciselée",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Dans un bol, mélanger le maïs, les dés d'avocat, le jus d'une lime et la coriandre pour préparer la salsa fraîche.",
      "Enrober les lanières de poulet avec les épices à fajitas et un filet d'huile d'olive.",
      "Préchauffer la plancha à 210°C et huiler légèrement.",
      "Déposer les lanières de poivrons et l'oignon sur une zone, et les lanières de poulet sur la zone vive.",
      "Griller le poulet 6 à 8 minutes en remuant régulièrement jusqu'à belle coloration dorée. Faire dorer les poivrons à côté.",
      "Réchauffer rapidement les tortillas 30 secondes sur la plancha.",
      "Garnir les tortillas chaudes de poulet, poivrons fondants et salsa fraîche au maïs et avocat."
    ]
  },
  {
    "id": "rec-12",
    "title": "Bowl de vermicelles au bœuf teriyaki & Fleurets de brocoli",
    "subtitle": "Bœuf haché caramélisé, vermicelles de riz sans gluten et brocoli croquant sauté",
    "proteinType": "Boeuf haché",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 560,
    "macros": {
      "proteins": 36,
      "carbs": 64,
      "fats": 16
    },
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Bœuf haché caramélisé, vermicelles de riz sans gluten et brocoli croquant sauté. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-12-prot",
        "name": "Bœuf haché mi-maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-12-carb",
        "name": "Vermicelles de riz sans gluten",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-12-brocoli",
        "name": "Fleurets de brocoli frais",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-12-carotte",
        "name": "Carottes fraîches pelées et coupées en fines demi-lunes",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-12-teriyaki",
        "name": "Sauce teriyaki authentique",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-12-ail",
        "name": "Gousses d'ail émincées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-12-sesame-huile",
        "name": "Huile de sésame grillé",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-12-sesame-graines",
        "name": "Graines de sésame grillées",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-12-oignons-verts",
        "name": "Oignons verts tranchés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Plonger les vermicelles de riz dans de l'eau bouillante pendant 4 minutes, rincer à l'eau froide et égoutter.",
      "Préchauffer la plancha à 210°C ou une grande poêle à feu vif.",
      "Saisir les fleurets de brocoli et les demi-lunes de carottes avec l'ail et un filet d'huile pendant 5 à 6 minutes sous cloche.",
      "Ajouter le bœuf haché, l'émietter à la spatule et le faire dorer 5 minutes.",
      "Napper de sauce teriyaki et d'huile de sésame, et laisser caraméliser 2 minutes.",
      "Dresser les vermicelles dans 4 bols, surmonter du bœuf teriyaki et des légumes croquants, puis garnir d'oignons verts et de graines de sésame."
    ]
  },
  {
    "id": "rec-13",
    "title": "Pavés de truite saumonée, Riz basmati & Courgettes au pesto",
    "subtitle": "Truite rosée, riz parfumé et courgettes dorées au pesto basilic sur plancha",
    "proteinType": "Saumon & Poissons",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 570,
    "macros": {
      "proteins": 38,
      "carbs": 54,
      "fats": 22
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Truite rosée, riz parfumé et courgettes dorées au pesto basilic sur plancha. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-13-prot",
        "name": "Pavés de truite saumonée ou de saumon avec peau",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-13-carb",
        "name": "Riz basmati blanc",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-13-courgettes",
        "name": "Courgettes vertes coupées en rondelles",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-13-tomates",
        "name": "Tomates cerises entières",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-13-pesto",
        "name": "Pesto de basilic frais",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-13-citron",
        "name": "Citron jaune en quartiers",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-13-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-13-sel-poivre",
        "name": "Sel et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz basmati dans l'eau bouillante salée pendant 12 minutes, égoutter.",
      "Préchauffer la plancha à 200°C et huiler légèrement.",
      "Déposer les rondelles de courgettes et les tomates cerises. Cuire 6 minutes en les retournant.",
      "Déposer les pavés de truite côté peau. Cuire 5 minutes pour rendre la peau bien croustillante, retourner délicatement et cuire 2 minutes côté chair.",
      "Badigeonner les courgettes et le poisson de pesto de basilic frais en fin de cuisson.",
      "Servir sur le lit de riz basmati chaud avec un trait de jus de citron."
    ]
  },
  {
    "id": "rec-14",
    "title": "Stir-fry de tofu croustillant, Nouilles de riz & Légumes d'Asie",
    "subtitle": "Tofu doré à la sauce arachide, nouilles de riz et légumes croquants sautés",
    "proteinType": "Végétarien",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 540,
    "macros": {
      "proteins": 26,
      "carbs": 62,
      "fats": 20
    },
    "allergens": [
      "Soya",
      "Arachides"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Tofu doré à la sauce arachide, nouilles de riz et légumes croquants sautés. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-14-prot",
        "name": "Tofu biologique extra-ferme pressé et coupé en cubes",
        "quantity": 454,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-14-carb",
        "name": "Nouilles de riz sans gluten",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-14-mange-tout",
        "name": "Pois mange-tout frais éboutés",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-14-poivron",
        "name": "Poivron rouge en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-14-carotte",
        "name": "Carottes pelées en juliennes",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-14-beurre-arachide",
        "name": "Beurre d'arachide crémeux",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-14-soya",
        "name": "Sauce soya sans gluten ou tamari",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-14-erable",
        "name": "Sirop d'érable pur",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-14-fecule",
        "name": "Fécule de maïs (pour enrober le tofu)",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-14-huile-sesame",
        "name": "Huile de sésame grillé",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-14-huile-cuisson",
        "name": "Huile végétale pour cuisson",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire les nouilles de riz selon les instructions de l'emballage, rincer et égoutter.",
      "Enrober les cubes de tofu de fécule de maïs pour assurer une belle croûte dorée.",
      "Fouetter le beurre d'arachide, la sauce soya, le sirop d'érable et un filet d'eau tiède pour la sauce.",
      "Chauffer la plancha à 210°C avec l'huile végétale. Dorer les cubes de tofu sur toutes leurs faces pendant 8 à 10 minutes.",
      "Faire sauter les pois mange-tout, les juliennes de carottes et le poivron à côté du tofu 4 à 5 minutes.",
      "Napper le tofu et les légumes de la sauce crémeuse à l'arachide et d'huile de sésame, puis mélanger avec les nouilles de riz chaudes."
    ]
  },
  {
    "id": "rec-15",
    "title": "Boulettes de porc banh mi, Vermicelles de riz & Salade daikon",
    "subtitle": "Boulettes laquées à la plancha, vermicelles de riz et salade de carottes marinées",
    "proteinType": "Porc haché",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 10,
    "calories": 580,
    "macros": {
      "proteins": 36,
      "carbs": 60,
      "fats": 20
    },
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Boulettes laquées à la plancha, vermicelles de riz et salade de carottes marinées. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-15-prot",
        "name": "Porc haché maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-15-carb",
        "name": "Vermicelles de riz minces",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-15-carottes",
        "name": "Carottes pelées et râpées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-15-concombre",
        "name": "Concombre anglais en demi-lunes",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-15-germes",
        "name": "Fèves germées fraîches (soya)",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-15-hoisin",
        "name": "Sauce hoisin",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-15-soya",
        "name": "Sauce soya claire",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-15-vinaigre",
        "name": "Vinaigre de riz",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-15-huile-sesame",
        "name": "Huile de sésame grillé",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-15-coriandre",
        "name": "Coriandre fraîche ciselée",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Former de petites boulettes de porc avec le porc haché, une cuillère de sauce hoisin et un trait d'huile de sésame.",
      "Mariner les carottes râpées dans le vinaigre de riz et une pincée de sel pendant 10 minutes.",
      "Cuire les vermicelles de riz dans l'eau bouillante 3 minutes, rincer à l'eau froide.",
      "Chauffer la plancha à 200°C. Saisir les boulettes de porc 8 à 10 minutes en les roulant régulièrement.",
      "Laquer les boulettes avec le reste de sauce hoisin et sauce soya en toute fin de cuisson.",
      "Dresser les bols avec les vermicelles, les carottes marinées, le concombre, les fèves germées, les boulettes bien dorées et la coriandre."
    ]
  },
  {
    "id": "rec-16",
    "title": "Brochettes de porc grecques, Grelots au citron & Tzatziki",
    "subtitle": "Filet de porc mariné, pommes de terre grelots dorées et salade grecque au tzatziki",
    "proteinType": "Filet de porc",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 580,
    "macros": {
      "proteins": 45,
      "carbs": 52,
      "fats": 18
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Filet de porc mariné, pommes de terre grelots dorées et salade grecque au tzatziki. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-16-prot",
        "name": "Filet de porc coupé en cubes de 3 cm",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-16-carb",
        "name": "Pommes de terre grelots lavées et coupées en deux",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-16-concombre",
        "name": "Concombre anglais râpé et égoutté",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-16-tomates",
        "name": "Tomates de serre coupées en quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-16-yogourt",
        "name": "Yogourt grec nature 10%",
        "quantity": 175,
        "unit": "ml",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-16-citrons",
        "name": "Citrons pour jus et zeste",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-16-ail",
        "name": "Gousses d'ail pressées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-16-origan",
        "name": "Origan grec séché",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-16-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-16-sel-poivre",
        "name": "Sel de mer et poivre noir",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Mélanger les cubes de porc avec l'origan, la moitié de l'ail, le jus d'un citron et 30 ml d'huile d'olive. Enfiler sur des brochettes.",
      "Préparer le tzatziki : mélanger le concombre râpé pressé avec le yogourt grec, l'ail restant, un filet d'huile d'olive et du sel.",
      "Préchauffer la plancha à 210°C. Déposer les demi-grelots avec un filet d'huile et cuire 15 minutes en remuant.",
      "Ajouter les brochettes de porc à côté et griller 10 minutes en tournant régulièrement jusqu'à cuisson rosée parfaite.",
      "Servir les brochettes chaudes avec les grelots dorés au citron, les quartiers de tomates fraîches et la sauce tzatziki."
    ]
  },
  {
    "id": "rec-17",
    "title": "Escalopes de poulet parmigiana, Penne & Salade César croquante",
    "subtitle": "Poulet doré gratiné à la mozzarella, penne tomate et salade César romaine",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 620,
    "macros": {
      "proteins": 48,
      "carbs": 54,
      "fats": 24
    },
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Express 15min",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Poulet doré gratiné à la mozzarella, penne tomate et salade César romaine. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-17-prot",
        "name": "Poitrines de poulet tranchées en escalopes fines",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-17-carb",
        "name": "Pâtes penne de blé dur",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-17-sauce",
        "name": "Coulis de tomate marinara à l'ail",
        "quantity": 300,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-17-mozzarella",
        "name": "Fromage mozzarella râpé",
        "quantity": 150,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-17-parmesan",
        "name": "Fromage parmesan râpé",
        "quantity": 30,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-17-romaine",
        "name": "Cœur de laitue romaine émincé",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-17-tomates",
        "name": "Tomates cerises fraîches",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-17-cesar",
        "name": "Vinaigrette César classique",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-17-huile",
        "name": "Huile d'olive",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire les penne dans de l'eau bouillante salée, égoutter et mélanger avec la sauce marinara chaude.",
      "Préchauffer la plancha à 210°C et huiler.",
      "Saisir les escalopes de poulet 3 minutes d'un côté. Les retourner, garnir chacune de mozzarella et de parmesan, puis couvrir d'une cloche 3 minutes pour faire fondre le fromage.",
      "Mélanger la laitue romaine, les tomates cerises et la vinaigrette César pour la salade.",
      "Servir chaque escalope fondante sur les penne marinara avec la salade César croquante."
    ]
  },
  {
    "id": "rec-18",
    "title": "Brochettes d'halloumi, Riz méditerranéen & Courgettes rôties",
    "subtitle": "Fromage halloumi grillé, riz aux herbes fraîches et légumes du marché rôtis",
    "proteinType": "Végétarien",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 530,
    "macros": {
      "proteins": 25,
      "carbs": 56,
      "fats": 24
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Fromage halloumi grillé, riz aux herbes fraîches et légumes du marché rôtis. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-18-prot",
        "name": "Fromage halloumi coupé en gros cubes",
        "quantity": 350,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-18-carb",
        "name": "Riz basmati aux fines herbes",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-18-courgettes",
        "name": "Courgettes vertes en rondelles épaisses",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-18-poivron",
        "name": "Poivron rouge coupé en carrés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-18-champignons",
        "name": "Champignons blancs de Paris coupés en deux",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-18-herbes",
        "name": "Herbes de Provence séchées",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-18-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 40,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-18-citron",
        "name": "Citron jaune en quartiers",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Cuire le riz basmati dans l'eau salée 12 minutes avec une pincée d'herbes de Provence.",
      "Enfiler les cubes d'halloumi, les carrés de poivron et les champignons sur des pics à brochette.",
      "Préchauffer la plancha à 210°C et huiler généreusement.",
      "Déposer les brochettes et les rondelles de courgettes sur la plaque.",
      "Griller 3 à 4 minutes de chaque côté jusqu'à ce que l'halloumi soit magnifiquement doré et croustillant sans fondre.",
      "Arroser d'un filet de jus de citron et servir avec le riz chaud aux herbes."
    ]
  },
  {
    "id": "rec-19",
    "title": "Chili express à la dinde, Riz blanc & Salade verte à l'avocat",
    "subtitle": "Chili haricots noirs et maïs, riz blanc étuvé et salade fraîche d'avocat à la lime",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 15,
    "calories": 570,
    "macros": {
      "proteins": 40,
      "carbs": 66,
      "fats": 14
    },
    "allergens": [],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Chili haricots noirs et maïs, riz blanc étuvé et salade fraîche d'avocat à la lime. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-19-prot",
        "name": "Dinde hachée maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-19-carb",
        "name": "Riz blanc jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-19-haricots",
        "name": "Haricots noirs en conserve rincés et égouttés",
        "quantity": 398,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-19-mais",
        "name": "Maïs en grains doux",
        "quantity": 150,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-19-tomates",
        "name": "Tomates en dés en conserve ou coulis",
        "quantity": 398,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-19-avocats",
        "name": "Avocats mûrs coupés en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-19-mesclun",
        "name": "Feuilles de mesclun fraîches",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-19-chili-chili",
        "name": "Poudre de chili mexicain",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-19-chili-cumin",
        "name": "Cumin moulu",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-19-lime",
        "name": "Lime pour jus",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-19-huile",
        "name": "Huile végétale pour cuisson",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz jasmin dans l'eau bouillante 12 minutes.",
      "Dans une grande sauteuse ou sur plaque creuse, faire dorer la dinde hachée avec l'huile et les épices 5 minutes.",
      "Ajouter les tomates en dés, les haricots noirs et le maïs. Laisser mijoter 8 minutes à feu moyen.",
      "Préparer la salade avec le mesclun, les dés d'avocat, un filet d'huile et le jus de lime.",
      "Servir le chili de dinde fumant sur le riz blanc avec la salade d'avocat rafraîchissante."
    ]
  },
  {
    "id": "rec-20",
    "title": "Wok de crevettes au sésame, Vermicelles de riz & Brocoli sauté",
    "subtitle": "Crevettes sautées à l'huile de sésame, vermicelles de riz et fleurets de brocoli",
    "proteinType": "Crevettes & Fruits de mer",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 8,
    "calories": 520,
    "macros": {
      "proteins": 34,
      "carbs": 60,
      "fats": 14
    },
    "allergens": [
      "Crustacés",
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
    "description": "Un repas complet et équilibré : Crevettes sautées à l'huile de sésame, vermicelles de riz et fleurets de brocoli. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-20-prot",
        "name": "Grosses crevettes crues décortiquées et déveinées (31/40)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-20-carb",
        "name": "Vermicelles de riz sans gluten",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-20-brocoli",
        "name": "Fleurets de brocoli frais coupés fins",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-20-mange-tout",
        "name": "Pois mange-tout frais",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-20-soya",
        "name": "Sauce tamari ou soya",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-20-sesame-huile",
        "name": "Huile de sésame grillé",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-20-ail",
        "name": "Gousses d'ail émincées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-20-gingembre",
        "name": "Gingembre frais râpé",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-20-sesame-graines",
        "name": "Graines de sésame blanc",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Tremper les vermicelles de riz dans l'eau chaude 5 minutes, rincer et égoutter.",
      "Préchauffer la plancha à 220°C.",
      "Saisir les fleurets de brocoli et les pois mange-tout 4 minutes avec un filet d'eau et d'ail sous cloche.",
      "Ajouter les crevettes, le gingembre et l'huile de sésame. Cuire 2 à 3 minutes en remuant vivement jusqu'à ce que les crevettes soient roses.",
      "Déglacer avec la sauce soya et incorporer les vermicelles de riz pour bien les réchauffer.",
      "Parsemer de graines de sésame grillées et servir sans attendre."
    ]
  },
  {
    "id": "rec-21",
    "title": "Poulet glacé à la mangue, Riz jasmin & Salade de chou à la lime",
    "subtitle": "Poulet caramélisé aux saveurs caribéennes, riz au jasmin et salade de chou croquante",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 580,
    "macros": {
      "proteins": 44,
      "carbs": 66,
      "fats": 14
    },
    "allergens": [],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/poulet-glace-a-la-mangue-a-la-caribeenne-f5ab9fee.jpg",
    "description": "Un repas complet et équilibré : Poulet caramélisé aux saveurs caribéennes, riz au jasmin et salade de chou croquante. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-21-prot",
        "name": "Poitrines de poulet coupées en escalopes ou aiguillettes",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-21-carb",
        "name": "Riz parfumé au jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-21-chutney",
        "name": "Chutney de mangue doux",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-21-chou",
        "name": "Mélange de chou rouge et chou blanc râpé",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-21-poivron",
        "name": "Poivron rouge taillé en fines lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-21-limes",
        "name": "Limes pour jus et quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-21-huile",
        "name": "Huile végétale",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-21-coriandre",
        "name": "Coriandre fraîche hachée",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-21-sel-poivre",
        "name": "Sel et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz jasmin dans de l'eau salée 12 minutes.",
      "Mélanger le chou râpé, les lanières de poivron, le jus d'une lime, la coriandre et un filet d'huile pour la salade croquante.",
      "Préchauffer la plancha à 210°C.",
      "Saisir le poulet 4 minutes d'un côté. Retourner et badigeonner généreusement de chutney de mangue.",
      "Poursuivre la cuisson 3 minutes jusqu'à caramélisation brillante du glaçage.",
      "Servir le poulet caramélisé avec le riz jasmin chaud et la salade de chou fraîche à la lime."
    ]
  },
  {
    "id": "rec-22",
    "title": "Bols express à la dinde, Riz brun & Salade d'avocat concombre",
    "subtitle": "Dinde sautée aux épices, riz brun nutritif, dés de concombres et avocat frais",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 560,
    "macros": {
      "proteins": 38,
      "carbs": 62,
      "fats": 16
    },
    "allergens": [],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/28cd6798-96ce-5eaa-930a-796088810d00-75a33ee1.jpg",
    "description": "Un repas complet et équilibré : Dinde sautée aux épices, riz brun nutritif, dés de concombres et avocat frais. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-22-prot",
        "name": "Dinde hachée maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-22-carb",
        "name": "Riz brun à grains entiers",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-22-concombre",
        "name": "Concombre anglais coupé en dés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-22-avocats",
        "name": "Avocats mûrs coupés en cubes",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-22-tomates",
        "name": "Tomates cerises coupées en deux",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-22-ail-ail",
        "name": "Poudre d'ail",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-22-ail-origan",
        "name": "Origan séché",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-22-citron",
        "name": "Jus de citron frais",
        "quantity": 15,
        "unit": "ml",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-22-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-22-sel-poivre",
        "name": "Sel de mer et poivre",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz brun à l'eau bouillante salée environ 25 minutes, égoutter.",
      "Chauffer la plancha ou une poêle à 200°C avec 15 ml d'huile.",
      "Saisir la dinde hachée avec la poudre d'ail, l'origan, sel et poivre en l'émiettant pendant 6 à 8 minutes.",
      "Préparer la garniture fraîche : mélanger concombre, avocat, tomates cerises avec un filet d'huile d'olive et jus de citron.",
      "Composer les 4 bols : déposer le riz brun tiède, la dinde dorée savoureuse et la salade fraîche d'avocat et concombre."
    ]
  },
  {
    "id": "rec-23",
    "title": "Bols au bœuf style fajita, Riz étuvé & Poivrons rôtis au cheddar",
    "subtitle": "Bœuf haché assaisonné, riz chaud, poivrons et oignons caramélisés et salsa",
    "proteinType": "Boeuf haché",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 12,
    "calories": 610,
    "macros": {
      "proteins": 42,
      "carbs": 64,
      "fats": 20
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/bols-au-boeuf-style-fajita-333d6225.jpg",
    "description": "Un repas complet et équilibré : Bœuf haché assaisonné, riz chaud, poivrons et oignons caramélisés et salsa. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-23-prot",
        "name": "Bœuf haché mi-maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-23-carb",
        "name": "Riz blanc au jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-23-poivron-r",
        "name": "Poivron rouge tranché en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-23-poivron-v",
        "name": "Poivron vert tranché en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-23-oignon",
        "name": "Oignon jaune moyen émincé",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-23-cheddar",
        "name": "Fromage cheddar fort râpé",
        "quantity": 150,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-23-salsa",
        "name": "Salsa douce ou moyenne",
        "quantity": 125,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-23-epices",
        "name": "Épices tex-mex (chili, cumin, paprika fumé)",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-23-huile",
        "name": "Huile végétale",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz jasmin dans l'eau salée 12 minutes.",
      "Préchauffer la plancha à 210°C.",
      "Faire revenir les lanières de poivrons et d'oignon 6 minutes avec un filet d'huile jusqu'à belle caramélisation.",
      "Saisir le bœuf haché avec les épices tex-mex pendant 6 minutes à côté des légumes.",
      "Dans chaque bol, déposer une portion de riz chaud, garnir de bœuf savoureux, de poivrons rôtis, d'une généreuse cuillère de salsa et de cheddar râpé qui fond immédiatement."
    ]
  },
  {
    "id": "rec-24",
    "title": "Bols de tofu Bang Bang, Riz jasmin & Concombres marinés",
    "subtitle": "Tofu croustillant sauce crémeuse épicée, riz au jasmin et rubans de concombres",
    "proteinType": "Végétarien",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 540,
    "macros": {
      "proteins": 25,
      "carbs": 68,
      "fats": 18
    },
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/bols-de-tofu-bang-bang-28ea3c2a.jpg",
    "description": "Un repas complet et équilibré : Tofu croustillant sauce crémeuse épicée, riz au jasmin et rubans de concombres. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-24-prot",
        "name": "Tofu biologique extra-ferme pressé en dés",
        "quantity": 454,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-24-carb",
        "name": "Riz au jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-24-concombre",
        "name": "Concombre anglais tranché en fines rondelles",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-24-carottes",
        "name": "Carottes fraîches râpées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-24-mayo",
        "name": "Mayonnaise",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-24-sriracha",
        "name": "Sauce sriracha ou chili doux",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-24-vinaigre",
        "name": "Vinaigre de riz",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-24-fecule",
        "name": "Fécule de maïs",
        "quantity": 20,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-24-huile",
        "name": "Huile végétale pour friture légère",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-24-sesame",
        "name": "Graines de sésame grillées",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz jasmin à point.",
      "Enrober les dés de tofu de fécule de maïs. Mélanger la mayonnaise et la sriracha pour créer la sauce Bang Bang.",
      "Mariner les rondelles de concombres dans le vinaigre de riz et une pincée de sel 10 minutes.",
      "Préchauffer la plancha à 220°C avec l'huile. Dorer les dés de tofu 8 à 10 minutes jusqu'à ce qu'ils soient hyper croustillants.",
      "Mélanger délicatement le tofu doré avec la moitié de la sauce Bang Bang.",
      "Dresser sur le riz jasmin avec les concombres marinés, les carottes râpées, un filet de sauce restante et des graines de sésame."
    ]
  },
  {
    "id": "rec-25",
    "title": "Sandwichs de porc BBQ, Patates douces rôties & Salade de chou",
    "subtitle": "Porc effiloché savoureux, frites de patates douces à la plancha et salade de chou",
    "proteinType": "Porc haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 650,
    "macros": {
      "proteins": 40,
      "carbs": 68,
      "fats": 22
    },
    "allergens": [
      "Gluten",
      "Moutarde"
    ],
    "tags": [
      "Plancha Star",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/f7133c92-c0d8-5fc0-989d-c0519238fbe7-e299ff3a.jpg",
    "description": "Un repas complet et équilibré : Porc effiloché savoureux, frites de patates douces à la plancha et salade de chou. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-25-prot",
        "name": "Porc haché maigre cuisiné ou effiloché",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-25-pains",
        "name": "Pains à burger briochés",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-25-patates",
        "name": "Patates douces taillées en frites",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-25-chou",
        "name": "Salade de chou fraîche",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-25-bbq",
        "name": "Sauce BBQ fumée",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-25-vinaigrette",
        "name": "Vinaigrette crémeuse pour salade de chou",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-25-huile",
        "name": "Huile d'olive",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-25-paprika",
        "name": "Paprika fumé",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préchauffer la plancha à 200°C. Déposer les frites de patates douces avec l'huile d'olive et le paprika fumé. Cuire 15 minutes en remuant.",
      "Saisir le porc haché à côté pendant 6 minutes, égoutter le surplus de gras si désiré, puis incorporer la sauce BBQ.",
      "Mélanger la salade de chou avec sa vinaigrette crémeuse.",
      "Griller rapidement l'intérieur des pains briochés 1 minute sur la plaque.",
      "Garnir les pains de porc BBQ juteux et d'une touche de salade de chou, et accompagner des frites de patates douces bien dorées."
    ]
  },
  {
    "id": "rec-26",
    "title": "Sauté de poulet au miel et cajous, Riz jasmin & Brocolis sautés",
    "subtitle": "Bouchées de poulet laquées au miel et soya, riz au jasmin et brocoli à l'ail",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 620,
    "macros": {
      "proteins": 45,
      "carbs": 64,
      "fats": 20
    },
    "allergens": [
      "Soya",
      "Noix & Arachides"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y25_R1050_W10_CA_RC37028-1_Main_low-225d29f2.jpg",
    "description": "Un repas complet et équilibré : Bouchées de poulet laquées au miel et soya, riz au jasmin et brocoli à l'ail. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-26-prot",
        "name": "Poitrines de poulet coupées en bouchées",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-26-carb",
        "name": "Riz blanc jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-26-cajous",
        "name": "Noix de cajou grillées non salées",
        "quantity": 80,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-26-brocoli",
        "name": "Fleurets de brocoli frais",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-26-carottes",
        "name": "Carottes tranchées en fines rondelles",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-26-miel",
        "name": "Miel pur d'abeille",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-26-soya",
        "name": "Sauce soya claire",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-26-ail",
        "name": "Gousses d'ail émincées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-26-huile",
        "name": "Huile végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz jasmin dans l'eau salée 12 minutes.",
      "Mélanger le miel, la sauce soya et l'ail dans un petit bol.",
      "Chauffer la plancha à 210°C. Saisir le poulet 5 minutes avec l'huile jusqu'à coloration dorée.",
      "Ajouter les brocolis et rondelles de carottes à côté avec 2 c. à soupe d'eau sous cloche pendant 4 minutes.",
      "Verser la sauce miel-soya sur le poulet et les légumes, ajouter les noix de cajou et mélanger 2 minutes pour laquer.",
      "Servir bien chaud sur le riz jasmin fumant."
    ]
  },
  {
    "id": "rec-27",
    "title": "Poulet au poivre et citron, Grelots rôtis & Fèves vertes",
    "subtitle": "Poulet doré croustillant, pommes de terre grelots rôties et haricots verts frais",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 12,
    "cookTime": 14,
    "calories": 580,
    "macros": {
      "proteins": 46,
      "carbs": 52,
      "fats": 18
    },
    "allergens": [],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y26_R1101_W34_CA_RC56807-2main_low-cdabbf6c.jpg",
    "description": "Un repas complet et équilibré : Poulet doré croustillant, pommes de terre grelots rôties et haricots verts frais. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-27-prot",
        "name": "Poitrines de poulet tranchées en deux sur l'épaisseur",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-27-carb",
        "name": "Pommes de terre grelots coupées en deux",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-27-feves",
        "name": "Haricots verts frais éboutés",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-27-citrons",
        "name": "Citrons (jus et zeste)",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-27-poivre",
        "name": "Poivre noir concassé du moulin",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-27-ail",
        "name": "Gousses d'ail hachées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-27-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 40,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-27-sel",
        "name": "Sel de mer",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Enrober le poulet d'huile d'olive, d'ail, de zeste de citron et d'une généreuse croûte de poivre noir concassé.",
      "Préchauffer la plancha à 200°C. Poser les demi-grelots avec de l'huile et cuire 15 minutes en les retournant.",
      "Ajouter les haricots verts à côté 7 minutes avant la fin de cuisson des grelots.",
      "Déposer les morceaux de poulet sur la zone vive et griller 4 minutes de chaque côté jusqu'à cuisson complète.",
      "Arroser le poulet et les légumes de jus de citron frais directement sur la plaque avant de servir."
    ]
  },
  {
    "id": "rec-28",
    "title": "Sauté de bœuf vietnamien (Bò Lúc Lắc), Riz rouge & Concombres",
    "subtitle": "Cubes de bœuf laqués à l'ail, riz rouge parfumé et salade fraîche de concombres",
    "proteinType": "Boeuf haché",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 10,
    "calories": 590,
    "macros": {
      "proteins": 44,
      "carbs": 60,
      "fats": 20
    },
    "allergens": [
      "Soya"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y26_R1049_W34_CA_RB57954-2main_low-1cb9992a.jpg",
    "description": "Un repas complet et équilibré : Cubes de bœuf laqués à l'ail, riz rouge parfumé et salade fraîche de concombres. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-28-prot",
        "name": "Bœuf à bifteck (surlonge ou contre-filet) coupé en cubes de 2 cm",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-28-carb",
        "name": "Riz jasmin ou riz rouge",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-28-concombre",
        "name": "Concombre anglais en tranches",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-28-tomates",
        "name": "Tomates de serre en rondelles",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-28-cresson",
        "name": "Cresson frais ou feuilles de laitue",
        "quantity": 100,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-28-soya",
        "name": "Sauce soya claire",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-28-huitres",
        "name": "Sauce aux huîtres ou sauce Maggi",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-28-ail",
        "name": "Gousses d'ail émincées finement",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-28-beurre",
        "name": "Beurre doux",
        "quantity": 15,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-28-lime",
        "name": "Jus de lime frais",
        "quantity": 15,
        "unit": "ml",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-28-huile",
        "name": "Huile végétale pour friture vive",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz à l'eau bouillante salée 12 minutes.",
      "Mariner les cubes de bœuf avec la sauce soya, la sauce aux huîtres et l'ail 15 minutes.",
      "Dresser les assiettes avec un lit de cresson, des rondelles de tomates et de concombre.",
      "Chauffer la plancha à intensité maximale (230°C).",
      "Saisir les cubes de bœuf avec l'huile 2 à 3 minutes en les secouant vivement pour les caraméliser à l'extérieur tout en gardant le cœur tendre.",
      "Ajouter une noisette de beurre et un filet de jus de lime, puis verser le bœuf fumant sur la salade et servir avec le riz."
    ]
  },
  {
    "id": "rec-29",
    "title": "Bols de poulet au miel et à l’ail, Riz jasmin & Pois mange-tout",
    "subtitle": "Poulet en bouchées nappé de sauce miel-ail, riz au jasmin et pois croquants",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 580,
    "macros": {
      "proteins": 45,
      "carbs": 66,
      "fats": 14
    },
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y24_R1007_W49_CA_RC157529-4_Main_low-a5ae4628.jpg",
    "description": "Un repas complet et équilibré : Poulet en bouchées nappé de sauce miel-ail, riz au jasmin et pois croquants. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-29-prot",
        "name": "Poitrines de poulet coupées en bouchées",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-29-carb",
        "name": "Riz blanc au jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-29-pois",
        "name": "Pois mange-tout frais",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-29-carottes",
        "name": "Carottes pelées en juliennes",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-29-miel",
        "name": "Miel pur d'abeille",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-29-soya",
        "name": "Sauce soya",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-29-ail",
        "name": "Gousses d'ail pressées",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-29-sesame-huile",
        "name": "Huile de sésame grillé",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-29-sesame-graines",
        "name": "Graines de sésame grillées",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz jasmin dans l'eau salée 12 minutes.",
      "Mélanger le miel, la sauce soya, l'ail pressé et l'huile de sésame pour créer la sauce miel-ail.",
      "Préchauffer la plancha à 210°C.",
      "Faire sauter les bouchées de poulet 5 minutes jusqu'à belle coloration.",
      "Ajouter les pois mange-tout et les carottes, verser la sauce et cuire 3 minutes pour épaissir la sauce et napper le tout.",
      "Servir dans 4 bols sur le riz jasmin et parsemer de graines de sésame."
    ]
  },
  {
    "id": "rec-30",
    "title": "Poulet grillé à la grecque, Pommes de terre rôties & Salade feta",
    "subtitle": "Poitrines dorées aux herbes, patates au citron et salade croquante de concombres feta",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 590,
    "macros": {
      "proteins": 48,
      "carbs": 52,
      "fats": 20
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HFCARC-RC39637-1_Hero_SuperquickGreekInspiredGrilledChickenWithCucumberTomatoAndFetaSalad_W23-1050-2025_Web-5473f7ee.jpg",
    "description": "Un repas complet et équilibré : Poitrines dorées aux herbes, patates au citron et salade croquante de concombres feta. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-30-prot",
        "name": "Poitrines de poulet tranchées en escalopes",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-30-carb",
        "name": "Pommes de terre grelots coupées en deux",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-30-concombre",
        "name": "Concombre anglais coupé en dés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-30-tomates",
        "name": "Tomates de serre mûres coupées en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-30-feta",
        "name": "Fromage feta émietté",
        "quantity": 100,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-30-citrons",
        "name": "Citrons (jus et quartiers)",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-30-origan",
        "name": "Origan grec séché",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-30-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-30-ail",
        "name": "Gousses d'ail pressées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-30-sel-poivre",
        "name": "Sel de mer et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Mariner le poulet avec l'origan, l'ail, le jus d'un citron et l'huile d'olive 10 minutes.",
      "Déposer les demi-grelots sur la plancha à 200°C et cuire 15 minutes jusqu'à ce qu'ils soient croustillants.",
      "Préparer la salade grecque : mélanger le concombre, les tomates et la feta avec de l'origan et un filet d'huile.",
      "Saisir les escalopes de poulet 4 minutes de chaque côté sur la zone vive.",
      "Servir le poulet doré et juteux avec les grelots au citron et la salade grecque bien fraîche."
    ]
  },
  {
    "id": "rec-31",
    "title": "Poulet tikka au chutney de mangues, Riz basmati & Chou-fleur rôti",
    "subtitle": "Poulet parfumé aux épices tikka, riz basmati et fleurets de chou-fleur dorés",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 580,
    "macros": {
      "proteins": 44,
      "carbs": 68,
      "fats": 14
    },
    "allergens": [],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HFCARC_RC155957-9_Hero_MangoChutneyChickenTikka_W30_1092_2026_low_Web-82d36ad2.jpg",
    "description": "Un repas complet et équilibré : Poulet parfumé aux épices tikka, riz basmati et fleurets de chou-fleur dorés. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-31-prot",
        "name": "Poitrines de poulet coupées en cubes de 3 cm",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-31-carb",
        "name": "Riz basmati blanc",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-31-chou-fleur",
        "name": "Fleurets de chou-fleur frais coupés petits",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-31-haricots",
        "name": "Haricots verts frais éboutés",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-31-yogourt",
        "name": "Yogourt grec nature",
        "quantity": 60,
        "unit": "ml",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-31-tikka",
        "name": "Pâte ou poudre d'épices tikka masala",
        "quantity": 20,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-31-chutney",
        "name": "Chutney de mangue",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-31-huile",
        "name": "Huile végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-31-coriandre",
        "name": "Coriandre fraîche ciselée",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Mélanger le yogourt et les épices tikka, puis enrober les cubes de poulet.",
      "Cuire le riz basmati dans l'eau salée 12 minutes.",
      "Préchauffer la plancha à 210°C. Saisir les fleurets de chou-fleur et haricots 6 minutes sous cloche.",
      "Déposer le poulet tikka et faire griller 8 à 10 minutes en remuant pour dorer chaque face.",
      "Servir le poulet tikka parfumé avec le riz basmati, les légumes rôtis et une belle cuillère de chutney de mangue sucré."
    ]
  },
  {
    "id": "rec-32",
    "title": "Bols burrito à la dinde, Riz brun & Salsa d'avocat maïs",
    "subtitle": "Dinde tex-mex mijotée, riz brun, haricots noirs, salsa de tomates et dés d'avocat",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 570,
    "macros": {
      "proteins": 38,
      "carbs": 68,
      "fats": 16
    },
    "allergens": [],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/6e171b8b-e639-4fb4-9f99-2ae40587a30f-f96bf8a0.jpg",
    "description": "Un repas complet et équilibré : Dinde tex-mex mijotée, riz brun, haricots noirs, salsa de tomates et dés d'avocat. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-32-prot",
        "name": "Dinde hachée maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-32-carb",
        "name": "Riz brun à grains entiers",
        "quantity": 250,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-32-haricots",
        "name": "Haricots noirs en conserve rincés",
        "quantity": 398,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-32-mais",
        "name": "Maïs doux en grains",
        "quantity": 150,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-32-tomates",
        "name": "Tomates fraîches coupées en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-32-avocats",
        "name": "Avocats mûrs coupés en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-32-epices",
        "name": "Épices tex-mex (chili, cumin, poudre d'ail)",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-32-limes",
        "name": "Limes pour jus et quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-32-huile",
        "name": "Huile végétale",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz brun environ 25 minutes dans de l'eau bouillante salée, égoutter.",
      "Préparer la salsa : mélanger les tomates en dés, le maïs, les dés d'avocat, le jus d'une lime et une pincée de sel.",
      "Chauffer la plancha ou poêle à 200°C. Saisir la dinde hachée avec les épices et l'huile 6 minutes.",
      "Ajouter les haricots noirs pour les réchauffer 2 minutes avec la dinde.",
      "Assembler les bols burrito : fond de riz brun chaud, dinde assaisonnée aux haricots et salsa fraîche maïs-avocat."
    ]
  },
  {
    "id": "rec-33",
    "title": "Sandwichs de dinde sur pain plat, Patates douces & Guacamole",
    "subtitle": "Dinde hachée épicée, frites de patates douces maison et salade mesclun avocat",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 620,
    "macros": {
      "proteins": 42,
      "carbs": 64,
      "fats": 22
    },
    "allergens": [
      "Gluten"
    ],
    "tags": [
      "Express 15min",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y24_R1049_W34_CA_RP27775-1_MAIN_low-e0e96b55.jpg",
    "description": "Un repas complet et équilibré : Dinde hachée épicée, frites de patates douces maison et salade mesclun avocat. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-33-prot",
        "name": "Dinde hachée maigre cuisinée",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-33-pains",
        "name": "Pains plats ou pains naans moelleux",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-33-patates",
        "name": "Patates douces coupées en frites",
        "quantity": 450,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-33-avocats",
        "name": "Avocats mûrs écrasés pour guacamole",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-33-mesclun",
        "name": "Mesclun ou salade verte",
        "quantity": 100,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-33-lime",
        "name": "Jus de lime frais",
        "quantity": 15,
        "unit": "ml",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-33-huile",
        "name": "Huile d'olive",
        "quantity": 35,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-33-epices-ail",
        "name": "Poudre d'ail",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-33-epices-cumin",
        "name": "Cumin moulu",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-33-sel-poivre",
        "name": "Sel de mer et poivre",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préchauffer la plancha à 200°C. Rôtir les frites de patates douces avec 20 ml d'huile d'olive 14 minutes jusqu'à belle dorure.",
      "Faire sauter la dinde hachée avec les épices, sel et poivre pendant 6 minutes.",
      "Écraser les avocats avec le jus de lime et une pincée de sel pour faire le guacamole minute.",
      "Chauffer les pains plats 1 minute sur la plaque.",
      "Tartiner les pains de guacamole frais, ajouter le mesclun et la dinde chaude, et servir avec les frites de patates douces."
    ]
  },
  {
    "id": "rec-34",
    "title": "Quesadillas au porc effiloché, Riz mexicain & Salade de chou lime",
    "subtitle": "Porc effiloché BBQ et fromage fondant, riz à la tomate et salade de chou croquante",
    "proteinType": "Porc haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 640,
    "macros": {
      "proteins": 42,
      "carbs": 64,
      "fats": 24
    },
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/quesadillas-fromagees-au-porc-f7b8ab48.jpg",
    "description": "Un repas complet et équilibré : Porc effiloché BBQ et fromage fondant, riz à la tomate et salade de chou croquante. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-34-prot",
        "name": "Porc effiloché cuit ou porc haché assaisonné BBQ",
        "quantity": 400,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-34-tortillas",
        "name": "Grandes tortillas souples",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-34-carb",
        "name": "Riz blanc au jasmin",
        "quantity": 250,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-34-coulis",
        "name": "Coulis ou pâte de tomate pour le riz",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-34-fromage",
        "name": "Fromage râpé tex-mex",
        "quantity": 200,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-34-chou",
        "name": "Chou vert et rouge râpé pour salade",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-34-mais",
        "name": "Maïs en grains doux",
        "quantity": 100,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-34-limes",
        "name": "Limes pour jus et quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-34-bbq",
        "name": "Sauce BBQ",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-34-huile",
        "name": "Huile végétale",
        "quantity": 20,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz dans 500 ml d'eau avec le coulis de tomate et une pincée de sel 12 minutes pour faire le riz rouge mexicain.",
      "Mélanger le chou râpé, le maïs, le jus d'une lime et un filet d'huile pour la salade croquante.",
      "Préchauffer la plancha à 190°C. Déposer les tortillas, parsemer de fromage râpé, de porc BBQ et replier en deux.",
      "Griller 3 minutes par face jusqu'à ce que la tortilla soit croustillante et le fromage parfaitement fondu.",
      "Couper en pointes et servir avec le riz mexicain et la salade de chou à la lime."
    ]
  },
  {
    "id": "rec-35",
    "title": "Taquitos croustillants au bœuf, Tortillas de maïs & Salade guacamole",
    "subtitle": "Rouleaux de maïs croustillants au cheddar, servis avec salade iceberg et salsa avocat",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 590,
    "macros": {
      "proteins": 38,
      "carbs": 56,
      "fats": 24
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HFCARC-RB151661-18_Hero_CheesyBeefTaquitosWithZestyGuacamole_W15-1072-2025_low_Web-be308eca.jpg",
    "description": "Un repas complet et équilibré : Rouleaux de maïs croustillants au cheddar, servis avec salade iceberg et salsa avocat. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-35-prot",
        "name": "Bœuf haché mi-maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-35-tortillas",
        "name": "Petites tortillas de maïs",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-35-fromage",
        "name": "Fromage cheddar râpé",
        "quantity": 150,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-35-iceberg",
        "name": "Laitue iceberg émincée",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-35-tomates",
        "name": "Tomates en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-35-avocats",
        "name": "Avocats mûrs pour guacamole",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-35-epices",
        "name": "Épices à tacos (chili, cumin, origan)",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-35-lime",
        "name": "Jus de lime frais",
        "quantity": 15,
        "unit": "ml",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-35-huile",
        "name": "Huile végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le bœuf haché avec les épices à tacos 6 minutes dans une poêle.",
      "Réchauffer les tortillas de maïs 20 secondes pour les assouplir. Déposer une ligne de bœuf et de cheddar au centre, puis rouler serré.",
      "Préchauffer la plancha à 210°C avec l'huile. Déposer les taquitos couture vers le bas.",
      "Cuire 6 à 8 minutes en les roulant sur chaque face jusqu'à ce qu'ils soient hyper croustillants.",
      "Servir les taquitos croustillants avec la laitue iceberg, les dés de tomates fraîches et la purée d'avocat à la lime."
    ]
  },
  {
    "id": "rec-36",
    "title": "Poulet fumé au bois de pommier, Grelots & Choux de Bruxelles",
    "subtitle": "Poulet aux épices BBQ, pommes de terre grelots et choux de Bruxelles saisis à la plancha",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 15,
    "calories": 590,
    "macros": {
      "proteins": 46,
      "carbs": 52,
      "fats": 18
    },
    "allergens": [],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y26_R1110_W35_CA_RC57433-2main_low-85fa1b88.jpg",
    "description": "Un repas complet et équilibré : Poulet aux épices BBQ, pommes de terre grelots et choux de Bruxelles saisis à la plancha. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-36-prot",
        "name": "Poitrines de poulet épaisses",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-36-carb",
        "name": "Pommes de terre grelots coupées en deux",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-36-choux",
        "name": "Choux de Bruxelles frais coupés en deux",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-36-epices-paprika",
        "name": "Paprika fumé",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-36-epices-cassonade",
        "name": "Cassonade dorée",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-36-ail",
        "name": "Gousses d'ail émincées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-36-huile",
        "name": "Huile d'olive",
        "quantity": 40,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-36-sel-poivre",
        "name": "Sel de mer et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Enrober les morceaux de poulet d'huile et d'épices barbecue fumées.",
      "Préchauffer la plancha à 200°C.",
      "Déposer les demi-grelots et les choux de Bruxelles face coupée contre la plaque avec l'huile et l'ail. Cuire 15 minutes en remuant.",
      "Déposer les poitrines de poulet sur la zone vive et cuire 6 minutes par côté jusqu'à cuisson complète et croûte caramélisée.",
      "Servir le poulet fumé juteux avec les grelots dorés et les choux de Bruxelles rôtis et croustillants."
    ]
  },
  {
    "id": "rec-37",
    "title": "Fajitas de poulet grillé fiesta, Tortillas & Salade d'avocats",
    "subtitle": "Poulet et montagne de poivrons sur la plaque, tortillas chaudes et salade verte avocat",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 590,
    "macros": {
      "proteins": 44,
      "carbs": 56,
      "fats": 18
    },
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/fajitas-de-poulet-grille-e10b7b11.jpg",
    "description": "Un repas complet et équilibré : Poulet et montagne de poivrons sur la plaque, tortillas chaudes et salade verte avocat. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-37-prot",
        "name": "Poitrines de poulet tranchées en lanières",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-37-tortillas",
        "name": "Tortillas de blé ou maïs",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-37-poivron-r",
        "name": "Poivron rouge en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-37-poivron-j",
        "name": "Poivron jaune en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-37-poivron-v",
        "name": "Poivron vert en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-37-oignon",
        "name": "Oignon rouge tranché",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-37-avocats",
        "name": "Avocats mûrs en tranches",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-37-laitue",
        "name": "Feuilles de laitue romaine émincées",
        "quantity": 100,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-37-epices",
        "name": "Épices pour fajitas (chili, cumin, ail)",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-37-limes",
        "name": "Limes pour jus et quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-37-huile",
        "name": "Huile d'olive",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Assaisonner le poulet avec les épices à fajitas et un filet d'huile.",
      "Préchauffer la plancha à 210°C.",
      "Faire revenir le trio de poivrons et l'oignon rouge 6 minutes jusqu'à ce qu'ils soient tendres et légèrement roussis.",
      "Saisir le poulet 6 minutes à côté des légumes en remuant à la spatule.",
      "Réchauffer les tortillas 30 secondes sur la plaque.",
      "Servir le poulet et les légumes fumants dans les tortillas avec les tranches d'avocat, la laitue et un trait de lime."
    ]
  },
  {
    "id": "rec-38",
    "title": "Linguines crémeuses au bacon & Fleurets de brocoli vapeur",
    "subtitle": "Pâtes crémeuses au bacon croustillant, accompagnées de brocoli frais vapeur",
    "proteinType": "Porc haché",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 620,
    "macros": {
      "proteins": 30,
      "carbs": 66,
      "fats": 24
    },
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Express 15min",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/linguines-au-bacon-dans-une-sauce-tomate-cremeuse-ff90f16d.jpg",
    "description": "Un repas complet et équilibré : Pâtes crémeuses au bacon croustillant, accompagnées de brocoli frais vapeur. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-38-prot",
        "name": "Bacon fumé de qualité tranché en lardons",
        "quantity": 250,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-38-carb",
        "name": "Pâtes linguines",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-38-brocoli",
        "name": "Fleurets de brocoli frais",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-38-tomates",
        "name": "Tomates cerises coupées en deux",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-38-creme",
        "name": "Crème champêtre 15% ou crème 35%",
        "quantity": 180,
        "unit": "ml",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-38-parmesan",
        "name": "Fromage parmesan fraîchement râpé",
        "quantity": 50,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-38-ail",
        "name": "Gousses d'ail émincées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-38-poivre",
        "name": "Poivre noir concassé du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire les linguines dans de l'eau bouillante salée 10 minutes al dente.",
      "Cuire les fleurets de brocoli à la vapeur ou sur la plancha sous cloche avec 3 c. à soupe d'eau pendant 4 minutes.",
      "Faire dorer les lardons de bacon sur la plancha ou dans une sauteuse jusqu'à ce qu'ils soient bien croustillants.",
      "Dans une poêle, chauffer la crème avec l'ail, le parmesan et le poivre noir concassé.",
      "Ajouter les linguines égouttées, les lardons croustillants, les brocolis et les tomates cerises dans la sauce.",
      "Bien enrober et servir immédiatement chaud et crémeux."
    ]
  },
  {
    "id": "rec-39",
    "title": "Burgers de bœuf grillé, Frites de patates douces & Salade de chou",
    "subtitle": "Burgers juteux au cheddar, frites de patates douces rôties et salade de chou maison",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 680,
    "macros": {
      "proteins": 44,
      "carbs": 64,
      "fats": 28
    },
    "allergens": [
      "Gluten",
      "Lactose",
      "Moutarde"
    ],
    "tags": [
      "Plancha Star",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/burgers-de-boeuf-grille-facon-resto-3650d530.jpg",
    "description": "Un repas complet et équilibré : Burgers juteux au cheddar, frites de patates douces rôties et salade de chou maison. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-39-prot",
        "name": "Bœuf haché mi-maigre façonné en 4 galettes",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-39-pains",
        "name": "Pains à burger briochés",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-39-cheddar",
        "name": "Tranches de fromage cheddar vieilli",
        "quantity": 4,
        "unit": "tranche",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-39-patates",
        "name": "Patates douces taillées en frites",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-39-chou",
        "name": "Salade de chou croquante",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-39-laitue",
        "name": "Feuilles de laitue fraîche",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-39-tomate",
        "name": "Tomate de serre en rondelles",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-39-vinaigrette",
        "name": "Vinaigrette crémeuse pour salade de chou",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-39-huile",
        "name": "Huile végétale",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-39-sel-poivre",
        "name": "Sel de mer et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préchauffer la plancha à 210°C. Déposer les frites de patates douces avec l'huile et cuire 14 minutes en remuant.",
      "Mélanger la salade de chou avec sa vinaigrette.",
      "Déposer les galettes de bœuf sur la zone vive et cuire 3 minutes. Retourner, saler, poivrer et déposer une tranche de cheddar sur chaque galette.",
      "Couvrir d'une cloche 2 minutes pour faire fondre le fromage.",
      "Toaster l'intérieur des pains briochés 1 minute sur la plaque.",
      "Monter les burgers avec laitue, tomate, galette au cheddar fondant et servir avec les frites de patates douces et salade de chou."
    ]
  },
  {
    "id": "rec-40",
    "title": "Enchiladas gratinées au bœuf, Tortillas de maïs & Salade de maïs",
    "subtitle": "Rouleaux de maïs gratinés au fromage et haricots, servis avec salade fraîche de maïs",
    "proteinType": "Boeuf haché",
    "cookingMode": "rapide",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 15,
    "calories": 620,
    "macros": {
      "proteins": 42,
      "carbs": 64,
      "fats": 22
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/enchiladas-au-fromage-et-au-boeuf-et-sauce-maison-ced2840e.jpg",
    "description": "Un repas complet et équilibré : Rouleaux de maïs gratinés au fromage et haricots, servis avec salade fraîche de maïs. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-40-prot",
        "name": "Bœuf haché mi-maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-40-tortillas",
        "name": "Petites tortillas de maïs",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-40-haricots",
        "name": "Haricots rouges en conserve rincés",
        "quantity": 398,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-40-sauce",
        "name": "Sauce enchilada ou coulis de tomate épicé",
        "quantity": 300,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-40-fromage",
        "name": "Mélange de fromage tex-mex râpé",
        "quantity": 180,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-40-mais",
        "name": "Maïs doux en grains",
        "quantity": 150,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-40-poivron",
        "name": "Poivron rouge coupé en dés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-40-avocat",
        "name": "Avocat mûr en dés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-40-huile",
        "name": "Huile végétale",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Faire revenir le bœuf haché avec la moitié de la sauce enchilada et les haricots rouges 6 minutes.",
      "Garnir les tortillas de maïs de viande et haricots, rouler et déposer dans un plat allant sur la zone tiède de la plancha ou au four.",
      "Napper du reste de sauce enchilada, parsemer de fromage tex-mex et laisser gratiner 8 minutes.",
      "Préparer la salade de maïs frais avec le poivron rouge et l'avocat en dés.",
      "Servir les enchiladas gratinées brûlantes avec la salade croquante de maïs."
    ]
  },
  {
    "id": "rec-41",
    "title": "Riz frit maison style resto chinois, Porc & Légumes sautés",
    "subtitle": "Riz blanc sauté à l'huile de sésame, porc haché, œufs battus, petits pois et brocoli",
    "proteinType": "Porc haché",
    "cookingMode": "mixte",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 590,
    "macros": {
      "proteins": 34,
      "carbs": 72,
      "fats": 18
    },
    "allergens": [
      "Soya",
      "Sésame",
      "Oeufs"
    ],
    "tags": [
      "Express 15min",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://ucarecdn.com/0e6c0cfc-799c-4df8-961a-e1438dad99f6/-/crop/4950x6688/322,1568/-/preview/",
    "description": "Un repas complet et équilibré : Riz blanc sauté à l'huile de sésame, porc haché, œufs battus, petits pois et brocoli. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-41-prot",
        "name": "Porc haché maigre",
        "quantity": 350,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-41-carb",
        "name": "Riz blanc cuit et refroidi (idéalement de la veille)",
        "quantity": 600,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-41-oeufs",
        "name": "Gros œufs frais battus",
        "quantity": 3,
        "unit": "unité",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-41-petits-pois",
        "name": "Petits pois surgelés ou frais",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-41-brocoli",
        "name": "Fleurets de brocoli hachés menu",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-41-oignons-verts",
        "name": "Oignons verts tranchés",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-41-soya",
        "name": "Sauce soya claire",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-41-sesame-huile",
        "name": "Huile de sésame grillé",
        "quantity": 20,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-41-ail",
        "name": "Gousses d'ail émincées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Préchauffer la plancha à 210°C et huiler.",
      "Faire sauter le porc haché avec l'ail 4 minutes jusqu'à belle dorure.",
      "Ajouter les brocolis et petits pois à côté, faire sauter 3 minutes.",
      "Verser les œufs battus sur un coin de la plaque pour faire des œufs brouillés express.",
      "Ajouter le riz froid sur la plaque, arroser de sauce soya et d'huile de sésame, et mélanger vigoureusement tous les ingrédients avec deux spatules pendant 4 minutes.",
      "Ajouter les oignons verts en finition et servir bien chaud."
    ]
  },
  {
    "id": "rec-42",
    "title": "Smash tacos style Big Mac, Grelots dorés & Salade iceberg",
    "subtitle": "Galettes écrasées sur tortilla au cheddar, petits grelots rôtis et laitue iceberg",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 12,
    "calories": 640,
    "macros": {
      "proteins": 40,
      "carbs": 60,
      "fats": 26
    },
    "allergens": [
      "Gluten",
      "Lactose",
      "Oeufs",
      "Moutarde"
    ],
    "tags": [
      "Plancha Star",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.radio-canada.ca/q_auto,w_1200/v1/alimentation/recette/16x9/smash-tacos.jpg",
    "description": "Un repas complet et équilibré : Galettes écrasées sur tortilla au cheddar, petits grelots rôtis et laitue iceberg. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-42-prot",
        "name": "Bœuf haché mi-maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-42-tortillas",
        "name": "Petites tortillas de farine ou maïs",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-42-cheddar",
        "name": "Tranches de fromage cheddar fondu",
        "quantity": 8,
        "unit": "tranche",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-42-grelots",
        "name": "Pommes de terre grelots coupées en deux",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-42-iceberg",
        "name": "Laitue iceberg finement émincée",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-42-cornichons",
        "name": "Cornichons à l'aneth tranchés",
        "quantity": 100,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-42-oignon",
        "name": "Oignon jaune haché très finement",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-42-sauce",
        "name": "Sauce style Big Mac (mayonnaise, relish sucrée, moutarde)",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-42-huile",
        "name": "Huile végétale",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-42-sel-poivre",
        "name": "Sel et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préchauffer la plancha à 210°C. Faire rôtir les demi-grelots avec l'huile 14 minutes jusqu'à belle dorure.",
      "Étaler une fine couche de bœuf haché cru directement sur chaque tortilla avec les doigts, saler et poivrer.",
      "Déposer la tortilla côté viande contre la plancha brûlante et presser fermement 2 minutes pour smasher.",
      "Retourner, déposer une tranche de cheddar sur la viande cuite et laisser dorer la tortilla 1 minute sous cloche.",
      "Garnir chaque smash taco de laitue iceberg, dés d'oignons, tranches de cornichons et généreuse sauce Big Mac.",
      "Servir chaud avec les grelots rôtis."
    ]
  },
  {
    "id": "rec-43",
    "title": "Quesadillas vide-frigo, Riz basmati doré & Salade verte",
    "subtitle": "Tortillas croustillantes au fromage fondu, riz basmati doré et salade fraîche de légumes",
    "proteinType": "Végétarien",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 580,
    "macros": {
      "proteins": 34,
      "carbs": 60,
      "fats": 22
    },
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.radio-canada.ca/q_auto,w_1200/v1/alimentation/recette/16x9/quesadillas-vide-frigo.jpg",
    "description": "Un repas complet et équilibré : Tortillas croustillantes au fromage fondu, riz basmati doré et salade fraîche de légumes. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-43-fromage",
        "name": "Fromage mozzarella et cheddar râpés",
        "quantity": 200,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-43-tortillas",
        "name": "Grandes tortillas de blé",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-43-carb",
        "name": "Riz basmati blanc cuit",
        "quantity": 250,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-43-courgette",
        "name": "Courgette verte coupée en demi-lunes",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-43-poivron",
        "name": "Poivron rouge émincé",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-43-mesclun",
        "name": "Salade de mesclun fraîche",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-43-vinaigrette",
        "name": "Vinaigrette maison à l'huile d'olive",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-43-huile",
        "name": "Huile d'olive pour cuisson",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-43-sel-poivre",
        "name": "Sel de mer et poivre",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préchauffer la plancha à 190°C.",
      "Faire sauter la courgette et le poivron 4 minutes avec un filet d'huile.",
      "Réchauffer le riz basmati sur la zone moyenne avec un filet d'huile.",
      "Déposer les tortillas, garnir la moitié de fromage râpé et de légumes sautés, puis replier en deux.",
      "Cuire 3 minutes de chaque côté jusqu'à ce que les quesadillas soient bien croustillantes et dorées.",
      "Couper en pointes et servir avec le riz doré et la salade verte assaisonnée."
    ]
  },
  {
    "id": "rec-44",
    "title": "Burritos déjeuner au chorizo, Hashbrowns dorés & Salade de tomates",
    "subtitle": "Chorizo rissolé, œufs brouillés, hashbrowns croustillants et salade salsa avocat",
    "proteinType": "Porc haché",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 630,
    "macros": {
      "proteins": 36,
      "carbs": 54,
      "fats": 30
    },
    "allergens": [
      "Gluten",
      "Lactose",
      "Oeufs"
    ],
    "tags": [
      "Express 15min",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.radio-canada.ca/q_auto,w_1200/v1/alimentation/recette/16x9/burrito-dejeuner-poele.jpg",
    "description": "Un repas complet et équilibré : Chorizo rissolé, œufs brouillés, hashbrowns croustillants et salade salsa avocat. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-44-prot",
        "name": "Chair de saucisse chorizo ou italienne",
        "quantity": 350,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-44-oeufs",
        "name": "Gros œufs frais battus",
        "quantity": 6,
        "unit": "unité",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-44-tortillas",
        "name": "Grandes tortillas souples",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-44-hashbrowns",
        "name": "Pommes de terre râpées pour hashbrowns ou galettes de patates",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-44-cheddar",
        "name": "Fromage cheddar râpé",
        "quantity": 120,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-44-tomates",
        "name": "Tomates fraîches coupées en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-44-avocats",
        "name": "Avocats mûrs coupés en tranches",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-44-salsa",
        "name": "Salsa douce",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-44-beurre",
        "name": "Beurre doux ou huile",
        "quantity": 30,
        "unit": "g",
        "department": "produits_laitiers"
      }
    ],
    "steps": [
      "Préchauffer la plancha à 200°C avec le beurre.",
      "Déposer les pommes de terre râpées en galettes et dorer 5 minutes par face jusqu'à texture ultra-croustillante.",
      "Saisir le chorizo en l'émiettant pendant 5 minutes.",
      "Verser les œufs battus à côté pour préparer des œufs brouillés crémeux.",
      "Déposer dans les tortillas : chorizo, œufs, cheddar, dés de tomates et tranches d'avocat. Rouler en burrito.",
      "Toaster les burritos 1 minute de chaque côté sur la plancha et servir avec la salsa et les hashbrowns dorés."
    ]
  },
  {
    "id": "rec-45",
    "title": "Smash burgers au garam masala, Patates Wedges & Épinards tombés",
    "subtitle": "Bœuf épicé aux oignons caramélisés, quartiers de patates dorées et bébés épinards",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 690,
    "macros": {
      "proteins": 45,
      "carbs": 62,
      "fats": 28
    },
    "allergens": [
      "Gluten",
      "Lactose",
      "Oeufs"
    ],
    "tags": [
      "Plancha Star",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://images.radio-canada.ca/q_auto,w_1200/v1/alimentation/recette/16x9/smash-burgers-oignons-epinards-garam-masala.jpg",
    "description": "Un repas complet et équilibré : Bœuf épicé aux oignons caramélisés, quartiers de patates dorées et bébés épinards. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-45-prot",
        "name": "Bœuf haché mi-maigre",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-45-pains",
        "name": "Pains à burger briochés",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-45-patates",
        "name": "Pommes de terre Russet coupées en wedges",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-45-epinards",
        "name": "Bébés épinards frais",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-45-oignon",
        "name": "Gros oignon jaune tranché fin pour caraméliser",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-45-cheddar",
        "name": "Tranches de cheddar fort",
        "quantity": 4,
        "unit": "tranche",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-45-garam",
        "name": "Garam masala moulu",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-45-beurre",
        "name": "Beurre doux",
        "quantity": 25,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-45-huile",
        "name": "Huile végétale",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-45-sel-poivre",
        "name": "Sel de mer et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préchauffer la plancha à 210°C. Faire rôtir les patates wedges avec l'huile 15 minutes en remuant.",
      "Faire fondre le beurre sur une zone et caraméliser les oignons tranchés avec une pincée de garam masala 10 minutes.",
      "Façonner 4 boules de bœuf haché assaisonné au garam masala. Les déposer sur la plaque vive et les écraser avec une spatule.",
      "Cuire 2 minutes, retourner, couvrir de cheddar fort et laisser fondre sous cloche 1 minute.",
      "Faire tomber les bébés épinards 1 minute avec un filet de beurre.",
      "Garnir les pains grillés des galettes smashées épicées, des oignons caramélisés et des épinards, puis servir avec les wedges croustillantes."
    ]
  },
  {
    "id": "rec-46",
    "title": "Bulgogi de bœuf coréen, Riz blanc collant & Salade de concombres",
    "subtitle": "Fines lamelles de bœuf à la poire et sésame, riz au jasmin, feuilles de laitue et concombres",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 20,
    "cookTime": 8,
    "calories": 590,
    "macros": {
      "proteins": 46,
      "carbs": 60,
      "fats": 20
    },
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://pekis.net/sites/default/files/styles/1200x675/public/2025-02/Korean%20Beef%20Bulgogi.webp?itok=-jMGzRPD",
    "description": "Un repas complet et équilibré : Fines lamelles de bœuf à la poire et sésame, riz au jasmin, feuilles de laitue et concombres. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-46-prot",
        "name": "Bœuf à bifteck tranché très finement style bulgogi",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-46-carb",
        "name": "Riz au jasmin ou calrose",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-46-laitue",
        "name": "Feuilles de laitue Boston pour rouler",
        "quantity": 1,
        "unit": "pomme",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-46-concombre",
        "name": "Concombre anglais en fines rondelles",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-46-soya",
        "name": "Sauce soya",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-46-poire",
        "name": "Purée de poire ou cassonade",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-46-sesame-huile",
        "name": "Huile de sésame grillé",
        "quantity": 20,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-46-ail",
        "name": "Gousses d'ail pressées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-46-sesame-graines",
        "name": "Graines de sésame grillées",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-46-oignons-verts",
        "name": "Oignons verts tranchés",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Cuire le riz au jasmin à point.",
      "Mariner les fines lamelles de bœuf avec la sauce soya, la purée de poire, l'ail et l'huile de sésame 15 minutes.",
      "Préchauffer la plancha à 220°C.",
      "Déposer le bœuf en couche unique et saisir vivement 3 à 4 minutes sans le bouillir.",
      "Parsemer des graines de sésame et des oignons verts.",
      "Servir avec le riz chaud, les feuilles de laitue Boston croquantes pour confectionner des bouchées et les rondelles de concombre frais."
    ]
  },
  {
    "id": "rec-47",
    "title": "Yakitori de poulet teriyaki, Riz à sushi & Brocolis sautés",
    "subtitle": "Brochettes de poulet et poireaux laquées teriyaki, riz parfumé et brocolis à l'ail",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 20,
    "cookTime": 10,
    "calories": 580,
    "macros": {
      "proteins": 45,
      "carbs": 60,
      "fats": 16
    },
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://www.petitsplatsentreamis.com/wp-content/uploads/2019/02/Recette-de-yakitori-de-poulet-à-la-plancha.jpg",
    "description": "Un repas complet et équilibré : Brochettes de poulet et poireaux laquées teriyaki, riz parfumé et brocolis à l'ail. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-47-prot",
        "name": "Hauts de cuisse ou poitrines de poulet en cubes",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-47-poireaux",
        "name": "Blancs de poireaux ou gros oignons verts coupés en tronçons",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-47-carb",
        "name": "Riz blanc calrose ou jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-47-brocoli",
        "name": "Fleurets de brocoli frais",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-47-teriyaki",
        "name": "Sauce teriyaki authentique",
        "quantity": 80,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-47-sesame-huile",
        "name": "Huile de sésame",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-47-ail",
        "name": "Gousse d'ail émincée",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-47-sesame-graines",
        "name": "Graines de sésame blanc",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz dans de l'eau salée 12 minutes.",
      "Monter des brochettes en alternant les cubes de poulet et les tronçons de poireaux.",
      "Préchauffer la plancha à 210°C. Saisir les fleurets de brocoli avec un filet d'eau sous cloche 4 minutes.",
      "Déposer les brochettes de poulet et griller 8 à 10 minutes en tournant régulièrement.",
      "Badigeonner généreusement de sauce teriyaki sur toutes les faces pendant les 2 dernières minutes pour glacer.",
      "Dresser sur le riz avec les brocolis et saupoudrer de graines de sésame."
    ]
  },
  {
    "id": "rec-48",
    "title": "Pizzas pains plats à la dinde tex-mex & Salade croquante",
    "subtitle": "Pains naan dorés au fromage fondant et maïs, servis avec salade verte aux poivrons",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 10,
    "calories": 620,
    "macros": {
      "proteins": 42,
      "carbs": 62,
      "fats": 22
    },
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Express 15min",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF211209_R10_W04_CA_RT0449-9_KB_Main_low-9c1e2c84.jpg",
    "description": "Un repas complet et équilibré : Pains naan dorés au fromage fondant et maïs, servis avec salade verte aux poivrons. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-48-prot",
        "name": "Dinde hachée maigre cuisinée avec cumin et chili",
        "quantity": 400,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-48-pains",
        "name": "Pains plats de type naan ou lavash",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-48-sauce",
        "name": "Coulis de tomate ou sauce pizza",
        "quantity": 120,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-48-mais",
        "name": "Maïs doux en grains",
        "quantity": 120,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-48-fromage",
        "name": "Fromage mozzarella râpé",
        "quantity": 180,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-48-concombre",
        "name": "Concombre anglais coupé en dés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-48-poivron",
        "name": "Poivron rouge coupé en dés",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-48-mesclun",
        "name": "Feuilles de mesclun fraîches",
        "quantity": 100,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-48-vinaigrette",
        "name": "Vinaigrette maison",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préchauffer la plancha à 200°C.",
      "Tartiner chaque pain plat de sauce tomate, parsemer de dinde hachée assaisonnée, de grains de maïs et de mozzarella râpée.",
      "Déposer les pizzas sur la plancha et couvrir d'une cloche 4 à 5 minutes jusqu'à ce que le fond soit croustillant et le fromage bien gratiné.",
      "Préparer la salade croquante en mélangeant le mesclun, le concombre et le poivron avec la vinaigrette.",
      "Couper les pizzas en pointes et servir avec la salade fraîche."
    ]
  },
  {
    "id": "rec-49",
    "title": "Tacos de dinde minute, Riz mexicain & Salade salsa fraîche",
    "subtitle": "Dinde hachée mijotée au cheddar, tortillas chaudes, riz mexicain et salsa douce",
    "proteinType": "Dinde & Volailles",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 10,
    "calories": 580,
    "macros": {
      "proteins": 40,
      "carbs": 60,
      "fats": 20
    },
    "allergens": [
      "Gluten",
      "Lactose"
    ],
    "tags": [
      "Express 15min",
      "Familial",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y25_R1047_W06_CA_RT32013-2_Main__1low-f5453c81.jpg",
    "description": "Un repas complet et équilibré : Dinde hachée mijotée au cheddar, tortillas chaudes, riz mexicain et salsa douce. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-49-prot",
        "name": "Dinde hachée maigre",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-49-tortillas",
        "name": "Petites tortillas souples",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-49-carb",
        "name": "Riz blanc au jasmin",
        "quantity": 250,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-49-coulis",
        "name": "Pâte ou coulis de tomate pour le riz",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-49-iceberg",
        "name": "Cœur de laitue iceberg finement émincé",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-49-tomates",
        "name": "Tomates fraîches coupées en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-49-creme",
        "name": "Crème sure légère ou yogourt grec",
        "quantity": 100,
        "unit": "ml",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-49-cheddar",
        "name": "Fromage cheddar râpé",
        "quantity": 100,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-49-epices",
        "name": "Épices mexicaines (chili, cumin, ail)",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-49-huile",
        "name": "Huile végétale",
        "quantity": 20,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz dans de l'eau avec le coulis de tomate et du sel pour créer le riz mexicain 12 minutes.",
      "Chauffer la plancha à 200°C. Faire sauter la dinde hachée avec les épices et l'huile pendant 6 minutes.",
      "Réchauffer les tortillas 20 secondes sur la plaque.",
      "Garnir les tortillas chaudes de dinde assaisonnée, de cheddar, de laitue iceberg croquante, de dés de tomates fraîches et d'une touche de crème sure.",
      "Servir les tacos avec le riz mexicain chaud."
    ]
  },
  {
    "id": "rec-50",
    "title": "Salade de poulet à l’érable, Grelots rôtis & Pommes du Québec",
    "subtitle": "Poulet grillé à la moutarde et érable, grelots dorés, mesclun, pommes et cheddar vieilli",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 590,
    "macros": {
      "proteins": 48,
      "carbs": 54,
      "fats": 20
    },
    "allergens": [
      "Moutarde",
      "Lactose",
      "Noix & Arachides"
    ],
    "tags": [
      "Plancha Star",
      "Sans Gluten",
      "Repas Équilibré",
      "Complet"
    ],
    "image": "https://img.hellofresh.com/hellofresh_s3/image/HF_Y24_R1003_W23_CA_RC155122-3_Main_low-c536e437.jpg",
    "description": "Un repas complet et équilibré : Poulet grillé à la moutarde et érable, grelots dorés, mesclun, pommes et cheddar vieilli. Cuit sur la plancha ou en cuisson rapide de semaine pour 4 portions familiales généreuses.",
    "planchaTips": "Plancha à 210°C. Cuire le féculent et les légumes sur la zone moyenne et saisir la protéine sur la zone vive pour un timing de service parfait.",
    "ingredients": [
      {
        "id": "ing-rec-50-prot",
        "name": "Poitrines de poulet tranchées en escalopes",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-50-carb",
        "name": "Pommes de terre grelots coupées en deux",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-50-mesclun",
        "name": "Mélange de mesclun ou roquette",
        "quantity": 150,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-50-pommes",
        "name": "Pommes du Québec (Honeycrisp ou McIntosh) en tranches",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-50-pacanes",
        "name": "Noix de pacanes grillées",
        "quantity": 50,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-50-erable",
        "name": "Sirop d'érable pur",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-50-dijon",
        "name": "Moutarde de Dijon",
        "quantity": 20,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-50-vinaigre",
        "name": "Vinaigre de cidre de pomme",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-50-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-50-sel-poivre",
        "name": "Sel de mer et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Fouetter le sirop d'érable, la moutarde de Dijon, le vinaigre de cidre et l'huile d'olive pour la vinaigrette érable-dijon.",
      "Préchauffer la plancha à 200°C. Faire rôtir les demi-grelots avec un filet d'huile 14 minutes jusqu'à belle dorure.",
      "Badigeonner le poulet d'un peu de vinaigrette et griller 4 minutes de chaque côté sur la zone vive.",
      "Trancher les poitrines en lanières.",
      "Dresser les assiettes : lit de mesclun, tranches de pommes fraîches du Québec, pacanes croquantes, grelots rôtis chauds et lanières de poulet.",
      "Arroser du reste de vinaigrette à l'érable et déguster."
    ]
  },
  {
    "id": "rec-51",
    "title": "Bavette de bœuf marinée à l'argentine & chimichurri",
    "subtitle": "Bavette saisie vive sur plancha, pommes de terre grelots dorées et asperges grillées au citron",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 15,
    "calories": 560,
    "macros": {
      "proteins": 42,
      "carbs": 36,
      "fats": 26
    },
    "allergens": [],
    "tags": [
      "Plancha Star",
      "Bœuf",
      "Sans Gluten",
      "Chef"
    ],
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "description": "Une magnifique bavette de bœuf marinée aux herbes fraîches, ail et piment doux, saisie à très haute température sur la plancha. Servie avec une sauce chimichurri maison, des grelots dorés et des asperges grillées.",
    "planchaTips": "Plancha très chaude (240°C). Saisir la bavette 3 minutes de chaque côté pour une cuisson saignante/médium-saignante, puis la laisser reposer 5 minutes sous un papier d'aluminium avant de trancher contre le grain.",
    "ingredients": [
      {
        "id": "ing-rec-51-prot",
        "name": "Bavette de bœuf marinée à l'ail et huile d'olive",
        "quantity": 650,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-51-carb",
        "name": "Pommes de terre grelots lavées et coupées en 2",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-51-persil",
        "name": "Persil plat frais haché",
        "quantity": 30,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-51-origan",
        "name": "Origan séché",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-51-ail",
        "name": "Gousses d'ail émincées finement",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-51-vinaigre",
        "name": "Vinaigre de vin rouge",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-51-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-51-flocons",
        "name": "Flocons de piment chili rouge",
        "quantity": 3,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer la sauce chimichurri en mélangeant persil haché, origan, ail, vinaigre de vin rouge et 2 c. à soupe d'huile d'olive.",
      "Préchauffer la plancha à feu très vif (230°C-240°C).",
      "Déposer les demi-grelots et les asperges sur la zone moyenne avec un filet d'huile d'olive, sel et poivre (cuire 10-12 min).",
      "Déposer la bavette de bœuf bien assaisonnée sur la zone vive et saisir 3 à 4 minutes par côté.",
      "Retirer la bavette et laisser reposer 5 minutes sur une planche à découper avant de trancher en lanières fines.",
      "Servir les tranches de bavette nappées de chimichurri avec les grelots croustillants et les asperges au jus de citron."
    ]
  },
  {
    "id": "rec-52",
    "title": "Poulet glacé à la mangue, lime & gingembre",
    "subtitle": "Morceaux de poulet caramélisés à la plancha, riz basmati parfumé et poivrons doux grillés",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 15,
    "calories": 520,
    "macros": {
      "proteins": 38,
      "carbs": 48,
      "fats": 16
    },
    "allergens": [
      "Soya"
    ],
    "tags": [
      "Plancha Star",
      "Poulet",
      "Exotique",
      "Famille"
    ],
    "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80",
    "description": "Des morceaux de poulet tendres glacés dans une sauce mangue, jus de lime, gingembre râpé et miel, saisis sur la plancha jusqu'à caramélisation parfaite. Accompagné de riz basmati et d'un sauté de poivrons colorés.",
    "planchaTips": "Plancha à 200°C. Cuire d'abord le poulet à sec avec l'huile, puis badigeonner le glaçage à la mangue dans les 2 dernières minutes pour éviter que les sucres ne brûlent sur la plaque.",
    "ingredients": [
      {
        "id": "ing-rec-52-prot",
        "name": "Hauts de cuisse ou poitrines de poulet désossés",
        "quantity": 650,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-52-carb",
        "name": "Riz au jasmin parfumé",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-52-poivron-r",
        "name": "Poivron rouge émincé en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-52-poivron-j",
        "name": "Poivron jaune émincé en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-52-chutney",
        "name": "Chutney ou purée de mangue douce",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-52-limes",
        "name": "Limes pour jus et quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-52-gingembre",
        "name": "Gingembre frais râpé",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-52-huile",
        "name": "Huile végétale pour cuisson",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-52-coriandre",
        "name": "Coriandre fraîche pour garnir",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Cuire le riz basmati dans 2 fois son volume d'eau bouillante salée pendant 12 minutes.",
      "Préchauffer la plancha à feu moyen-vif (200°C).",
      "Faire sauter les lanières de poivrons sur la zone légumes avec un filet d'huile jusqu'à tendreté (6-8 min).",
      "Saisir les morceaux de poulet assaisonnés sur la zone vive pendant 8 minutes en les remuant régulièrement.",
      "Dans les 2 dernières minutes de cuisson, verser le mélange mangue-lime-gingembre sur le poulet et enrober jusqu'à glaçage brillant.",
      "Servir le poulet glacé sur le riz basmati avec les poivrons grillés et la coriandre fraîche."
    ]
  },
  {
    "id": "rec-53",
    "title": "Pavés de saumon croustillants érable, dijonnaise & sésame",
    "subtitle": "Saumon atlantique peau croustillante, riz au jasmin et fleurettes de brocoli sautées à l'ail",
    "proteinType": "Saumon & Poissons",
    "cookingMode": "mixte",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 12,
    "calories": 540,
    "macros": {
      "proteins": 40,
      "carbs": 42,
      "fats": 22
    },
    "allergens": [
      "Moutarde",
      "Sésame",
      "Soya"
    ],
    "tags": [
      "Oméga-3",
      "Poisson",
      "Érable du Québec",
      "Rapide"
    ],
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "description": "Pavés de saumon frais laqués d'un mélange de sirop d'érable pur, moutarde de Dijon et graines de sésame grillées. Cuit côté peau en premier sur la plancha pour un croustillant irrésistible.",
    "planchaTips": "Plancha à 190°C bien huilée. Poser le saumon côté peau et appuyer doucement avec la spatule 15 secondes. Ne pas le bouger pendant 5 minutes pour obtenir une peau ultra croustillante.",
    "ingredients": [
      {
        "id": "ing-rec-53-prot",
        "name": "Pavés de saumon frais de l'Atlantique avec peau",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-53-carb",
        "name": "Riz basmati blanc",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-53-asperges",
        "name": "Asperges fraîches éboutées",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-53-erable",
        "name": "Sirop d'érable pur du Québec",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-53-dijon",
        "name": "Moutarde de Dijon",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-53-soya",
        "name": "Sauce soya sans gluten ou tamari",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-53-sesame",
        "name": "Graines de sésame grillées",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-53-huile",
        "name": "Huile d'olive",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Cuire le riz au jasmin à l'eau bouillante salée pendant 12 minutes.",
      "Mélanger le sirop d'érable, la moutarde de Dijon et la sauce soya pour créer la laque.",
      "Préchauffer la plancha à 190°C et huiler légèrement la surface.",
      "Faire sauter les fleurettes de brocoli avec un filet d'eau et d'huile sur la zone moyenne (8 minutes sous cloche si possible).",
      "Poser les pavés de saumon côté peau sur la zone vive. Cuire 5 minutes sans les bouger, badigeonner le dessus de laque à l'érable, puis retourner 2 minutes.",
      "Saupoudrer de graines de sésame et servir avec le riz chaud et le brocoli croquant."
    ]
  },
  {
    "id": "rec-54",
    "title": "Brochettes de filet de porc souvlaki & tzatziki maison",
    "subtitle": "Cubes de porc marinés à l'origan et citron, pommes de terre grecques dorées et salade concombre-feta",
    "proteinType": "Filet de porc",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 15,
    "calories": 490,
    "macros": {
      "proteins": 39,
      "carbs": 35,
      "fats": 19
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Grecque",
      "Porc",
      "Fraîcheur",
      "Plancha"
    ],
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    "description": "Cubes de filet de porc extra-tendre marinés dans l'huile d'olive, jus de citron, ail et origan grec. Grillés à feu vif sur la plancha avec des quartiers de pommes de terre dorées et servis avec une sauce tzatziki fraîche.",
    "planchaTips": "Plancha à 220°C. Tourner les brochettes d'un quart de tour toutes les 2-3 minutes pour marquer les 4 côtés et conserver le cœur juteux du filet de porc.",
    "ingredients": [
      {
        "id": "ing-rec-54-prot",
        "name": "Filet de porc coupé en cubes de 3 cm",
        "quantity": 650,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-54-carb",
        "name": "Pitas grecs moelleux",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-54-concombre",
        "name": "Concombre anglais râpé et égoutté",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-54-yogourt",
        "name": "Yogourt grec nature 10%",
        "quantity": 175,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-54-ail",
        "name": "Gousses d'ail pressées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-54-citron",
        "name": "Jus de citron frais",
        "quantity": 25,
        "unit": "ml",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-54-origan",
        "name": "Origan grec séché",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-54-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-54-sel",
        "name": "Sel de mer et poivre",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Enfiler les cubes de filet de porc mariné sur des brochettes.",
      "Mélanger le yogourt grec, le concombre râpé pressé, l'ail, le jus de citron, sel et filet d'huile d'olive pour le tzatziki.",
      "Préchauffer la plancha à 220°C.",
      "Déposer les quartiers de pommes de terre assaisonnés d'origan et jus de citron sur la zone moyenne (cuire 12-14 min en retournant souvent).",
      "Saisir les brochettes de souvlaki sur la zone vive 8 à 10 minutes en les tournant pour dorer tous les côtés.",
      "Servir les brochettes chaudes avec les patates grecques, le tzatziki onctueux et une rondelle de citron."
    ]
  },
  {
    "id": "rec-55",
    "title": "Halloumi grillé, quinoa aux herbes & légumes méditerranéens",
    "subtitle": "Tranches de fromage halloumi dorées à la plancha, courgettes, tomates cerises confites et vinaigrette balsamique",
    "proteinType": "Végétarien",
    "cookingMode": "rapide",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 12,
    "calories": 470,
    "macros": {
      "proteins": 28,
      "carbs": 40,
      "fats": 22
    },
    "allergens": [
      "Lactose"
    ],
    "tags": [
      "Végétarien",
      "Fromage Grillé",
      "Méditerranéen",
      "Rapide"
    ],
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "description": "Le fromage halloumi ne fond pas à la chaleur et développe une croûte dorée croustillante exceptionnelle sur la plancha. Servi sur un lit de quinoa moelleux avec courgettes et tomates cerises éclatées au basilic.",
    "planchaTips": "Plancha à 210°C sans matière grasse superflue (le fromage rend son propre gras). 2 minutes de chaque côté suffisent pour une belle couleur dorée.",
    "ingredients": [
      {
        "id": "ing-rec-55-prot",
        "name": "Fromage Halloumi à griller coupé en tranches épaisses",
        "quantity": 350,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-55-carb",
        "name": "Quinoa blanc ou tricolore cuit",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-55-courgettes",
        "name": "Courgettes en rondelles",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-55-tomates",
        "name": "Tomates cerises entières",
        "quantity": 200,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-55-balsamique",
        "name": "Vinaigre balsamique",
        "quantity": 20,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-55-basilic",
        "name": "Basilic frais ciselé",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-55-ail",
        "name": "Gousse d'ail pressée",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-55-huile",
        "name": "Huile d'olive",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Rincer et cuire le quinoa dans de l'eau bouillante salée pendant 12 minutes, puis égoutter.",
      "Préchauffer la plancha à feu moyen-vif (210°C).",
      "Faire griller les rondelles de courgettes et les tomates cerises sur la plaque avec un filet d'huile d'olive pendant 6 minutes jusqu'à ce que les tomates éclatent.",
      "Déposer les tranches de halloumi sur la zone vive et griller 2 minutes de chaque côté jusqu'à belle coloration dorée.",
      "Mélanger le quinoa avec les légumes grillés chauds, le basilic ciselé et le vinaigre balsamique.",
      "Dresser les tranches de halloumi croustillantes sur le quinoa méditerranéen chaud."
    ]
  },
  {
    "id": "rec-56",
    "title": "Pains baos au flanc de porc sticky grillé à la plancha",
    "subtitle": "Flanc de porc laqué sauce soja-miel-sriracha, mayonnaise japonaise épicée et julienne de légumes croquants",
    "proteinType": "Filet de porc",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 25,
    "cookTime": 30,
    "calories": 680,
    "macros": {
      "proteins": 38,
      "carbs": 64,
      "fats": 32
    },
    "allergens": [
      "Soya",
      "Sésame",
      "Gluten",
      "Œufs",
      "Moutarde"
    ],
    "tags": [
      "Plancha Star",
      "Pains Baos",
      "Asiatique",
      "Porc",
      "Street Food",
      "Coup de Cœur"
    ],
    "isNewWeekly": false,
    "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    "description": "Le flanc de porc au summum absolu de la saveur ! Tranches de 2 cm bien dorées et croustillantes sur la plancha, puis braisées et laquées sur zone douce dans une poêle avec une sauce riche (soya claire & foncée, miel, sriracha, anis étoilé et cannelle). Servi dans des pains baos vapeur ultra-moelleux avec mayonnaise japonaise Kewpie épicée, concombre et carottes en juliennes.",
    "planchaTips": "Gestion bi-zone indispensable : Chauffer une zone à intensité moyenne-vive (210°C) pour saisir et dorer le flanc 12 à 18 minutes, et une zone à intensité faible pour déposer la poêle contenant la sauce mijotée 15 minutes.",
    "ingredients": [
      {
        "id": "ing-rec-56-prot",
        "name": "Flanc de porc frais coupé en tranches épaisses de 2 cm",
        "quantity": 1000,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-56-baos",
        "name": "Pains baos moelleux",
        "quantity": 10,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-concombre",
        "name": "Concombre anglais coupé en fines juliennes",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-56-carottes",
        "name": "Carottes fraîches pelées et coupées en juliennes",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-56-mayo",
        "name": "Mayonnaise japonaise de type Kewpie",
        "quantity": 125,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-sriracha",
        "name": "Sauce sriracha",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-soya-claire",
        "name": "Sauce soya claire",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-soya-foncee",
        "name": "Sauce soya foncée",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-miel",
        "name": "Miel pur d'abeille",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-ail",
        "name": "Gousses d'ail râpées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-56-gingembre",
        "name": "Gingembre frais râpé",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-56-vinaigre",
        "name": "Vinaigre de riz",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-sesame",
        "name": "Graines de sésame grillées",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-anis",
        "name": "Anis étoilé (badiane)",
        "quantity": 3,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-cannelle",
        "name": "Bâtons de cannelle",
        "quantity": 2,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-56-oignons-verts",
        "name": "Oignons verts tranchés",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-56-coriandre",
        "name": "Coriandre fraîche",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Chauffer la plancha avec une zone de cuisson à intensité moyenne-vive (210°C) et une autre à intensité faible.",
      "Couper le flanc de porc en tranches régulières de 2 cm (3/4 po) d'épaisseur et saupoudrer uniformément d'épices tout usage.",
      "Sur la zone vive, saisir les tranches de flanc de 12 à 18 minutes en les retournant à mi-cuisson jusqu'à ce qu'elles soient bien croustillantes.",
      "Parallèlement, déposer une poêle directement sur la zone à intensité faible. Y mélanger l'eau (125 ml), les sauces soya claire et foncée, le miel, la sriracha, le vinaigre de riz, l'ail, le gingembre, le sésame, le poivre de Sichuan, les oignons verts, les anis étoilés et les bâtons de cannelle.",
      "Une fois les tranches de flanc bien saisies et croustillantes, les déposer dans la sauce dans la poêle. Couvrir et laisser mijoter 15 minutes pour bien imprégner la viande.",
      "Retirer les aromates (anis étoilés et cannelle) et les tranches de flanc de la poêle. Laisser la sauce réduire quelques minutes jusqu'à ce qu'elle épaississe et devienne sirupeuse.",
      "Couper les tranches de flanc de porc laqué selon le format désiré pour garnir les pains baos.",
      "Dans un petit bol, mélanger la mayonnaise japonaise Kewpie et l'huile infusée aux piments (ou sambal oelek).",
      "Faire tiédir les pains baos à la vapeur. Garnir chaque pain bao d'une tranche de flanc de porc sticky, de julienne de concombre, de julienne de carottes, d'une cuillère de sauce réduite et d'un trait de mayonnaise épicée. Garnir de coriandre fraîche.",
      "Déguster chaud et savourer ce festin asiatique incomparable !"
    ]
  },
  {
    "id": "rec-57",
    "title": "Côtes de bœuf coréennes (Galbi) marinées à la plancha & riz au sésame",
    "subtitle": "Short ribs tranchées minces marinées poire asiatique, ail et huile de sésame, riz au jasmin et concombres croquants",
    "proteinType": "Bavette de boeuf",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 10,
    "calories": 590,
    "macros": {
      "proteins": 44,
      "carbs": 46,
      "fats": 26
    },
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Plancha Star",
      "Bœuf",
      "Coréen",
      "Rapide",
      "Familial"
    ],
    "isNewWeekly": false,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "description": "Les fameuses côtes de bœuf galbi coupées à la coréenne, marinées dans un mélange savoureux de purée de poire nashi, sauce soya, cassonade, ail pressé et huile de sésame grillé. Cuites en un éclair sur une plancha fumante pour une texture tendre et caramélisée.",
    "planchaTips": "Plancha très chaude (230°C). 2 à 3 minutes par côté suffisent amplement car la viande est tranchée mince. Laisser caraméliser sans trop remuer.",
    "ingredients": [
      {
        "id": "ing-rec-57-prot",
        "name": "Côtes de bœuf coupées mince style coréen (Galbi ou flanken)",
        "quantity": 800,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-57-carb",
        "name": "Riz blanc au jasmin ou calrose",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-57-concombre",
        "name": "Concombre anglais en fines rondelles",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-57-vinaigre",
        "name": "Vinaigre de riz",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-57-oignons-verts",
        "name": "Oignons verts tranchés",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-57-soya",
        "name": "Sauce soya",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-57-poire",
        "name": "Purée de poire asiatique ou compote",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-57-cassonade",
        "name": "Cassonade dorée",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-57-ail",
        "name": "Gousses d'ail émincées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-57-sesame-huile",
        "name": "Huile de sésame grillé",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-57-sesame-graines",
        "name": "Graines de sésame grillées",
        "quantity": 15,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Faire cuire le riz au jasmin dans 2 fois son volume d'eau salée pendant 12 minutes.",
      "Faire mariner les lamelles de bœuf dans le mélange soya, poire, ail, cassonade et huile de sésame au moins 15 minutes.",
      "Préchauffer la plancha à très haute température (230°C).",
      "Déposer les côtes de bœuf égouttées sur la zone très chaude et saisir 2 à 3 minutes par côté jusqu'à belle caramélisation brillante.",
      "Faire sauter rapidement les oignons verts et les lamelles de concombre sur la zone moyenne 2 minutes.",
      "Dresser le bœuf galbi caramélisé sur le riz chaud parsemé de graines de sésame et servir avec les concombres vinaigrés."
    ]
  },
  {
    "id": "rec-58",
    "title": "Hauts de cuisse de poulet jerk jamaïcain & ananas grillé",
    "subtitle": "Poulet parfumé aux épices jerk et thym frais, tranches d'ananas caramélisées à la plancha et riz aux haricots rouges",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 15,
    "cookTime": 18,
    "calories": 540,
    "macros": {
      "proteins": 42,
      "carbs": 48,
      "fats": 18
    },
    "allergens": [
      "Soya"
    ],
    "tags": [
      "Plancha Star",
      "Poulet",
      "Caraïbes",
      "Sans Gluten",
      "Exotique"
    ],
    "isNewWeekly": false,
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "description": "Une explosion de saveurs caribéennes ! Hauts de cuisse de poulet désossés marinés aux épices jerk traditionnelles (piment de la Jamaïque, thym, lime, ail, gingembre et cassonade). Grillés sur la plancha à côté de tranches d'ananas frais caramélisées.",
    "planchaTips": "Plancha à 210°C. Poser le poulet côté peau en premier pendant 8 minutes. Placer les tranches d'ananas sur la zone moyenne pour développer une dorure sucrée irrésistible.",
    "ingredients": [
      {
        "id": "ing-rec-58-prot",
        "name": "Hauts de cuisse de poulet désossés sans peau",
        "quantity": 700,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-58-carb",
        "name": "Riz blanc au jasmin",
        "quantity": 250,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-58-haricots",
        "name": "Haricots rouges en conserve rincés",
        "quantity": 398,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-58-ananas",
        "name": "Tranches d'ananas frais ou en conserve égoutté",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-58-soya",
        "name": "Sauce soya",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-58-cassonade",
        "name": "Cassonade",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-58-epices-allspice",
        "name": "Piment de la Jamaïque (allspice)",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-58-epices-thym",
        "name": "Thym séché",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-58-ail",
        "name": "Gousses d'ail pressées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-58-limes",
        "name": "Limes pour jus et quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-58-huile",
        "name": "Huile végétale pour cuisson",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Enrober les hauts de cuisse de poulet de marinade jerk et laisser reposer 10 minutes.",
      "Cuire le riz avec les haricots rouges égouttés et une pincée de thym dans l'eau salée pendant 12 minutes.",
      "Préchauffer la plancha à 210°C.",
      "Déposer les tranches d'ananas sur la zone moyenne et cuire 4 minutes par côté jusqu'à marquage doré.",
      "Saisir les hauts de cuisse sur la zone vive environ 7 à 8 minutes par côté jusqu'à ce que la chair soit bien cuite et savoureusement grillée.",
      "Servir le poulet jerk chaud avec les tranches d'ananas caramélisées, le riz aux haricots et un quartier de lime fraîche."
    ]
  },
  {
    "id": "rec-59",
    "title": "Tacos de crevettes grillées à la lime, coriandre & salsa de maïs croquant",
    "subtitle": "Crevettes sautées aux épices mexicaines, maïs doré à la plancha, tortillas tièdes et crème à la lime",
    "proteinType": "Crevettes & Poissons",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 12,
    "cookTime": 8,
    "calories": 480,
    "macros": {
      "proteins": 36,
      "carbs": 52,
      "fats": 14
    },
    "allergens": [
      "Crustacés",
      "Lactose"
    ],
    "tags": [
      "Plancha Star",
      "Crevettes",
      "Mexicain",
      "Tacos",
      "Rapide 15min"
    ],
    "isNewWeekly": false,
    "image": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    "description": "Des tacos festifs prêts en un clin d'œil ! Crevettes sauvages marinées au cumin, paprika fumé, ail et jus de lime, sautées 4 minutes sur la plancha. Accompagnées de grains de maïs grillés croustillants et d'avocat crémeux.",
    "planchaTips": "Plancha très vive (220°C). Cuire les crevettes très rapidement pour préserver leur texture juteuse et croquante. Réchauffer les petites tortillas directement sur la plaque 20 secondes.",
    "ingredients": [
      {
        "id": "ing-rec-59-prot",
        "name": "Grosses crevettes crues décortiquées et déveinées (31/40)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-59-tortillas",
        "name": "Petites tortillas de maïs ou blé",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-59-mais",
        "name": "Maïs doux en grains égoutté",
        "quantity": 150,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-59-avocats",
        "name": "Avocats mûrs coupés en dés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-59-creme",
        "name": "Crème sure légère ou yogourt grec",
        "quantity": 100,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-59-limes",
        "name": "Limes pour jus et quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-59-coriandre",
        "name": "Coriandre fraîche ciselée",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-59-paprika-paprika",
        "name": "Paprika fumé",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-59-paprika-cumin",
        "name": "Cumin moulu",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-59-ail",
        "name": "Poudre d'ail",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-59-huile",
        "name": "Huile d'olive",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Mélanger les crevettes avec les épices mexicaines, 1 c. à soupe d'huile d'olive et le jus d'une lime.",
      "Dans un bol, mélanger la crème sure avec le jus de lime restant et une pincée de sel.",
      "Préchauffer la plancha à 220°C.",
      "Faire sauter les grains de maïs sur la zone moyenne avec un filet d'huile pendant 4 minutes jusqu'à belle coloration dorée.",
      "Déposer les crevettes sur la zone vive et saisir 2 minutes de chaque côté jusqu'à ce qu'elles deviennent roses et opaques.",
      "Réchauffer les tortillas 20 secondes sur la plancha.",
      "Garnir les tortillas de maïs doré, de crevettes grillées, de dés d'avocat, de sauce crème à la lime et de coriandre fraîche."
    ]
  },
  {
    "id": "rec-60",
    "title": "Brochettes de tofu croustillant satay & sauce crémeuse aux arachides",
    "subtitle": "Cubes de tofu extra-ferme marinés au curcuma et lait de coco, poivrons rouges, nouilles de riz et sauce satay",
    "proteinType": "Végétarien",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 490,
    "macros": {
      "proteins": 30,
      "carbs": 48,
      "fats": 20
    },
    "allergens": [
      "Soya",
      "Arachides",
      "Sésame"
    ],
    "tags": [
      "Plancha Star",
      "Végétarien",
      "Satay",
      "Sans Gluten",
      "Rapide"
    ],
    "isNewWeekly": false,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "description": "Le tofu sous sa forme la plus savoureuse et croustillante ! Cubes de tofu extra-ferme marinés dans un mélange de curcuma, gingembre, sauce soya et lait de coco, grillés à la plancha sur des brochettes avec poivrons croquants. Servis avec une sauce satay onctueuse aux arachides et lime.",
    "planchaTips": "Plancha à 210°C bien huilée. Bien égoutter et presser le tofu avant marinade pour qu'il développe une croûte croustillante et dorée sur chaque face.",
    "ingredients": [
      {
        "id": "ing-rec-60-prot",
        "name": "Tofu biologique extra-ferme pressé et coupé en gros cubes",
        "quantity": 700,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-60-carb",
        "name": "Nouilles de riz vermicelles",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-60-poivrons",
        "name": "Poivrons rouges coupés en carrés",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-60-concombre",
        "name": "Concombre anglais coupé en demi-lunes",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-60-beurre-arachide",
        "name": "Beurre d'arachide crémeux",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-60-lait-coco",
        "name": "Lait de coco",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-60-soya",
        "name": "Sauce soya ou tamari",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-60-lime",
        "name": "Jus de lime frais",
        "quantity": 15,
        "unit": "ml",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-60-curcuma",
        "name": "Curcuma moulu",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-60-gingembre",
        "name": "Gingembre frais râpé",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-60-ail",
        "name": "Poudre d'ail",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-60-huile-sesame",
        "name": "Huile de sésame grillé",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Tremper les nouilles de riz dans de l'eau bouillante 5 minutes, puis rincer à l'eau froide et égoutter.",
      "Enfiler les cubes de tofu mariné en alternance avec les morceaux de poivrons sur des brochettes.",
      "Dans une petite casserole ou bol, fouetter le beurre d'arachide avec le lait de coco, la sauce soya, le jus de lime et un filet d'eau chaude pour obtenir une sauce satay veloutée.",
      "Préchauffer la plancha à 210°C et huiler généreusement.",
      "Déposer les brochettes de tofu satay et griller 10 à 12 minutes en tournant régulièrement pour dorer les 4 faces.",
      "Dresser les brochettes dorées sur le lit de nouilles de riz et légumes croquants, et napper généreusement de sauce satay aux arachides."
    ]
  },
  {
    "id": "rec-61",
    "title": "Smash burgers au bacon fumé & oignons caramélisés à l'érable sur la plancha",
    "subtitle": "Bœuf haché croustillant smashé sur plaque brûlante, bacon croustillant, cheddar fort, oignons doux à l'érable et sauce secrète",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 10,
    "calories": 690,
    "macros": {
      "proteins": 46,
      "carbs": 48,
      "fats": 34
    },
    "allergens": [
      "Gluten",
      "Lactose",
      "Moutarde",
      "Œufs"
    ],
    "tags": [
      "Nouveauté Semaine",
      "Plancha Star",
      "Smash Burger",
      "Familial",
      "Coup de Cœur",
      "Street Food"
    ],
    "isNewWeekly": true,
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    "description": "Le burger ultime à la plancha québécoise ! Des boules de bœuf haché frais écrasées à froid sur plaque à 230°C pour développer une croûte dentelée irrésistiblement caramélisée. Garnies de bacon croustillant, cheddar fort fondu sous cloche, oignons fondants mijotés au sirop d'érable et sauce maison relevée dans un pain brioché doré au beurre.",
    "planchaTips": "Chauffer la plancha à 230°C. Smasher les boules de bœuf fermement avec une spatule rigide et du papier parchemin pendant 10 secondes. Ne plus toucher avant de retourner à 2 minutes.",
    "ingredients": [
      {
        "id": "ing-rec-61-boeuf",
        "name": "Bœuf haché mi-maigre façonné en 4 boules de 150g",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-61-bacon",
        "name": "Tranches de bacon fumé de dos ou régulier",
        "quantity": 8,
        "unit": "tranche",
        "department": "viandes"
      },
      {
        "id": "ing-rec-61-pains",
        "name": "Pains à burger briochés",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-61-cheddar",
        "name": "Fromage cheddar fort en tranches",
        "quantity": 4,
        "unit": "tranche",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-61-oignon",
        "name": "Gros oignon jaune émincé finement",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-61-erable",
        "name": "Sirop d'érable pur du Québec",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-61-beurre",
        "name": "Beurre doux",
        "quantity": 20,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-61-mayo",
        "name": "Mayonnaise",
        "quantity": 60,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-61-relish",
        "name": "Relish sucrée",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-61-ketchup",
        "name": "Ketchup",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-61-laitue",
        "name": "Feuilles de laitue fraîche",
        "quantity": 4,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-61-sel-poivre",
        "name": "Sel de mer et poivre noir du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer la sauce burger en mélangeant la mayonnaise, la relish sucrée et le ketchup.",
      "Préchauffer la plancha à 220°C. Faire dorer les tranches de bacon sur une zone pendant 6 minutes jusqu'à croustillant.",
      "Sur la zone moyenne avec le beurre, faire caraméliser l'oignon émincé 8 minutes avec le sirop d'érable.",
      "Déposer les 4 boules de bœuf sur la zone vive. Couvrir de papier parchemin et écraser de tout votre poids avec la spatule pour former une galette mince. Saler et poivrer généreusement.",
      "Cuire 2 minutes jusqu'à croûte bien foncée, décoller d'un coup sec à la spatule, retourner et poser immédiatement le cheddar sur chaque galette. Couvrir d'une cloche 1 minute.",
      "Toaster les pains briochés 1 minute sur la plaque beurrée.",
      "Monter les smash burgers : base de pain, sauce secrète, laitue, galette au cheddar fondant, deux tranches de bacon croustillant, oignons à l'érable et chapeau de pain."
    ]
  },
  {
    "id": "rec-62",
    "title": "Pavés de saumon laqués miel & sauce soya sur plancha, asperges et riz jasmin",
    "subtitle": "Saumon croustillant côté peau laqué au miel et gingembre, asperges vertes rôties et riz au jasmin",
    "proteinType": "Saumon & Poissons",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 10,
    "cookTime": 12,
    "calories": 590,
    "macros": {
      "proteins": 44,
      "carbs": 54,
      "fats": 20
    },
    "allergens": [
      "Soya",
      "Sésame"
    ],
    "tags": [
      "Nouveauté Semaine",
      "Plancha Star",
      "Sans Gluten",
      "Oméga-3",
      "Repas Équilibré",
      "Rapide"
    ],
    "isNewWeekly": true,
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "description": "Une cuisson de saumon digne des plus grands restaurants à la plancha : peau ultra-croustillante, chair nacrée et fondante laquée en fin de cuisson d'un glaçage brillant au miel, sauce soya, gingembre et sésame. Accompagné d'asperges fraîches grillées et de riz jasmin parfumé.",
    "planchaTips": "Plancha à 200°C bien huilée. Bien éponger la peau du saumon au papier essuie-tout avant de cuire. Cuire 5 à 6 minutes côté peau sans y toucher pour un croustillant parfait.",
    "ingredients": [
      {
        "id": "ing-rec-62-saumon",
        "name": "Pavés de saumon frais de l'Atlantique avec peau",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-62-riz",
        "name": "Riz parfumé au jasmin",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-62-asperges",
        "name": "Asperges fraîches éboutées",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-62-miel",
        "name": "Miel pur d'abeille",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-62-soya",
        "name": "Sauce soya sans gluten ou tamari",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-62-gingembre",
        "name": "Gingembre frais râpé",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-62-ail",
        "name": "Gousses d'ail pressées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-62-sesame",
        "name": "Graines de sésame grillées",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-62-huile",
        "name": "Huile d'olive",
        "quantity": 25,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-62-oignons-verts",
        "name": "Oignons verts tranchés finement",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      }
    ],
    "steps": [
      "Cuire le riz jasmin dans de l'eau salée 12 minutes, réserver au chaud.",
      "Dans un petit bol, fouetter le miel, la sauce soya, l'ail pressé et le gingembre frais râpé pour la laque.",
      "Préchauffer la plancha à 200°C et huiler légèrement.",
      "Déposer les asperges avec un filet d'huile d'olive et sel, les faire rouler 8 minutes.",
      "Déposer les pavés de saumon côté peau. Cuire 5 à 6 minutes côté peau sans bouger jusqu'à peau croustillante et chair cuite aux deux tiers.",
      "Retourner délicatement le saumon, napper généreusement de sauce au miel et cuire 2 minutes pour laquer.",
      "Dresser le riz jasmin chaud, les pavés de saumon laqués et les asperges rôties, puis garnir de graines de sésame et oignons verts."
    ]
  },
  {
    "id": "rec-63",
    "title": "Brochettes de poulet souvlaki au citron & origan, tzatziki frais et pitas grillés",
    "subtitle": "Bouchées de poulet marinées à l'huile d'olive, ail et origan grec, tzatziki maison au concombre et pain pita doré",
    "proteinType": "Poitrine de Poulet",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 12,
    "calories": 590,
    "macros": {
      "proteins": 48,
      "carbs": 52,
      "fats": 18
    },
    "allergens": [
      "Lactose",
      "Gluten"
    ],
    "tags": [
      "Nouveauté Semaine",
      "Plancha Star",
      "Méditerranéen",
      "Familial",
      "Brochettes",
      "Coup de Cœur"
    ],
    "isNewWeekly": true,
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    "description": "Le grand classique méditerranéen adoré de toute la famille : cubes de poitrine de poulet marinés dans l'huile d'olive extra-vierge, jus de citron, ail et origan grec séché, cuits à la plancha pour une chair juteuse et grillée. Servis avec un tzatziki maison à l'ail et concombre pressé et des pitas chauds.",
    "planchaTips": "Plancha à 210°C. Retourner les brochettes toutes les 3 minutes pour une dorure uniforme. Chauffer les pitas avec un filet d'huile 1 minute pour les rendre moelleux.",
    "ingredients": [
      {
        "id": "ing-rec-63-poulet",
        "name": "Poitrines de poulet coupées en cubes de 3 cm",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-63-pitas",
        "name": "Pains pitas grecs moelleux",
        "quantity": 4,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-63-concombre",
        "name": "Concombre anglais râpé et pressé",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-63-yogourt",
        "name": "Yogourt grec nature 10%",
        "quantity": 175,
        "unit": "ml",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-63-citron",
        "name": "Jus de citron frais",
        "quantity": 30,
        "unit": "ml",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-63-ail",
        "name": "Gousses d'ail pressées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-63-origan",
        "name": "Origan grec séché",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-63-huile",
        "name": "Huile d'olive extra-vierge",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-63-tomates",
        "name": "Tomates de serre tranchées",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-63-oignon",
        "name": "Oignon rouge tranché finement",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-63-sel-poivre",
        "name": "Sel de mer et poivre noir du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Dans un bol, mélanger le poulet avec 30 ml d'huile d'olive, le jus de citron, 2 gousses d'ail pressées, l'origan, sel et poivre. Enfiler sur des brochettes.",
      "Préparer le tzatziki : mélanger le concombre râpé bien essoré avec le yogourt grec, 1 gousse d'ail pressée, un filet d'huile d'olive et une pincée de sel.",
      "Préchauffer la plancha à 210°C et huiler.",
      "Déposer les brochettes de poulet et cuire 10 à 12 minutes en tournant d'un quart de tour toutes les 3 minutes.",
      "Déposer les pains pitas sur la zone moyenne 1 minute par côté pour les tiédir et les dorer légèrement.",
      "Servir les brochettes bien chaudes avec les pitas dorés, le tzatziki crémeux, les tranches de tomates et l'oignon rouge."
    ]
  },
  {
    "id": "rec-64",
    "title": "Côtelettes de porc glacées érable & moutarde à l'ancienne, grelots rôtis et haricots",
    "subtitle": "Côtelettes épaisses caramélisées à la plancha, pommes de terre grelots croustillantes et fèves vertes à l'ail",
    "proteinType": "Filet de porc",
    "cookingMode": "plancha",
    "timeCategory": "Moyen",
    "prepTime": 12,
    "cookTime": 18,
    "calories": 610,
    "macros": {
      "proteins": 45,
      "carbs": 54,
      "fats": 22
    },
    "allergens": [
      "Moutarde"
    ],
    "tags": [
      "Nouveauté Semaine",
      "Plancha Star",
      "Terroir Québécois",
      "Sans Gluten",
      "Confort",
      "Repas Équilibré"
    ],
    "isNewWeekly": true,
    "image": "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=800&q=80",
    "description": "Les meilleures côtelettes de porc du Québec : coupe du centre avec os saisies sur plancha chaude, laquées d'un sirop d'érable pur réduit avec moutarde de Meaux à l'ancienne et moutarde de Dijon. Servies avec des demi-grelots bien rissolés et des haricots verts croquants à l'ail.",
    "planchaTips": "Mettre les demi-grelots en premier sur la plancha à 200°C (15-18 min). Ne glacer les côtelettes qu'au dernier moment (dernière minute) pour éviter que le sucre de l'érable ne noircisse.",
    "ingredients": [
      {
        "id": "ing-rec-64-porc",
        "name": "Côtelettes de porc coupe du centre avec os",
        "quantity": 4,
        "unit": "unité (600g)",
        "department": "viandes"
      },
      {
        "id": "ing-rec-64-grelots",
        "name": "Pommes de terre grelots coupées en 2",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-64-haricots",
        "name": "Haricots verts frais éboutés",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-64-erable",
        "name": "Sirop d'érable pur québécois",
        "quantity": 45,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-64-moutarde-anc",
        "name": "Moutarde à l'ancienne en grains",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-64-dijon",
        "name": "Moutarde de Dijon",
        "quantity": 15,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-64-ail",
        "name": "Gousses d'ail émincées",
        "quantity": 3,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-64-huile",
        "name": "Huile d'olive",
        "quantity": 35,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-64-thym",
        "name": "Thym séché ou romarin frais",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-64-sel-poivre",
        "name": "Sel de mer et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Dans un bol, mélanger le sirop d'érable, la moutarde à l'ancienne, la moutarde de Dijon et une pincée de thym.",
      "Préchauffer la plancha à 200°C et huiler.",
      "Poser les demi-grelots côté plat avec l'huile et l'ail. Cuire 15 minutes en remuant régulièrement pour les faire rissoler.",
      "Déposer les haricots verts à côté des grelots 8 minutes avant la fin de cuisson, saler et poivrer.",
      "Saisir les côtelettes de porc sur la zone vive 5 minutes de chaque côté.",
      "Badigeonner généreusement les deux faces du porc avec le glaçage érable-moutarde lors de la dernière minute de cuisson.",
      "Dresser les côtelettes laquées et brillantes avec les grelots dorés et les haricots croquants."
    ]
  },
  {
    "id": "rec-65",
    "title": "Fajitas de bavette de bœuf marinée à la lime & cumin sur plancha vive, poivrons et guacamole",
    "subtitle": "Lanières de bavette de bœuf saisies vives à 230°C, trio de poivrons fondants, tortillas de maïs et guacamole maison",
    "proteinType": "Boeuf haché",
    "cookingMode": "plancha",
    "timeCategory": "Rapide",
    "prepTime": 15,
    "cookTime": 8,
    "calories": 620,
    "macros": {
      "proteins": 46,
      "carbs": 50,
      "fats": 24
    },
    "allergens": [],
    "tags": [
      "Nouveauté Semaine",
      "Plancha Star",
      "Tex-Mex",
      "Festif",
      "Sans Gluten",
      "Coup de Cœur"
    ],
    "isNewWeekly": true,
    "image": "https://images.unsplash.com/photo-1534352956036-cd81e27dd615?auto=format&fit=crop&w=800&q=80",
    "description": "Le summum du spectacle et des saveurs sur plaque : de la bavette de bœuf persillée tranchée finement contre le grain, marinée à la lime fraîche, cumin, ail et piment doux, saisie à feu vif 2 à 3 minutes pour une caramélisation intense et une tendreté incomparable. Servie avec un monticule de poivrons colorés, oignons doux, tortillas chaudes et guacamole crémeux.",
    "planchaTips": "Température maximale (230°C). Saisir les lanières de bavette très rapidement (2 min) sans les surcuire pour préserver leur jutosité. Réchauffer les tortillas sous cloche.",
    "ingredients": [
      {
        "id": "ing-rec-65-boeuf",
        "name": "Bavette de bœuf tranchée en fines lanières contre le grain",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-65-tortillas",
        "name": "Petites tortillas de maïs ou blé sans gluten",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-65-poivron-r",
        "name": "Poivron rouge émincé en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-65-poivron-j",
        "name": "Poivron jaune émincé en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-65-poivron-v",
        "name": "Poivron vert émincé en lanières",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-65-oignon",
        "name": "Gros oignon rouge émincé",
        "quantity": 1,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-65-avocats",
        "name": "Avocats mûrs pour guacamole",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-65-limes",
        "name": "Limes pour jus et quartiers",
        "quantity": 2,
        "unit": "unité",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-65-cumin",
        "name": "Cumin moulu",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-65-chili",
        "name": "Poudre de chili mexicain doux",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-65-huile",
        "name": "Huile végétale pour friture vive",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-65-coriandre",
        "name": "Coriandre fraîche ciselée",
        "quantity": 15,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-65-sel-poivre",
        "name": "Sel de mer et poivre du moulin",
        "quantity": 5,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Mariner les lanières de bavette avec 15 ml d'huile, le jus d'une lime, le cumin, le chili doux, sel et poivre.",
      "Écraser les avocats avec le jus d'une demi-lime et de la coriandre pour préparer le guacamole frais.",
      "Chauffer la plancha à 230°C. Faire griller le trio de poivrons et l'oignon rouge 6 minutes jusqu'à ce qu'ils soient légèrement noircis et fondants.",
      "Pousser les poivrons sur la zone moyenne. Jeter les lanières de bavette sur la zone très vive et remuer vivement 2 à 3 minutes pour caraméliser.",
      "Chauffer les tortillas 30 secondes sur la plaque.",
      "Servir la bavette fumante et les poivrons dorés dans les tortillas chaudes avec le guacamole maison et des quartiers de lime."
    ]
  }
];
