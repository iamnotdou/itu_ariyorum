import React from "react";

function Code({ block }) {
  console.log();
  return (
    <div className="block block_code">
      <iframe
        style={{ borderRadius: "12px" }}
        src={block.rich_text[0].plain_text}
        width="100%"
        height="152"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Code;
