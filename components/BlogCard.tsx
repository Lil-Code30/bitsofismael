import Link from "next/link";

interface BlogCardProps {
  id: string;
  title: string;
  createdDate: string;
  updatedDate?: string | null;
}

export function BlogCard({
  id,
  title,
  createdDate,
  updatedDate,
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Link href={`/logs/${id}`} className="block">
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <span className="text-sm font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
            #{id}
          </span>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Created:</span>
            <time dateTime={createdDate}>{formatDate(createdDate)}</time>
          </div>

          {updatedDate && updatedDate !== createdDate && (
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Updated:</span>
              <time dateTime={updatedDate}>{formatDate(updatedDate)}</time>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
