"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type CardVariant = "surface" | "outline";

type CardProps = {
  variant?: CardVariant;
  hover?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

const variantStyles: Record<CardVariant, string> = {
  surface: "premium-card",
  outline: "rounded-lg border border-line-subtle",
};

export function Card({
  variant = "surface",
  hover = false,
  children,
  className = "",
  ...motionProps
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.18 } } : undefined}
      className={`${variantStyles[variant]} ${className}`.trim()}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
