<div align="center">

Developer Portfolio
A responsive, animated portfolio built with React and Vite
A modern single-page experience showcasing selected projects, technical skills, background, and contact information — with three distinct visual themes.







</div>

Overview
This repository contains the source code for Hussnain Ali's developer portfolio. Built as a React single-page application, it brings together project showcases, development skills, experience, education, and ways to get in touch in a cohesive interface.

The focus is on responsive layouts, polished motion, and a customizable visual identity, rather than a traditional static résumé page.

Explore the live portfolio →
Features
Feature	Description
Three visual themes	Switch between dark, light, and vintage appearances.
Responsive layout	Adapts to desktop, tablet, and mobile screens.
Animated interactions	Motion effects and transitions powered by Framer Motion.
Project showcase	Displays selected work with descriptions, technologies, and relevant links.
Skills & experience	Organized sections for technical expertise and professional background.
Contact section	Provides direct ways to connect.
Downloadable résumé	Serves a résumé PDF from the public directory.


Tech Stack
Area	Technologies
Frontend	React 19, JavaScript (JSX), CSS3
Build tool	Vite 7
Animations	Framer Motion
Icons	React Icons
Code quality	ESLint
Deployment	Static hosting (live site on Vercel)


Getting Started
Prerequisites
Install a recent version of Node.js and npm.
Installation
# Clone the repository
git clone https://github.com/hussnain-stack14/Portfolio.git

# Open the project
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
Open the local address shown by Vite in your terminal (typically http://localhost:5173).
Available Scripts
Command	Purpose
npm run dev	Start the local development server.
npm run build	Generate an optimized production build in dist/.
npm run preview	Preview the production build locally.
npm run lint	Run ESLint checks.


Project Structure
```text
Portfolio/
├── public/                  # Public files, including résumé PDF
├── src/
│   ├── assets/              # Images and local assets
│   ├── components/          # Portfolio sections and UI components
│   ├── data/
│   │   └── profile.js       # Portfolio content and project details
│   ├── App.jsx              # Application layout and theme switching
│   ├── index.css            # Global styles and theme definitions
│   └── main.jsx             # React entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```
Customization
The portfolio is designed to be updated without rewriting the entire interface.
1. Profile content: Update src/data/profile.js to change project details, skills, experience, and links.
2. Profile image: Replace src/assets/profile-pic.png with your preferred image.
3. Résumé: Update the PDF in public/ and keep the referenced filename consistent.
4. Themes and colors: Adjust the styles and theme definitions in src/index.css and the relevant component styles.
5. Sections and layout: Edit the React components in src/components/.
Build & Deployment
Create a production build:
npm run build
Vite generates the deployable files in dist/. Deploy this folder to a static hosting platform such as Vercel or Netlify.

For a typical Vercel configuration:
Setting	Value
Framework preset	Vite
Build command	npm run build
Output directory	dist


Live deployment: hussnainali-portfolio.vercel.app
<div align="center">

Designed and developed by Hussnain Ali

Live Portfolio · GitHub · Email
</div>
