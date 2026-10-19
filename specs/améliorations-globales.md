# SPEC-002 : Authentification, Forfaits & Monétisation (Améliorations Globales)

> **Spécification fonctionnelle et technique pour Plancha-Master**  
> Statut : `Prêt pour revue` | Auteur : Félix-Antoine Legault

---

## 📌 Métadonnées
- **ID de la Spécification :** SPEC-002
- **Statut :** `En revue`
- **Auteur :** Félix-Antoine Legault
- **Branche Git cible :** `feature/contact-btn`

---

## 1. 🎯 Contexte & Objectif
- **Monétisation & Sécurité :** Transition d'une application libre d'accès à un modèle freemium sécurisé avec forfaits récurrents et comptes utilisateurs.
- **Utilisateur cible :** Familles québécoises planifiant leurs repas et cherchant à maximiser leur budget épicerie grâce aux rabais circulaires.
- **Bénéfice attendu :** Modèle économique pérenne permettant l'accès libre aux spéciaux et au catalogue de recettes, tout en réservant la planification avancée et la liste d'épicerie intelligente aux abonnés Premium.

---

## 2. 🔍 Périmètre (Scope)

### ✅ Ce qui est inclus (In-Scope)
- **Authentification complète :**
  - Connexion Email / Mot de passe.
  - Connexion Google Sign-In en 1 clic.
  - Réinitialisation de mot de passe oublié.
  - Inscription avec nom, courriel et mot de passe.
- **Gestion des Forfaits & Monétisation :**
  - **Compte Gratuit :** Consultation illimitée des rabais de la semaine (circulaires Super C, Maxi, IGA, Metro, Walmart) et consultation du catalogue des recettes.
  - **Compte Payant (Premium) :**
    - Forfait Mensuel : 2,99 $ / mois (sans engagement).
    - Forfait Annuel : 24,99 $ / an (économie de 30%, soit ~2,08 $/mois).
    - Déverrouille les étapes 2 (Menu de la semaine), 3 (Liste d'épicerie par rayons) et 4 (Commandes en ligne directe).
- **Rôle Administrateur :**
  - Remplacement de l'ancien mode Admin par authentification de compte avec rôle administrateur.
  - Déverrouillage des outils d'édition, création de recettes et synchronisation Cloud.

### ❌ Ce qui est exclu (Out-of-Scope)
- Passerelle de paiement bancaire en production directe (gestion par simulation / token d'abonnement immédiat).

---

## 3. 📋 Spécifications Fonctionnelles & Expérience Utilisateur

### 3.1 Nouveaux Composants et Services
- `src/services/authService.js` : Moteur d'authentification Firebase Auth avec cache local et mode secours.
- `src/components/AuthModal.jsx` : Modal interactive (Connexion, Inscription, Mot de passe oublié, Google Sign-in).
- `src/components/SubscriptionModal.jsx` : Vitrine des forfaits (2.99$/mois ou 24.99$/an) avec comparatif des fonctionnalités débloquées.
- `src/components/Navbar.jsx` : Cadenas visuels sur étapes 2, 3 et 4 pour les comptes gratuits, badge de profil (Gratuit, Premium, Admin), bouton "Passer à Premium".
- `src/App.jsx` : Contrôle d'accès `goToStep`, gestion des modals et footer enrichi.

---

## 4. ✅ Critères d'Acceptation Validés
- [x] L'utilisateur peut se connecter avec email/mot de passe ou Google.
- [x] L'option "Mot de passe oublié" envoie un lien de réinitialisation.
- [x] Les étapes 2, 3 et 4 sont verrouillées pour les comptes gratuits et s'ouvrent sur la modale d'abonnement.
- [x] Les 2 forfaits (2,99 $/mois et 24,99 $/an) sont clairement présentés.
- [x] Les comptes avec rôle Administrateur débloquent toutes les fonctions spéciales.
- [x] `npm.cmd run lint` (Oxlint) : 0 erreur.
- [x] `npm.cmd run build` (Vite) : code de retour 0.
