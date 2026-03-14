type Metadata = {
  slug: string;
  title: string;
  subtitle?: string;
  publishedAt: Date;
  summary: string;
  image?: string;
  tag?: string;
  emoji?: string;
};

export const posts: Metadata[] = [];
