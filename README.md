# OpenJAUS Documentation

Modern documentation for JAUS (Joint Architecture for Unmanned Systems) service sets and messages.

## Overview

This repository contains reference documentation for the JAUS standard, including:

- **6 Service Sets** - Core, Mobility, Manipulator, Environment, UGV, and IOP
- **118 Services** - Complete service definitions with state machines
- **531 Messages** - Message format specifications

## Live Documentation

Visit the documentation at: **https://[username].github.io/openjaus.htmlDoc/**

## Local Development

### Prerequisites

- Node.js 18+ 
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

### Re-running the Conversion

If you need to regenerate the Markdown from the original HTML:

```bash
npm run convert
```

## Project Structure

```
openjaus.htmlDoc/
├── docs/                    # VitePress documentation source
│   ├── .vitepress/
│   │   ├── config.js       # Site configuration
│   │   └── theme/          # Custom theme CSS
│   ├── public/
│   │   ├── smDiagrams/     # State machine diagrams
│   │   └── images/         # Logos and icons
│   ├── service-sets/       # Service set pages (6 files)
│   ├── services/           # Service documentation (118 files)
│   └── messages/           # Message specifications (531 files)
├── scripts/
│   └── convert-html.js     # HTML to Markdown converter
├── ss/                     # Original HTML service sets
├── service/                # Original HTML services
├── triggers/               # Original HTML messages
└── smDiagrams/             # Original state machine PNGs
```

## Features

- **Full-text Search** - Find any service or message instantly
- **Dark Mode** - Toggle between light and dark themes
- **Mobile Responsive** - Works on any device
- **State Machine Diagrams** - Visual representations of service behavior
- **Cross-linking** - Navigate between related services and messages

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

To enable GitHub Pages:
1. Go to repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions"
3. Push to main branch to trigger deployment

## License

JAUS content © SAE International. Reprinted with Permission.
Portions © OpenJAUS LLC.

## Credits

Documentation generated from OpenJAUS Service Studio models.
