# Mini Store

Aplicație SPA (Single Page Application) realizată cu React, Vite și React Router,
care afișează produse dintr-un API public.

## Pagini

Home, Products, Product Details, About, Not Found (+ Dashboard cu rute imbricate).

## Rute

| Rută | Pagina |
| ---- | ------ |
| `/` | Home |
| `/products` | lista produselor |
| `/products?category=electronics` | filtrare după categorie (bonus) |
| `/products?sort=price` | sortare după preț (bonus) |
| `/products?search=phone` | căutare (bonus) |
| `/products/:id` | detaliile unui produs |
| `/about` | About |
| `/dashboard` | Dashboard (rută părinte) |
| `/dashboard/profile` | Profile (rută copil) |
| `/dashboard/settings` | Settings (rută copil) |
| `*` | Not Found (404) cu buton Home |

## API

- **Base URL:** `https://fakestoreapi.com`
- `GET /products` — lista produselor
- `GET /products/{id}` — detaliile unui produs

Filtrarea, sortarea și căutarea se fac în aplicație, pe lista deja descărcată.
Căutarea verifică titlul și descrierea produselor. Parametrul `sort` acceptă
`price` (crescător) și `price-desc` (descrescător).

## Stările aplicației

```
Loading...
Unable to load product.
Product details...
```

La fiecare cerere către API aplicația afișează „Loading...”, iar dacă
`response.ok` este fals sau cererea eșuează, afișează un mesaj de eroare cu buton
„Try again”. Pentru un id inexistent se afișează „Unable to load product.”.

## Arhitectura

```
src/
├── components/
│   ├── Layout.jsx          # bara de navigare + <Outlet />
│   └── ProductCard.jsx     # cardul unui produs
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx        # listă + query params
│   ├── ProductDetails.jsx  # useParams -> request după id
│   ├── About.jsx
│   ├── NotFound.jsx
│   ├── Dashboard.jsx       # layout cu <Outlet /> pentru rutele copil
│   └── dashboard/
│       ├── Profile.jsx
│       └── Settings.jsx
├── services/
│   └── productService.js   # comunicarea cu API-ul
├── App.jsx                 # definirea rutelor
└── main.jsx                # <BrowserRouter>
```

## Checklist

- [x] routing
- [x] navigare (`NavLink`, `Link`, `useNavigate`)
- [x] route parameter (`/products/:id` cu `useParams`)
- [x] query parameter (`useSearchParams`)
- [x] API list + details
- [x] loading/error
- [x] 404
- [x] bonus: category / sort / search
- [x] challenge: nested routes `/dashboard`, `/dashboard/profile`, `/dashboard/settings`

## Rulare

```
npm install
npm run dev
```
