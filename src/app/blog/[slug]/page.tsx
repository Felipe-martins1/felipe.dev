import { notFound } from "next/navigation";
import { posts } from "@/resources/posts";

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
