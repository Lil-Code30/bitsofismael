import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500">
      <p className="text-lg">
        &copy; 2025 - {new Date().getFullYear()} - MIT Licensed
      </p>
      <ul className="flex items-center gap-3">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowUpRight size={20} />
            <p className="text-lg">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Lil-Code30"
          >
            <ArrowUpRight size={20} />
            <p className="text-lg">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Lil-Code30/bitsofismael"
          >
            <ArrowUpRight size={20} />
            <p className="text-lg">view source</p>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
