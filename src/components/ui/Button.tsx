import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Shared = {
  children: ReactNode;
  variant?: "accent" | "ghost";
  className?: string;
};

const styles = {
  accent:
    "inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 font-heading text-sm font-medium text-main transition-opacity hover:opacity-90",
  ghost:
    "inline-flex items-center justify-center rounded-full border border-secondary/25 px-5 py-2.5 font-heading text-sm font-medium text-alt transition-colors hover:border-accent hover:text-accent",
};

type ButtonAsButton = Shared &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Shared &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "accent", className = "", ...rest } = props;
  const classes = `${styles[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <a href={href} className={classes} {...linkRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
