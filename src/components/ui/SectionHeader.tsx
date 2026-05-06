import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered ? "text-center" : "text-left", className)}>
      <h2
        className={cn(
          "font-heading text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-chocolate-dark"
        )}
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 h-0.5 w-16 bg-gold",
          centered ? "mx-auto" : "ml-0"
        )}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            centered ? "mx-auto" : "",
            light ? "text-white/80" : "text-chocolate-mid"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
