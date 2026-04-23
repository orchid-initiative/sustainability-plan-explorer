// src/content.config.ts
// Astro 5 content collection configuration with Zod schema validation.
// Validates every file in src/content/sectors/*.md at build time.
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const targetSchema = z.object({
  id: z.string(),
  text: z.string(),
});

const baselineSchema = z.object({
  id: z.string(),
  text: z.string(),
});

const actionSchema = z.object({
  id: z.string(),
  text: z.string(),
  lead: z.string().optional(),
  timeline: z.string().optional(),
});

const goalSchema = z.object({
  id: z.string(),
  title: z.string(),
  target: targetSchema.optional(),
  baseline: baselineSchema.optional(),
  actions: z.array(actionSchema),
});

const sectors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sectors' }),
  schema: z.object({
    title: z.string(),
    friendlyName: z.string().optional(),
    themeGroup: z.enum([
      'Improve Our Quality of Life',
      'Build Climate Resilience',
      'Enhance Economic Sustainability',
    ]),
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
    relatedSectors: z.array(z.string()).default([]),
  }),
});

export const collections = { sectors };
