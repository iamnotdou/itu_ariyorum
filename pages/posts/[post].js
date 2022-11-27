import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Paragraph from "../../components/blocks/Paragraph";
import ImageEl from "../../components/blocks/ImageEl";
import Heading3 from "../../components/blocks/Heading3";
import Heading2 from "../../components/blocks/Heading2";
import Video from "../../components/blocks/Video";
import Quote from "../../components/blocks/Quote";
import Divide from "../../components/blocks/Divide";
import Code from "../../components/blocks/Code";
import ListItem from "../../components/blocks/ListItem";
import Callout from "../../components/blocks/Callout";
import TOT from "../../components/blocks/TOT";

function post({ data }) {
  const Comps = {
    image: ImageEl,
    code: Code,
    paragraph: Paragraph,
    heading_2: Heading2,
    heading_3: Heading3,
    video: Video,
    callout: Callout,
    quote: Quote,
    divider: Divide,
    bulleted_list_item: ListItem,
  };

  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div id="post">
        <div
          id="post_cover"
          style={{ backgroundImage: `url(${data.cover})` }}
          alt=""
        >
          <div id="post_cover_content">
            <div id="post_cover_content_attr">
              {data.author && (
                <div id="post_cover_content_attr_author">{data.author}</div>
              )}
              <p>{data.date.split("-").reverse().join(".")}</p>
            </div>
            <div id="post_cover_content_tags">
              {data.tags.map((tag) => (
                <div key={tag.name}>{tag.name}</div>
              ))}
            </div>
            <h2>{data.title}</h2>
          </div>
        </div>
        <div id="post_content">
          <TOT data={data} />

          {data.blocks.map((block) => {
            const Component = Comps[block.type];
            if (Component) {
              return <Component key={block.id} block={block[block.type]} />;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default post;
export async function getServerSideProps({ query }) {
  const res = await fetch("https://ituariyorum.vercel.app/api/" + query.post);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
