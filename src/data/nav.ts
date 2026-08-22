export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#top",
  },
  {
    label: "About",
    href: "#top",
  },
  {
    label: "Cars",
    href: "#studio",
    children: [
      { label: "Auction Cars", href: "#about" },
      { label: "Stock Cars", href: "#approach" },
      { label: "Top Trending", href: "#team" },
    ],
  },
  {
    label: "Testimonials",
    href: "#top",
  },
  {
    label: "Services",
    href: "#work",
    children: [
      { label: "Terms of Trade", href: "#projects" },
      { label: "Service Plans", href: "#cases" },
      { label: "Auction Sheet Translator", href: "#clients" },
    ],
  },
  {
    label: "Contact Us",
    href: "#top",
  },
  {
    label: "Blogs",
    href: "#top",
  },
  
  
];
