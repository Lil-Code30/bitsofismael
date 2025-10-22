import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Figure } from "@/components/Figure";
import { YouTubeCard } from "@/components/YoutubeCard";
import { CalendarPlus, FilePenLine } from "lucide-react";
import React from "react";

const POSTS_DIR = path.join(process.cwd(), "content", "logs");

// Components available to MDX
const components = {
  Figure,
  YouTube: YouTubeCard,
};

export async function generateStaticParams() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const folders = fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
  return folders.map((id) => ({ id }));
}

export default async function LogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const slug = id;
  const a = path.join(POSTS_DIR, slug, `${slug}.mdx`);
  const b = path.join(POSTS_DIR, slug, "index.mdx");
  const file = fs.existsSync(a) ? a : fs.existsSync(b) ? b : null;

  if (!file) notFound();

  const raw = fs.readFileSync(file, "utf8");
  const { content, data } = matter(raw);

  return (
    <article className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-6">{data.title ?? slug}</h1>
      <div className="flex items-center gap-6 md:gap-10">
        <span className="text-sm text-gray-400 flex items-center gap-2">
          <CalendarPlus size={15} /> {data.date.split("T")[0]}
        </span>
        <span className="text-sm text-gray-400 flex items-center gap-2">
          <FilePenLine size={15} />
          {data.updatedDate.split("T")[0]}
        </span>
      </div>
      <MDXRemote
        source={content}
        components={components}
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
