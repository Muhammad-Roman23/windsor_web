import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";

export function Cta() {
  return (
    <Section id="contact">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="mb-3 font-heading text-xs uppercase tracking-[0.28em] text-accent">Contact</p>
        <h2 className="text-3xl sm:text-5xl">A conversation, not a pitch.</h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-7 sm:text-base">
          Placeholder enquiry copy. Point this block at your real form or booking flow later.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="mailto:studio@windsor.example">studio@windsor.example</Button>
        </div>
      </Reveal>
    </Section>
  );
}
