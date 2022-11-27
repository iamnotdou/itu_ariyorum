import React from "react";
import { useRouter } from "next/router";
function Feed({ data }) {
  const router = useRouter();
  return (
    <div id="feed">
      <div id="feed_inner">
        <div id="feed_content">
          <div
            id="feed_content_left"
            onClick={() => {
              router.push("/posts/" + data[0].id);
            }}
            style={{ backgroundImage: `url(${data[0].cover})` }}
          >
            <div id="feed_content_left_text">
              <div className="tag">
                {data[0].tags
                  .filter((item, idx) => idx < 2)
                  .map((tag) => (
                    <span key={tag.id}>{tag.name}</span>
                  ))}
              </div>
              <div className="title">{data[0].title}</div>
            </div>
          </div>
          <div id="feed_content_right">
            <div
              className="post"
              style={{ backgroundImage: `url(${data[1].cover})` }}
              onClick={() => {
                router.push("/posts/" + data[1].id);
              }}
            >
              <div className="text">
                <div className="tag">
                  {data[1].tags
                    .filter((item, idx) => idx < 2)
                    .map((tag) => (
                      <span key={tag.id}>{tag.name}</span>
                    ))}
                </div>
                <div className="title">{data[1].title}</div>
              </div>
            </div>
            <div
              className="post"
              onClick={() => {
                router.push("/posts/" + data[2].id);
              }}
              style={{ backgroundImage: `url(${data[2].cover})` }}
            >
              <div className="text">
                <div className="tag">
                  {data[2].tags
                    .filter((item, idx) => idx < 2)
                    .map((tag) => (
                      <span key={tag.id}>{tag.name}</span>
                    ))}
                </div>
                <div className="title">{data[2].title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
