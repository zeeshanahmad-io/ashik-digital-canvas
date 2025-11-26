import fm from 'front-matter';

export interface JournalEntry {
    slug: string;
    title: string;
    date: string;
    description: string;
    coverImage?: string;
    content: string;
}

export async function getJournalEntries(): Promise<JournalEntry[]> {
    const modules = import.meta.glob('/src/content/journal/*.{md,mdoc}', { query: '?raw', import: 'default', eager: true });
    const entries = Object.entries(modules).map(([path, content]) => {
        const slug = path.split('/').pop()?.replace(/\.(md|mdoc)$/, '') || '';
        const parsed = fm<any>(content as string);
        return {
            slug,
            title: parsed.attributes.title,
            date: parsed.attributes.date,
            description: parsed.attributes.description,
            coverImage: parsed.attributes.coverImage,
            content: parsed.body,
        };
    });
    return entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getJournalEntry(slug: string): Promise<JournalEntry | undefined> {
    const entries = await getJournalEntries();
    return entries.find((entry) => entry.slug === slug);
}
