"use client";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-50 disabled:pointer-events-none active:scale-95",
  {
    variants: {
      variant: {
        primary: `
          bg-neon-gradient text-surface font-bold shadow-neon-glow
          hover:shadow-neon-glow-lg hover:scale-105
          active:shadow-neon-glow-sm
        `,
        secondary: `
          bg-secondary text-white shadow-purple-glow
          hover:shadow-purple-glow hover:bg-secondary-600 hover:scale-105
          active:shadow-none
        `,
        outline: `
          border-2 border-primary text-primary
          hover:bg-primary/10 hover:shadow-neon-glow
          active:bg-primary/20
        `,
        ghost: `
          text-on-surface-variant hover:text-primary hover:bg-white/5
          active:bg-white/10
        `,
        gradient: `
          bg-purple-gradient text-white font-bold shadow-purple-glow
          hover:shadow-purple-glow hover:scale-105
          active:shadow-none
        `,
        glass: `
          bg-white/10 text-white backdrop-blur-md border border-white/20
          hover:bg-white/20 hover:shadow-glass-hover hover:scale-105
          active:bg-white/15
        `,
      },
      size: {
        default: "h-12 px-8 gap-2",
        sm: "h-9 px-4 text-xs gap-1.5",
        lg: "h-14 px-10 text-base gap-2",
        xl: "h-16 px-12 text-lg gap-3",
        icon: "h-10 w-10",
        icon-sm: "h-8 w-8",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    isLoading,
    fullWidth,
    children,
    icon,
    rightIcon,
    ...props
  }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          icon
        )}
        {children}
        {rightIcon && !isLoading && rightIcon}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };