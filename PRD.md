# PRD : Industrialisation de Vertex AI

## 🎯 Vision du Produit
Vertex AI est une interface web haut de gamme dédiée à la personnalisation d'esprits virtuels pour humanoïdes. L'objectif est d'industrialiser le prototype actuel (monolithe de ~1400 lignes de code) en une application de production performante, modulaire et structurée, tout en conservant scrupuleusement le design original et ses micro-interactions.

## 🛠️ Spécifications Fonctionnelles
- **Personnalisation d'Esprit (Cognitive Sync) :** Sliders d'humeur/tempérament connectés aux états de l'application.
- **Sélection de Châssis (Hull Showcase) :** Choix des modèles d'humanoïdes physiques avec des variantes d'accent coloré.
- **Portail d'authentification :** Connexion simulée avec clé de sécurité.
- **Tiroir d'échange privé (Chat) :** Dialogue interactif avec un conseiller virtuel (simulation IA).
- **Wizard d'initialisation (Get Started) :** Configurer un esprit en 3 étapes avec logs système simulés.
- **Favicon et Identité Visuelle :** Intégration d'une favicon multi-format (SVG, ICO, PNG) basée sur le logo officiel de l'application.
- **Pages Légales & Réglementaires :** Tiroirs coulissants interactifs (Drawers) pour la Politique de Confidentialité et la Charte Somatique (loi d'usage de la conscience) intégrés directement dans l'application SPA sans rechargement.



## ⚙️ Exigences Techniques (Non-Fonctionnelles)
- **Stack :** React 19, TypeScript strict, Vite, Tailwind CSS, Motion (framer-motion).
- **Architecture :** Transition du monolithe `App.tsx` vers une architecture modulaire et atomique (`/src/components/layout`, `/src/components/sections`, `/src/components/ui`, `/src/components/modals`).
- **DRY (Don't Repeat Yourself) :** Mutualisation des éléments d'interface (Boutons, Inputs, Background) pour éviter les répétitions.
- **A11Y & WCAG AA :** Navigation au clavier, gestion correcte des attributs `aria` et focus rings.
- **Performance :** LCP < 2.5s, chargement optimal des médias (WebM/WebP) et blocage des animations hors-viewport.
- **Stabilité :** Implémentation d'Error Boundaries et de logs de développement conditionnels.
- **Fluidité des Layouts :** Les ouvertures et fermetures de composants en ligne (comme la Fiche Technique) doivent animer leur hauteur et marges de façon fluide pour éliminer les sauts de page saccadés.

