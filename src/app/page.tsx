import { CalendarIcon, ChevronRight } from "lucide-react";

import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { NoiseBackground } from "@/components/ui/noise-background";
import { Posts } from "@/components/Posts";
import { SelectedWork } from "@/components/SelectedWork";
import { SheduleCallButton } from "@/components/SheduleCallButton";
import { TechStack } from "@/components/TechStack";
import { socialsSection } from "@/resources/socials";

export default function Home() {
  const phoneNumber = process.env.PHONE_NUMBER;

  return (
    <>
      <div className="w-full flex justify-end gap-2">
        {socialsSection.links.map(({ icon: Icon, ...social }) => (
          <a
            key={social.name}
            href={social.url}
            target={social.url.startsWith("mailto") ? undefined : "_blank"}
            rel={
              social.url.startsWith("mailto")
                ? undefined
                : "noopener noreferrer"
            }
            className="border-gray-300 dark:border-neutral-700 flex items-center gap-1 text-sm border px-2 p-1 rounded-full text-foreground hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-200"
          >
            <Icon size={14} />
            {social.name}
          </a>
        ))}
      </div>
      <div className="relative">
        <div className="flex items-center gap-4">
          <Image
            src="/me.png"
            alt="Waving hand"
            width={40}
            height={40}
            className="inline-block rounded-full my-2"
          />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Hello, i'm Felipe, i build products people{" "}
          <span className="sr-only">Love</span>
          <FlipWords words={["love", "trust", "need", "remember"]} />.
        </h1>
        <h2 className="text-lg text-gray-500 dark:text-neutral-400 mt-2">
          Senior Full-Stack Developer. I help companies build fast, scalable
          products — and make sure they look great doing it.
        </h2>
      </div>

      <SheduleCallButton phoneNumber={phoneNumber} />

      <section className="mt-20">
        <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
          Last Posts
        </h3>
        <Posts
          range={4}
          classNames={[
            "md:col-span-2",
            "md:col-span-1",
            "md:col-span-1",
            "md:col-span-2",
          ]}
        />
      </section>
      <TechStack />
      <SelectedWork />
    </>
  );
}
