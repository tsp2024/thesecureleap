import React from "react";
import YouTube from "react-youtube";

const ReactYoutube = () => {
  const videoUrl = "https://www.youtube.com/watch?v=WHcz1N0gOfM";
  const videoId = new URL(videoUrl).searchParams.get("v") || "";

  const opts = {
    playerVars: {
      autoplay: 0,
      controls: 1,
    },
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="w-full max-w-2xl aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-2 border-gray-950 shadow-lg">
        <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
      </div>
    </div>
  );
};

export default ReactYoutube;
