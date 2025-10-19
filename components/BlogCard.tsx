import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  createdDate: string;
  updatedDate?: string | null;
  tag?: string;
  description?: string;
}

export function BlogCard({ id, title, createdDate }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Link href={`/logs/${id}`} className="block group">
      <article className="flex items-center gap-5">
        <div className="flex items-center gap-3 mb-2 font-bold">
          <div className="text-md text-gray-500 font-mono">#{id}</div>
          <time
            dateTime={createdDate}
            className="text-sm text-gray-400 tracking-wide"
          >
            {formatDate(createdDate)}
          </time>
        </div>
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
          {title}
        </h3>
      </article>
    </Link>
  );
}
