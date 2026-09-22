# Cambaléa — École de danse contemporaine

Site vitrine réalisé pour **Cambaléa**, atelier chorégraphique.

Le site présente l'univers de l'école, ses cours, ses enseignants, son planning, ses tarifs ainsi qu'une galerie photo.

L'objectif est de proposer une expérience visuelle, immersive et responsive tout en conservant une navigation simple et accessible sur ordinateur, tablette et mobile.

---

## ✨ Présentation

Cambaléa est un site vitrine dédié à la présentation d'un atelier chorégraphique.

Le site met l'accent sur :

- la présentation de l'assocition
- les ateliers chorégraphique
- l'équipe
- le planning
- les tarifs
- la galerie photo
- le contact et l'inscription
- l'expérience utilisateur
- l'adaptation mobile
- le référencement naturel (SEO)
- les performances et l'accessibilité

---

## 🚀 Technologies utilisées

### Front-end

- **React**
- **TypeScript**
- **Vite**
- **Material UI (MUI)**
- **Framer Motion**
- **GSAP**
- **React Router**

### Outils

- **Yarn**
- **Git / GitHub**
- **Vite HMR**
- **Oxlint**

---

## 🎨 Interface

Le site possède une interface pensée autour de l'univers artistique de la chorégraphie.

### Fonctionnalités visuelles

- animations avec Framer Motion
- animations et effets avec GSAP
- transitions entre les différentes sections
- effets de lumière
- galerie photo interactive
- affichage des images en plein écran
- animations des éléments de navigation
- loader animé autour du logo
- animation du logo au survol
- thème clair / sombre
- adaptation aux écrans mobiles

---

## 🧭 Sections du site

Le site est organisé autour de plusieurs sections :

- **Accueil**
- **À propos / Association**
- **Cours**
- **Equipe**
- **Planning**
- **Tarifs**
- **Galerie**
- **Contact**

Les sections sont accessibles directement depuis la navigation principale.

---

## 🖼️ Galerie

La galerie présente une sélection d'images de l'association.

Pour conserver une interface légère, la section principale affiche une image de présentation tandis que les autres images sont accessibles via une galerie interactive.

La galerie permet notamment :

- d'ouvrir les images en grand
- de naviguer entre les images
- de fermer la galerie
- d'utiliser les interactions adaptées aux appareils mobiles

---

## 👩‍🏫 Enseignants

La section consacrée à l'équipe utilise une présentation sous forme de cartes.

Chaque memebre de l'équipe peut être présenté avec :

- sa photographie
- son nom
- sa présentation
- ses informations
- une interaction permettant d'afficher davantage de contenu

Un traitement visuel spécifique permet de mettre davantage en valeur les photographies.

---

## 🎬 Animations

Les animations sont principalement réalisées avec **Framer Motion** et **GSAP**.

Elles sont utilisées pour :

- les apparitions au scroll
- les transitions
- les interactions au survol
- les effets visuels
- les animations du logo
- les interactions de la galerie

Les animations sont utilisées pour renforcer l'identité visuelle du site sans empêcher l'accès au contenu.

---

## 🌓 Thème clair / sombre

Le site dispose d'un système de thème clair et sombre.

Les éléments graphiques sont adaptés au thème actif, notamment :

- les couleurs
- les textes
- les arrière-plans
- le logo
- certains éléments décoratifs

---

## 📱 Responsive Design

Le site est conçu pour fonctionner sur :

- ordinateurs
- tablettes
- smartphones

Les interfaces mobiles disposent d'adaptations spécifiques lorsque les interactions desktop ne sont pas adaptées aux écrans tactiles.

Le design repose principalement sur les breakpoints MUI plutôt que sur des modèles d'appareils spécifiques.

---

## 🔎 SEO

Le référencement naturel fait partie du développement du site.

Les éléments prévus comprennent notamment :

- titre de page optimisé
- meta description
- langue du document en français
- URL canonique
- Open Graph
- balises sémantiques HTML
- hiérarchie `h1`, `h2`, etc.
- attributs `alt` sur les images
- données structurées JSON-LD
- `robots.txt`
- `sitemap.xml`
- optimisation du référencement local

L'objectif est notamment de permettre aux utilisateurs de trouver Cambaléa via des recherches liées à la danse contemporaine et aux cours proposés par l'école.

---

## ♿ Accessibilité

Une attention particulière est portée à l'accessibilité :

- textes alternatifs sur les images
- contrastes suffisants
- navigation claire
- boutons identifiables
- interactions adaptées aux appareils tactiles
- respect de la structure sémantique HTML

---

## ⚡ Performance

Le projet utilise Vite afin de bénéficier d'un environnement de développement rapide et d'un build optimisé pour la production.

Les principales optimisations concernent notamment :

- chargement des ressources
- utilisation des assets optimisés
- lazy loading lorsque nécessaire
- limitation des animations coûteuses
- découpage du code
- optimisation des images
- chargement différé des composants lorsque pertinent

Vite fournit notamment un serveur de développement avec HMR ainsi qu'un processus de build optimisé pour la production. :contentReference[oaicite:1]{index=1}

---

## 📁 Structure du projet

La structure principale du projet est organisée de manière à séparer les pages, composants, sections et styles.

```text
src/
├── app/
│   ├── App.tsx
│   ├── appRoutes.tsx
│   └── routes.ts

│
├── assets/
│   ├── images/
│   ├── video/
│   └── ...
│
├── components/
│   ├── About/
│   ├── Contact/
│   ├── CookieConsent/
│   ├── Courses/
│   ├── Footer/
│   ├── Gallery/
│   ├── Home/
│   └── Layout/
│   ├── LegalNotice/
│   ├── Logo/
│   ├── Pricing/
│   ├── Schedule/
│   ├── Teachers/
│   ├── LogoLoader.tsx
│   └── Spotlight.tsx
│
│
├── theme/
│   ├── ...
│
├── utils/
│   ├── ...
│
├── seo/
│   ├── SEO.tsx
│   └── seoConfig.ts
│
├── main.tsx
└── ...
```
