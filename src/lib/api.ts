import { BlogPost } from "@/types/strapi";

// Mock data for now - replace with actual Strapi fetch later
export const getPosts = async (): Promise<BlogPost[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  return [
    {
      id: 1,
      attributes: {
        title: "On Systems and Complexity",
        slug: "on-systems-and-complexity",
        summary: "Exploring the architecture of distributed systems and the beauty of well-structured chaos.",
        content: "Full content here...",
        coverImage: {
          data: {
            attributes: {
              url: "/placeholder.svg",
              alternativeText: "Abstract system architecture",
            },
          },
        },
        publishedAt: "2024-01-15T10:00:00.000Z",
      },
    },
    {
      id: 2,
      attributes: {
        title: "The Quiet Corners",
        slug: "the-quiet-corners",
        summary: "A reflection on finding stillness in the noise of modern engineering.",
        content: "Full content here...",
        coverImage: {
          data: {
            attributes: {
              url: "/placeholder.svg",
              alternativeText: "Quiet contemplation",
            },
          },
        },
        publishedAt: "2024-01-10T10:00:00.000Z",
      },
    },
    {
      id: 3,
      attributes: {
        title: "Visual Control Planes",
        slug: "visual-control-planes",
        summary: "Designing interfaces that make complex systems comprehensible at a glance.",
        content: "Full content here...",
        coverImage: {
          data: {
            attributes: {
              url: "/placeholder.svg",
              alternativeText: "Control plane visualization",
            },
          },
        },
        publishedAt: "2024-01-05T10:00:00.000Z",
      },
    },
  ];
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const posts = await getPosts();
  return posts.find((post) => post.attributes.slug === slug) || null;
};
