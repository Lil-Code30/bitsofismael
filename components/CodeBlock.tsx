"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  children: string;
  className?: string;
}

export default function CodeBlock({
  children,
  className = "",
}: CodeBlockProps) {
  // Extract language from className (e.g., "language-javascript")
  const language = className?.replace("language-", "") || "text";

  // Map some common language aliases
  const getLanguage = (lang: string) => {
    const languageMap: { [key: string]: string } = {
      js: "javascript",
      ts: "typescript",
      sh: "bash",
      shell: "bash",
    };
    return languageMap[lang] || lang;
  };

  const mappedLanguage = getLanguage(language);

  return (
    <div className="code-block-container">
      <div className="code-header">
        <span className="language-label">{language}</span>
      </div>
      <SyntaxHighlighter
        language={mappedLanguage}
        style={tomorrow}
        customStyle={{
          margin: 0,
          borderRadius: 0,
          background: "transparent",
        }}
        codeTagProps={{
          style: {
            fontFamily: `'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace`,
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
