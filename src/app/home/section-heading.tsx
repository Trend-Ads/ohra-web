import type { ReactNode } from "react";

export function SectionHeading({ id, label, title, children }: {
  id: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="home-heading">
      <p className="home-eyebrow">{label}</p>
      <h2 id={id}>{title}</h2>
      {children && <p className="home-intro">{children}</p>}
    </div>
  );
}
