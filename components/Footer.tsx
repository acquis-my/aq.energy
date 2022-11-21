import Link from "next/link";
import Container from "./Container";
import FooterNavItem from "./FooterNavItem";
import FooterSocialIcon from "./FooterSocialIcon";
import { LogoSecondary } from "./Logo";

const Footer = () => {
  const thisYear = new Date(Date.now()).getFullYear();

  return (
    <footer className="bg-indigo-dye text-gray-200 text-sm">
      <Container className="flex flex-col divide-y divide-slate-500 gap-2">
        <section className="flex flex-col sm:flex-row pb-4 pt-8 gap-12 justify-between">
          <div className="max-w-sm flex flex-col gap-2">
            <LogoSecondary />
            <p className="text-gray-300">Superpowering roofs since 2013.</p>
            <div className="flex flex-row pt-2 gap-6 items-center">
              <FooterSocialIcon
                href="http://facebook.com"
                aria-label="Visit our Facebook page"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </FooterSocialIcon>
              <FooterSocialIcon
                href="https://linkedin.com"
                aria-label="Visit our LinkedIn page"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </FooterSocialIcon>
              <FooterSocialIcon
                href="https://instagram.com"
                aria-label="Visit our Instagram page"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </FooterSocialIcon>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:gap-12 lg:gap-16">
            <div className="whitespace-nowrap">
              <div className="flex flex-col gap-1 text-gray-300">
                <span className="text-base text-white font-semibold pb-2">
                  Solar Energy
                </span>
                <FooterNavItem href="/homeowners">For Homeowners</FooterNavItem>
                <FooterNavItem href="/businesses">For Businesses</FooterNavItem>
                <FooterNavItem href="/faq">FAQ</FooterNavItem>
                <FooterNavItem href="/quote">Get Quote</FooterNavItem>
              </div>
            </div>
            <div className="whitespace-nowrap">
              <div className="flex flex-col gap-1 text-gray-300">
                <span className="text-base text-white font-semibold pb-2">
                  Company
                </span>
                <FooterNavItem href="/about">About Us</FooterNavItem>
                <FooterNavItem href="/about#careers">Careers</FooterNavItem>
                <FooterNavItem href="/case-studies">Case Studies</FooterNavItem>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-between items-center gap-2 py-4">
          <div>
            &copy; {thisYear} AQ Energy &mdash; A brand of Max Bell Sdn. Bhd.
          </div>
          <div>
            <ul className="flex gap-6">
              {/* Not needed for now
              <FooterNavItem href="/faq">FAQ</FooterNavItem>
              <FooterNavItem href="/terms">Terms</FooterNavItem>
              <FooterNavItem href="/privacy">Privacy</FooterNavItem> */}
            </ul>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
