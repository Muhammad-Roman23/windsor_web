import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "raised";
};

export function Section({ id, children, className = "", tone = "base" }: SectionProps) {
  const toneClass = tone === "raised" ? "bg-alt/[0.03]" : "bg-main";

  return (
    <section id={id} className={`section ${toneClass} ${className}`.trim()}>
      <div className="section-inner">{children}</div>
    </section>
  );
}
