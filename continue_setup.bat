@echo off
echo Continuation de l'initialisation du projet Benilab Services...

:: Installation des dépendances additionnelles
echo Création de la structure de dossiers...
cd benilab_services
:: Dossiers publics
mkdir public\images\logo 2>nul
mkdir public\images\services 2>nul
mkdir public\images\projects 2>nul
mkdir public\images\team 2>nul
mkdir public\images\hero 2>nul
mkdir public\icons 2>nul

echo Création des fichiers image et icônes placeholders...
type nul > public\images\logo\logo-main.svg
type nul > public\images\logo\logo-mono.svg
type nul > public\images\logo\logo-simplified.svg
type nul > public\images\services\web-development.svg
type nul > public\images\services\marketing-digital.svg
type nul > public\images\services\design-graphique.svg
type nul > public\images\services\video-content.svg
type nul > public\images\services\community-management.svg
type nul > public\images\projects\agriboost-preview.jpg
type nul > public\images\projects\pre2excel-preview.jpg
type nul > public\images\projects\smarttutor-preview.jpg
type nul > public\images\projects\school-sms-preview.jpg
type nul > public\images\team\placeholder-team.jpg
type nul > public\images\hero\hero-bg.jpg
type nul > public\images\hero\hero-illustration.svg
type nul > public\icons\favicon.ico
type nul > public\icons\icon-192.png
type nul > public\icons\icon-512.png

:: Dossiers source
mkdir src\components\ui 2>nul
mkdir src\components\layout 2>nul
mkdir src\components\sections 2>nul
mkdir src\components\forms 2>nul
mkdir src\components\common 2>nul
mkdir src\styles 2>nul
mkdir src\lib 2>nul
mkdir src\data 2>nul
mkdir src\types 2>nul
mkdir src\hooks 2>nul

echo Création des fichiers style placeholders...
type nul > src\styles\components.css
echo /* components.css placeholder */ > src\styles\components.css
type nul > src\styles\utilities.css
echo /* utilities.css placeholder */ > src\styles\utilities.css

:: Création des fichiers de base
echo Création des fichiers de base...

echo Création des fichiers spécifiques à src/app...
type nul > src\app\loading.tsx
echo // loading.tsx placeholder. Replace with your actual loading component. > src\app\loading.tsx
type nul > src\app\not-found.tsx
echo // not-found.tsx placeholder. Replace with your actual 404 component. > src\app\not-found.tsx
type nul > src\app\favicon.ico

:: Création des composants UI avec leurs fichiers
type nul > src\components\ui\index.ts
echo export { default as Button } from '';> src\components\ui\index.ts
echo export { default as Card } from './Card';>> src\components\ui\index.ts
echo export { default as Badge } from './Badge';>> src\components\ui\index.ts
echo export { default as Modal } from './Modal';>> src\components\ui\index.ts

type nul > src\components\ui\Button.tsx
type nul > src\components\ui\Card.tsx
type nul > src\components\ui\Badge.tsx
type nul > src\components\ui\Modal.tsx

:: Création des composants layout
type nul > src\components\layout\index.ts
echo export { default as Header } from './Header';> src\components\layout\index.ts
echo export { default as Footer } from './Footer';>> src\components\layout\index.ts
echo export { default as Navigation } from './Navigation';>> src\components\layout\index.ts

type nul > src\components\layout\Header.tsx
type nul > src\components\layout\Footer.tsx
type nul > src\components\layout\Navigation.tsx

:: Création des composants de section
type nul > src\components\sections\index.ts
echo export { default as HeroSection } from './HeroSection';> src\components\sections\index.ts
echo export { default as AboutSection } from './AboutSection';>> src\components\sections\index.ts
echo export { default as ServicesSection } from './ServicesSection';>> src\components\sections\index.ts
echo export { default as ProjectsSection } from './ProjectsSection';>> src\components\sections\index.ts
echo export { default as TeamSection } from './TeamSection';>> src\components\sections\index.ts
echo export { default as ContactSection } from './ContactSection';>> src\components\sections\index.ts
echo export { default as TestimonialsSection } from './TestimonialsSection';>> src\components\sections\index.ts

