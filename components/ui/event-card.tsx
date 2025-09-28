"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import React, { useState } from "react";

type EventCardProps = {
  firstEvent?: string;
  firstEventTime?: string;
  secondEvent?: string;
  secondEventTime?: string;
  cardTitle?: string;
  cardDescription?: string;
};

const EventCard = ({
  firstEvent = "Solana Meet: BLR",
  firstEventTime = "8:30–11PM",
  secondEvent = "UX Testing Slot",
  secondEventTime = "5:30–8:30PM",
  cardTitle = "Event Timeline",
  cardDescription = "Visualize and navigate your daily flow with beautifully animated, color-coded time blocks.",
}: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const calenderVariant: Variants = {
    open: {
      transform: "translateY(-70px) translateX(-255px)",
      transition: {
        duration: 0.6,
        delay: 0.13,
        ease: "easeInOut",
      },
    },
    close: {
      transform: "translateY(0px) translateX(0px)",
      transition: {
        duration: 0.6,
        delay: 0.13,
        ease: "easeInOut",
      },
    },
  };

  const firstTimeVariant: Variants = {
    open: {
      opacity: 0,
      y: 5,
      height: 0,
      transition: { duration: 0.35, ease: "easeInOut", delay: 0 },
    },
    close: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.35, ease: "easeInOut", delay: 0.45 },
    },
  };

  const secondTimeVariant: Variants = {
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.35, ease: "easeInOut", delay: 0.45 },
    },
    close: {
      opacity: 0,
      y: 5,
      height: 0,
      transition: { duration: 0.35, ease: "easeInOut", delay: 0 },
    },
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="close"
      animate={isHovered ? "open" : "close"}
      className={cn(
        "relative",
        "flex w-full max-w-[400px] flex-col justify-center",
        "rounded-md px-0.5 pb-0.5 pt-0.5",
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col justify-center",
          "border border-neutral-200 dark:border-neutral-800/50",
          "rounded-md px-1.5 pb-1.5 pt-1.5",
        )}
      >
        <div
          className={cn(
            "relative",
            "flex min-h-[280px] w-full flex-col gap-1 overflow-hidden",
            "rounded-[6px] border border-neutral-200 dark:border-neutral-800/60",
            "bg-neutral-100 dark:bg-neutral-950",
          )}
        >
          <div className="relative mx-auto h-[280px] w-full min-w-[380px] max-w-[380px] overflow-hidden">
            <motion.div
              variants={calenderVariant}
              className="absolute left-0 top-0 h-[300px] w-[687px]"
            >
              <div className="relative h-full w-full">
                <CalenderGrid />
                <div
                  className={cn(
                    "absolute left-[84px] top-[85px]",
                    "flex min-h-8 w-32 items-center justify-between rounded-sm",
                    "bg-gradient-to-r from-green-600 to-green-400 p-1 dark:to-emerald-800",
                  )}
                >
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-sm bg-neutral-400 dark:bg-neutral-900"
                  />
                  <div className="relative flex w-full items-center justify-between">
                    <span className="h-[10px] w-[3px] rounded-sm bg-neutral-300 dark:bg-neutral-400" />
                    <div className="flex h-full w-full flex-col justify-center px-2">
                      <p className="text-xs text-neutral-50 dark:text-neutral-200">
                        {firstEvent}
                      </p>
                      <motion.p
                        variants={firstTimeVariant}
                        className="overflow-hidden text-[11px] text-neutral-100 dark:text-neutral-300"
                      >
                        {firstEventTime}
                      </motion.p>
                    </div>
                    <span className="h-[10px] w-[3px] rounded-sm bg-neutral-200 dark:bg-neutral-500" />
                  </div>
                </div>

                <div
                  className={cn(
                    "absolute left-[389px] top-[164px] flex min-h-8 w-32 items-center justify-between rounded-sm p-1",
                    "bg-neutral-400 dark:bg-neutral-900",
                  )}
                >
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-sm bg-gradient-to-r from-green-600 to-green-400 dark:to-emerald-800"
                  />
                  <div className="relative flex w-full items-center justify-between">
                    <span className="h-[10px] w-[3px] rounded-sm bg-neutral-300 dark:bg-neutral-400" />
                    <div className="flex h-full w-full flex-col justify-center px-2">
                      <p className="text-xs text-neutral-50 dark:text-neutral-200">
                        {secondEvent}
                      </p>
                      <motion.p
                        variants={secondTimeVariant}
                        className="overflow-hidden text-[11px] text-neutral-100 dark:text-neutral-300"
                      >
                        {secondEventTime}
                      </motion.p>
                    </div>
                    <span className="h-[10px] w-[3px] rounded-sm bg-neutral-200 dark:bg-neutral-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <ContainerMask />
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-full px-5">
        <h3 className="text-sm font-semibold text-primary">{cardTitle}</h3>
        <p className="mt-1.5 text-xs text-neutral-800 dark:text-neutral-400">
          {cardDescription}
        </p>
      </div>
    </motion.div>
  );
};

export default EventCard;

const CalenderGrid = () => {
  const days = Array.from({ length: 36 }, (_, i) => i + 1);
  return (
    <div className="grid w-fit grid-cols-9 gap-0">
      {days.map((day, idx) => (
        <div
          key={idx}
          className="flex h-20 w-20 items-end justify-start border-b border-r border-neutral-200 p-1 text-[10px] text-neutral-400 dark:border-neutral-800/60 dark:text-neutral-700"
        >
          {day}
        </div>
      ))}
    </div>
  );
};

const ContainerMask = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 h-[120px] w-full [background-image:linear-gradient(to_top,theme(colors.neutral.100)_40%,transparent_100%)] dark:[background-image:linear-gradient(to_top,theme(colors.neutral.950)_40%,transparent_100%)]" />
      <div className="absolute left-0 top-0 h-full w-[30px] [background-image:linear-gradient(to_right,theme(colors.neutral.100)_20%,transparent_100%)] dark:[background-image:linear-gradient(to_right,theme(colors.neutral.950)_20%,transparent_100%)]" />
      <div className="absolute right-0 top-0 h-full w-[30px] [background-image:linear-gradient(to_left,theme(colors.neutral.100)_20%,transparent_100%)] dark:[background-image:linear-gradient(to_left,theme(colors.neutral.950)_20%,transparent_100%)]" />
      <div className="absolute right-0 top-0 h-[30px] w-full [background-image:linear-gradient(to_bottom,theme(colors.neutral.100)_20%,transparent_100%)] dark:[background-image:linear-gradient(to_bottom,theme(colors.neutral.950)_20%,transparent_100%)]" />
    </>
  );
};
