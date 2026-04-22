// src/content.config.ts
// Astro 5 content collection configuration with Zod schema validation.
// Validates every file in src/content/themes/*.md at build time.
// See .planning/phases/01-content-schema-and-data-model/01-RESEARCH.md
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Level 3 (leaf): a single action under a goal.
const actionSchema = z.object({
  id: z.string(),
  text: z.string(),
  lead: z.string().optional(),
  timeline: z.string().optional(),
});

// Level 2: a goal contains actions[].
const goalSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  actions: z.array(actionSchema),
});

// Level 1: a theme (the collection entry itself).
const themes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/themes' }),
  schema: z.object({
    title: z.string(),
    slug: z
      .string()
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'Slug must be lowercase kebab-case (e.g., "energy", "urban-greening")',
      }),
    icon: z.string(),
    color: z.string().regex(/^#[0-9a-fA-F]{6}$/, {
      message: 'Color must be a 6-digit hex value (e.g., "#2A7A4B")',
    }),
    summary: z.string(),
    order: z.number().int().positive(),
    goals: z.array(goalSchema),
    lastUpdated: z.coerce.date(),
    source_reference: z.string(),
    relatedThemes: z.array(z.string()).default([]),
  }),
});

export const collections = { themes };
