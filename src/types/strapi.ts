export interface BlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    summary: string;
    content: string;
    coverImage: {
      data: {
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
    publishedAt: string;
  };
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
