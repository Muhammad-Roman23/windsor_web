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
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Cars",
    href: "/cars",
    children: [
      { label: "Auction Cars", href: "/japanese-auction-cars" },
      { label: "Stock Cars", href: "/japanese-used-stock-cars-for-sale" },
      { label: "Top Trending", href: "/top-trending" },
    ],
  },
  {
    label: "Testimonials",
    href: "/testimonials",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Terms of Trade", href: "/services/terms-of-trade" },
      { label: "Service Plans", href: "/services/service-plans" },
      { label: "Auction Sheet Translator", href: "/services/auction-sheet-translator" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  
  
];
