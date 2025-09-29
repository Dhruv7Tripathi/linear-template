"use client";

import { cn } from "@/lib/utils";
import { VscListSelection } from "react-icons/vsc";
import { HiOutlineSelector } from "react-icons/hi";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

type StepDetail = {
  title: string;
  description: string;
};

type GlideSelectProps = {
  steps?: StepDetail[];
};

const positions = [8, 62, 116, 170];

const GlideSelect = ({
  steps = [
    {
      title: "Start from Scratch",
      description: "Design and build everything your way.",
    },
    {
      title: "Use a Template",
      description: "Get a ready-made starter to save time.",
    },
    {
      title: "Remix an Existing UI",
      description: "Take inspiration and make it your own.",
    },
    {
      title: "Explore Component Library",
      description: "Drop in ready-made components with ease.",
    },
  ],
}: GlideSelectProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div
      className={cn(
        "relative",
        "flex w-full max-w-[430px] flex-col justify-center",
        "rounded-md px-0.5 pb-0.5 pt-0.5",
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col justify-center",
          "border border-neutral-200 dark:border-neutral-900/50",
          "rounded-md px-1.5 pb-1.5 pt-1.5",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between",
            "rounded-t-[6px] py-2.5 pl-[18px] pr-2.5",
            "border-x border-t border-neutral-200 dark:border-neutral-800/60",
            "bg-neutral-100 dark:bg-[#101010]",
            "text-[13px] text-neutral-700 dark:text-neutral-300",
          )}
        >
          <div className="flex items-center gap-2">
            <VscListSelection className="mt-0.5 size-[14px] text-neutral-600 dark:text-neutral-400" />
            <AnimatePresence mode="wait">
              <motion.p
                key={steps[currentStep].title}
                initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {steps[currentStep].title}
              </motion.p>
            </AnimatePresence>
          </div>
          <span>
            <HiOutlineSelector className="mt-0.5 size-[14px] text-neutral-600 dark:text-neutral-400" />
          </span>
        </div>
        <div
          className={cn(
            "relative",
            "flex min-h-[235px] w-full flex-col gap-1 overflow-hidden",
            "rounded-b-[5px] border border-neutral-200 px-3 py-2 dark:border-neutral-800/60",
            "bg-neutral-100 dark:bg-[#101010]",
          )}
        >
          <div
            style={{
              top: `${positions[currentStep]}px`,
              transition: "top 0.6s ease-in-out",
            }}
            className="absolute inset-x-0 left-0 mx-auto h-[56px] w-[94%] rounded-md bg-neutral-200 dark:bg-neutral-900"
          />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className={cn(
                "absolute flex h-[56px] w-full justify-center gap-2 rounded-md px-1 py-2 text-primary",
              )}
              style={{ top: `${positions[idx]}px` }}
            >
              <div className="mt-1 flex h-full w-[5%] justify-center">
                <span
                  className={cn(
                    "h-[8px] w-[8px] rounded-[1px] transition-colors delay-100 duration-700 ease-in-out",
                    idx === currentStep ? "bg-green-400" : "bg-primary/30",
                  )}
                />
              </div>
              <div className="flex h-full w-full flex-col gap-1 text-xs">
                <p className="text-xs text-primary">{step.title}</p>
                <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlideSelect;
