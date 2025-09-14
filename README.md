# Manaíba Website

Official website for Manaíba - connecting technology and agriculture for sustainable and regenerative practices.

## Features

- Bilingual support (Portuguese/English) with automatic browser language detection
- Responsive design optimized for desktop and mobile
- Modern UI with Tailwind CSS
- Contact integration (Email and WhatsApp)

## Development

The website is a static HTML site that can be served directly from any web server.

### Local Development

Simply open `site/index.html` in your browser or serve the `site/` directory with any static file server.

## Deployment

### Netlify Deployment

This repository includes automated deployment to Netlify.


- **Trigger:** Push or pull request to `main` branch with changes in `website/**`
- **Publish Directory:** `./site`
- **Production Branch:** `main`
- **Timeout:** 1 minute

The workflow will:
- Deploy to production when pushing to `main`
- Create deploy previews for pull requests
- Add commit comments with deploy status

# Manaíba colors {#colors}

- Yellowish Green:`#dde499`
- Light Green:  `#77b66b`
- Medium Green: `#537043`
- Forest Green: `#364c28` (also in the Green logo lettering version)
- Terracota: `#a95028`
- Dead leaves: `#948363`
