import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const POSTS_DIR = path.join(process.cwd(), "content", "logs");

export async function generateStaticParams() {
  const folders = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
  return folders.map((id) => ({ id }));
}

export default async function LogPage({ params }: { params: { id: string } }) {
  const slug = params.id;
  const a = path.join(POSTS_DIR, slug, `${slug}.mdx`);
  const b = path.join(POSTS_DIR, slug, "index.mdx");
  const file = fs.existsSync(a) ? a : fs.existsSync(b) ? b : null;

  if (!file) notFound();

  const raw = fs.readFileSync(file, "utf8");
  const { content, data } = matter(raw);

  return (
    <article className="prose">
      <h1>{data.title ?? slug}</h1>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ],
          },
        }}
      />
    </article>
  );
}
