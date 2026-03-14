/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionTemplate } from "motion/react";

import { cn } from "@/utils/cn";
import { useMotionValue } from "motion/react";

export const EvervaultCard = ({
  className,
  children,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(1500);
    setRandomString(str);
    setIsMobile(window.matchMedia("(hover: none)").matches);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    const str = generateRandomString(1500);
    setRandomString(str);
  }

  const isActive = isMouseInside && !isMobile;

  return (
    <div
      className={cn(
        "p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative",
        className,
      )}
    >
      <div
        onMouseMove={onMouseMove}
        onMouseEnter={() => setIsMouseInside(true)}
        onMouseLeave={() => setIsMouseInside(false)}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
          isActive={isActive}
        />
        {children}
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString, isActive }: any) {
  const dynamicMask = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const staticMask = "radial-gradient(250px at 50% 50%, white, transparent)";
  const style = isActive
    ? { maskImage: dynamicMask, WebkitMaskImage: dynamicMask }
    : { maskImage: staticMask, WebkitMaskImage: staticMask };

  return (
    <div className="pointer-events-none">
      <div
        className={cn(
          "absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] transition-opacity duration-500",
          isActive ? "opacity-50" : "opacity-100",
        )}
      ></div>
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 backdrop-blur-xl transition duration-500",
          isActive ? "opacity-100" : "opacity-100",
        )}
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-100 mix-blend-overlay"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
