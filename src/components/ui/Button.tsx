import Link from "next/link";
import type { ComponentProps } from "react";

type Base = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
};

type ButtonAsButton = Base &
  Omit<ComponentProps<"button">, "className" | "children"> & { href?: never };

type ButtonAsLink = Base &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", className = "", children } = props;
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric";

  const styles =
    variant === "primary"
      ? "bg-gradient-main text-white shadow-glow hover:opacity-95 hover:shadow-glow-cyan"
      : "glass text-soft hover:border-neon/40 hover:text-white";

  const merged = `${base} ${styles} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={merged} {...rest}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={merged} {...rest}>
      {children}
    </button>
  );
}
