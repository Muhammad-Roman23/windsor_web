import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";

const clients = ["Vale Group", "Northline", "Atelier 8", "Holloway Co.", "Marchetti"];

export function Clients() {
  return (
    <Section id="clients">
      <Reveal>
        <p className="mb-8 text-center font-heading text-xs uppercase tracking-[0.28em] text-accent">
          Clients
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((name) => (
            <li key={name} className="font-heading text-sm text-alt sm:text-base">
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
