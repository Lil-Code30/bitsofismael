import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogCard } from "@/components/BlogCard";

export const metadata = {
  title: "Logs | BitsOfIsmael",
  description:
    "All my logs — a collection of thoughts, experiments, and dev adventures.",
};

interface LogMeta {
  id: string;
  title: string;
  createdDate: string;
  updatedDate?: string;
  tag?: string;
  description?: string;
}

export default async function LogsPage() {
  const logsDir = path.join(process.cwd(), "content/logs");
  const folders = fs.readdirSync(logsDir);

  const logs: LogMeta[] = folders
    .filter((folder) => fs.lstatSync(path.join(logsDir, folder)).isDirectory())
    .map((folder) => {
      const filePath = path.join(logsDir, folder, `${folder}.mdx`);

      if (!fs.existsSync(filePath)) return null;

      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        id: folder,
        title: data.title || `Log ${folder}`,
        createdDate: data.date || new Date().toISOString(),
        updatedDate: data.updatedDate || null,
        tag: data.tag || "DevLog",
        description: data.description || "A brief log entry.",
      };
    })
    .filter(Boolean)
    .sort(
      (a, b) =>
        new Date(b!.createdDate).getTime() - new Date(a!.createdDate).getTime()
    ) as LogMeta[];

  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-3">All Logs</h1>

      <div className="grid gap-1 ">
        {logs.map((log) => (
          <BlogCard
            key={log.id}
            id={log.id}
            title={log.title}
            createdDate={log.createdDate}
            updatedDate={log.updatedDate}
            tag={log.tag}
            description={log.description}
          />
        ))}
      </div>

      {logs.length === 0 && (
        <p className="text-gray-500 text-center mt-12">
          No logs found yet. Start writing your first one!
        </p>
      )}
    </>
  );
}
