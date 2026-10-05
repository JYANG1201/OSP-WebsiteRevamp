import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    excerpt: z.string(),
    featuredImage: z.string().optional().default(''),
  }),
});

const careers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/careers' }),
  schema: z.object({
    title: z.string(),
    titleHighlight: z.string(),
    department: z.string(),
    type: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = { blog, careers };
