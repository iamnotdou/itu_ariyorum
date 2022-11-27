import React from "react";

function ListItem({ block }) {
  return (
    <li className="block block_list_item">{block.rich_text[0].plain_text}</li>
  );
}

export default ListItem;
