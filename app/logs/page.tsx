import { BlogCard } from "@/components/BlogCard";
import { getAllLogs } from "@/lib/getAllLogs";

export default function Logs() {
  const logs = getAllLogs();
  const date = new Date();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">All my Blogs</h1>

      <div className="grid gap-4">
        {logs.map((log) => (
          <BlogCard
            key={log.id}
            id={log.id}
            title={log.title}
            createdDate={log.date || date.toISOString()}
            updatedDate={log.updatedDate || undefined}
          />
        ))}
      </div>
    </div>
  );
}
