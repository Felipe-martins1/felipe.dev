import type { Metadata } from "next";
import { posts } from "@/resources/posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `/blog/${slug}`,
      publishedTime: post.publishedAt.toISOString(),
      ...(post.image && {
        images: [
          { url: post.image, width: 1200, height: 630, alt: post.title },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      ...(post.image && { images: [post.image] }),
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/markdown/${slug}.mdx`);

  return (
    <div className="min-h-screen">
      <Post />
    </div>
  );
}

export function generateStaticParams() {
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export const dynamicParams = false;
