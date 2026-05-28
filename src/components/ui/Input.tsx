"use client";

import { cn } from "@/lib/utils";
import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
  glass?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, icon, glass = true, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "w-full h-12 px-4 rounded-lg font-medium transition-all duration-300",
            "text-white placeholder:text-on-surface-variant",
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
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };