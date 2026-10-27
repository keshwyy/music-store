# Amplify Music Store

A browser-only storefront prototype built with HTML, CSS, vanilla JavaScript and Bootstrap 5.

## Open the project

Open `index.html` in a browser. The page loads Bootstrap from jsDelivr, so an internet connection is needed for Bootstrap styling and interactive dialogs. Product images are also loaded from Unsplash.

## What works

- Product search, category browsing, brand and product type filters, price limits, availability and sorting.
- Product details, ratings, wishlist and basket.
- Checkout form validation, a shipping estimate, and order references saved in browser storage.
- A browser-only profile and newsletter form feedback.
- Language selection (English, Russian and Ukrainian) and currency display (EUR, USD and UAH).

Language, currency, basket, wishlist, profile and orders are stored in this browser's local storage. Conversion rates are fixed rates (1 EUR = 1.08 USD or 44 UAH), not live market rates. Clearing site data removes them. The checkout does not accept payment, send orders or retain shipping addresses. The profile has no password and is not an authenticated account. Product prices, ratings and stock are reference data; verify them with a retailer before purchase.

Language switching translates the main navigation and key storefront actions; some descriptive copy remains in English.
