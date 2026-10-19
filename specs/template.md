# [ID_SPEC] : [Titre court et explicite de la fonctionnalité]

> **Fichier modèle de spécification pour l'Agent IA Antigravity**  
> Copiez ce fichier dans `specs/SPEC-XXX-<nom-court>.md` et complétez les sections ci-dessous avant de demander à l'Agent IA d'intervenir.

---

## 📌 Métadonnées
- **ID de la Spécification :** SPEC-001 *(incrémenter pour chaque nouvelle spec)*
- **Statut :** `Brouillon` | `Prêt pour développement` | `En cours` | `En revue` | `Terminé`
- **Auteur :** Félix-Antoine Legault
- **Date de création :** AAAA-MM-JJ
- **Branche Git cible :** `feature/<nom-court-kebab-case>` ou `fix/<nom-court-kebab-case>`

---

## 1. 🎯 Contexte & Objectif
- **Pourquoi cette évolution ?** Expliquez la recette, le filtre d'ingrédient, l'intégration des rabais d'épicerie ou l'amélioration de la liste d'épicerie.
- **Utilisateur cible :** Famille préparant ses repas et cherchant à optimiser le temps et le budget.
- **Bénéfice attendu :** Sélection de recettes plus intuitive, gestion fine des stocks et des courses.

---

## 2. 🔍 Périmètre (Scope)

### ✅ Ce qui est inclus (In-Scope)
- Liste des composants React (`src/components/`), services (`src/services/`) ou données de recettes à modifier.

### ❌ Ce qui est exclu (Out-of-Scope)
- Éléments non impactés.

---

## 3. 📋 Spécifications Fonctionnelles & Expérience Utilisateur

### 3.1 Description des étapes du parcours (Workflow repas)
1. **Étape 1 (Sélection) :** Filtrage par protéine, temps, plancha vs rapide, rabais...
2. **Étape 2 (Portions & Accompagnements) :** Ajustement du nombre de convives...
3. **Étape 3 (Liste d'épicerie) :** Regroupement par rayon, cochage des articles en stock...
4. **Étape 4 (Commande en ligne) :** Préparation de panier ou redirection vers magasins...

### 3.2 Données & Schémas Firebase
- Format des objets Recette (`title`, `proteinType`, `cookingMode`, `ingredients`, `instructions`).
- Persistance Firestore si applicable.

---

## 4. ✅ Critères d'Acceptation (Règles d'or pour validation)

- [ ] **Critère 1 :** L'interaction est réactive et fluide sans plantage lors des filtres ou sélections.
- [ ] **Critère 2 :** `npm.cmd run lint` (Oxlint) et `npm.cmd run build` passent sans aucune erreur.
- [ ] **Critère 3 :** Non-régression sur le calcul des portions et la liste d'épicerie.

---

## 5. 🛠️ Contraintes Techniques, Design & Performance

- **Framework :** React 19, Vite 8, Lucide React, Oxlint, Firebase 12.
- **Design & UI :** Palette moderne et chaleureuse, cartes interactives, micro-animations réactives.
- **Qualité de code :** Nettoyage rigoureux des imports et variables inutilisées détectées par Oxlint.

---

## 6. 🧪 Protocole de Validation & Tests Locaux

Avant de considérer la tâche comme terminée, l'Agent IA doit :
1. **Exécuter les commandes de validation locale documentées dans `AGENTS.md`** :
   ```powershell
   npm.cmd run lint
   npm.cmd run build
   ```
   *(ou exécuter `.\build.bat`).*
2. **S'assurer de zéro erreur de compilation Vite et zéro erreur bloquante Oxlint.**

---

## 7. 🔀 Protocole Git & Livraison

1. **Création de la branche isolée :**
   ```bash
   git checkout main
   git pull
   git checkout -b feature/<nom-de-la-tache>
   ```
2. **Commits atomiques et clairs :**
   ```bash
   git commit -m "feat(recipes): ajout de filtres avances pour repas familiaux"
   ```
3. **Présentation obligatoire du `git diff` :**
   - Inspecter le diff : `git diff main...HEAD`
   - Présenter le résumé complet et les détails des modifications à l'utilisateur pour validation humaine.
