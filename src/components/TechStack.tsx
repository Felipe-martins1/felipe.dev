import { EvervaultCard } from "./ui/evervault-card";
import { techStackSection } from "@/resources/tech-stack";

export function TechStack() {
  return (
    <section className="mt-20">
      <h3 className="text-3xl font-bold tracking-tight text-foreground mb-2">
        {techStackSection.title}
      </h3>
      <p className="text-gray-500 dark:text-neutral-400 mb-2">
        {techStackSection.description}
      </p>
      <EvervaultCard className="aspect-auto relative">
        <div className="flex flex-wrap gap-2 z-20 p-5">
          {techStackSection.items.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 px-3 py-1 text-sm text-gray-700 dark:text-neutral-300"
            >
              <span>{tech.emoji}</span>
              {tech.name}
            </span>
          ))}
        </div>
      </EvervaultCard>
    </section>
  );
}
