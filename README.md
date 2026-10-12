# Anirban Codes

Anirban Basak's portfolio, built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

[Live portfolio](https://anirban-codes.vercel.app/)

## Local development

Use Node.js 18.x, 20.x, or 22+ (supported by Vite 6), and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Checks and production build

```sh
npm run lint
npm run build
npm run preview
```

The production files are generated in `dist/`. Preview serves that build locally.

## Updating the portfolio

- Edit `src/constants/data.js` for profile information, experience, technologies, projects, social links, and the resume URL.
- Project order follows `projectData.projectList`. Use `featured` for badges, `categories` for filters, and `links` for project destinations. Category IDs must match `projectData.filters`.
- Technologies and social links use React Icon components through their `icon` fields. Group related technology labels when they share an icon.
- The hero's **View Resume** button opens `resumeData.url` in a new tab. Update the existing Google Drive file while keeping its public link stable; if the link changes, update this field.
- Keep the page title, descriptions, sharing metadata, and canonical URL in `index.html` consistent with the portfolio content and deployed URL.

Page sections are in `src/pages/`; navigation, footer, and Back to Top are in `src/components/`. The navbar IDs in `headerData.menuItems` must match the section IDs.

Shared styles are in `src/styles.js`, global CSS is in `src/index.css`, and theme settings are in `tailwind.config.js`. The favicon is `public/favicon.svg`.

Inter and Space Grotesk are hosted locally in `src/assets/fonts/`, alongside their license files.
