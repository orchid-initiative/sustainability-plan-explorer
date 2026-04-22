# Project Charter

## Executive Summary

The Sustainability Plan Explorer is a mobile-first website that makes a city's Sustainability Plan browsable by theme — replacing a dense PDF that few residents read with plain-language pages a neighbor can open on their phone, pick a topic, and immediately understand. The first deployment targets the **City of Alhambra's Comprehensive Environmental Sustainability Plan** (Public Draft, March 2026), with the long-term goal of city adoption as an official community engagement tool.

## Project Goals

1. Make every sector of the plan browsable as an individual mobile-friendly page.
2. Surface each sector's goals, strategies, and actions in language a non-expert can read in under two minutes.
3. Keep content in editable Markdown files so non-developers can update it when the plan is revised.
4. Ship a fully static site that any city IT department can host with zero ops burden.
5. Look and feel official enough that the City of Alhambra would adopt it.

## Deliverables

- A static website covering all sustainability sectors defined in the source plan.
- One Markdown content file per sector, validated at build time against a Zod schema.
- A design system using City of Alhambra brand colors with WCAG AA contrast verified.
- A `documentation/CONTENT_GUIDE.md` walkthrough for non-developer content updates.
- A deployable `dist/` folder hostable on GitHub Pages or any static host.

## Business Case / Background

**Why are we doing this?**

Most municipal sustainability plans are 100+ page PDFs that residents don't read. Alhambra's March 2026 draft is 124 pages. Without an accessible, plain-language interface, residents can't engage with what their city has committed to — and the plan exists primarily as a compliance document rather than a community resource. This project tests whether a thoughtful, low-cost civic explorer can change that.

## Benefits, Costs, and Budget

**Benefits:**
- Residents can browse plan content from a phone in seconds.
- City staff get a no-cost engagement tool that doesn't require ongoing developer support.
- Content is updateable via Markdown — no CMS license, no admin dashboard, no backend.
- Demonstrates a reusable pattern that could serve any city's sustainability or general plan.

**Costs:**
- Volunteer development time.
- One-time domain cost (optional — GitHub Pages provides a free `.github.io` subdomain).

**Budget needed:** Effectively $0 in cash; volunteer hours only.

# Scope and Exclusion

**In-Scope (v1):**
- Browsable home page with cards for every sector.
- One detail page per sector with goals, strategies, and actions in plain language.
- Plain-Markdown content files with build-time schema validation.
- Mobile-first responsive layout.
- Web Share API + Open Graph metadata so theme pages share cleanly in iMessage and WhatsApp.
- WCAG 2.1 AA: contrast, semantic HTML, skip link, focus indicators, alt text.
- Google Translate widget for non-English-speaking residents.
- Static deployment to GitHub Pages.

**Out-of-Scope (v1):**
- CMS or admin dashboard.
- Live sync with the city's PDF.
- User accounts or authentication.
- Comment / feedback submission.
- Action progress tracking (planned/in-progress/complete) — too easy to mislead with stale data.
- Search.
- Interactive data visualizations.
- Video, audio, or social-feed embeds.

# Project Team

Project Sponsor: Orchid Initiative

Product Owner: Riley Kwong

Project Lead: Riley Kwong

Project Development Team: Volunteer contributors (open-source).

Additional Stakeholders: City of Alhambra (target adopter); Alhambra Environmental Sustainability Commission.

# Measuring Success

**What is acceptable:**
- Site runs cleanly on a 375px-wide phone viewport.
- Build fails loudly when content files are malformed (no broken pages can ship).
- A non-developer can update a theme's content using only a text editor.
- City of Alhambra reviews the site and gives credible feedback on adopting it.

**Stretch:**
- City of Alhambra adopts the site as an official engagement tool.
- The codebase is reused (or forked) by another city for its own plan.
