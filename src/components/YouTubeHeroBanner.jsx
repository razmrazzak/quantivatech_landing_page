/**
 * Full-bleed muted YouTube autoplay embed for product heroes.
 * Browsers require mute=1 for autoplay. Pass a YouTube video ID (not full URL).
 */
export default function YouTubeHeroBanner({ videoId, title = 'Product demo video' }) {
  if (!videoId) return null;

  const src = [
    `https://www.youtube.com/embed/${encodeURIComponent(videoId)}`,
    '?autoplay=1',
    '&mute=1',
    '&playsinline=1',
    '&loop=1',
    `&playlist=${encodeURIComponent(videoId)}`,
    '&controls=1',
    '&rel=0',
    '&modestbranding=1',
  ].join('');

  return (
    <div className="relative w-full overflow-hidden bg-black">
      <div className="relative aspect-video w-full">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
