# BrightRise Academy — Website

A standalone React + Vite website for BrightRise Academy, a personalized online
tutoring service for students from Kindergarten through Grade 10.

No backend, database, or authentication is required. Everything runs as a static
frontend site.

## 1. Run Locally

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`).

## 2. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder. To preview it
locally before deploying:

```bash
npm run preview
```

## 3. Upload to GitHub

1. Create a new repository on GitHub.
2. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial commit: BrightRise Academy website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 4. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New → Project**, and import the GitHub repository you just pushed.
3. Vercel will auto-detect this as a Vite project:
   - Build Command: `npm run build` (or `vite build`)
   - Output Directory: `dist`
4. Click **Deploy**.

The included `vercel.json` makes sure that refreshing any page (e.g. `/subjects`)
works correctly instead of showing a 404, since this site uses client-side routing.

No environment variables are required for the basic site to work.

## 5. Where to Customize

| What you want to change | Where to change it |
|---|---|
| Academy name / tagline | `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `index.html` (title/meta) |
| Contact email / WhatsApp | `src/components/Footer.jsx` and `src/components/WhatsAppButton.jsx` (currently placeholders — update `WHATSAPP_NUMBER` in both files to your real number) |
| Floating WhatsApp chat button | `src/components/WhatsAppButton.jsx`, rendered on every page from `src/App.jsx` |
| FAQ questions/answers | `FAQ_ITEMS` array in `src/pages/Home.jsx` |
| Testimonials | `src/pages/Home.jsx`, testimonials section — replace the placeholder cards once real testimonials are available |
| Colors | CSS variables at the top of `src/index.css` (`:root { ... }`) |
| Fonts | `index.html` (Google Fonts link) and `--serif` / `--sans` in `src/index.css` |
| Page text/copy | Files in `src/pages/` (`Home.jsx`, `About.jsx`, `Subjects.jsx`, `HowItWorks.jsx`, `BookTrial.jsx`) |
| Navbar links | `src/components/Navbar.jsx` |
| Logo mark | `src/components/BrandMark.jsx` and `public/favicon.svg` |

## 6. Adding the Google Sheets Enquiry Integration Later

The "Book a Free Trial" form (`src/pages/BookTrial.jsx`) currently only shows a
thank-you message and does **not** send data anywhere.

To connect it to Google Sheets later:

1. Create a Google Apps Script Web App that accepts a POST request and appends
   incoming data as a new row in a Google Sheet.
2. Deploy the script and copy its Web App URL.
3. Open `src/pages/BookTrial.jsx` and find the comment block titled
   `GOOGLE SHEETS INTEGRATION`. Uncomment the `fetch(...)` call there and replace
   `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual URL.

No other changes are needed — the rest of the form already collects and structures
the data for you.

## Project Structure

```text
bright-rise-academy/
├── package.json
├── vite.config.js
├── vercel.json
├── index.html
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── BrandMark.jsx
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── SunriseArt.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Subjects.jsx
        ├── HowItWorks.jsx
        └── BookTrial.jsx
```
