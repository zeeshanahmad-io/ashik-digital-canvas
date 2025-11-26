import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: import.meta.env.PROD
        ? {
            kind: 'github',
            repo: (import.meta.env.VITE_GITHUB_REPO as `${string}/${string}`) || 'zeeahmad/ashik-digital-canvas',
        }
        : {
            kind: 'local',
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
