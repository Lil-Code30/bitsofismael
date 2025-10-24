import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between mt-6 py-3 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500">
      <p className="text-lg">
        &copy; 2025 - {new Date().getFullYear()} - MIT Licensed
      </p>
      <div className="flex items-center gap-3">
        {/* <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <ArrowUpRight size={20} />
            <p className="text-lg">rss</p>
          </a>
        </li> */}

        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Lil-Code30"
        >
          <ArrowUpRight size={20} />
          <span className="text-lg">github</span>
        </a>

        <a
          className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Lil-Code30/bitsofismael"
        >
          <ArrowUpRight size={20} />
          <span className="text-lg">view source</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
