import React from "react";

function Video({ block }) {
  return (
    <iframe
      className="block block_video"
      frameBorder={0}
      src={block.external.url.replace("watch?v=", "embed/")}
    ></iframe>
  );
}

export default Video;
