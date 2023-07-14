export type NavItem = {
  label: string;
  dest: string;
};

export const navLinks = [
  { label: "For Home", dest: "/homeowners" },
  { label: "For Work", dest: "/businesses" },
  { label: "Case Studies", dest: "/case-studies" },
  { label: "About", dest: "/about" },
] satisfies NavItem[];
