import Link from "next/link";

type Common = {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

type ButtonProps = Common &
  (
    | { href: string; external?: boolean }
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button(props: ButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric";

  const styles =
    variant === "primary"
      ? "bg-gradient-main text-white shadow-glow hover:opacity-95 hover:shadow-glow-cyan"
      : "glass text-soft hover:border-neon/40 hover:text-white";

  const merged = `${base} ${styles} ${className}`.trim();

  if ("href" in props && props.href) {
    const { href, external } = props;
    return (
      <Link
        href={href}
        className={merged}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  const btn = props as Common & React.ButtonHTMLAttributes<HTMLButtonElement>;
  const { type = "button", disabled, onClick, name, value, form, ...rest } = btn;
  return (
    <button
      type={type}
      className={merged}
      disabled={disabled}
      onClick={onClick}
      name={name}
      value={value}
      form={form}
      {...rest}
    >
      {children}
    </button>
  );
}
