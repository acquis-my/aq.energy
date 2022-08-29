import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-indigo-dye text-gray-300 text-sm">
      <Container className="flex flex-row justify-between py-10 border-b border-gray-500">
        <div className="max-w-prose">
          <Logo />
          <p className="pt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vero
            repellat voluptatum illo similique aliquid eaque in cupiditate.
          </p>
        </div>
        <div></div>
      </Container>
      <Container className="flex justify-between items-center">
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
