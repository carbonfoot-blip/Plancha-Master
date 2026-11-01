# SPEC-002 : Ajout de 5 Nouvelles Recettes et Rotation des Nouveautés Hebdomadaires

> **Spécification fonctionnelle et technique pour Plancha-Master**

---

## 📌 Métadonnées
- **ID de la Spécification :** SPEC-002
- **Statut :** `En revue`
- **Auteur :** Félix-Antoine Legault / Antigravity Agent
- **Date de création :** 2026-11-01
- **Branche Git cible :** `feature/nouveautes-5-recettes`

---

## 1. 🎯 Contexte & Objectif
- **Pourquoi cette évolution ?** Enrichir le catalogue de recettes Plancha-Master avec 5 nouvelles recettes haute qualité adaptées à la plancha québécoise, appliquer la rotation hebdomadaire des nouveautés (les anciennes nouveautés rec-61 à rec-65 intègrent le grand catalogue sans badge, tandis que les 5 nouvelles recettes rec-66 à rec-70 deviennent les seules marquées « ✨ Nouveauté »), et mettre à jour les notes de version et spéciaux hebdomadaires.
- **Utilisateur cible :** Famille québécoise cuisinant à la plancha ou cherchant des repas savoureux, rapides et équilibrés avec des ingrédients 100% séparés et précis.
- **Bénéfice attendu :** Nouvelles idées de repas variés (poulet teriyaki, bavette bœuf ail noir, filet de porc médaillons, crevettes & pétoncles, burger halloumi), mise en avant claire dans le filtre « Nouveautés de la semaine » et mise à jour de la bannière et des release notes.

---

## 2. 🔍 Périmètre (Scope)

### ✅ Ce qui est inclus (In-Scope)
- `src/data/recipes.js` :
  - Retrait du badge nouveauté (`isNewWeekly: false` et exclusion du tag `'Nouveauté Semaine'`) sur les recettes `rec-61` à `rec-65`.
  - Ajout des 5 nouvelles recettes `rec-66` à `rec-70` avec `isNewWeekly: true`, le tag `'Nouveauté Semaine'`, 100% ingrédients séparés, macros, astuces plancha et étapes.
- `src/data/releaseNotes.js` :
  - Ajout de la note de mise à jour `v3.0` datée du 1er novembre 2026 détaillant les 5 nouvelles recettes et la rotation.
- `src/data/weeklyDeals.js` :
  - Alignement des dates et des rabais protéines de la semaine pour refléter le cycle actif et les correspondances avec les nouvelles recettes.

### ❌ Ce qui est exclu (Out-of-Scope)
- Modification des composants d'affichage de base (`Step1Selection.jsx`, `RecipeCard.jsx`, etc.) dont la logique consomme déjà `isNewWeekly` et `'Nouveauté Semaine'`.

---

## 3. 📋 Spécifications Fonctionnelles & Expérience Utilisateur

### 3.1 Détail des 5 Nouvelles Recettes
1. **rec-66 : Brochettes de poulet teriyaki & ananas caramélisé sur plancha, riz jasmin et edamames**
   - Protéine : Poitrine de Poulet (viandes)
   - Féculent : Riz au jasmin (non_perissable)
   - Légume : Ananas frais & fèves edamames (fruits_legumes)
2. **rec-67 : Bavette de bœuf marinée à l'ail noir & romarin sur plancha vive, frites de patates douces et maïs grillé**
   - Protéine : Bavette de boeuf AAA (viandes)
   - Féculent : Patates douces en frites (fruits_legumes)
   - Légume : Maïs doux rissolé au beurre (fruits_legumes)
3. **rec-68 : Médaillons de filet de porc au poivre de Madagascar & miel sur plancha, pommes rissolées et haricots verts**
   - Protéine : Filet de porc (viandes)
   - Féculent : Pommes de terre grelots (fruits_legumes)
   - Légume : Haricots verts fins (fruits_legumes)
4. **rec-69 : Crevettes géantes & pétoncles sautés à l'ail, lime & coriandre sur plancha, quinoa et légumes du soleil**
   - Protéine : Crevettes & Fruits de mer (viandes)
   - Féculent : Quinoa blanc (non_perissable)
   - Légume : Courgettes et poivron rouge rôtis (fruits_legumes)
5. **rec-70 : Burgers de fromage Halloumi grillé croustillant & pesto de poivrons rouges, roquette et frites de courge**
   - Protéine : Végétarien / Fromage Halloumi (produits_laitiers)
   - Féculent : Pains briochés & frites de courge butternut (non_perissable, fruits_legumes)
   - Légume : Roquette sauvage & pesto de poivrons (fruits_legumes, non_perissable)

### 3.2 Rotation stricte des nouveautés
- Seules `rec-66`, `rec-67`, `rec-68`, `rec-69`, `rec-70` possèdent `isNewWeekly: true` et le tag `'Nouveauté Semaine'`.
- Toutes les autres recettes (rec-01 à rec-65) ont `isNewWeekly: false` et aucun tag `'Nouveauté Semaine'`.

---

## 4. ✅ Critères d'Acceptation
- [ ] Le catalogue compte désormais 70 recettes officielles.
- [ ] Exactement 5 recettes possèdent `isNewWeekly: true` et `'Nouveauté Semaine'`.
- [ ] Le filtre « ✨ Nouveautés » sur l'Étape 1 affiche les 5 nouvelles recettes en tête de liste.
- [ ] Les release notes affichent la version `v3.0` avec les 5 nouvelles recettes.
- [ ] `npm.cmd run lint` (Oxlint) ne rapporte aucune erreur (`0 errors`).
- [ ] `npm.cmd run build` (Vite) compile avec succès sans avertissement bloquant.
