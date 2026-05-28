"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  glass?: boolean;
  icon?: React.ReactNode;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, glass = true, icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
            {icon}
          </div>
        )}
        <select
          className={cn(
            "w-full h-12 px-4 pr-10 rounded-lg font-medium appearance-none transition-all duration-300",
            "text-white bg-no-repeat bg-right",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
            glass && "bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10",
            !glass && "bg-surface-container border border-white/5",
            error && "ring-2 ring-error border-error",
            icon && "pl-10",
            className
          )}
          ref={ref}
          {...props}
        />
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-on-surface-variant pointer-events-none" />
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };