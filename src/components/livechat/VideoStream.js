import React from "react";

const VideoStream = () => {
  return (
    <div>
      <iframe
        width="700"
        height="515"
        src="https://www.youtube.com/embed/aFsGDcy-6hc?si=6rJsjuDSOkGjkB5O"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoStream;
