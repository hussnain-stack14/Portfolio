<div align="center">

Developer Portfolio
A responsive, animated portfolio built with React and Vite
A place to explore my work, technical skills, experience, and projects — with three distinct visual themes.







</div>

Overview
This repository contains the source code for my personal developer portfolio. It is a single-page React application designed to present selected projects, technical skills, background, and ways to get in touch. The interface emphasizes smooth navigation, thoughtful motion, and a consistent visual identity.

Explore the live website →
Highlights
Feature	Implementation
Three themes	Switch between dark, light, and vintage visual styles
Responsive interface	Layouts for desktop, tablet, and mobile
Motion & transitions	Animated sections and interactions with Framer Motion
Project showcase	Featured work with descriptions and repository/demo links
Skills & experience	Organized sections powered by reusable components
Contact section	Direct ways to connect and discuss projects
Résumé	Downloadable PDF served from the public directory


Built With
Area	Technologies
Frontend	React 19, JavaScript (JSX), CSS3
Tooling	Vite 7, ESLint
Animations	Framer Motion
Icons	React Icons
Deployment	Static hosting; live site on Vercel


Run Locally
Prerequisites: Node.js and npm.
# Clone the repository
git clone https://github.com/hussnain-stack14/Portfolio.git

# Enter the project directory
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
Open the local URL shown by Vite (typically http://localhost:5173).
Available Scripts
npm run dev      # Local development
npm run build    # Production build in dist/
npm run preview  # Preview the production build
npm run lint     # Run ESLint
Project Structure
Portfolio/
├── public/                  # Static assets and résumé
├── src/
│   ├── assets/              # Images and local assets
│   ├── components/          # Navbar, Hero, About, Skills,
│   │                        # Experience, Projects, Contact, Footer
│   ├── data/
│   │   └── profile.js       # Portfolio content and links
│   ├── App.jsx              # Page composition and theme switching
│   ├── index.css            # Global styles and theme definitions
│   └── main.jsx             # React entry point
├── index.html
├── package.json
└── vite.config.js
Customize the Portfolio
- Content and projects: Update src/data/profile.js.
- Profile photo: Replace src/assets/profile-pic.png.
- Résumé: Replace public/Hussnain_Ali_Resume.pdf.
- Colors and themes: Edit src/index.css and relevant component styles.
- Page sections: Modify the components in src/components/.
Deployment
Generate a production build:
npm run build
Deploy the generated dist/ directory to a static host such as Vercel or Netlify. The live version is available at hussnainali-portfolio.vercel.app.
Contact
Have feedback, a collaboration idea, or a project in mind?



<div align="center">
  <sub>Designed and developed by <strong>Hussnain Ali</strong> · React + Vite</sub>
</div>
