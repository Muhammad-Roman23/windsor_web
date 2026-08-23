import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";

const DEFAULT_BG_IMAGE =
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1800&auto=format&fit=crop";

interface PageBannerProps {
  /** The single dynamic heading line for this page's banner. */
  title: string;
  /** Optional small line above the heading (e.g. breadcrumb, eyebrow label). */
  eyebrow?: string;
  /** Override the default car-related background image per page. */
  bgImage?: string;
  id?: string;
}

export function PageBanner({
  title,
  eyebrow,
  bgImage = DEFAULT_BG_IMAGE,
  id = "page-banner",
}: PageBannerProps) {
  return (
    <Section id={id} className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-main/95 via-main/90 to-main/95" />
        <div className="absolute inset-0 bg-main/40" />
      </div>

      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_22%,transparent),transparent_70%)]" />

      <div className="relative flex min-h-[240px] flex-col items-center justify-center gap-4 py-16 text-center sm:min-h-[300px] sm:py-20">
        <Reveal className="flex flex-col items-center">
          {eyebrow ? (
            <p className="mb-3 font-heading text-[11px] uppercase tracking-[0.16em] text-accent sm:text-xs">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="max-w-3xl text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            {title}
          </h2>
        </Reveal>
      </div>
    </Section>
  );
}