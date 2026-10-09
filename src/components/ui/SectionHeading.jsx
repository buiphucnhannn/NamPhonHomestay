import { cn } from "@/lib/utils";
import Container from "./Container";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}) {
  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <Container className={cn("flex flex-col gap-4", alignCls, className)}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-600 dark:border-white/15 dark:bg-white/[0.06] dark:text-zinc-300">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {description}
        </p>
      )}
    </Container>
  );
}
