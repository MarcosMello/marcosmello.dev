import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    type: 'data',
    schema: z.object({
        short_description: z.string(),
        iconsProperties: z.array(z.object({
            name: z.string(),
            color: z.optional(z.string()),
            width: z.optional(z.union([z.number(), z.string()])),
            height: z.optional(z.union([z.number(), z.string()])),
        })),
        imagePath: z.string(),
        altText: z.string(),
        windowTitle: z.string()
    }),
});

export const collections = {
    'projects': projectCollection
};