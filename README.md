# Tony Li - UX/UI Designer Portfolio

## Overview

This is my portfolio entry page for SEG3125: User Interface Analysis and Design at the University of Ottawa. Built with React, TypeScript, and Bootstrap 5.

## Project Structure

```
seg3125-assignment1-portfolioentrypage-tonyli-300363068/
├── case-studies/           # Placeholder pages for future case studies
│   ├── analytics.html
│   ├── ecommerce.html
│   ├── memory-game.html
│   └── service-site.html
├── public/
│   └── index.html
├── src/
│   ├── App.css             # Custom styles with visual communication principles
│   ├── App.tsx             # Main React component with all portfolio sections
│   ├── index.css           # Global styles
│   └── index.tsx           # React entry point
├── package.json
├── tsconfig.json
├── REPORT.md               # Design report with visual communication analysis
└── README.md
```

## Required Components

The portfolio contains all three required sections:

1. **About You** - Who I am, what I like, and my background
2. **How I Work** - My current design education and workflow approach
3. **4 Case Studies** - Placeholder pages for future designs:
   - Service Site (e.g., dentist, bike repair, hairdresser)
   - Memory Game (Un jeu de mémoire)
   - E-commerce Site
   - Analytics Site (BI, sport, visualization)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at `http://localhost:3000`.

### Building for Production

```bash
# Build the production-ready bundle
npm run build
```

The built files will be in the `build/` directory.

## Design Choices

### Colors

- **Primary:** Royal Blue (#2563eb) - Conveys trust and professionalism
- **Secondary:** Slate Gray (#64748b) - Neutral supporting color
- **Dark:** Dark Slate (#1e293b) - For headings and important text
- **Light:** Off-white (#f8fafc) - For backgrounds

### Typography

- **Headings:** Playfair Display (serif) - Elegant and sophisticated
- **Body:** Inter (sans-serif) - Clean and highly readable

### Layout Principles

- **Scale:** Progressive sizing from hero heading to body text
- **Visual Hierarchy:** F-pattern reading flow with clear information levels
- **Balance:** Grid-based symmetrical layout with centered focal points
- **Contrast:** Color, typography, and shape contrast for visual interest

## Hosting on GitHub Pages

### Option 1: Using gh-pages package

```bash
# Install gh-pages
npm install gh-pages --save-dev

# Add to package.json:
# "homepage": "https://<username>.github.io/<repository-name>"
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### Option 2: Manual deployment

```bash
# Build the project
npm run build

# Push the build folder to your GitHub repository
# Enable GitHub Pages in repository settings
# Set source to /docs or /build folder
```

### Option 3: Using Vercel/Netlify

1. Push your code to GitHub
2. Connect your repository to Vercel or Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

## Visual Communication Principles Applied

This portfolio demonstrates key visual communication principles from NN/g research:

1. **Scale** - Progressive sizing guides the eye through content hierarchy
2. **Visual Hierarchy** - Clear information levels through typography and color
3. **Balance** - Symmetrical grid-based layout creates visual equilibrium
4. **Contrast** - Strategic use of color, typography, and whitespace for emphasis

## Future Work

As the semester progresses, I will:

- Replace placeholder case studies with actual design work
- Add user-centered design concepts to the "How I Work" section
- Include heuristic evaluation examples
- Demonstrate my complete design process for each project

## Resources Used

- [Nielsen Norman Group (NN/g)](https://www.nngroup.com/) - Visual communication principles
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/) - UI framework
- [React Documentation](https://react.dev/) - JavaScript library
- [Interaction Design Foundation](https://www.interaction-design.org/) - UX design principles

## Author

**Tony Li**  
Student Number: 300363068  
University of Ottawa  
SEG3125 - User Interface Analysis and Design  
Summer 2026
