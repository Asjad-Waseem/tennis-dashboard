# 🚀 Step-by-Step Vercel Deployment Guide

This guide will walk you through deploying your Tennis Dashboard to Vercel, step by step.

## Prerequisites Checklist

Before we start, make sure you have:
- ✅ A GitHub account (free)
- ✅ A Vercel account (free - we'll create one)
- ✅ Your code is working locally (test with `pnpm dev`)

---

## Step 1: Test Your Build Locally

First, let's make sure your project builds successfully:

1. **Open your terminal** in the project directory
2. **Run the build command:**
   ```bash
   pnpm build
   ```
3. **Wait for it to complete** - you should see "Build completed successfully"
4. **If there are any errors**, fix them before proceeding

> 💡 **Tip**: If the build fails, check the error messages and fix any issues. Common issues include TypeScript errors or missing dependencies.

---

## Step 2: Push Your Code to GitHub

Vercel works best when your code is on GitHub. If you haven't already:

### 2.1. Initialize Git (if not already done)

1. **Open terminal** in your project directory
2. **Check if git is initialized:**
   ```bash
   git status
   ```
3. **If you see "not a git repository", initialize it:**
   ```bash
   git init
   ```

### 2.2. Create a GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in the details:**
   - Repository name: `tennis-dashboard` (or any name you prefer)
   - Description: "Tennis Dashboard - Next.js Application"
   - Choose **Public** or **Private** (your choice)
   - **DO NOT** check "Initialize with README" (since you already have files)
5. **Click "Create repository"**

### 2.3. Push Your Code to GitHub

1. **In your terminal**, run these commands one by one:

   ```bash
   # Add all files
   git add .
   
   # Commit your code
   git commit -m "Initial commit - ready for deployment"
   
   # Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/tennis-dashboard.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

2. **If prompted for credentials**, you may need to:
   - Use a Personal Access Token instead of password
   - Or set up SSH keys
   - Or use GitHub CLI

> 💡 **Tip**: If you get authentication errors, GitHub requires a Personal Access Token. Go to GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic). Give it "repo" permissions.

---

## Step 3: Create a Vercel Account

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "Sign Up"** in the top right
3. **Choose "Continue with GitHub"** (recommended - easiest option)
4. **Authorize Vercel** to access your GitHub account
5. **Complete your profile** (if prompted)

---

## Step 4: Import Your Project to Vercel

1. **After signing in**, you'll see the Vercel dashboard
2. **Click "Add New..."** button (or "Import Project" if you see it)
3. **You'll see a list of your GitHub repositories**
4. **Find and click on "tennis-dashboard"** (or whatever you named it)
5. **Click "Import"**

---

## Step 5: Configure Your Project

Vercel will auto-detect Next.js, but let's verify the settings:

### 5.1. Project Settings

1. **Project Name**: Keep it as "tennis-dashboard" or change it
2. **Framework Preset**: Should be "Next.js" (auto-detected)
3. **Root Directory**: Leave as `./` (default)
4. **Build Command**: Should be `pnpm build` (auto-detected)
5. **Output Directory**: Leave empty (Next.js handles this)
6. **Install Command**: Should be `pnpm install` (auto-detected)

### 5.2. Environment Variables (if needed)

- **If you don't have any environment variables**, skip this section
- **If you do have `.env` files**, click "Environment Variables" and add them:
  - Click "Add" for each variable
  - Enter the variable name and value
  - Select environments (Production, Preview, Development)

### 5.3. Deploy!

1. **Scroll down** and click the **"Deploy"** button
2. **Wait for the deployment** - this usually takes 2-5 minutes
3. **You'll see a progress log** showing:
   - Installing dependencies
   - Building your project
   - Deploying to Vercel's edge network

---

## Step 6: Your Site is Live! 🎉

1. **Once deployment completes**, you'll see:
   - ✅ "Congratulations! Your project has been deployed"
   - A URL like: `https://tennis-dashboard-xxxxx.vercel.app`

2. **Click the URL** to see your live site!

3. **Your site is now live** and accessible to anyone with the URL

---

## Step 7: Custom Domain (Optional)

If you want a custom domain (like `tennis-dashboard.com`):

1. **In your Vercel project dashboard**, click **"Settings"**
2. **Click "Domains"** in the left sidebar
3. **Enter your domain name** (e.g., `tennis-dashboard.com`)
4. **Follow the instructions** to configure DNS records
5. **Wait for DNS propagation** (can take a few minutes to 48 hours)

---

## Step 8: Automatic Deployments (Already Set Up!)

The best part - Vercel automatically deploys when you push to GitHub:

1. **Every time you push to `main` branch** → Production deployment
2. **Every time you create a Pull Request** → Preview deployment
3. **No manual steps needed!**

---

## Troubleshooting

### "No Next.js version detected" Error

If you see this error, it's usually caused by:
- **pnpm-workspace.yaml file**: If you have a `pnpm-workspace.yaml` file in your project root, Vercel might think it's a monorepo. For single-package projects, this file should be removed (it's already been removed in this project).
- **Solution**: The project now includes a `vercel.json` file that explicitly configures Next.js. Just commit and push the changes.

### Build Fails

- **Check the build logs** in Vercel dashboard
- **Common issues:**
  - TypeScript errors → Fix them locally first
  - Missing dependencies → Make sure `package.json` has all dependencies
  - Environment variables missing → Add them in Vercel settings

### Site Works Locally But Not on Vercel

- **Check browser console** for errors
- **Check Vercel function logs** (in Vercel dashboard → Functions tab)
- **Verify API routes** are working (check Network tab in browser)

### Need to Update Your Site

1. **Make changes locally**
2. **Test with `pnpm dev`**
3. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Your update message"
   git push
   ```
4. **Vercel automatically deploys** the new version!

---

## Quick Reference Commands

```bash
# Test build locally
pnpm build

# Run locally
pnpm dev

# Git commands (when updating)
git add .
git commit -m "Your message"
git push
```

---

## What Happens Next?

✅ Your site is live on Vercel  
✅ Every GitHub push = automatic deployment  
✅ Free SSL certificate (HTTPS) included  
✅ Global CDN for fast loading  
✅ Preview deployments for Pull Requests  

**Congratulations! Your Tennis Dashboard is now live on the internet! 🎾**

---

## Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: Available in your dashboard
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)

