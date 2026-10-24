# জনবার্তা — Bengali News Portal

A responsive Bengali news-portal frontend prepared for GitHub Pages.

## Included in this frontend
- Responsive Bengali homepage and category navigation (including lifestyle and religion)
- Client-side search and category filters over sample data
- Dark mode, current date display, and breaking-news ticker
- Lead story, latest-news cards, and popular-story sidebar
- 14 separate sample article pages with canonical URLs, Open Graph metadata, NewsArticle JSON-LD, breadcrumbs, related stories, share/copy and print controls
- Story modal for lead/gallery samples, browser-local bookmarks, reader controls, and reading progress
- Live TV placeholder, video-news showcase, and photo/video gallery
- Browser-local draft editor demo
- About, contact demo, privacy/terms, branded 404, robots.txt, XML sitemap, RSS sample feed, and basic web-app manifest
- GitHub Actions workflow for GitHub Pages deployment

## Important limitations
- All articles, headlines, RSS entries, and gallery content are demo/sample content, not verified live news.
- The RSS feed is static and does not update automatically when articles change.
- The live TV section is a placeholder; no broadcast stream is embedded.
- The editor and bookmarks use browser-local storage. The editor is not a secure multi-user admin CMS.
- The contact form is a demo and does not send messages. Newsletter submission is also a demo.
- Real authenticated admin publishing, server-side database, media uploads, scheduling, user roles, live news API/RSS ingestion, dynamic RSS, email delivery, analytics, push notifications, and video streaming require backend services and credentials.
- The manifest is only a basic app manifest; offline service-worker support and production app icons are not included yet.
- Use original branding and properly licensed images. Verify every story and source before publication.

## Deploy
In repository Settings → Pages, choose GitHub Actions as the build/deployment source. The workflow in `.github/workflows/pages.yml` deploys the repository root when changes are pushed to `main`.

## Project
https://github.com/shamimislamseo/polytechnicnoticeboard
