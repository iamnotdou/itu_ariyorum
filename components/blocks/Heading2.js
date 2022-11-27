import React from "react";

function Heading2({ block }) {
  return (
    <div className="block block_heading_2">{block.rich_text[0].plain_text}</div>
  );
}

export default Heading2;
