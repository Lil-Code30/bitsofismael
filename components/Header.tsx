import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image
          src="/main-logo.png"
          width={250}
          height={50}
          alt="bitsofismael main logo"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/logs">Logs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
