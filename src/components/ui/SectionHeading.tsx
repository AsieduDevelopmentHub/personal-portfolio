type SectionHeadingProps = {
  title: string;
  id?: string;
  eyebrow?: string;
  className?: string;
  /** Use when the heading sits in a flex row with actions (no bottom margin). */
  compact?: boolean;
};

export function SectionHeading({
  title,
  id,
  eyebrow,
  className = "",
  compact,
}: SectionHeadingProps) {
  const margin = compact ? "" : "mb-10 md:mb-14";
  return (
    <div className={`${margin} ${className}`.trim()}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-mute">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display flex items-start gap-4 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-cream"
      >
        <span
          className="mt-1.5 h-9 w-1 shrink-0 rounded-full bg-lime md:mt-2 md:h-11"
          aria-hidden
        />
        <span>{title}</span>
      </h2>
    </div>
  );
}
