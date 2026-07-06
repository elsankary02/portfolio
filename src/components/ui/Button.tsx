"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: string | boolean;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      href,
      download,
      target,
      rel,
      icon,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2 focus:ring-offset-background";

    const variants = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-400 focus:ring-2 focus:ring-primary-500/30 active:scale-[0.98] shadow-[0_10px_30px_rgba(59,130,246,0.08)] hover:shadow-[0_14px_40px_rgba(59,130,246,0.12)]",
      secondary:
        "bg-transparent text-primary-500 border border-primary-500/30 hover:bg-primary-500/5 active:scale-[0.98]",
      outline:
        "border border-border/[0.12] text-foreground hover:bg-overlay/5 hover:border-border/[0.16] active:scale-[0.98]",
      ghost:
        "text-foreground/70 hover:text-foreground hover:bg-overlay/5 active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const content = (
      <>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          download={download}
          target={target || (href.startsWith("http") ? "_blank" : undefined)}
          rel={
            rel || (href.startsWith("http") ? "noopener noreferrer" : undefined)
          }
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
