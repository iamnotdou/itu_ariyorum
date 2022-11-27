import React from "react";

function Heading3({ block }) {
  return (
    <div className="block block_heading_3">
      {block.rich_text.map((text) => text.text.content)}
    </div>
  );
}

export default Heading3;
