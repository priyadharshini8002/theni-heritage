# Theni Heritage

A complete, responsive tourism website for Theni district, Tamil Nadu — built with React, Vite, Leaflet and an optional Firebase backend. It documents heritage sites, nature spots, food and stays, and lets locals suggest new places.

---

## 1. Folder Structure

```
theni-heritage/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/                 # (empty — reserved for local image assets)
│   ├── components/             # Reusable UI building blocks
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── SearchBar.jsx / .css        # inline search + suggestions (hero, explore)
│   │   ├── SearchOverlay.jsx / .css    # full-screen search modal (navbar icon)
│   │   ├── CategoryCard.jsx / .css
│   │   ├── PlaceCard.jsx / .css
│   │   ├── FoodCard.jsx
│   │   ├── StayCard.jsx
│   │   ├── FoodStayCard.css            # shared styles for Food/Stay cards
│   │   ├── FavoriteButton.jsx / .css
│   │   ├── FilterBar.jsx / .css
│   │   ├── MapView.jsx / .css          # Leaflet map, markers, geolocation
│   │   ├── Modal.jsx / .css
│   │   ├── EmptyState.jsx / .css
│   │   ├── LoadingState.jsx / .css
│   │   └── ScrollToTop.jsx
│   ├── pages/                  # One file per route
│   │   ├── Home.jsx / .css
│   │   ├── Explore.jsx / .css
│   │   ├── PlaceDetails.jsx / .css
│   │   ├── MapPage.jsx / .css
│   │   ├── Food.jsx
│   │   ├── Stay.jsx
│   │   ├── ListingPage.css     # shared grid styles for Food/Stay/Favorites
│   │   ├── Favorites.jsx
│   │   ├── Profile.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Feedback.jsx / .css
│   │   └── NotFound.jsx
│   ├── data/                   # All tourism content — separate from UI
│   │   ├── places.js
│   │   ├── food.js
│   │   ├── stays.js
│   │   ├── categories.js
│   │   └── translations.js     # EN/TA UI string dictionary
│   ├── context/
│   │   ├── LanguageContext.jsx # EN/TA toggle, persisted to localStorage
│   │   └── FavoritesContext.jsx# Saved places, persisted to localStorage
│   ├── services/
│   │   └── firebase.js         # Firestore/Storage, with localStorage fallback
│   ├── utils/
│   │   ├── geo.js              # distance calc, geolocation, external nav links
│   │   └── search.js           # cross-content search (places/food/stays)
│   ├── styles/
│   │   └── theme.css           # design tokens, global styles, buttons
│   ├── App.jsx                 # routes + providers
│   └── main.jsx                # entry point
├── index.html
├── .env.example
├── .gitignore
├── package.json
└── vite.config.js
```

---

## 2. Installation & Running Locally

Requires Node.js 18+.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# → open http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The site works immediately after `npm install && npm run dev` — no configuration is required. Firebase is optional (see below).

---

## 3. Firebase Setup (Optional)

The **Feedback / Suggest a Place** form works out of the box using `localStorage`. To store submissions in the cloud instead:

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com).
2. Enable **Firestore Database** (Native mode) and **Storage**.
3. In Project Settings → General, register a Web App and copy the config values.
4. Copy `.env.example` to `.env` and fill in the values:

   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   ```

5. Restart the dev server (`npm run dev`) so Vite picks up the new env vars.

Suggested Firestore security rules for a public suggestion box (adjust for production use):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /suggestions/{doc} {
      allow read: if false;
      allow create: if request.resource.data.keys().hasAll(['name','placeName','description','location']);
      allow update, delete: if false;
    }
    match /feedback/{doc} {
      allow read: if false;
      allow create: if true;
      allow update, delete: if false;
    }
  }
}
```

If `.env` is missing or incomplete, `src/services/firebase.js` detects this automatically (`isFirebaseConfigured`) and every submission silently falls back to `localStorage` — the app never breaks.

---

## 4. How the Major Features Work

- **Navigation & mobile menu** — `Navbar.jsx` uses React Router `NavLink`s; below 960px it collapses into a hamburger-triggered slide-down menu.
- **Search** — `utils/search.js` does a case-insensitive match across `places`, `food`, and `stays` in both languages. Used by the hero/explore inline `SearchBar` (with live suggestions) and the navbar's full `SearchOverlay` modal.
- **Category filters** — `FilterBar.jsx` is a controlled pill-list reused on Explore, Food, and Stay pages.
- **Favorites** — `FavoritesContext.jsx` keeps an array of place IDs in React state, mirrored to `localStorage` on every change, so favorites survive a refresh with no backend.
- **Map** — `MapView.jsx` renders Leaflet + OpenStreetMap tiles (no API key required), with color-coded custom SVG markers for heritage/nature/food/stay, category filters, and a "My Location" button using the browser Geolocation API. If permission is denied or unsupported, a friendly message is shown and the map keeps working.
- **Navigate button** — opens OpenStreetMap directions (place pages, which have coordinates) or an OpenStreetMap search (food/stay cards, which only have a text location) in a new tab — no paid routing API needed.
- **Language toggle** — `LanguageContext.jsx` swaps a `lang` value (`en`/`ta`) used by `t(key)` throughout the app, persisted to `localStorage`. All nav labels, buttons, headings, and page copy are translated via `data/translations.js`; content records (`places.js`, `food.js`, `stays.js`) carry `{ en, ta }` pairs per field.
- **Suggest a Place / Feedback** — `Feedback.jsx` is a validated form (required: name, place name, description, location). On submit it calls `services/firebase.js`, which writes to Firestore (+ Storage for the photo) when configured, or to `localStorage` otherwise.
- **Responsive layout** — CSS Grid/Flexbox with breakpoints at 980px/960px/640px/520px across every page; cards collapse from 3–4 columns → 2 → 1; the navbar becomes a hamburger menu; the map shortens on mobile.
- **Accessibility** — semantic landmarks (`header`, `main`, `footer`, `nav`), a "Skip to content" link, `alt` text on every image, visible focus rings (`:focus-visible`), `aria-label`/`aria-pressed`/`aria-expanded` on icon-only controls, and form labels tied to inputs via `htmlFor`/`id`.

---

## 5. Data Editing

All tourism content lives in `src/data/*.js` as plain arrays/objects, deliberately separate from components. To add or correct a place, food item, or stay, edit the relevant file — no component code needs to change. Every text field is bilingual: `{ en: '...', ta: '...' }`.

Sample images currently use `picsum.photos` placeholders (stable, never broken) — swap the `image`/`gallery` URLs for real, licensed Theni photography before publishing.

---

## 6. Known Trade-offs (documented, not hidden)

- Food and stay markers on the map are plotted near the Theni town center (they don't yet carry exact coordinates in the data file) — add a `coords` field to `food.js`/`stays.js` entries to place them precisely.
- Historical descriptions are intentionally general and cautious — they are written to be easy to replace with verified, locally-sourced information rather than presented as exhaustive fact.
- Firebase Authentication was intentionally left out per the project brief; the suggestion form is anonymous.
