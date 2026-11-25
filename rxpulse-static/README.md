# RxPulse Frontend
Static website (no build step). Open `index.html`, or run `npx serve .`.

- `index.html` page structure
- `css/style.css` all styling and animations
- `js/data.js` demo data, saved state, helpers
- `js/charts.js` count-up numbers, waves, arcs
- `js/views.js` screens and navigation
- `js/api.js` login + real backend calls (only active if a server answers /api/health)
- `config.js` set `window.RXPULSE_API` to your backend URL

Without a backend it runs in demo mode (data saved in the browser).
