import React from "react";

interface TrailerPlayerProps {
  videoKey: string;
  title?: string;
}

const TrailerPlayer = ({ videoKey, title = "Trailer" }: TrailerPlayerProps) => {
  if (!videoKey)
    return (
      <div className="flex items-center justify-center h-40 bg-zinc-900 rounded-lg shadow-inner">
        <p className="text-gray-400 text-sm">Trailer não disponível.</p>
      </div>
    );

  return (
    <div className="w-full max-w-2xl mx-auto my-4">
      <div className="relative pb-[56.25%] rounded-xl overflow-hidden shadow-lg bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}`}
          title={title}
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default TrailerPlayer;
