import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { selectedWorkSection } from "@/resources/selected-work";

export function SelectedWork() {
  if (!selectedWorkSection.items.length) {
    return null;
  }

  return (
    <section className="mt-20">
      <h3 className="text-3xl font-bold tracking-tight text-foreground mb-2">
        {selectedWorkSection.title}
      </h3>
      <p className="text-gray-500 dark:text-neutral-400 mb-6">
        {selectedWorkSection.description}
      </p>
      <div className="flex flex-col gap-6">
        {selectedWorkSection.items.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-5 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 p-4 hover:border-gray-300 dark:hover:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            <div className="relative h-24 w-40 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>
                <div className="flex items-center gap-1 font-semibold text-foreground">
                  {project.title}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400 line-clamp-2">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 px-2 py-0.5 text-xs text-gray-600 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
