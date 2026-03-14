import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects and work by Felipe Martins — Full-Stack development, product engineering, and more.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    type: "website",
    title: "Work — Felipe Martins",
    description:
      "Selected projects and work by Felipe Martins — Full-Stack development, product engineering, and more.",
    url: "/work",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Felipe Martins",
    description:
      "Selected projects and work by Felipe Martins — Full-Stack development, product engineering, and more.",
  },
};

export default function Blog() {
  return (
    <div className="text-sm font-medium text-neutral-500 mx-auto">
      Nothing here yet. Wait for it... <span className="animate-pulse">⏳</span>
    </div>
  );
}
