import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }) => {
      if (href?.startsWith("/")) {
        return <Link href={href}>{children}</Link>;
      }
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      );
    },
    img: (props) => <img {...props} loading="lazy" decoding="async" />,
    ...components,
  };
}
