"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import React, { useState, useEffect } from "react";

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
  // secondEvent = "UX Testing Slot",
  // secondEventTime = "5:30–8:30PM",
  cardTitle = "Event Timeline",
  cardDescription = "Visualize and navigate your daily flow with beautifully animated, color-coded time blocks.",
}: EventCardProps) => {
  const [, setIsHovered] = useState(false);
  const [screenSize, setScreenSize] = useState<'sm' | 'md' | 'lg'>('lg');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('sm');
      } else if (width < 1024) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Get responsive values based on screen size
  const getResponsiveValues = () => {
    switch (screenSize) {
      case 'sm':
        return {
          containerWidth: 280,
          containerHeight: 200,
          gridWidth: 450,
          gridHeight: 240,
          calendarTransform: "translateY(-50px) translateX(-170px)",
          firstEventPosition: { left: 60, top: 60 },
          secondEventPosition: { left: 280, top: 120 },
          eventWidth: 120,
          gridCols: 7,
          gridItems: 28,
          cellSize: 60,
        };
      case 'md':
        return {
          containerWidth: 340,
          containerHeight: 240,
          gridWidth: 560,
          gridHeight: 280,
          calendarTransform: "translateY(-60px) translateX(-210px)",
          firstEventPosition: { left: 70, top: 70 },
          secondEventPosition: { left: 330, top: 140 },
          eventWidth: 128,
          gridCols: 8,
          gridItems: 32,
          cellSize: 70,
        };
      default: // lg
        return {
          containerWidth: 380,
          containerHeight: 280,
          gridWidth: 687,
          gridHeight: 300,
          calendarTransform: "translateY(-70px) translateX(-255px)",
          firstEventPosition: { left: 84, top: 85 },
          secondEventPosition: { left: 389, top: 164 },
          eventWidth: 128,
          gridCols: 9,
          gridItems: 36,
          cellSize: 80,
        };
    }
  };

  const responsiveValues = getResponsiveValues();

  const calendarVariant: Variants = {
    open: {
      transform: responsiveValues.calendarTransform,
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

  // const secondTimeVariant: Variants = {
  //   open: {
  //     opacity: 1,
  //     y: 0,
  //     height: "auto",
  //     transition: { duration: 0.35, ease: "easeInOut", delay: 0.45 },
  //   },
  //   close: {
  //     opacity: 0,
  //     y: 5,
  //     height: 0,
  //     transition: { duration: 0.35, ease: "easeInOut", delay: 0 },
  //   },
  // };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="close"
      // animate={isHovered ? "open" : "close"}
      className={cn(
        "relative flex w-full flex-col justify-center rounded-md px-0.5 pb-0.5 pt-0.5",
        // Responsive max widths
        "max-w-[280px] sm:max-w-[340px] lg:max-w-[400px]"
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
            "relative flex w-full flex-col gap-1 overflow-hidden",
            "rounded-[6px] border border-neutral-200 dark:border-neutral-800/60",
            "bg-neutral-100 dark:bg-neutral-950",
            // Responsive heights
            "min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]"
          )}
        >
          <div
            className="relative mx-auto w-full overflow-hidden"
            style={{
              height: `${responsiveValues.containerHeight}px`,
              minWidth: `${responsiveValues.containerWidth}px`,
              maxWidth: `${responsiveValues.containerWidth}px`,
            }}
          >
            <motion.div
              variants={calendarVariant}
              className="absolute left-0 top-0"
              style={{
                height: `${responsiveValues.gridHeight}px`,
                width: `${responsiveValues.gridWidth}px`,
              }}
            >
              <div className="relative h-full w-full">
                <CalendarGrid
                  gridCols={responsiveValues.gridCols}
                  gridItems={responsiveValues.gridItems}
                  cellSize={responsiveValues.cellSize}
                />

                {/* First Event */}
                <div
                  className={cn(
                    "absolute flex min-h-8 items-center justify-between rounded-sm",
                    "bg-gradient-to-r from-green-600 to-green-400 p-1 dark:to-emerald-800",
                  )}
                  style={{
                    left: `${responsiveValues.firstEventPosition.left}px`,
                    top: `${responsiveValues.firstEventPosition.top}px`,
                    width: `${responsiveValues.eventWidth}px`,
                  }}
                >
                  {/* <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-sm bg-neutral-400 dark:bg-neutral-900"
                  /> */}
                  <div className="relative flex w-full items-center justify-between">
                    <span className={cn(
                      "rounded-sm bg-neutral-300 dark:bg-neutral-400",
                      // Responsive indicator size
                      "h-[8px] w-[2.5px] sm:h-[10px] sm:w-[3px]"
                    )} />
                    <div className="flex h-full w-full flex-col justify-center px-2">
                      <p className={cn(
                        "text-neutral-50 dark:text-neutral-200",
                        // Responsive text size
                        "text-[10px] sm:text-xs"
                      )}>
                        {firstEvent}
                      </p>
                      <motion.p
                        variants={firstTimeVariant}
                        className={cn(
                          "overflow-hidden text-neutral-100 dark:text-neutral-300",
                          // Responsive text size
                          "text-[9px] sm:text-[11px]"
                        )}
                      >
                        {firstEventTime}
                      </motion.p>
                    </div>
                    <span className={cn(
                      "rounded-sm bg-neutral-200 dark:bg-neutral-500",
                      // Responsive indicator size
                      "h-[8px] w-[2.5px] sm:h-[10px] sm:w-[3px]"
                    )} />
                  </div>
                </div>

                {/* Second Event */}
                {/* <div
                  className={cn(
                    "absolute flex min-h-8 items-center justify-between rounded-sm p-1",
                    "bg-neutral-400 dark:bg-neutral-900",
                  )}
                  style={{
                    left: `${responsiveValues.secondEventPosition.left}px`,
                    top: `${responsiveValues.secondEventPosition.top}px`,
                    width: `${responsiveValues.eventWidth}px`,
                  }}
                >
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-sm bg-gradient-to-r from-green-600 to-green-400 dark:to-emerald-800"
                  />
                  <div className="relative flex w-full items-center justify-between">
                    <span className={cn(
                      "rounded-sm bg-neutral-300 dark:bg-neutral-400",
                      // Responsive indicator size
                      "h-[8px] w-[2.5px] sm:h-[10px] sm:w-[3px]"
                    )} />
                    <div className="flex h-full w-full flex-col justify-center px-2">
                      <p className={cn(
                        "text-neutral-50 dark:text-neutral-200",
                        // Responsive text size
                        "text-[10px] sm:text-xs"
                      )}>
                        {secondEvent}
                      </p>
                      <motion.p
                        variants={secondTimeVariant}
                        className={cn(
                          "overflow-hidden text-neutral-100 dark:text-neutral-300",
                          // Responsive text size
                          "text-[9px] sm:text-[11px]"
                        )}
                      >
                        {secondEventTime}
                      </motion.p>
                    </div>
                    <span className={cn(
                      "rounded-sm bg-neutral-200 dark:bg-neutral-500",
                      // Responsive indicator size
                      "h-[8px] w-[2.5px] sm:h-[10px] sm:w-[3px]"
                    )} />
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>
          <ContainerMask />
        </div>
      </div>

      {/* Card Description */}
      <div className={cn(
        "absolute bottom-4 left-0 w-full",
        // Responsive padding
        "px-3 sm:px-4 lg:px-5"
      )}>
        <h3 className={cn(
          "font-semibold text-primary",
          // Responsive text size
          "text-xs sm:text-sm"
        )}>
          {cardTitle}
        </h3>
        <p className={cn(
          "text-neutral-800 dark:text-neutral-400",
          // Responsive text size and margin
          "mt-1 text-[10px] sm:mt-1.5 sm:text-xs"
        )}>
          {cardDescription}
        </p>
      </div>
    </motion.div>
  );
};

