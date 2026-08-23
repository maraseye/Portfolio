# 🚀 Portfolio — Serigne Amsatou Lo Seye

Portfolio personnel développé avec **React**, **TypeScript** et **Tailwind CSS**, présentant mon parcours, mes compétences et mes réalisations.

🔗 **Voir le portfolio en ligne** : [portfolio-sals.vercel.app](https://portfolio-sals.vercel.app)

---

## ✨ Fonctionnalités

- **Hero** animé avec photo de profil et liens sociaux
- **À propos** : présentation personnelle
- **Compétences** : barres de progression par catégorie (Front-end, Back-end, Langages, BDD, Outils)
- **Projets** : galerie de réalisations avec liens GitHub et démos
- **Formation** : parcours académique
- **Contact** : formulaire de contact
- **Design premium** : animations fluides, glassmorphism, mode sombre, responsive

---

## 🛠️ Stack technique

| Catégorie       | Technologies                                      |
| --------------- | ------------------------------------------------- |
| **Framework**   | React 18, TypeScript                              |
| **Styling**     | Tailwind CSS 4, Radix UI, MUI                     |
| **Animations**  | Motion (Framer Motion)                            |
| **Build**       | Vite 6                                            |
| **Déploiement** | Vercel, Docker (Nginx)                            |
| **Icônes**      | Lucide React                                      |

---

## 🚀 Lancer le projet en local

### Prérequis

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/maraseye/Portfolio.git
cd Portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`.

---

## 🐳 Déploiement Docker

```bash
# Construire l'image Docker
docker build -t portfolio-app .

# Lancer le conteneur
docker run -d -p 80:80 --name portfolio-app portfolio-app
```

Le site sera accessible sur `http://localhost`.

---

## 📁 Structure du projet

```
Portfolio/
├── public/
│   └── piece-jointe/       # Photo de profil et CV
├── src/
│   ├── app/
│   │   ├── components/     # Composants (Hero, About, Skills, Projects, etc.)
│   │   └── App.tsx         # Composant principal
│   ├── styles/             # Feuilles de style
│   └── main.tsx            # Point d'entrée
├── Dockerfile              # Build multi-stage (Node + Nginx)
├── vercel.json             # Configuration Vercel
├── vite.config.ts          # Configuration Vite
└── package.json
```

---

## 📄 Licence

Projet personnel — Serigne Amsatou Lo Seye.
