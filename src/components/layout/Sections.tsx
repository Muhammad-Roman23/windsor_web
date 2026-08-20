import type { ReactNode } from "react";

type SectionsProps = {
  children: ReactNode;
};

export function Sections({ children }: SectionsProps) {
  return <div className="sections">{children}</div>;
}
