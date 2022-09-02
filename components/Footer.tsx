import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-indigo-dye text-gray-300 divide-y divide-slate-500">
      <Container className="flex flex-col lg:flex-row justify-between py-12 gap-8">
        <div className="w-full lg:w-1/3">
          <Logo />
          <p className="pt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-end gap-6 lg:gap-14">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white">Solar Energy</span>
            <ul className="flex flex-col gap-1 text-slate-400 text-sm">
              <li>
                <Link href="/homeowners">
                  <a>For Homeowners</a>
                </Link>
              </li>
              <li>
                <Link href="/businesses">
                  <a>For Businesses</a>
                </Link>
              </li>
              <li>
                <Link href="/quote">
                  <a>Case Studies</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-white">Company</span>
            <ul className="flex flex-col gap-1 text-slate-400 text-sm">
              <li>
                <Link href="/homeowners">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/homeowners">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/homeowners">
                  <a>Careers</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="flex justify-between items-center text-sm py-4">
        <div>Copyright &copy; 2022 Acquis Energy. All rights reserved.</div>
        <div>
          <ul className="flex gap-x-6">
            <li>
              <Link href="/terms">
                <a>Terms</a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>Privacy</a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
