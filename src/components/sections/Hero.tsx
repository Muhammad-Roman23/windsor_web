import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/layout/Section";
import { hero } from "@/data/content";

export function Hero() {
  const [main, ...thumbs] = hero.images;

  return (
    <Section id="top" className="relative overflow-hidden pt-[calc(var(--nav-height)+1.25rem)]">
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_22%,transparent),transparent_70%)]" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <Reveal className="max-w-2xl">
          <h1 className="text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 sm:text-base sm:leading-8">{hero.body}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={hero.primaryCta.href} className="w-full sm:w-auto">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost" className="w-full sm:w-auto">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
            {hero.trust.map((item, index) => (
              <li key={item} className="flex items-center gap-3 font-heading text-[11px] uppercase tracking-[0.16em] text-secondary sm:text-xs">
                {index > 0 ? <span className="h-1 w-1 rounded-full bg-accent" aria-hidden /> : null}
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="grid grid-cols-[1.4fr_0.9fr] gap-3 sm:gap-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src={main.src}
                alt={main.alt}
                fill
                priority
                sizes="(max-width: 1024px) 60vw, 32vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-main/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading text-sm text-alt">{main.label}</p>
            </div>

            <div className="grid h-full min-h-0 grid-rows-2 gap-3 sm:gap-4">
              {thumbs.slice(0, 2).map((image) => (
                <div key={image.src} className="relative min-h-0 overflow-hidden rounded-2xl sm:rounded-3xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-main/65 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 font-heading text-xs text-alt">{image.label}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="absolute -bottom-3 left-4 rounded-full border border-secondary/20 bg-main/80 px-3 py-1.5 font-heading text-[11px] uppercase tracking-[0.14em] text-accent backdrop-blur-sm sm:left-6">
            Direct from Japan
          </p>
        </Reveal>
      </div>

      {/* <Reveal delay={0.18} className="relative mt-16 border-t border-secondary/10 pt-8">
        <p className="mb-5 font-heading text-[11px] uppercase tracking-[0.22em] text-accent sm:text-xs">
          {hero.brandsLabel}
        </p>
        <ul className="flex gap-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible">
          {hero.brands.map((brand) => (
            <li
              key={brand}
              className="shrink-0 font-heading text-sm tracking-wide text-alt/80 sm:text-base"
            >
              {brand}
            </li>
          ))}
        </ul>
      </Reveal> */}
    </Section>
  );
}
