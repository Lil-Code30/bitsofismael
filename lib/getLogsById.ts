import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const logsDirectory = path.join(process.cwd(), "content/logs");

export async function getLogById(id: string) {
  const fullPath = path.join(logsDirectory, id, "index.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    id,
    mdxSource,
    ...data,
  };
}
