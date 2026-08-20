import { site } from "@/data/content";
import { navItems } from "@/data/nav";

export function Footer() {
  return (
    <footer className="section border-t border-secondary/10 bg-main">
      <div className="section-inner flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-heading text-xl font-semibold text-alt">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-secondary">{site.tagline}</p>
        </div>

        <div className="flex gap-16">
          {navItems.map((item) => (
            <div key={item.label}>
              <p className="mb-3 font-heading text-xs uppercase tracking-[0.18em] text-accent">
                {item.label}
              </p>
              <ul className="space-y-2">
                {item.children?.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-secondary transition-colors hover:text-alt">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="section-inner mt-12 border-t border-secondary/10 pt-6">
        <p className="text-xs text-secondary">© {new Date().getFullYear()} {site.name}. Placeholder legal copy.</p>
      </div>
    </footer>
  );
}
