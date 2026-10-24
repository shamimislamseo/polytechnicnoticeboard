# জনবার্তা — Bengali News Portal

A responsive Bengali news-portal frontend prepared for GitHub Pages.

## Included in this frontend
- Responsive Bengali homepage and category navigation (including lifestyle and religion)
- Client-side search, category filters, result count, sorting by title/category, filter reset, and `/` keyboard shortcut over sample data
- Dark mode, current date display, and breaking-news ticker
- Lead story, latest-news cards, and popular-story sidebar
- 14 separate sample article pages with canonical URLs, Open Graph metadata, NewsArticle JSON-LD, breadcrumbs, related stories, Web Share/copy, WhatsApp/Facebook sharing links, print, and correction-report links
- Story modal for lead/gallery samples, browser-local bookmarks, reader controls, and reading progress
- Live TV placeholder with a configurable `live-config.js` slot and Bengali live setup guide (`live-setup.html`); video-news showcase and photo/video gallery
- Browser-local draft editor demo
- About, contact demo, privacy/terms, editorial/corrections policy, advertising information, live setup guide, branded 404, robots.txt, XML sitemap, RSS sample feed, and web-app manifest
- GitHub Actions workflow for GitHub Pages deployment

## Important limitations
- All articles, headlines, RSS entries, and gallery content are demo/sample content, not verified live news.
- The RSS feed is static and does not update automatically when articles change.
- Live stream is not enabled by default. To add it later, use `live-setup.html` and update `live-config.js` with your own authorized HTTPS embed URL; no stream is invented or embedded now.
- The editor and bookmarks use browser-local storage. The editor is not a secure multi-user admin CMS.
- The contact form is a demo and does not send messages. Newsletter submission is also a demo.
- Real authenticated admin publishing, server-side database, media uploads, scheduling, user roles, live news API/RSS ingestion, dynamic RSS, email delivery, analytics, push notifications, and video streaming require backend services and credentials.
- Basic service-worker app-shell caching, a scalable SVG brand icon, and manifest shortcuts are included. Offline support is best-effort and does not make external images/video or dynamic content available offline.
- Use original branding and properly licensed images. Verify every story and source before publication.

## Deploy
In repository Settings → Pages, choose GitHub Actions as the build/deployment source. The workflow in `.github/workflows/pages.yml` deploys the repository root when changes are pushed to `main`.

## Project
https://github.com/shamimislamseo/polytechnicnoticeboard
