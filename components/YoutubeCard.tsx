export function YouTubeCard({ id }: { id: string }) {
  return (
    <div className="aspect-video">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className="w-full h-full rounded"
        allowFullScreen
      />
    </div>
  );
}
