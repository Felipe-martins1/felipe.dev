"use client";

import {
  BookOpen,
  BriefcaseBusiness,
  House,
  Moon,
  Sun,
  User,
} from "lucide-react";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const routes = [
  {
    name: "About",
    href: "/about",
    icon: User,
  },
  {
    name: "Work",
    href: "/work",
    icon: BriefcaseBusiness,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: BookOpen,
  },
];

const HeaderButton = ({
  href,
  icon: Icon,
  name,
  selected,
}: (typeof routes)[number] & { selected?: boolean }) => {
  return (
    <a
      href={href}
      className={clsx(
        "flex items-center gap-1.5 rounded-full px-2 py-1 text-sm font-medium text-foreground",
        "border border-transparent transition-colors duration-200",
        "hover:bg-gray-200 dark:hover:bg-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600",
        selected &&
          "bg-gray-200 dark:bg-neutral-800 border-gray-300 dark:border-neutral-600",
      )}
    >
      <Icon size={16} />
      {name}
    </a>
  );
};

export const Header = () => {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="sticky top-0 p-4 z-20 max-w-max mx-auto">
      <div className="flex gap-2 rounded-full bg-white dark:bg-neutral-900 drop-shadow-2xl shadow-neutral-500 border-gray-300 dark:border-neutral-700 border p-1">
        <HeaderButton href="/" icon={House} name="" selected={isActive("/")} />
        <span className="w-px self-stretch bg-gray-200 dark:bg-neutral-700 my-1" />
        <div className="flex gap-4">
          {routes.map((route) => (
            <HeaderButton
              key={route.href}
              {...route}
              selected={isActive(route.href)}
            />
          ))}
        </div>
        <span className="w-px self-stretch bg-gray-200 dark:bg-neutral-700 my-1" />
        <button
          type="button"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className={clsx(
            "flex items-center rounded-full px-2 py-1 text-sm font-medium text-foreground",
            "border border-transparent transition-colors duration-200",
            "hover:bg-gray-200 dark:hover:bg-neutral-800 hover:border-gray-300 dark:hover:border-neutral-600",
          )}
        >
          {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
};