type nul > src\components\sections\HeroSection.tsx
type nul > src\components\sections\AboutSection.tsx
type nul > src\components\sections\ServicesSection.tsx
type nul > src\components\sections\ProjectsSection.tsx
type nul > src\components\sections\TeamSection.tsx
type nul > src\components\sections\ContactSection.tsx
type nul > src\components\sections\TestimonialsSection.tsx

:: Création des composants de formulaire
type nul > src\components\forms\index.ts
echo export { default as ContactForm } from './ContactForm';> src\components\forms\index.ts
echo export { default as QuotationForm } from './QuotationForm';>> src\components\forms\index.ts

type nul > src\components\forms\ContactForm.tsx
type nul > src\components\forms\QuotationForm.tsx

:: Création des composants communs
type nul > src\components\common\index.ts
echo export { default as Logo } from './Logo';> src\components\common\index.ts
echo export { default as SectionTitle } from './SectionTitle';>> src\components\common\index.ts
echo export { default as ServiceCard } from './ServiceCard';>> src\components\common\index.ts
echo export { default as ProjectCard } from './ProjectCard';>> src\components\common\index.ts
echo export { default as AnimatedCounter } from './AnimatedCounter';>> src\components\common\index.ts

type nul > src\components\common\Logo.tsx
type nul > src\components\common\SectionTitle.tsx
type nul > src\components\common\ServiceCard.tsx
type nul > src\components\common\ProjectCard.tsx
type nul > src\components\common\AnimatedCounter.tsx

:: Création des fichiers de données
type nul > src\data\services.ts
type nul > src\data\projects.ts
type nul > src\data\team.ts
type nul > src\data\testimonials.ts
type nul > src\data\contact.ts

:: Création des types
type nul > src\types\index.ts
echo export * from './services';> src\types\index.ts
echo export * from './projects';>> src\types\index.ts
echo export * from './forms';>> src\types\index.ts

type nul > src\types\services.ts
echo export interface Service {> src\types\services.ts
echo   id: string;>> src\types\services.ts
echo   title: string;>> src\types\services.ts
echo   description: string;>> src\types\services.ts
echo   icon: string;>> src\types\services.ts
echo }>> src\types\services.ts

type nul > src\types\projects.ts
echo export interface Project {> src\types\projects.ts
echo   id: string;>> src\types\projects.ts
echo   title: string;>> src\types\projects.ts
echo   description: string;>> src\types\projects.ts
echo   image: string;>> src\types\projects.ts
echo   tags: string[];>> src\types\projects.ts
echo }>> src\types\projects.ts

type nul > src\types\forms.ts
echo export interface FormData {> src\types\forms.ts
echo   name: string;>> src\types\forms.ts
echo   email: string;>> src\types\forms.ts
echo   message: string;>> src\types\forms.ts
echo }>> src\types\forms.ts

:: Création des fichiers utilitaires
type nul > src\lib\constants.ts
type nul > src\lib\utils.ts
type nul > src\lib\validations.ts
type nul > src\lib\api.ts

:: Création des hooks
type nul > src\hooks\useIntersectionObserver.ts
type nul > src\hooks\useContactForm.ts
type nul > src\hooks\useAnimations.ts

:: Création des fichiers de configuration
type nul > .env.local
type nul > .env.example
echo # Variables d'environnement pour le développement local > .env.local
echo # Exemple de variables d'environnement. Copier vers .env.local et remplir les valeurs. > .env.example

:: Création du robots.txt s'il n'existe pas déjà
type nul > public\robots.txt
echo User-agent: *> public\robots.txt
echo Allow: />> public\robots.txt

echo Initialisation de la structure du projet terminée! 
echo Vous pouvez maintenant commencer à développer les composants.
echo Exécutez 'npm run dev' pour démarrer le serveur de développement. 