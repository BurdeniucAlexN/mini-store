# Mini Store

Aplicație SPA (Single Page Application) realizată cu React, Vite și React Router,
care afișează produse dintr-un API public.

## Pagini

Home, Products, Product Details, About, Not Found.

## Rute

| Rută | Pagina |
| ---- | ------ |
| `/` | Home |
| `/products` | lista produselor |
| `/products/:id` | detaliile unui produs |
| `/about` | About |
| `*` | Not Found (404) |

## API

- **Base URL:** `https://fakestoreapi.com`
- `GET /products` — lista produselor
- `GET /products/{id}` — detaliile unui produs

## Rulare

```
npm install
npm run dev
```
