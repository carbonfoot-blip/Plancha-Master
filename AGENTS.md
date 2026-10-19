# Guide Central des Agents IA - menu-plancha-famille (Plancha Master)

Ce document constitue le cadre de référence impératif pour tout agent IA (Antigravity) intervenant sur le dépôt **menu-plancha-famille** (Plancha Master). Tout agent doit respecter scrupuleusement les consignes d'architecture, de style, le protocole de branches Git, le cycle de spécifications et les validations locales obligatoires.

---

## 1. 🏗️ Présentation & Architecture du Projet

### Rôle du projet
**Plancha Master** est une application web d'organisation de repas et de planification culinaire familiale. Elle propose la sélection de recettes adaptées à la plancha ou aux cuissons rapides, l'intégration des rabais hebdomadaires de protéines, la génération automatique d'une liste d'épicerie intelligente organisée par rayon et la préparation de commande en ligne.

### Stack Technologique
- **Frontend Core :** React 19 (Composants fonctionnels, hooks).
- **Build & Bundler :** Vite 8 avec `@vitejs/plugin-react`.
- **Linter & Qualité :** Oxlint 1.79+ (`.oxlintrc.json`).
- **Base de Données & Cloud :** Firebase Firestore 12.
- **Icônes & Animations :** Lucide React (`lucide-react`), Canvas Confetti (`canvas-confetti`).
- **Script Batch :** `build.bat` pour le déclenchement universel sous Windows.

### Structure du Répertoire
```text
menu-plancha-famille/
├── .git/                   # Répertoire Git
├── .github/                # Workflows GitHub Actions
├── AGENTS.md               # Guide central pour les agents IA (ce fichier)
├── specs/                  # Spécifications fonctionnelles et techniques
│   └── template.md         # Modèle de rédaction de spécifications
├── src/                    # Code source de l'application React
│   ├── components/         # Étapes (Step1Selection, Step2Portions, Step3Grocery, Step4OnlineStores)
│   ├── services/           # Services de données (dbService.js, etc.)
│   ├── data/               # Données statiques ou configurations
│   ├── App.jsx             # Composant racine
│   └── main.jsx            # Point d'entrée de l'application
├── public/                 # Assets statiques et images de recettes
├── .oxlintrc.json          # Configuration Oxlint
├── build.bat               # Script Windows déclenchant le build
├── vite.config.js          # Configuration Vite
└── package.json            # Dépendances et scripts de build / lint
```

---

## 2. 🎯 Conventions de Nommage & Bonnes Pratiques

- **Composants React :** PascalCase (`Step1Selection.jsx`, `RecipeCard.jsx`).
- **Services & Utilitaires :** camelCase (`dbService.js`, `cartHelper.js`).
- **Imports propres :** Toujours supprimer les imports ou variables inutilisées afin d'éviter d'alimenter les avertissements Oxlint.
- **Séparation des responsabilités :** Maintenir la séparation claire entre la couche d'accès aux données (`services/dbService.js`) et les composants d'affichage.
- **Ergonomie Mobile & Tablette :** Les interfaces de planification doivent être immédiatement utilisables sur une tablette en cuisine ou un smartphone à l'épicerie.

---

## 3. 🔀 Protocole Strict de Branches Git Isolées

L'agent IA doit appliquer le protocole de branches suivant sans exception :

1. **Interdiction de committer directement sur `main` :**
   Toute tâche ou modification commence par la création d'une branche dédiée.
2. **Nommage conventionnel de la branche :**
   - Nouvelle fonctionnalité : `feature/<nom-court-kebab-case>`
   - Correction de bug : `fix/<nom-court-kebab-case>`
   - Refactorisation / amélioration de composants : `refactor/<nom-court-kebab-case>`
   - Documentation : `docs/<nom-court-kebab-case>`
3. **Cycle de commande :**
   ```bash
   git checkout main
   git pull
   git checkout -b feature/nom-de-la-tache
   ```
4. **Commits atomiques :** Utiliser la convention *Conventional Commits* (`feat: ...`, `fix: ...`, `chore: ...`).
5. **Revue obligatoire du `git diff` :**
   - Avant toute proposition de fusion (`merge`), l'agent IA doit exécuter :
     ```bash
     git diff main...HEAD
     ```
   - L'agent doit **analyser et présenter clairement ce diff à l'utilisateur** afin de solliciter sa validation humaine explicite.
   - Ne jamais merger automatiquement sans accord explicite.

---

## 4. 📝 Cycle de Vie des Spécifications (`specs/`)

1. L'utilisateur formalise son besoin en dupliquant `specs/template.md` vers un nouveau fichier, par exemple `specs/SPEC-001-export-liste-epicerie.md`.
2. L'agent IA analyse les étapes impactées (Step 1 à Step 4) et les services Firebase.
3. L'agent crée la branche Git dédiée et développe la fonctionnalité.
4. L'agent lance le linter et le build local avant de présenter le diff.

---

## 5. 🧪 Script & Commandes de Validation Locale (Obligatoire)

L'agent IA doit **impérativement exécuter la séquence de validation suivante via `npm.cmd`** (ou `.\build.bat`) depuis la racine du projet avant de soumettre son travail :

```powershell
# 1. Vérification de la qualité du code avec Oxlint
npm.cmd run lint

# 2. Compilation de production avec Vite
npm.cmd run build
```

*(Ou en exécutant directement le script racine : `.\build.bat`)*

### Critères de réussite :
- Oxlint ne doit rapporter 0 erreur (`0 errors`).
- Vite doit compiler les bundles sans échec (code de retour 0).
