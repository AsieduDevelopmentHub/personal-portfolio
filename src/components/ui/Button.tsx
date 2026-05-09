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
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

  const styles =
    variant === "primary"
      ? "bg-lime text-void shadow-card hover:bg-lime-hover hover:shadow-card-hover"
      : "border border-cream/15 bg-transparent text-cream hover:border-lime/50 hover:text-lime";

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
