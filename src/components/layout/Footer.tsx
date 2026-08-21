import Image from "next/image";
import { site } from "@/data/content";
import { MapPin, Mail, Phone } from "lucide-react";

// ---------------------------------------------------------------------------
// Data — swap freely, structure won't need to change.
// ---------------------------------------------------------------------------

const makers = [
  "Toyota",
  "Honda",
  "Nissan",
  "Suzuki",
  "Mazda",
  "Mitsubishi",

];

const bodyTypes = [
  "Sedan",
  "SUV",
  "Hatchback",
  "Coupe",
  "Pickup Truck",
  "Minivan",

];

const countries = [
  "Japan",
  "Ireland",
  "Cyprus",
  "Pakistan",
  "United States",
  "United Kingdom",
];

const contact = {
  address: "1-2-3 Minato, Tokyo, Japan",
  phone: "+81 3 1234 5678",
  email: "sourcing@windsorautogroup.com",
};

// lucide-react has no brand/social logos, so these load from local files
// instead — drop each icon (SVG or PNG, transparent background) into
// /public/images/social/ using the slug below as the filename,
// e.g. /public/images/social/facebook.svg
const socials = [
  { label: "Facebook", href: "#", slug: "facebook" },
  { label: "Instagram", href: "#", slug: "instagram" },
  { label: "Twitter / X", href: "#", slug: "twitter" },
  { label: "LinkedIn", href: "#", slug: "linkedin" },
  { label: "YouTube", href: "#", slug: "youtube" },
];

// ---------------------------------------------------------------------------
// Small reusable column bits
// ---------------------------------------------------------------------------

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.18em] text-accent">
      {children}
    </p>
  );
}

function LinkList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((label) => (
        <li key={label}>
          <a
            href="#"
            className="text-sm text-secondary transition-colors hover:text-alt"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <>
    <footer className="nav-section py-12 border-t border-b border-secondary/10 bg-main">
      <div className="section-inner">
        <div className="grid grid-cols-1 gap-y-10 lg:[grid-template-columns:1.5fr_1fr_1fr_1fr_1.2fr] lg:gap-y-0 lg:gap-x-0">
          {/* 1. Brand — full width alone on mobile, first column on desktop */}
          <div className="lg:pr-8">
            <p className="font-heading text-xl font-semibold text-alt">
              {site.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-xs text-xl font-bold leading-relaxed text-secondary">
              {site.tagline}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-secondary">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* 2–4. Makers / Types / Countries — one row of 3 on mobile,
              individual columns on desktop (lg:contents drops this wrapper
              from the grid so its children sit directly in columns 2–4). */}
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:gap-x-8 lg:contents">
            <div className="lg:border-l lg:border-dotted lg:border-accent lg:px-8">
              <ColumnHeading>Makers</ColumnHeading>
              <LinkList items={makers} />
            </div>

            <div className="lg:border-l lg:border-dotted lg:border-accent lg:px-8">
              <ColumnHeading>Types</ColumnHeading>
              <LinkList items={bodyTypes} />
            </div>

            <div className="lg:border-l lg:border-dotted lg:border-accent lg:px-8">
              <ColumnHeading>Countries</ColumnHeading>
              <LinkList items={countries} />
            </div>
          </div>

          {/* 5. Contact + socials — full width alone on mobile, last column on desktop */}
          <div className="lg:border-l lg:border-dotted lg:border-accent lg:pl-8">
            <ColumnHeading>Get In Touch</ColumnHeading>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-secondary">
                <MapPin
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span>{contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-secondary transition-colors hover:text-alt"
                >
                  <Phone
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 text-accent"
                  />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 text-sm text-secondary transition-colors hover:text-alt"
                >
                  <Mail
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 text-accent"
                  />
                  {contact.email}
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ label, href, slug }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-secondary/15 transition-colors hover:border-accent/40"
                >
                  <span className="relative block h-4 w-4">
                    <Image
                      src={`/images/social/${slug}.svg`}
                      alt=""
                      fill
                      sizes="16px"
                      className="object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
      <div className="bg-accent">
        <div className="section-inner flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-md font-medium text-main">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-md font-medium text-main transition-colors "
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-md font-medium text-main transition-colors "
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </>

  );
}