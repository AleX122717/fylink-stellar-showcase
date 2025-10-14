# IceFy - Site Vitrine Professionnel

Bienvenue sur le projet **IceFy** ! Ce site vitrine moderne et animé présente une solution technologique révolutionnaire pour la gestion communautaire et l'automatisation.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- **Node.js** (version 18 ou supérieure) - [Télécharger ici](https://nodejs.org/)
- **npm** (inclus avec Node.js)

## 🚀 Installation

### 1. Cloner le projet

```bash
git clone <URL_DU_REPOSITORY>
cd icefy
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le projet en mode développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Compile le projet pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie la qualité du code

## 📁 Structure du projet

Voici la liste complète des fichiers à copier pour ce projet :

### Fichiers de configuration racine
- `index.html` - Point d'entrée HTML
- `vite.config.ts` - Configuration Vite
- `tailwind.config.ts` - Configuration Tailwind CSS
- `tsconfig.json` - Configuration TypeScript
- `tsconfig.app.json` - Configuration TypeScript pour l'application
- `tsconfig.node.json` - Configuration TypeScript pour Node
- `postcss.config.js` - Configuration PostCSS
- `eslint.config.js` - Configuration ESLint
- `components.json` - Configuration des composants shadcn/ui
- `package.json` - Dépendances et scripts npm
- `package-lock.json` - Verrouillage des versions de dépendances
- `.gitignore` - Fichiers à ignorer par Git

### Dossier `src/`

#### Fichiers principaux
- `src/main.tsx` - Point d'entrée de l'application React
- `src/App.tsx` - Composant principal
- `src/App.css` - Styles du composant App
- `src/index.css` - Styles globaux et design system
- `src/vite-env.d.ts` - Types Vite

#### `src/pages/`
- `src/pages/Index.tsx` - Page d'accueil principale
- `src/pages/NotFound.tsx` - Page 404

#### `src/components/` (Composants personnalisés)
- `src/components/Navigation.tsx` - Barre de navigation avec changement de langue
- `src/components/HeroSection.tsx` - Section héro avec slogan animé
- `src/components/FeaturesSection.tsx` - Section des fonctionnalités
- `src/components/AboutSection.tsx` - Section À propos
- `src/components/PremiumSection.tsx` - Section Premium avec 2 offres
- `src/components/ContactSection.tsx` - Section Contact
- `src/components/Footer.tsx` - Pied de page avec réseaux sociaux
- `src/components/AnimatedBackground.tsx` - Arrière-plan animé avec vagues
- `src/components/TypewriterText.tsx` - Composant de texte animé (machine à écrire)

#### `src/components/ui/` (Composants UI shadcn)
- `src/components/ui/accordion.tsx`
- `src/components/ui/alert-dialog.tsx`
- `src/components/ui/alert.tsx`
- `src/components/ui/aspect-ratio.tsx`
- `src/components/ui/avatar.tsx`
- `src/components/ui/badge.tsx`
- `src/components/ui/breadcrumb.tsx`
- `src/components/ui/button.tsx`
- `src/components/ui/calendar.tsx`
- `src/components/ui/card.tsx`
- `src/components/ui/carousel.tsx`
- `src/components/ui/chart.tsx`
- `src/components/ui/checkbox.tsx`
- `src/components/ui/collapsible.tsx`
- `src/components/ui/command.tsx`
- `src/components/ui/context-menu.tsx`
- `src/components/ui/dialog.tsx`
- `src/components/ui/drawer.tsx`
- `src/components/ui/dropdown-menu.tsx`
- `src/components/ui/form.tsx`
- `src/components/ui/hover-card.tsx`
- `src/components/ui/input-otp.tsx`
- `src/components/ui/input.tsx`
- `src/components/ui/label.tsx`
- `src/components/ui/menubar.tsx`
- `src/components/ui/navigation-menu.tsx`
- `src/components/ui/pagination.tsx`
- `src/components/ui/popover.tsx`
- `src/components/ui/progress.tsx`
- `src/components/ui/radio-group.tsx`
- `src/components/ui/resizable.tsx`
- `src/components/ui/scroll-area.tsx`
- `src/components/ui/select.tsx`
- `src/components/ui/separator.tsx`
- `src/components/ui/sheet.tsx`
- `src/components/ui/sidebar.tsx`
- `src/components/ui/skeleton.tsx`
- `src/components/ui/slider.tsx`
- `src/components/ui/sonner.tsx`
- `src/components/ui/switch.tsx`
- `src/components/ui/table.tsx`
- `src/components/ui/tabs.tsx`
- `src/components/ui/textarea.tsx`
- `src/components/ui/toast.tsx`
- `src/components/ui/toaster.tsx`
- `src/components/ui/toggle-group.tsx`
- `src/components/ui/toggle.tsx`
- `src/components/ui/tooltip.tsx`
- `src/components/ui/use-toast.ts`

#### `src/contexts/`
- `src/contexts/LanguageContext.tsx` - Contexte de gestion des langues (FR/EN/ES)

#### `src/lib/`
- `src/lib/utils.ts` - Utilitaires
- `src/lib/i18n.ts` - Système d'internationalisation (traductions)

#### `src/hooks/`
- `src/hooks/use-mobile.tsx` - Hook pour détection mobile
- `src/hooks/use-toast.ts` - Hook pour les notifications toast

### Dossier `public/`
- `public/robots.txt` - Configuration SEO pour robots
- `public/favicon.ico` - Icône du site
- `public/placeholder.svg` - Image placeholder

## ✨ Fonctionnalités

- ✅ **Thème clair/sombre** avec transition fluide
- ✅ **Système multilingue** (Français, Anglais, Espagnol)
- ✅ **Animations avancées** (vagues, dégradés, texte machine à écrire)
- ✅ **Design responsive** adapté à tous les écrans
- ✅ **2 offres Premium** (Premium à 4,99€ et Premium+ à 19,99€)
- ✅ **Navigation rétractable** au scroll
- ✅ **Réseaux sociaux** (Discord, TikTok, Instagram)

## 🎨 Technologies utilisées

- **React 18** - Framework JavaScript
- **TypeScript** - Langage typé
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI modernes
- **Lucide React** - Icônes
- **React Router** - Navigation

## 📝 Personnalisation

Pour personnaliser les couleurs et le design, modifiez les fichiers suivants :
- `src/index.css` - Variables CSS du design system
- `tailwind.config.ts` - Configuration Tailwind et couleurs

Pour modifier les traductions :
- `src/lib/i18n.ts` - Ajoutez ou modifiez les traductions

## 🌐 Déploiement

Pour compiler le projet pour la production :

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`

## 🗑️ Fichiers non utilisés

Les fichiers suivants peuvent être ignorés car ils ne sont pas utilisés dans ce projet :
- `bun.lockb` - Fichier de verrouillage de Bun (non utilisé, utilise npm)

## 📄 Licence

Ce projet est privé et propriétaire.

---

**Développé avec ❄️ par l'équipe IceFy**