# Deployment Guide for Portfolio Gamma

Your portfolio is built with standard HTML, CSS, and JavaScript. This makes it extremely easy to deploy to any static hosting provider.

## Option 1: Netlify Drop (Fastest & Easiest) ⚡
This requires no accounts or setup initially.

1.  Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2.  Open your file explorer to the `portfolio-root` folder.
3.  **Drag and drop** the entire `portfolio-root` folder onto the Netlify page.
4.  Netlify will upload it and give you a live URL immediately (e.g., `silly-name-12345.netlify.app`).
5.  You can verify it and then sign up to claim the site and change the domain.

## Option 2: GitHub Pages (Professional) 🐙
Best for long-term maintenance.

1.  Create a new repository on GitHub (e.g., `my-portfolio`).
2.  Push your local code to GitHub:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
    git push -u origin main
    ```
3.  Go to Repository **Settings** > **Pages**.
4.  Under **Source**, select `Deploy from a branch`.
5.  Select `main` branch and `/ (root)` folder.
6.  Click **Save**. Your site will be live at `https://YOUR_USERNAME.github.io/my-portfolio`.

## Option 3: Vercel (High Performance) ▲
1.  Install Vercel CLI: `npm i -g vercel` (if you have Node.js).
2.  Run `vercel` in this directory.
3.  Follow the prompts.

## Pre-Deployment Checklist
- [x] **Mobile Responsiveness**: Verified on iPhone 12 resolution.
- [x] **Project Demos**: All demos (`alpha`, `beta`, `gamma`) are linked and functional.
- [x] **Assets**: All images and icons are local and optimized.
- [x] **404 Page**: You might want to create a custom `404.html` if using Netlify/GitHub Pages, otherwise the default one will show.

Enjoy your new site! 🚀
