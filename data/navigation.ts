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
    href: "/lt-8",
    label: "LT-8",
    shortLabel: "LT-8",
  },
] as const;

export type NavHref = (typeof navItems)[number]["href"];
