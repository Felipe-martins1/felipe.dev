"use client";

import { CalendarIcon, ChevronRight } from "lucide-react";

import { NoiseBackground } from "./ui/noise-background";

const whatsappMessage =
  "Hi Felipe! I found your website and would like to schedule a call about a project.";

export const SheduleCallButton = ({
  phoneNumber,
}: {
  phoneNumber?: string;
}) => {
  const handleScheduleCall = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <NoiseBackground
      containerClassName="w-fit rounded-full mt-6"
      gradientColors={[
        "rgb(255, 100, 150)",
        "rgb(100, 150, 255)",
        "rgb(255, 200, 100)",
      ]}
    >
      <button
        type="button"
        onClick={handleScheduleCall}
        className="h-full flex items-center gap-4 w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
      >
        <CalendarIcon size={16} /> Schedule a call <ChevronRight size={16} />
      </button>
    </NoiseBackground>
  );
};
