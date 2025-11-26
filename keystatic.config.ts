import { config, fields, collection } from '@keystatic/core';

// Helper to get env vars safely in both Node (Vite config) and Browser
const isProd = import.meta.env?.PROD ?? process.env.NODE_ENV === 'production';
const repo = (import.meta.env?.VITE_GITHUB_REPO ?? process.env.VITE_GITHUB_REPO) as `${string}/${string}` || 'zeeahmad/ashik-s-digital-canvas';

export default config({
    storage: isProd
        ? {
            kind: 'cloud',
        }
        : {
            kind: 'local',
        },
    cloud: {
        project: 'zeeshanahmad-io/ashik-digital-canvas',
    },
    collections: {
        journal: collection({
            label: 'Journal',
            slugField: 'title',
            path: 'src/content/journal/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                date: fields.date({ label: 'Date' }),
                coverImage: fields.image({
                    label: 'Cover Image',
                    directory: 'public/images/journal',
                    publicPath: '/images/journal',
                }),
                description: fields.text({ label: 'Description', multiline: true }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                    images: {
                        directory: 'public/images/journal/content',
                        publicPath: '/images/journal/content',
                    },
                }),
            },
        }),
    },
});
