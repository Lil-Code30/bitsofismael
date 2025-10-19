import { BlogCard } from "@/components/BlogCard";
import { getAllLogs } from "@/lib/getAllLogs";

export default function Logs() {
  const logs = getAllLogs();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">All my Blogs</h1>

      <div className="grid gap-4">
        {logs.map((log) => (
          <BlogCard
            key={log.id}
            id={log.id}
            title={log.title}
            createdDate={log.date || "2023-10-01T12:00:00Z"}
            updatedDate={log.updatedDate || undefined}
          />
        ))}
      </div>
    </div>
  );
}
