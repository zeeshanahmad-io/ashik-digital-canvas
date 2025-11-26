# 🎨 Ashik's Digital Canvas

> A personal digital garden and portfolio, built with modern web technologies.

![Project Banner](public/og-image.png)

## ✨ Overview

Welcome to **Ashik's Digital Canvas**, a space for thoughts, experiments, and creative coding. This project is a Single Page Application (SPA) designed to be fast, beautiful, and easy to manage.

It features a **fully integrated CMS** for managing journal entries without touching the code, all while keeping your content safe in your GitHub repository.

## 🛠️ Tech Stack

Built with a curated selection of top-tier tools:

-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) (Fast & Lightweight)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first)
-   **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Accessible & Customizable)
-   **CMS**: [Keystatic](https://keystatic.com/) (Git-based Content Management)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) (Smooth interactions)

---

## 🚀 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

-   Node.js (v18 or higher)
-   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/zeeahmad/ashik-s-digital-canvas.git
    cd ashik-digital-canvas
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:8080`.

---

## ✍️ Managing Content (Journal)

This project uses **Keystatic** to manage blog posts and journal entries. You don't need to write Markdown manually!

### Local Development

1.  Run the dev server: `npm run dev`
2.  Navigate to: `http://localhost:8080/keystatic`
3.  You will see the Admin Dashboard.
4.  Create, edit, or delete posts. Changes are saved directly to `src/content/journal/` as Markdown files.

### Production (Live Site)

In production, the Admin UI connects to **Keystatic Cloud** to handle authentication with GitHub.

1.  Navigate to: `https://your-site-url.com/keystatic`
2.  Sign in with GitHub.
3.  Make your changes.
4.  When you save, Keystatic will **automatically create a commit** to your GitHub repository.
5.  Netlify (or your host) will detect the commit and redeploy the site.

---

## 🌍 Deployment

This project is configured for **Netlify**.

### 1. Push to GitHub
Ensure your latest code is pushed to your GitHub repository.

### 2. Connect to Keystatic Cloud
1.  Go to [Keystatic Cloud](https://keystatic.cloud/).
2.  Connect your GitHub repository.
3.  This enables the "Edit in Production" workflow.

### 3. Deploy to Netlify
1.  Create a new site on Netlify from your GitHub repo.
2.  **Build Command**: `npm run build`
3.  **Publish Directory**: `dist`
4.  **Environment Variables**:
    -   `VITE_GITHUB_REPO`: `your-username/your-repo-name` (e.g., `zeeahmad/ashik-s-digital-canvas`)

The included `netlify.toml` file handles all the necessary routing configuration for the SPA.

---

## 📂 Project Structure

```
src/
├── components/   # Reusable UI components
├── content/      # Content files (Journal entries)
├── lib/          # Utility functions
├── pages/        # Route components (Home, Journal, etc.)
├── keystatic.config.ts # CMS Configuration
└── main.tsx      # Entry point
```

---

## 📄 License

This project is private and proprietary.
