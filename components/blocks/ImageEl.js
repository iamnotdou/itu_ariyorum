import React from "react";
import Image from "next/image";
function ImageEl({ block }) {
  return (
    <div className="block block_image">
      <img className="block_image_image" src={block[block.type].url} />
      <div className="block_image_caption">{block.caption[0]?.plain_text}</div>
    </div>
  );
}

export default ImageEl;
