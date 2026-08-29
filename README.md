# 🔥 Plancha-Master

Application interactive d'organisation des repas familiaux (4 portions standard) et de liste d'épicerie hebdomadaire intelligente, articulée autour de la **cuisine à la plancha** et de la **cuisine rapide de semaine**.

---

## 🌟 Fonctionnalités Clés

1. **Catalogue de Recettes Familiales** :
   - Base de données riche de recettes québécoises et internationales (4 portions).
   - Filtres par mode de cuisson (Plancha, Rapide, Mixte), temps (<20 min, 20-35 min), protéines et exclusion d'allergènes.
   - Bouton magique aléatoire pour composer 5 repas équilibrés en 1 clic.

2. **Menu de la Semaine & Conseils de Chef** :
   - Vue sur 5 jours modulable (portions ajustables de 1 à 12 portions).
   - Fiches recettes complètes avec étapes interactives à cocher.
   - Encadrés spécifiques pour la cuisson à la plancha (températures, zones de saisie, déglaçage).

3. **Liste d'Épicerie Intelligente** :
   - Cumul automatique des ingrédients identiques.
   - Organisation par rayons :
     1. 🥦 Fruits et Légumes
     2. 🥩 Viandes & Poissons
     3. 🥫 Non Périssable (Allées & Garde-manger)
     4. 🧀 Produits Laitiers & Frais
     5. 🧊 Surgelés
   - Checklist interactive, ajout d'articles personnalisés et impression PDF.

4. **Commandes en Ligne Québec** :
   - Intégration directe de **Super C**, **Maxi**, **IGA**, **Metro** et **Walmart**.
   - Recherche d'articles en 1 clic pour chaque ingrédient.
   - Exportation formatée pour le presse-papier.

---

## 🚀 Installation & Développement Local

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:5173](http://localhost:5173) dans votre navigateur.

---

## 🌐 Déploiement en Ligne

Le projet inclut un workflow GitHub Actions automatique (`.github/workflows/deploy.yml`) pour GitHub Pages.
