import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
function Recent({ data, tags }) {
  const router = useRouter();
  const categories = ["Haber", "Blog"];
  const [tagQuery, setTagQuery] = useState();
  const [state, setState] = useState("Haber");

  useEffect(() => {
    if (tagQuery) {
      router.push(
        {
          pathname: "/",
          query: {
            tag: tagQuery.split(" ").join("").toLowerCase(),
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      router.push(
        {
          pathname: "/",
        },
        undefined,
        { shallow: true }
      );
    }
  }, [tagQuery]);
  return (
    <div id="recent">
      <div id="recent_title">
        {categories.map((category) => (
          <span
            key={category}
            className={category == state ? "active" : ""}
            onClick={() => {
              setState(category);
              setTagQuery("");
            }}
          >
            {category}
          </span>
        ))}
      </div>
      {state == "Haber" && (
        <div id="recent_tags">
          <div id="recent_tags_inner">
            <div
              className={router.query.tag ? "tag" : "tag active"}
              onClick={() => {
                setTagQuery("");
              }}
            >
              Hepsi
            </div>
            {tags.map((tag) => (
              <div
                key={tag.id}
                className={
                  router.query.tag == tag.name.split(" ").join("").toLowerCase()
                    ? "tag active"
                    : "tag"
                }
                onClick={() => {
                  setTagQuery(tag.name);
                }}
              >
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      )}
      <div id="recent_content">
        {data.posts
          .filter((post) => {
            return post.mainTag == state;
          })
          .filter((post) => {
            return tagQuery
              ? post.tags
                  .map((tag) => {
                    return tag.name;
                  })
                  .includes(tagQuery)
              : post;
          })
          .map((post) => (
            <div
              key={post.id}
              className="post"
              onClick={() => {
                router.push("/posts/" + post.id);
              }}
            >
              <div className="text">
                <div className="title">{post.title}</div>
                <div className="description">{post.description}</div>
                <div className="bottom">
                  {post.tags[0]?.name && (
                    <div className="tag">{post.tags[0].name}</div>
                  )}
                  <div className="date">{post.date} </div>
                </div>
              </div>
              <img className="cover" src={post.cover} width={200} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Recent;
