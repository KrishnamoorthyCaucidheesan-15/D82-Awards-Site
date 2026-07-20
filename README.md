# District 82 Awards — 2026–2027

A polished, responsive showcase website for the Toastmasters **District 82** (Sri Lanka | British Indian Ocean) awards for the 2026–2027 program year.

- **Landing page** — all award categories as cards, with a hero and intro.
- **Category view** — every award in a category, each clickable.
- **Award detail view** — full description, eligibility, criteria, dates, submission and presentation.
- **Awards Calendar** — every deadline on one timeline, filterable by **category** and **date range**, plus the monthly PR themes.

Built with plain **HTML + CSS + vanilla JavaScript** — no build step, no dependencies. It runs directly on GitHub Pages.

---

## Files

| File | What it is |
|------|-----------|
| `index.html` | Page shell (header, footer, mount point) |
| `styles.css` | All styling — branded, responsive, accessible |
| `app.js` | Router + the four views (renders everything from the data) |
| `data.js` | **All award content lives here** — edit this to update awards |
| `README.md` | This file |

## Editing awards (no coding needed)

Open **`data.js`**. Each award is an object. Add, change, or remove entries and the site updates itself. A blank field simply won't show — so you can fill missing details later without touching anything else. Add a new one by copying an existing block:

```js
{
  id: "my-new-award",          // unique, url-safe (lowercase, hyphens)
  category: "club",            // membership | club | quality | pr
  name: "My New Award",
  subtitle: "Optional tag",
  summary: "One line shown on the category card.",
  description: "The full description shown on the detail page.",
  eligibility: "Who can win it.",
  criteria: ["First requirement", "Second requirement"],
  submission: "How / where to submit.",
  presentation: "Where it is presented.",
  keyDates: [
    { label: "Cut-off", date: "2027-04-30", display: "30 Apr 2027" }
  ]
},
```

The `date` (format `YYYY-MM-DD`) is what places the award on the Calendar timeline; `display` is the human-friendly text shown to visitors.

---

## Preview it locally

Because the site loads `data.js`/`app.js` as files, open it through a tiny local server (double-clicking `index.html` also works in most browsers, but a server is the reliable way):

```bash
# from inside this folder
python3 -m http.server 8000
```

Then visit **http://localhost:8000** in your browser.

---

## Publish on GitHub (free, public)

### 1. Create the repository
1. Go to <https://github.com/new>.
2. Name it, e.g. `d82-awards`. Set it to **Public**. Click **Create repository**.

### 2. Upload the files
Easiest way (no command line):
1. On the new repo page click **uploading an existing file**.
2. Drag in **all** the files in this folder (`index.html`, `styles.css`, `app.js`, `data.js`, `README.md`).
3. Click **Commit changes**.

Or with git:
```bash
git init
git add .
git commit -m "District 82 Awards site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/d82-awards.git
git push -u origin main
```

### 3. Turn on GitHub Pages
1. In the repo, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**. Click **Save**.
4. Wait ~1 minute. Your live site appears at:

   `https://YOUR-USERNAME.github.io/d82-awards/`

Anyone with that link can now view it. Every time you edit `data.js` and commit, the live site updates automatically.

---

## Accessibility & responsiveness

- Semantic HTML, keyboard-navigable, visible focus states, skip-link, and `aria` labels on navigation and filters.
- Works across desktop, tablet, and mobile (fluid layouts, wide tables scroll inside their own container).
- Respects `prefers-reduced-motion`.
