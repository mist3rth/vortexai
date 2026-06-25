# Plan de Travail (TODO) - Découpage Vertex AI

Ce fichier suit le progrès des stories d'industrialisation du monolithe `App.tsx`.

## 🏗️ Phase 1 : Extraction des Composants Communs & UI
- [x] Créer `src/components/ui/Button.tsx` pour regrouper les styles des boutons interactifs.
- [x] Créer `src/components/ui/Input.tsx` pour factoriser le style des champs de texte.
- [x] Créer `src/components/ui/AmbientBackground.tsx` pour isoler les calques de fond complexes (vidéo, grids, glows).

## 🧩 Phase 2 : Extraction des Modaux & Drawers
- [x] Extraire `SignInModal.tsx` dans `src/components/modals/`.
- [x] Extraire `GetStartedWizard.tsx` (avec son terminal de logs simulé) dans `src/components/modals/`.
- [x] Extraire `PrivateExchangeDrawer.tsx` (avec le chatbot de support) dans `src/components/modals/`.
- [x] Extraire `MobileMenuDrawer.tsx` dans `src/components/modals/`.

## 📦 Phase 3 : Découpage des Sections Principales de App.tsx
- [x] Extraire la section de navigation (`Header`) vers `src/components/layout/Header.tsx`.
- [x] Extraire la Hero Section (Fold 1) vers `src/components/sections/HeroSection.tsx`.
- [x] Extraire la section tarifaire "Les Cercles d'Accès" vers `src/components/sections/PricingSection.tsx`.

## ⚙️ Phase 4 : Nettoyage & Consolidation d'App.tsx
- [x] Importer tous les composants découpés dans `src/App.tsx`.
- [x] Supprimer le code redondant d'App.tsx.
- [x] Valider le typage strict TS de l'ensemble du projet.
- [x] Mettre en place les Error Boundaries autour des sections critiques.

## ✨ Phase 5 : Optimisations (A11Y, SEO, Perf)
- [x] Valider la navigation au clavier et la présence des focus rings.
- [x] Injecter les balises SEO et les schémas JSON-LD.
- [x] Optimiser les médias (Vidéos, images).
- [x] Créer et intégrer la favicon multi-format (SVG, ICO, PNG) et le site.webmanifest.
- [x] Fluidifier l'animation de hauteur/marges de la FicheProduit lors de l'ouverture et de la fermeture pour éviter les sauts de page brusques.
- [x] Supprimer définitivement la fonctionnalité de sons (playBeep, soundEnabled, AudioContext) pour simplifier le code, alléger la maintenance et éliminer les re-rendus inutiles.
- [x] Supprimer les fichiers HTML statiques obsolètes (public/privacy.html et public/somatic-laws.html).
- [x] Créer le composant PrivacyView (src/components/sections/PrivacyView.tsx) et l'intégrer dans App.tsx.
- [x] Créer le composant SomaticLawsView (src/components/sections/SomaticLawsView.tsx) et l'intégrer dans App.tsx.
- [x] Lier les actions d'affichage des Vues dans FooterSection et App.tsx pour un affichage fluide sans rechargement.







