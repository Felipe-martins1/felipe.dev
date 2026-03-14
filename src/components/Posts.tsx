import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import { FileIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { posts } from "@/resources/posts";

type Props = {
  range?: number;
  classNames: string[];
};

export function Posts({ range, classNames }: Props) {
  const sortedBlogs = posts.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  const displayedBlogs = sortedBlogs.slice(0, range);

  if (displayedBlogs.length === 0) {
    return (
      <div className="text-sm font-medium text-neutral-500 mx-auto">
        I'm currently preparing articles for this section. New content about
        React, Next.js and software engineering is coming soon.
        <span className="animate-pulse">⏳</span>
      </div>
    );
  }

  return (
    <BentoGrid className="w-full md:auto-rows-[20rem]">
      {displayedBlogs.map((post, index) => (
        <BentoGridItem
          key={post.slug}
          title={post.title}
          description={post.subtitle}
          header={
            post.image ? (
              <div className="relative flex flex-1 w-full h-full min-h-24 rounded-xl overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <Skeleton />
            )
          }
          className={classNames?.[index] || "md:col-span-3"}
          icon={post.emoji}
          href={`/blog/${post.slug}`}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-dot-black/[0.2] mask-[radial-gradient(ellipse_at_center,white,transparent)] border border-transparent bg-neutral-100 dark:border-white/20 dark:bg-dot-white/[0.2] dark:bg-black">
    Soon...
  </div>
);
