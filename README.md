# Nuxt 3 + TailwindCSS + Pinia static website with a simple game

This is the source code of my personal website, perhaps you'll find some of the features / patterns useful in your project. Feel free to copy and reuse anything you find in this repository 🤘

Some cool things used in this project:

- Nuxt 3 with Composition API
- [View Transitions API](https://nuxt.com/docs/getting-started/transitions#view-transitions-api-experimental) - look for `.trans-page` elements in page/index.vue and page/game.vue
- `<ClientOnly>` with fallback template
- Example component unit test with Vitest (making sure the bike has 2 wheels is important!)
- Dark mode
- Implementation of GA4 gtag with custom events (update `.env` with your GA4 measurement id)

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production (static site):

```bash
npm run generate
```

Locally preview production build:

```bash
npm run preview
```
