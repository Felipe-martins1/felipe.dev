import type { Metadata } from "next";
import { Posts } from "@/components/Posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles and thoughts on software development, engineering, and building products.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "Blog — Felipe Martins",
    description:
      "Articles and thoughts on software development, engineering, and building products.",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Felipe Martins",
    description:
      "Articles and thoughts on software development, engineering, and building products.",
  },
};

export default function Blog() {
  return (
    <div className="mx-auto">
      <Posts
        classNames={[
          "md:col-span-2",
          "md:col-span-1",
          "md:col-span-1",
          "md:col-span-2",
        ]}
      />
    </div>
  );
}
