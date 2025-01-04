import React from "react";
import { cn } from "../lib/utils";

const MagicButton = ({
  shimmerColor = "#ffffff",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 0, 1)",
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      style={{
        "--spread": "90deg",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        "--bg": background,
      }}
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white",
        "[background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
      {...props}
    >
      {/* Spark Container */}
      <div
        className={cn(
          "-z-30 blur-[2px]",
          "absolute inset-0 overflow-visible [container-type:size]"
        )}
      >
        {/* Spark */}
        <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
          {/* Spark Before */}
          <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>
      {children}

      {/* Highlight */}
      <div
        className={cn(
          "absolute inset-0 size-full",
          "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
          // Transition
          "transform-gpu transition-all duration-300 ease-in-out",
          // On Hover
          "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
          // On Click
          "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
        )}
      />

      {/* Backdrop */}
      <div
        className={cn(
          "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
        )}
      />
    </button>
  );
};

export default MagicButton;
