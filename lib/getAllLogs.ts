import fs from "fs";
import path from "path";

const logsDirectory = path.join(process.cwd(), "content", "logs");

export async function getAllLogs() {
  if (!fs.existsSync(logsDirectory)) return [];

  const dirs = fs
    .readdirSync(logsDirectory, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  const items = await Promise.all(
    dirs.map(async (dir) => {
      const slug = dir.name;
      try {
        // Import the MDX file to get metadata
        const mod = await import(`@/content/logs/${slug}/${slug}.mdx`).catch(
          () => import(`@/content/logs/${slug}/index.mdx`)
        );

        const metadata = mod.metadata || {};
        return {
          id: slug,
          slug,
          title: metadata.title ?? slug,
          date: metadata.date ?? null,
          description: metadata.description ?? "",
          updatedDate: metadata.updatedDate ?? null,
        };
      } catch {
        return null;
      }
    })
  );

  return items
    .filter(Boolean)
    .sort((a, b) => (b!.date ?? "").localeCompare(a!.date ?? ""));
}
