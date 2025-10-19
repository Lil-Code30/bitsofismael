import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import CodeBlock from "./components/CodeBlock";

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
    pre: ({ children, ...props }) => {
      // Extract the code element and its props
      const codeElement = children as any;
      if (codeElement?.type === "code") {
        return (
          <CodeBlock className={codeElement.props.className}>
            {codeElement.props.children}
          </CodeBlock>
        );
      }
      return <pre {...props}>{children}</pre>;
    },
    ...components,
  };
}
