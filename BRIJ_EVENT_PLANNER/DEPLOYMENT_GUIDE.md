# GitHub Pages Deployment Guide

## Step-by-Step Instructions

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository:
   - Open: https://github.com/adityathakur2011/BrijEventPlanner

2. Navigate to Settings:
   - Click on the **Settings** tab (top right of the repository)

3. Go to Pages section:
   - In the left sidebar, scroll down and click on **Pages**

4. Configure the Source:
   - Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
   - This will enable automatic deployments via the workflow we created

5. Save:
   - GitHub will automatically start using your workflow file (`.github/workflows/deploy.yml`)

### Step 2: Push Your Code (If Not Already Done)

Your code should already be committed. If you haven't pushed yet, run:

```bash
git push origin main
```

If you've already pushed, skip to Step 3.

### Step 3: Trigger the Deployment

The GitHub Actions workflow will automatically run when:

- You push to the `main` branch (already done if you pushed)
- OR you can manually trigger it:
  1. Go to **Actions** tab in your repository
  2. Click on **"Deploy Astro to GitHub Pages"** workflow
  3. Click **"Run workflow"** button
  4. Select the branch (should be `main`)
  5. Click **"Run workflow"**

### Step 4: Monitor the Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the workflow running with two jobs:
   - **build**: Builds your Astro site
   - **deploy**: Deploys to GitHub Pages
3. Wait for both jobs to complete (usually takes 2-5 minutes)
4. Once complete, you'll see a green checkmark ✅

### Step 5: Access Your Live Site

After the workflow completes successfully:

1. Go back to **Settings** → **Pages**
2. You'll see a message: "Your site is live at..."
3. Your site URL will be:
   **https://adityathakur2011.github.io/BrijEventPlanner/**

### Step 6: Future Deployments

From now on, **every time you push to the `main` branch**, GitHub Actions will:
1. Automatically build your site
2. Deploy it to GitHub Pages
3. Your site will be updated within 2-5 minutes

## Troubleshooting

### If the workflow fails:

1. Check the **Actions** tab to see error messages
2. Common issues:
   - Build errors: Check your code for syntax errors
   - Permission errors: Make sure GitHub Pages is enabled as "GitHub Actions"
   - Missing dependencies: Ensure all packages are in `package.json`

### If you don't see the Pages option:

- Make sure your repository is public, OR
- If private, you need GitHub Pro/Team/Enterprise for private GitHub Pages

### If the site doesn't load:

- Wait 5-10 minutes after deployment (DNS propagation)
- Clear your browser cache
- Check the URL is correct: `https://adityathakur2011.github.io/BrijEventPlanner/`
- Verify the base path in `astro.config.mjs` matches your repo name

## Quick Commands Reference

```bash
# View workflow status
# Go to: https://github.com/adityathakur2011/BrijEventPlanner/actions

# Local build test
npm run build

# Manual deploy (optional, if GitHub Actions is set up, you don't need this)
npm run deploy
```

## Your Site Configuration

- **Repository**: BrijEventPlanner
- **GitHub Username**: adityathakur2011
- **Base Path**: /BrijEventPlanner
- **Live URL**: https://adityathakur2011.github.io/BrijEventPlanner/

---

**That's it!** Once you enable GitHub Actions as the source in Settings → Pages, everything will work automatically! 🚀

# GitHub Pages deployment configured successfully
