# Home Service Pro LLC - Modern Website

A premium, modern, and high-performance marketing website for **Home Service Pro LLC** (HVAC, plumbing, and electrical services). Built with a bold editorial aesthetic, high-contrast typography, and beautiful layout presentation.

This project is built using **TanStack Start v1** (a modern full-stack React framework) with **Vite 7** and **Tailwind CSS v4**.

---

## 🚀 Getting Started (Run Locally)

This project is set up to use **Bun** for fast package management, but also supports standard **npm** or **Yarn**.

### Prerequisites

- **Node.js** (v18+) or **Bun** (v1.0+)
- A terminal of your choice

### 1. Clone & Install

```bash
# Clone the repository (if downloaded from GitHub)
# git clone <your-repo-url>
# cd <repo-folder>

# Install dependencies
bun install
# Or if using npm:
# npm install
```

### 2. Run the Development Server

Start the development server with hot-reloading:

```bash
bun run dev
# Or:
# npm run dev
```

Open [http://localhost:8080](http://localhost:8080) (or the port specified in your console) to view the live preview in your browser.

### 3. Build & Preview for Production

To verify the production build locally:

```bash
# Build the application
bun run build

# Preview the built application
bun run preview
```

---

## 🛠 Project Structure

```text
├── public/                # Static public assets (favicons, etc.)
├── src/
│   ├── assets/            # Optimized local images (heros, services, detail work)
│   ├── components/        # Reusable site UI elements
│   │   └── site/          # Header, Footer, CTASection, Marquee
│   ├── routes/            # File-based routing (pages)
│   │   ├── __root.tsx     # Site-wide layouts & metadata wrapper
│   │   ├── about.tsx      # About page
│   │   ├── contact.tsx    # Contact & Request Quote form page
│   │   ├── index.tsx      # Home page
│   │   └── services.tsx   # Services index
│   ├── router.tsx         # TanStack Router initialization
│   ├── server.ts          # Server-side entry point
│   ├── start.ts           # Hydration bootstrap code
│   └── styles.css         # Tailwind v4 configuration and global variables
├── package.json           # Project dependencies and script runner configurations
└── wrangler.jsonc         # Cloudflare Workers configuration schema
```

---

## 🔑 Environment Variables

The website currently runs completely on the client side with custom, static routing. No external database or server secrets are required out-of-the-box. 

If you decide to connect an active database (via Supabase) or external email handler in the future, copy/create a `.env` file in the project root:

```ini
# Add your environment variables here if needed later (e.g., SMTP / Email Keys, Analytics API tokens)
```

---

## 🌐 Deployment Steps for Your Client

Because the project is compiled down to high-performance, edge-ready output through TanStack Start, it can be deployed to any major host. Below are the easiest options:

### Option A: Cloudflare Pages / Workers (Recommended & Supported Out-of-the-box)

The project includes a `wrangler.jsonc` file, meaning it's configured for **Cloudflare**.

1. Connect the GitHub repository to your client's **Cloudflare Dashboard**.
2. Go to **Pages** -> **Connect to Git**.
3. Select the repository.
4. Set up the Build configuration:
   - **Framework Preset**: `None` (or `Vite`)
   - **Build Command**: `bun run build` or `npm run build`
   - **Build Output Directory**: `.output/public`
5. Click **Save and Deploy**.

### Option B: Vercel (One-Click Git Deployment)

1. Import the repository into **Vercel** ([Vercel Dashboard](https://vercel.com)).
2. Vercel automatically detects Vite/TanStack Start configurations.
3. Keep default settings, but ensure the build directory targets `.output/public` if requested.
4. Click **Deploy**.

### Option C: Netlify

1. Link the repository in the **Netlify Dashboard**.
2. Netlify handles the deployment automatically.
3. Click **Deploy site**.

---

## 🤝 Project Handoff checklist

When transferring ownership of this website to your client:

1. **GitHub Transfer**: Go to your GitHub repository’s **Settings** -> Scroll to **Danger Zone** -> **Transfer ownership** -> Input your client's GitHub username.
2. **Contact Form Routing**: The contact form is currently designed as a modern frontend layout inside `src/routes/contact.tsx` and simulates successful submission. For real-world production use, easily connect this form to services like **Formspree**, **Web3Forms**, or **Resend** (requires a few lines of code to POST to their webhook URL).
