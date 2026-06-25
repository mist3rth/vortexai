# Architecture Technique - Vertex AI

Ce document présente la structure cible de l'application après le découpage modulaire du monolithe `App.tsx`.

## 📁 Structure des Répertoires Cible

```text
public/                 # Fichiers statiques servis à la racine
├── favicon.ico         # Icône multi-résolution (16x16, 32x32, 48x48)
├── favicon.svg         # Icône vectorielle moderne
├── favicon-96x96.png   # Icône PNG 96x96
├── apple-touch-icon.png # Icône pour appareils iOS (180x180)
├── web-app-manifest-192x192.png # Icône manifest PWA (192x192)
├── web-app-manifest-512x512.png # Icône manifest PWA (512x512)
└── site.webmanifest    # Fichier manifest de l'application
src/

├── assets/             # Médias optimisés (Vidéos, Images, SVGs)
├── components/         # Composants UI et Sections
│   ├── layout/         # Squelettes globaux (Header, FooterSection)
│   ├── modals/         # Modaux et Tiroirs coulissants
│   │   ├── SignInModal.tsx
│   │   ├── GetStartedWizard.tsx
│   │   ├── PrivateExchangeDrawer.tsx
│   │   └── MobileMenuDrawer.tsx
│   ├── sections/       # Sections uniques de la page d'accueil
│   │   ├── HeroSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ManifestoSection.tsx
│   │   ├── RadiusOnScrollSection.tsx
│   │   ├── ColorSweepSection.tsx
│   │   ├── HullShowcase.tsx
│   │   ├── PersonalityMatrix.tsx
│   │   └── SynapseHub.tsx
│   └── ui/             # Composants atomiques réutilisables (Design System)
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── AmbientBackground.tsx
│       └── TypingMentalHeader.tsx
├── constants/          # Textes, tarifs, FAQ et configurations statiques
├── hooks/              # Hooks personnalisés (Scroll, Resize)
├── styles/             # Styles globaux (index.css)
├── main.tsx            # Point d'entrée de montage React
└── App.tsx             # Orchestrateur de layout et d'états
```

## 🔄 Flux des États Global

`App.tsx` gère l'état global et propage les callbacks aux composants enfants :
- `settings` (DesignSettings) : Type d'arrière-plan, glow, opacité (persistant localStorage).
- `somaticSliders` (PersonalitySliders) : Caractéristiques d'esprit.
- `activeHullName` & `activeHullAccent` : Châssis sélectionné et son code couleur.
- Modaux ouverts/fermés : `isMenuOpen`, `isSignModalOpen`, `isGetStartedOpen`, `isConnectingOpen`.
- Sound & Auth status : `soundEnabled`, `userEmail`, `isSignedIn`.
