import React from "react";

function TOT({ data }) {
  const tot = data.blocks.filter((block) => {
    return block.type == "heading_2" || block.type == "heading_3";
  });
  return (
    <div className="tot">
      <ul className="tot_inner">
        {tot.map((item) => (
          <li key={item.id} className="tot_el">
            {item[item.type].rich_text[0].plain_text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TOT;
