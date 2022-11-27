import axios from "axios";
import Head from "next/head";
import React, { useState } from "react";
import Feed from "../components/Feed";
import Line from "../components/Line";
import Recent from "../components/Recent";
import Sidebar from "../components/Sidebar";

function index({ data, tags, spotify }) {
  return (
    <>
      <Head>
        <title>ArıYorum - Anasayfa</title>
      </Head>
      <div id="content">
        <div id="content_inner">
          <Feed
            data={data.posts.filter((post) => {
              return post.status == "Gündem";
            })}
          />
          <Line />
          <div id="content_bottom">
            <Recent tags={tags} data={data} />
            <Sidebar data={data} spotify={spotify} />
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://itu-ariyorum-lara64hgl-wicedev.vercel.app/api/notion"
  );
  const { data: tags } = await axios.get(
    "https://itu-ariyorum-lara64hgl-wicedev.vercel.app/api/tags"
  );

  return {
    props: {
      data,
      tags,
    },
  };
}
