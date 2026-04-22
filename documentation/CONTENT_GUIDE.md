[Back to main README](../README.md)

# Content Update Guide

This guide is for **non-developers** who need to update the content shown on the site. You don't need to install anything or run any commands. You only need a web browser and a GitHub account.

## What you can update

Every sector of the Sustainability Plan (Energy and Buildings, Water, Mobility, etc.) lives in its own Markdown file inside `src/content/themes/`. To change what shows up on a sector page — its title, summary, goals, or actions — you edit that one file.

You **cannot** break the site by editing these files badly. The build checks every file against a strict schema, and any error stops the build with a clear message about which field on which line is wrong. Nothing broken ever reaches the live site.

## Anatomy of a sector file

A sector file has two parts:

1. **Frontmatter** (the block between the two `---` lines at the top): structured metadata.
2. **Body** (everything below the second `---`): the narrative intro shown above the goals on each sector page.

Here's the top of `src/content/themes/water.md` as an example:

```markdown
---
title: "Water"
slug: "water"
icon: "droplet"
color: "#2274A5"
summary: "Protecting the water Alhambra has, capturing stormwater that used to just run off..."
order: 6
lastUpdated: 2026-04-22
source_reference: "Sustainable Alhambra (Public Draft, March 2026), Chapter 3, pp. 3-34 to 3-38"
relatedThemes: ["green-space", "energy"]

goals:
  - id: "W-S1"
    title: "Improve local water systems and protect water resources"
    description: "Target: increase stormwater capture and reuse..."
    actions:
      - id: "W-1a"
        text: "Upgrade water treatment facilities with advanced filtration..."
      - id: "W-1b"
        text: "Tighten regulations to limit pollutants entering local waterways."
---

Southern California is arid, and long-term water resilience means using less...
```

## Field reference

| Field | What it does | Rules |
|---|---|---|
| `title` | Sector name shown on cards and page headers | Any text in quotes |
| `slug` | The URL path piece, e.g. `water` makes `/themes/water/` | Lowercase letters, numbers, hyphens only |
| `icon` | Which icon shows on the card and page header | Must match an icon name in `src/components/ThemeIcon.astro` |
| `color` | Card and accent color for this sector | Six-digit hex code with `#`, e.g. `#2274A5` |
| `summary` | One-sentence description on the home page card | Any text in quotes |
| `order` | What position the card appears in on the home page | Whole number, lowest first |
| `lastUpdated` | When this file was last updated | Date in `YYYY-MM-DD` format |
| `source_reference` | Where in the source plan this content comes from | Any text in quotes |
| `relatedThemes` | Other sector slugs to link at the bottom of this page | List of slugs in brackets, e.g. `["energy", "mobility"]` |
| `goals` | List of strategies/goals (each becomes an accordion section) | See below |

### Inside `goals`

Each goal becomes one collapsible section on the page. Each goal has:

- `id` — short identifier (e.g. `W-S1`). Doesn't show on the page; useful for tracking.
- `title` — the heading shown in the accordion summary.
- `description` *(optional)* — short text under the title, often the strategy's measurable target.
- `actions` — the bullet list shown when the accordion is expanded. Each action has its own `id` and `text`.

## How to make a change

1. Go to the file on GitHub: `https://github.com/orchid-initiative/sustainability-plan-explorer/tree/main/src/content/themes`
2. Click the file you want to edit (e.g. `water.md`).
3. Click the pencil icon (top right) to open the editor.
4. Make your change. Watch the indentation — every level of indent under `goals:` matters.
5. Scroll down, write a short note describing what you changed (e.g. "Updated water summary"), and click **Commit changes** to save.
6. Once your change is committed, the site will rebuild automatically (assuming GitHub Pages auto-deploy is set up). Check the site a minute or two later.

## How to add a new sector

1. Copy an existing file in `src/content/themes/` (right-click → "Copy" via the GitHub UI is easiest).
2. Rename it. The filename (e.g. `transportation.md`) becomes part of the URL.
3. Update the frontmatter — at minimum `title`, `slug`, `summary`, `order`.
4. Add the new sector's slug to one or more existing files' `relatedThemes` list if you want them cross-linked.
5. Commit. The new sector's card will appear on the home page automatically.

## How to remove a sector

Delete the file from `src/content/themes/`. The card and detail page will both disappear from the next build. Also remove the deleted slug from any other file's `relatedThemes` list.

## What if something looks wrong on the live site?

- **Card has no icon, or wrong icon:** the `icon` value doesn't match a registered icon name. Check `src/components/ThemeIcon.astro` for the list.
- **Page won't build:** open the GitHub Actions tab on this repo. The failed run will tell you which field on which file failed validation.
- **Card text wraps oddly:** trim the `summary` to one short sentence — the home page card truncates after three lines.

## Need help?

Open a GitHub Issue on this repo or email contact@orchidinitiative.com.