export default EventCard;

type CalendarGridProps = {
  gridCols: number;
  gridItems: number;
  cellSize: number;
};

const CalendarGrid = ({ gridCols, gridItems, cellSize }: CalendarGridProps) => {
  const days = Array.from({ length: gridItems }, (_, i) => i + 1);

  return (
    <div
      className="grid w-fit gap-0"
      style={{
        gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
      }}
    >
      {days.map((day, idx) => (
        <div
          key={idx}
          className={cn(
            "flex items-end justify-start border-b border-r border-neutral-200 p-1",
            "text-neutral-400 dark:border-neutral-800/60 dark:text-neutral-700",
            // Responsive text size
            "text-[8px] sm:text-[10px]"
          )}
          style={{
            height: `${cellSize}px`,
            width: `${cellSize}px`,
          }}
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
      {/* Bottom fade */}
      <div className={cn(
        "absolute bottom-0 left-0 w-full",
        "[background-image:linear-gradient(to_top,theme(colors.neutral.100)_40%,transparent_100%)]",
        "dark:[background-image:linear-gradient(to_top,theme(colors.neutral.950)_40%,transparent_100%)]",
        // Responsive height
        "h-[80px] sm:h-[100px] lg:h-[120px]"
      )} />

      {/* Left fade */}
      <div className={cn(
        "absolute left-0 top-0 h-full",
        "[background-image:linear-gradient(to_right,theme(colors.neutral.100)_20%,transparent_100%)]",
        "dark:[background-image:linear-gradient(to_right,theme(colors.neutral.950)_20%,transparent_100%)]",
        // Responsive width
        "w-[20px] sm:w-[25px] lg:w-[30px]"
      )} />

      {/* Right fade */}
      <div className={cn(
        "absolute right-0 top-0 h-full",
        "[background-image:linear-gradient(to_left,theme(colors.neutral.100)_20%,transparent_100%)]",
        "dark:[background-image:linear-gradient(to_left,theme(colors.neutral.950)_20%,transparent_100%)]",
        // Responsive width
        "w-[20px] sm:w-[25px] lg:w-[30px]"
      )} />

      {/* Top fade */}
      <div className={cn(
        "absolute right-0 top-0 w-full",
        "[background-image:linear-gradient(to_bottom,theme(colors.neutral.100)_20%,transparent_100%)]",
        "dark:[background-image:linear-gradient(to_bottom,theme(colors.neutral.950)_20%,transparent_100%)]",
        // Responsive height
        "h-[20px] sm:h-[25px] lg:h-[30px]"
      )} />
    </>
  );
};