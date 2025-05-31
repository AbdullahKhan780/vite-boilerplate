Vite + React Boilerplate

High‑velocity starter template for building modern single‑page applications with React 18, powered by Vite 5 and a curated stack of production‑ready tooling.

✨ Features

⚡ Vite 5 – instant dev server, HMR & optimized builds

⚛ React 18 configured in strict mode

🗺 React Router v7 – declarative routing with SSR‑ready data APIs and “framework mode” enhancements (reactrouter.com)

🎨 Tailwind CSS v3 pre‑configured with JIT, dark‑mode class strategy & @apply helpers

🌐 i18next + react‑i18next – locale detection, lazy‑loaded namespaces & TypeScript‑safe hooks

🔗 nuqs – type‑safe URL search‑param state that syncs with React like useState (nuqs.47ng.com)

🧹 Opinionated tooling: ESLint (Airbnb + React Hooks + TailwindCSS), Prettier, TypeScript strict mode

✅ Vitest + React Testing Library + optional Cypress e2e

🐙 Biome for linting, formattin,g and for automated code quality gates

🚀 Ready‑to‑deploy configs for Vercel, Netlif,y & GitHub Pages

📂 Project structure

```bash
├── public/               # Static assets (favicon.svg, robots.txt, etc.)
│   ├── locals/           # translation files (default en and ar)
├── src/
│   ├── assets/           # Images & static imports
│   ├── components/       # Shared UI primitives
│   ├── hooks/            # Reusable hooks
│   ├── pages/            # Route modules used by React Router
│   ├── routes/           # createBrowserRouter definition
│   ├── types/            # Global TypeScript declarations
│   └── main.tsx          # App entry point
├── .vscode/              # Recommended editor settings & tasks
├── index.html
├── biome.json
├── vite.config.ts
└── package.json
```

Feel free to adapt the layout to your team’s conventions.

🚀 Quick start

# 1. Clone the repo
git clone https://github.com/AbdullahKhan780/vite-boilerplate.git
cd vite-boilerplate

# 2. Install dependencies (choose one)

```
pnpm i
# or
npm i
# or
yarn

```

# 3. Start dev server
pnpm dev

Open http://localhost:5173 and start shipping!

Available scripts

Script

Description

dev

Start Vite dev server with HMR

build

Create a production build in dist/

test

Execute unit tests with Vitest

test:coverage

Run tests and generate coverage report

prepare

🛠 Configuration hints

Tailwind

Global styles live in ```src/index.css```

Update the colour palette or plugin list in tailwind.config.ts, then restart the dev server.

```
i18n

Translation resources are colocated by namespace under public/locales/<lng>/<ns>.json.

// src/i18n/index.ts
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    resources: {/* ... */}
  })

```

Add a new language by creating a folder and JSON files, then push them to your translation workflow.

URL state with nuqs

```
import { useQueryState, parseAsString } from 'nuqs';

const [search, setSearch] = useQueryState(
  'q',
  parseAsString.withDefault('')
);

```

The value now persists in and syncs with ?q= in the URL while remaining type‑safe. (nuqs.47ng.com)

Deploy to Vercel

Push to GitHub then click New Project in the Vercel dashboard

🤝 Contributing

Fork the repository

Create your feature branch: git checkout -b feat/amazing‑feature

Commit your changes: pnpm cz for guided Conventional Commits

Push to the branch: git push origin feat/amazing‑feature

Open a Pull Request

Commit style

📜 License

Distributed under the MIT License. See LICENSE for more information.
