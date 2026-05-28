"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
  animated?: boolean;
  gradient?: boolean;
  showLabel?: boolean;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, animated = true, gradient = true, showLabel = false, ...props }, ref) => {
    const percentage = Math.min(Math.max(value, 0), 100);

    return (
      <div ref={ref} className={cn("w-full space-y-2", className)} {...props}>
        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
          <div
            className={cn(
              "h-full transition-all duration-500 ease-out",
              gradient && "bg-neon-gradient",
              !gradient && "bg-primary",
              animated && "shadow-neon-glow"
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <div className="text-right text-xs text-on-surface-variant font-medium">
            {percentage}%
          </div>
        )}
      </div>
    );
  }
);
ProgressBar.displayName = "ProgressBar";

export { ProgressBar };