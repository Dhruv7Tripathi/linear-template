"use client";

import gsap from "gsap";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { GrCursor } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";

type InsightPickerProps = {
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  option5?: string;
};

const InsightPicker = ({
  option1 = "Highlight moments of user control",
  option2 = "Explain real-time data behavior",
  option3 = "Communicate intent through motion",
  option4 = "Showcase edge case design thinking",
  option5 = "Demonstrate consistency across screens",
}: InsightPickerProps) => {
  const cursorRef = useRef(null);
  const typePointerRef = useRef(null);
  const charC_Ref = useRef(null);
  const charR_Ref = useRef(null);
  const charE_Ref = useRef(null);
  const charA_Ref = useRef(null);
  const charT_Ref = useRef(null);
  const charO_Ref = useRef(null);
  const charr_Ref = useRef(null);
  const charS_Ref = useRef(null);
  const option1Ref = useRef(null);
  const option2Ref = useRef(null);
  const option3Ref = useRef(null);
  const option4Ref = useRef(null);
  const option5Ref = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.to(cursorRef.current, {
        x: -105,
        y: -50,
        duration: 0.75,
        ease: "sine.inOut",
      });
      tl.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      });

      tl.to(
        [
          charC_Ref.current,
          charR_Ref.current,
          charE_Ref.current,
          charA_Ref.current,
          charT_Ref.current,
          charO_Ref.current,
          charr_Ref.current,
          charS_Ref.current,
        ],
        {
          opacity: 1,
          duration: 0.05,
          stagger: 0.1,
          ease: "power1.inOut",
        },
      );
      tl.to(
        typePointerRef.current,
        {
          opacity: 1,
          duration: 0.2,
          ease: "power1.Out",
        },
        "<",
      );
      tl.to(
        typePointerRef.current,
        {
          x: 52,
          duration: 0.75,
          ease: "linear",
        },
        "<",
      );
      tl.to(typePointerRef.current, {
        opacity: 0,
        duration: 0.4,
        delay: 1,
        ease: "power1.inOut",
      });

      tl.to(
        cursorRef.current,
        {
          x: -236,
          y: 28,
          duration: 0.7,
          delay: 0.2,
          ease: "sine.inOut",
        },
        ">-1",
      );
      tl.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      });
      tl.to(option1Ref.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.inOut",
      });
      tl.to(line1Ref.current, {
        width: 200,
        duration: 0.6,
        ease: "power1.inOut",
      });

      tl.to(cursorRef.current, {
        x: -236,
        y: 61,
        duration: 0.4,
        ease: "sine.inOut",
      });
      tl.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      });
      tl.to(option2Ref.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power1.inOut",
      });

      tl.to(cursorRef.current, {
        x: -236,
        y: 91,
        duration: 0.5,
        ease: "sine.inOut",
      });
      tl.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      });
      tl.to(option3Ref.current, {
        opacity: 1,
        duration: 0.2,
        ease: "power1.inOut",
      });
      tl.to(line2Ref.current, {
        width: 215,
        duration: 0.6,
        ease: "power1.inOut",
      });

      tl.to(cursorRef.current, {
        x: -236,
        y: 121,
        duration: 0.4,
        ease: "sine.inOut",
      });
      tl.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      });
      tl.to(option4Ref.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power1.inOut",
      });
      tl.to(cursorRef.current, {
        x: -236,
        y: 151,
        duration: 0.4,
        ease: "sine.inOut",
      });
      tl.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "sine.inOut",
      });
      tl.to(option5Ref.current, {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power1.inOut",
      });
      tl.to(cursorRef.current, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  });

  return (
    <div
      className={cn(
        "relative",
        "flex w-full max-w-[400px] flex-col justify-center",
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
            "flex min-h-[260px] w-full flex-col gap-1 overflow-hidden",
            "rounded-[6px] border border-neutral-200 dark:border-neutral-800/60",
            "bg-neutral-100 dark:bg-[#141414]",
          )}
        >
          <div className="relative mx-auto flex h-[200px] w-full max-w-[400px] items-center gap-1 px-1">
            <div className="absolute left-0 top-[60px] h-full w-full p-4">
              <div className="flex h-full w-full flex-col justify-center gap-3">
                <OptionItem
                  innerRef={option1Ref}
                  isCorrect={false}
                  text={option1}
                />

                <OptionItem
                  innerRef={option2Ref}
                  isCorrect={true}
                  text={option2}
                />

                <OptionItem
                  innerRef={option3Ref}
                  isCorrect={false}
                  text={option3}
                />

                <OptionItem
                  innerRef={option4Ref}
                  isCorrect={true}
                  text={option4}
                />

                <OptionItem
                  innerRef={option5Ref}
                  isCorrect={true}
                  text={option5}
                />
              </div>
              <span
                ref={line1Ref}
                className="absolute left-[43px] top-[38px] h-[2px] w-[0px] bg-neutral-400 dark:bg-neutral-500"
              />
              <span
                ref={line2Ref}
                className="absolute left-[43px] top-[100.7px] h-[2px] w-[0px] bg-neutral-400 dark:bg-neutral-500"
              />

              <div
                ref={cursorRef}
                className="absolute left-64 top-3 flex items-center gap-1"
              >
                <span className="text-neutral-700 dark:text-neutral-200">
                  <GrCursor className="size-5.5" />
                </span>
              </div>
            </div>
            <div className="absolute left-0 top-2 w-full px-3">
              <h3 className="text-sm font-semibold text-primary">
                Shape experience for
              </h3>
              <p className="mt-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                Turn practical functionality into emotional connection by
                designing every moment with precision and intention.
              </p>
            </div>
            <div className="absolute left-[149.5px] top-2 pr-2">
              <h3 className="text-sm font-semibold text-primary">
                <span ref={charC_Ref} className="opacity-0">
                  C
                </span>
                <span ref={charR_Ref} className="opacity-0">
                  r
                </span>
                <span ref={charE_Ref} className="opacity-0">
                  e
                </span>
                <span ref={charA_Ref} className="opacity-0">
                  a
                </span>
                <span ref={charT_Ref} className="opacity-0">
                  t
                </span>
                <span ref={charO_Ref} className="opacity-0">
                  o
                </span>
                <span ref={charr_Ref} className="opacity-0">
                  r
                </span>
                <span ref={charS_Ref} className="opacity-0">
                  s
                </span>
              </h3>
              <span
                ref={typePointerRef}
                className="absolute left-[6px] top-1 h-[14px] w-[1.2px] bg-neutral-600 opacity-0 dark:bg-neutral-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightPicker;

type OptionItemProps = {
  innerRef?: React.Ref<HTMLSpanElement>;
  isCorrect: boolean;
  text: string;
};

const optionClasses =
  "flex h-4 w-4 items-center justify-center rounded-sm border border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800";

const wrongOptionClasses =
  "h-full w-full rounded-[3.7px] bg-red-500 pt-[0.8px] pl-[0.7px] text-[13.5px] text-neutral-100 opacity-0 dark:bg-red-600 ";

const correctOptionClasses =
  "h-full w-full rounded-[3.7px] bg-green-500 pt-[1.2px] pl-[1px] text-[12.5px] text-neutral-100 opacity-0 dark:bg-green-600 ";

function OptionItem({ innerRef, isCorrect, text }: OptionItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={optionClasses}>
        <span
          ref={innerRef}
          className={cn(isCorrect ? correctOptionClasses : wrongOptionClasses)}
        >
          {isCorrect ? <IoCheckmarkSharp /> : <RxCross2 className="pb-[1px]" />}
        </span>
      </div>
      <p className="text-[13px] text-neutral-600 dark:text-neutral-400">
        {text}
      </p>
    </div>
  );
}
