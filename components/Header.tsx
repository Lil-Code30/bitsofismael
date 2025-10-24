"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const linkBaseStyle =
    "py-2 px-4 font-semibold transition-all duration-300 rounded-lg w-full text-center";
  const linkHoverStyle =
    "hover:border hover:border-[#066cfb] hover:text-[#066cfb]";
  const activeStyle = "border border-[#066cfb] text-[#066cfb]";

  const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/logs", label: "Logs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full flex flex-col md:flex-row justify-between mb-2 md:mb-0">
      <Link href="/">
        <Image
          src="/main-logo.png"
          width={250}
          height={50}
          alt="bitsofismael main logo"
          className="p-0 align-center"
        />
      </Link>
      <nav className="flex gap-5 items-center flex-col md:flex-row">
        {links.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              className={`${linkBaseStyle} ${linkHoverStyle} ${
                isActive
                  ? activeStyle
                  : "border border-transparent text-gray-300"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
