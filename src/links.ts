export type NavItem = {
  label: string;
  dest: string;
};

export const navLinks = [
  { label: "For Home", dest: "/solar-panel-for-home" },
  { label: "For Work", dest: "/solar-panel-for-business" },
  { label: "Blog", dest: "/blog" },
  { label: "Portfolio", dest: "/portfolio" },
  { label: "About", dest: "/about" },
] satisfies NavItem[];

export const socialLinks = {
  facebook: "https://www.facebook.com/aq.energymys/",
  linkedin: "https://www.linkedin.com/company/aqenergy",
} satisfies Record<string, string>;

export const WHATSAPP_LINK = "https://wa.me/60102933575";

export function getTopLevelPath(path: string) {
  return ["/", path.split("/").filter(Boolean)[0]].join("");
}
