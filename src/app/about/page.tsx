import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Felipe Martins — a Senior Full-Stack Developer helping companies build fast, scalable, and beautiful products.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    title: "About — Felipe Martins",
    description:
      "Learn more about Felipe Martins — a Senior Full-Stack Developer helping companies build fast, scalable, and beautiful products.",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Felipe Martins",
    description:
      "Learn more about Felipe Martins — a Senior Full-Stack Developer helping companies build fast, scalable, and beautiful products.",
  },
};

export default function Blog() {
  return (
    <div className="text-sm font-medium text-neutral-500 mx-auto">
      I'm currently preparing content for this section. New content about me is
      coming soon. <span className="animate-pulse">⏳</span>
    </div>
  );
}
