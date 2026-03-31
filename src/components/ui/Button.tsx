import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href">;

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  external?: never;
} & ComponentPropsWithoutRef<"button">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary text-accent-contrast hover:opacity-90",
  secondary:
    "border border-line-subtle text-fg-primary hover:border-fg-muted",
  ghost:
    "text-fg-secondary hover:text-fg-primary",
};

const base =
  "inline-flex items-center justify-center rounded-pill px-6 py-3 text-sm font-semibold transition-all duration-base ease-premium";

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noreferrer" }
          : {})}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
