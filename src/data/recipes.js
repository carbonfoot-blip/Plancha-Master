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
        "name": "Poitrine de Poulet (Fajitas de poulet express)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-11-carb",
        "name": "Tortillas de maïs ou blé (féculent)",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-11-veg",
        "name": "Poivrons tri-couleurs et Salade de maïs doux",
        "quantity": 450,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-11-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-11-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Tortillas de maïs ou blé) et les légumes frais (Poivrons tri-couleurs et Salade de maïs doux).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Boeuf haché (Bowl de vermicelles au bœuf teriyaki & Fleurets de brocoli)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-12-carb",
        "name": "Vermicelles de riz sans gluten (féculent)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-12-veg",
        "name": "Fleurets de brocoli frais et carottes",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-12-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-12-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Vermicelles de riz sans gluten) et les légumes frais (Fleurets de brocoli frais et carottes).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Saumon & Poissons (Pavés de truite saumonée)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-13-carb",
        "name": "Riz basmati (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-13-veg",
        "name": "Courgettes grillées et tomates cerises",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-13-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-13-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz basmati) et les légumes frais (Courgettes grillées et tomates cerises).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Végétarien (Stir-fry de tofu croustillant)",
        "quantity": 450,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-14-carb",
        "name": "Nouilles de riz sans gluten (féculent)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-14-veg",
        "name": "Pois mange-tout, poivrons et carottes",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-14-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-14-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Nouilles de riz sans gluten) et les légumes frais (Pois mange-tout, poivrons et carottes).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Porc haché (Boulettes de porc banh mi)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-15-carb",
        "name": "Vermicelles de riz sans gluten (féculent)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-15-veg",
        "name": "Carottes, concombres et fèves germées",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-15-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-15-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Vermicelles de riz sans gluten) et les légumes frais (Carottes, concombres et fèves germées).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Filet de porc (Brochettes de porc grecques)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-16-carb",
        "name": "Pommes de terre grelots au citron (sans gluten)",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-16-veg",
        "name": "Salade de concombres, tomates et tzatziki",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-16-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-16-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pommes de terre grelots au citron) et les légumes frais (Salade de concombres, tomates et tzatziki).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Escalopes de poulet parmigiana)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-17-carb",
        "name": "Pâtes penne (féculent)",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-17-veg",
        "name": "Salade romaine César et tomates cerises",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-17-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-17-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pâtes penne) et les légumes frais (Salade romaine César et tomates cerises).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Végétarien (Brochettes d'halloumi)",
        "quantity": 350,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-18-carb",
        "name": "Riz basmati aux herbes (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-18-veg",
        "name": "Courgettes, poivrons et champignons grillés",
        "quantity": 450,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-18-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-18-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz basmati aux herbes) et les légumes frais (Courgettes, poivrons et champignons grillés).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Dinde & Volailles (Chili express à la dinde)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-19-carb",
        "name": "Riz blanc jasmin (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-19-veg",
        "name": "Salade verte d'avocat, tomates et maïs doux",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-19-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-19-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz blanc jasmin) et les légumes frais (Salade verte d'avocat, tomates et maïs doux).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Crevettes & Fruits de mer (Wok de crevettes au sésame)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-20-carb",
        "name": "Vermicelles de riz sans gluten (féculent)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-20-veg",
        "name": "Fleurets de brocoli et pois mange-tout frais",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-20-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-20-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Vermicelles de riz sans gluten) et les légumes frais (Fleurets de brocoli et pois mange-tout frais).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Poulet glacé à la mangue)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-21-carb",
        "name": "Riz au jasmin (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-21-veg",
        "name": "Salade de chou et poivrons à la lime",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-21-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-21-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz au jasmin) et les légumes frais (Salade de chou et poivrons à la lime).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Dinde & Volailles (Bols express à la dinde)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-22-carb",
        "name": "Riz brun ou blanc (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-22-veg",
        "name": "Concombres, avocat et tomates cerises",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-22-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-22-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz brun ou blanc) et les légumes frais (Concombres, avocat et tomates cerises).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Boeuf haché (Bols au bœuf style fajita)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-23-carb",
        "name": "Riz blanc au jasmin (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-23-veg",
        "name": "Poivrons tri-couleurs, oignons et salsa",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-23-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-23-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz blanc au jasmin) et les légumes frais (Poivrons tri-couleurs, oignons et salsa).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Végétarien (Bols de tofu Bang Bang)",
        "quantity": 450,
        "unit": "g",
        "department": "produits_laitiers"
      },
      {
        "id": "ing-rec-24-carb",
        "name": "Riz au jasmin (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-24-veg",
        "name": "Concombres marinés, carottes et chou rouge",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-24-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-24-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz au jasmin) et les légumes frais (Concombres marinés, carottes et chou rouge).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Porc haché (Sandwichs de porc BBQ)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-25-carb",
        "name": "Patates douces en frites (féculent sans gluten)",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-25-veg",
        "name": "Salade de chou crémeuse québécoise",
        "quantity": 250,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-25-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-25-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Patates douces en frites) et les légumes frais (Salade de chou crémeuse québécoise).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Sauté de poulet au miel et cajous)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-26-carb",
        "name": "Riz au jasmin (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-26-veg",
        "name": "Fleurets de brocoli frais et carottes",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-26-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-26-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz au jasmin) et les légumes frais (Fleurets de brocoli frais et carottes).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Poulet au poivre et citron)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-27-carb",
        "name": "Pommes de terre grelots rôties (sans gluten)",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-27-veg",
        "name": "Fèves vertes fraîches éboutées",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-27-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-27-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pommes de terre grelots rôties) et les légumes frais (Fèves vertes fraîches éboutées).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Boeuf haché (Sauté de bœuf vietnamien (Bò Lúc Lắc))",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-28-carb",
        "name": "Riz rouge ou jasmin (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-28-veg",
        "name": "Rondelles de concombres et tomates fraîches",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-28-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-28-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz rouge ou jasmin) et les légumes frais (Rondelles de concombres et tomates fraîches).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Bols de poulet au miel et à l’ail)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-29-carb",
        "name": "Riz au jasmin (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-29-veg",
        "name": "Pois mange-tout frais et carottes",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-29-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-29-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz au jasmin) et les légumes frais (Pois mange-tout frais et carottes).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Poulet grillé à la grecque)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-30-carb",
        "name": "Pommes de terre grelots au citron (sans gluten)",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-30-veg",
        "name": "Salade grecque concombres, tomates et feta",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-30-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-30-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pommes de terre grelots au citron) et les légumes frais (Salade grecque concombres, tomates et feta).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Poulet tikka au chutney de mangues)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-31-carb",
        "name": "Riz basmati (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-31-veg",
        "name": "Fleurets de chou-fleur et haricots verts",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-31-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-31-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz basmati) et les légumes frais (Fleurets de chou-fleur et haricots verts).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Dinde & Volailles (Bols burrito à la dinde)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-32-carb",
        "name": "Riz brun et haricots noirs (féculent sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-32-veg",
        "name": "Tomates fraîches, maïs doux, avocat et laitue",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-32-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-32-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz brun et haricots noirs) et les légumes frais (Tomates fraîches, maïs doux, avocat et laitue).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Dinde & Volailles (Sandwichs de dinde sur pain plat)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-33-carb",
        "name": "Patates douces en frites (féculent sans gluten)",
        "quantity": 450,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-33-veg",
        "name": "Salade de mesclun et guacamole d'avocat",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-33-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-33-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Patates douces en frites) et les légumes frais (Salade de mesclun et guacamole d'avocat).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Porc haché (Quesadillas au porc effiloché)",
        "quantity": 400,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-34-carb",
        "name": "Tortillas et Riz mexicain (féculent)",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-34-veg",
        "name": "Salade de chou râpée à la lime et maïs",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-34-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-34-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Tortillas et Riz mexicain) et les légumes frais (Salade de chou râpée à la lime et maïs).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Boeuf haché (Taquitos croustillants au bœuf)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-35-carb",
        "name": "Tortillas de maïs pur (féculent sans gluten)",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-35-veg",
        "name": "Salade de laitue iceberg, tomates et guacamole",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-35-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-35-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Tortillas de maïs pur) et les légumes frais (Salade de laitue iceberg, tomates et guacamole).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Poulet fumé au bois de pommier)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-36-carb",
        "name": "Pommes de terre grelots rôties (sans gluten)",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-36-veg",
        "name": "Choux de Bruxelles coupés en deux rôtis",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-36-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-36-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pommes de terre grelots rôties) et les légumes frais (Choux de Bruxelles coupés en deux rôtis).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Fajitas de poulet grillé fiesta)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-37-carb",
        "name": "Tortillas souples (féculent)",
        "quantity": 8,
        "unit": "unité",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-37-veg",
        "name": "Poivrons tri-couleurs, oignons et salade avocat",
        "quantity": 450,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-37-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-37-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Tortillas souples) et les légumes frais (Poivrons tri-couleurs, oignons et salade avocat).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Porc haché (Linguines crémeuses au bacon & Fleurets de brocoli vapeur)",
        "quantity": 300,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-38-carb",
        "name": "Pâtes linguines (féculent)",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-38-veg",
        "name": "Fleurets de brocoli frais et tomates cerises",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-38-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-38-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pâtes linguines) et les légumes frais (Fleurets de brocoli frais et tomates cerises).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Boeuf haché (Burgers de bœuf grillé)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-39-carb",
        "name": "Patates douces en frites (féculent sans gluten)",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-39-veg",
        "name": "Salade de chou croquante et laitue tomate",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-39-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-39-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Patates douces en frites) et les légumes frais (Salade de chou croquante et laitue tomate).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Boeuf haché (Enchiladas gratinées au bœuf)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-40-carb",
        "name": "Tortillas de maïs et Haricots rouges (féculent sans gluten)",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-40-veg",
        "name": "Salade de maïs doux, poivrons rouges et avocat",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-40-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-40-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Tortillas de maïs et Haricots rouges) et les légumes frais (Salade de maïs doux, poivrons rouges et avocat).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Porc haché (Riz frit maison style resto chinois)",
        "quantity": 300,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-41-carb",
        "name": "Riz blanc froid de la veille (féculent sans gluten)",
        "quantity": 600,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-41-veg",
        "name": "Petits pois, fleurets de brocoli et oignons verts",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-41-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-41-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz blanc froid de la veille) et les légumes frais (Petits pois, fleurets de brocoli et oignons verts).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Boeuf haché (Smash tacos style Big Mac)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-42-carb",
        "name": "Pommes de terre grelots rissolées (sans gluten)",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-42-veg",
        "name": "Laitue iceberg émincée, tomates et cornichons",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-42-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-42-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pommes de terre grelots rissolées) et les légumes frais (Laitue iceberg émincée, tomates et cornichons).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "id": "ing-rec-43-prot",
        "name": "Végétarien (Quesadillas vide-frigo)",
        "quantity": 350,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-43-carb",
        "name": "Tortillas et Riz basmati doré (féculent)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-43-veg",
        "name": "Poivrons, courgettes et salade verte du frigo",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-43-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-43-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Tortillas et Riz basmati doré) et les légumes frais (Poivrons, courgettes et salade verte du frigo).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Porc haché (Burritos déjeuner au chorizo)",
        "quantity": 350,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-44-carb",
        "name": "Hashbrowns pommes de terre rissolées (sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-44-veg",
        "name": "Tomates fraîches en dés, avocat et salsa",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-44-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-44-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Hashbrowns pommes de terre rissolées) et les légumes frais (Tomates fraîches en dés, avocat et salsa).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Boeuf haché (Smash burgers au garam masala)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-45-carb",
        "name": "Pommes de terre Russet en wedges (sans gluten)",
        "quantity": 600,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-45-veg",
        "name": "Bébés épinards au beurre et oignons caramélisés",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-45-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-45-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pommes de terre Russet en wedges) et les légumes frais (Bébés épinards au beurre et oignons caramélisés).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Boeuf haché (Bulgogi de bœuf coréen)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-46-carb",
        "name": "Riz blanc collant au jasmin (sans gluten)",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-46-veg",
        "name": "Feuilles de laitue Boston, concombres et kimchi",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-46-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-46-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz blanc collant au jasmin) et les légumes frais (Feuilles de laitue Boston, concombres et kimchi).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Yakitori de poulet teriyaki)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-47-carb",
        "name": "Riz à sushi ou basmati (sans gluten)",
        "quantity": 300,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-47-veg",
        "name": "Fleurets de brocoli frais et blancs de poireaux",
        "quantity": 400,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-47-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-47-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Riz à sushi ou basmati) et les légumes frais (Fleurets de brocoli frais et blancs de poireaux).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Dinde & Volailles (Pizzas pains plats à la dinde tex-mex & Salade croquante)",
        "quantity": 450,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-48-carb",
        "name": "Pains plats ou naan et Maïs (féculent)",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-48-veg",
        "name": "Salade verte de concombres et poivrons frais",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-48-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-48-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pains plats ou naan et Maïs) et les légumes frais (Salade verte de concombres et poivrons frais).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Dinde & Volailles (Tacos de dinde minute)",
        "quantity": 500,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-49-carb",
        "name": "Tortillas et Riz mexicain (féculent sans gluten)",
        "quantity": 350,
        "unit": "g",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-49-veg",
        "name": "Laitue émincée, tomates en dés et crème sure",
        "quantity": 300,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-49-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-49-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Tortillas et Riz mexicain) et les légumes frais (Laitue émincée, tomates en dés et crème sure).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
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
        "name": "Poitrine de Poulet (Salade de poulet à l’érable)",
        "quantity": 600,
        "unit": "g",
        "department": "viandes"
      },
      {
        "id": "ing-rec-50-carb",
        "name": "Pommes de terre grelots rôties (sans gluten)",
        "quantity": 500,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-50-veg",
        "name": "Mesclun, tranches de pommes Honeycrisp et pacanes",
        "quantity": 350,
        "unit": "g",
        "department": "fruits_legumes"
      },
      {
        "id": "ing-rec-50-huile",
        "name": "Huile d'olive ou végétale pour cuisson",
        "quantity": 30,
        "unit": "ml",
        "department": "non_perissable"
      },
      {
        "id": "ing-rec-50-assaisonnement",
        "name": "Assaisonnement du chef, sel et poivre",
        "quantity": 10,
        "unit": "g",
        "department": "non_perissable"
      }
    ],
    "steps": [
      "Préparer le féculent (Pommes de terre grelots rôties) et les légumes frais (Mesclun, tranches de pommes Honeycrisp et pacanes).",
      "Assaisonner la protéine avec les épices et l'huile.",
      "Préchauffer la plancha ou la poêle à feu moyen-vif (210°C).",
      "Lancer la cuisson du féculent et des légumes sur la zone moyenne jusqu'à belle dorure.",
      "Saisir la protéine sur la zone vive jusqu'à cuisson parfaite et caramélisée.",
      "Dresser les 4 assiettes avec la portion de protéine, le féculent chaud et les légumes ou la salade fraîche."
    ]
  }
];
