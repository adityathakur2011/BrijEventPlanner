# Brij Event Planner

A modern, responsive event planning website built with Astro and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/adityathakur2011/BrijEventPlanner.git
cd BrijEventPlanner
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development

### Run Locally

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

Build the project for production:

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## 📦 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### How It Works

1. **Automatic Deployment**: Every push to the `main` branch automatically triggers a GitHub Actions workflow that:
   - Builds the Astro site
   - Deploys it to GitHub Pages

2. **Manual Deployment** (Optional):
   ```bash
   npm run deploy
   ```
   This command builds the project and uses `gh-pages` to deploy manually.

#### Access Your Site

Once deployed, your site will be available at:
- **Live URL**: https://adityathakur2011.github.io/BrijEventPlanner/

#### Setting Up GitHub Pages

If you haven't enabled GitHub Pages yet:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push to `main`

## 📁 Project Structure

```
/
├── public/           # Static assets (images, robots.txt, sitemap.xml)
├── src/
│   ├── components/   # Astro components
│   ├── layouts/      # Layout components
│   ├── pages/        # Route pages
│   └── styles/       # Global styles
├── astro.config.mjs  # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── package.json      # Dependencies and scripts
```

## 🛠️ Technologies

- [Astro](https://astro.build/) - The web framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [GitHub Pages](https://pages.github.com/) - Hosting platform
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## 📝 Notes

- The base path is configured as `/BrijEventPlanner` for GitHub Pages deployment
- All static assets (images, robots.txt, sitemap.xml) are in the `public/` folder
- The site automatically generates a sitemap and robots.txt file

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

