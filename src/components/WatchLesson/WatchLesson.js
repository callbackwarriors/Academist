import React from "react";

const WatchLesson = ({ watchVideo }) => {
  return (
    <div className="py-10">
      <h3 className="pb-6">{watchVideo.title}</h3>
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          src={`https://www.youtube.com/embed/${watchVideo.link}`}
          frameborder="0"
          width="100%"
          height="500px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchLesson;
