import fs from "fs";
import path from "path";
import matter from "gray-matter";

const logsDirectory = path.join(process.cwd(), "content", "logs");

type LogItem = {
  id: string;
  slug: string;
  title: string;
  date: string | null;
  description: string;
  updatedDate: string | null;
};

export function getAllLogs(): LogItem[] {
  if (!fs.existsSync(logsDirectory)) return [];

  const dirs = fs
    .readdirSync(logsDirectory, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  const items: LogItem[] = [];

  for (const dir of dirs) {
    const slug = dir.name;
    try {
      // Try to find MDX file
      const mdxPath1 = path.join(logsDirectory, slug, `${slug}.mdx`);
      const mdxPath2 = path.join(logsDirectory, slug, "index.mdx");

      let filePath: string | null = null;
      if (fs.existsSync(mdxPath1)) {
        filePath = mdxPath1;
      } else if (fs.existsSync(mdxPath2)) {
        filePath = mdxPath2;
      }

      if (filePath) {
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContent);

        items.push({
          id: slug,
          slug,
          title: data.title ?? slug,
          date: data.date ?? null,
          description: data.description ?? "",
          updatedDate: data.updatedDate ?? null,
        });
      }
    } catch (error) {
      console.error(`Error processing log ${slug}:`, error);
    }
  }

  return items.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}
