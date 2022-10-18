interface SocialIcon {
  href: string;
  children: React.ReactNode;
}

const FooterSocialIcon: React.FC<SocialIcon> = ({ href, children }) => {
  return (
    <a href={href}>
      <li className="p-3 bg-slate-100/10 hover:bg-slate-100/25 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 fill-white"
          viewBox="0 0 24 24"
        >
          {children}
        </svg>
      </li>
    </a>
  );
};

export default FooterSocialIcon;
