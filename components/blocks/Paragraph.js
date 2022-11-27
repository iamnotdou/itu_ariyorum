import React from "react";

function Paragraph({ block }) {
  return (
    <p className="block block_paragraph">
      {block.rich_text.map((text) => {
        return (
          <span
            key={text.text.content}
            className={Object.keys(text.annotations)
              .filter((key) => {
                return text.annotations[key];
              })
              .join(" ")}
          >
            {text.href ? (
              <a href={text.href}>{text.plain_text}</a>
            ) : (
              <span key={text.text.content}>{text.plain_text}</span>
            )}
          </span>
        );
      })}
    </p>
  );
}

export default Paragraph;
