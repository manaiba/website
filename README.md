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

Simply open `index.html` in your browser or serve the `website/` directory with any static file server.

## Deployment

### Netlify Deployment via GitHub Actions

This repository includes automated deployment to Netlify using GitHub Actions.

#### Setup Instructions

1. **Create a Netlify site:**
   - Go to [Netlify](https://netlify.com)
   - Create a new site (you can skip connecting to Git initially)
   - Note your Site ID from Site Settings > General > Site Information

2. **Get your Netlify Auth Token:**
   - Go to User Settings > Applications > Personal access tokens
   - Generate a new access token
   - Copy the token

3. **Configure GitHub Repository Secrets:**
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Add the following repository secrets:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
     - `NETLIFY_SITE_ID`: Your Netlify site ID

4. **Deploy:**
   - Push changes to the `main` branch
   - The GitHub Action will automatically deploy the `website/` directory to Netlify
   - Deployment is triggered only when files in the `website/` directory change

#### Workflow Details

- **Trigger:** Push or pull request to `main` branch with changes in `website/**`
- **Publish Directory:** `./website`
- **Production Branch:** `main`
- **Timeout:** 1 minute

The workflow will:
- Deploy to production when pushing to `main`
- Create deploy previews for pull requests
- Add commit comments with deploy status

## Structure

```
website/
├── index.html          # Main website file
├── img/               # Images and logos
│   ├── logo-manaiba.png
│   └── logo-manaiba-text-only.png
└── README.md          # This file
```
