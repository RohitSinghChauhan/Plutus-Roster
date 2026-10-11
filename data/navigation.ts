export const navItems = [
  {
    href: "/executive-director",
    label: "Executive Director",
    shortLabel: "Director",
  },
  {
    href: "/area-director",
    label: "Area Director",
    shortLabel: "Area",
  },
  {
    href: "/support-team",
    label: "Support Team",
    shortLabel: "Support",
  },
  {
    href: "/lt-7",
    label: "LT-7",
    shortLabel: "LT-7",
  },
] as const;

export type NavHref = (typeof navItems)[number]["href"];
