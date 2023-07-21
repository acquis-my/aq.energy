export type NavItem = {
  label: string;
  dest: string;
};

export const navLinks = [
  { label: "For Home", dest: "/homeowners" },
  { label: "For Work", dest: "/businesses" },
  { label: "Blog", dest: "/blog" },
  { label: "Portfolio", dest: "/portfolio" },
  { label: "About", dest: "/about" },
] satisfies NavItem[];

export const socialLinks = {
  facebook: "https://www.facebook.com/aq.energymys/",
  linkedin: "https://www.linkedin.com/company/aqenergy",
} satisfies Record<string, string>;
