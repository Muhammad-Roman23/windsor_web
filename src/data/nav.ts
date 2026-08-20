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
    label: "Studio",
    href: "#studio",
    children: [
      { label: "About Windsor", href: "#about" },
      { label: "Our approach", href: "#approach" },
      { label: "The team", href: "#team" },
    ],
  },
  {
    label: "Testimonials",
    href: "#top",
  },
  {
    label: "Work",
    href: "#work",
    children: [
      { label: "Selected projects", href: "#projects" },
      { label: "Case studies", href: "#cases" },
      { label: "Clients", href: "#clients" },
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
