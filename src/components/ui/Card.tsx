import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CardVariant = "surface" | "outline";

type CardProps = {
  variant?: CardVariant;
  hover?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">;

const variantStyles: Record<CardVariant, string> = {
  surface: "premium-card",
  outline: "rounded-lg border border-line-subtle",
};

export function Card({
  variant = "surface",
  hover = false,
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`${variantStyles[variant]} ${hover ? "transition-transform duration-base ease-premium hover:-translate-y-1" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
