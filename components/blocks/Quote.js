import React from "react";

function Quote({ block }) {
  console.log(block);
  return (
    <div className="block block_quote">
      {block.rich_text.map((text) => text.plain_text)}
    </div>
  );
}

export default Quote;
