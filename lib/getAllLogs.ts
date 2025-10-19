import fs from "fs";
import path from "path";
import matter from "gray-matter";

const logsDirectory = path.join(process.cwd(), "content/logs");

export function getAllLogs() {
  const folders = fs.readdirSync(logsDirectory);

  const logs = folders.map((folder) => {
    const fullPath = path.join(logsDirectory, folder, "index.mdx");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      id: folder,
      title: data.title || `Log ${folder}`,
      date: data.date || new Date().toISOString(),
      description: data.description || "",
    };
  });

  return logs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
