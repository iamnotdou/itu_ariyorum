import axios from "axios";
import React from "react";
import Image from "next/image";
import Head from "next/head";
function etkinlikler({ etkinlikler }) {
  return (
    <>
      <Head>
        <title>Etkinlikler - Arıyorum </title>
      </Head>
      <div id="etkinliklerPage">
        <div id="etkinliklerPage_inner">
          {etkinlikler.map((etkinlik) => (
            <div className="etkinlik" key={etkinlik.id}>
              <div
                className={
                  etkinlik.isEnd ? "etkinlik_cover end" : "etkinlik_cover"
                }
              >
                <Image fill={true} alt={etkinlik.title} src={etkinlik.cover} />
              </div>

              <div className="etkinlik_content">
                {etkinlik.remain > 0 && (
                  <div className="etkinlik_content_remain">
                    {Math.floor(etkinlik.remain) + " gün kaldı"}
                  </div>
                )}
                <div className="etkinlik_content_dates">
                  <div>
                    {etkinlik.date.start
                      .split("T")[0]
                      .split("-")
                      .reverse()
                      .join("/")}
                  </div>
                  {etkinlik.date.start.split("T")[0] !==
                    etkinlik.date.end?.split("T")[0] && (
                    <div>
                      {etkinlik.date.end
                        ?.split("T")[0]
                        .split("-")
                        .reverse()
                        .join("/")}
                    </div>
                  )}
                </div>
                <div className="etkinlik_content_title">{etkinlik.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default etkinlikler;
export async function getServerSideProps() {
  const { data: etkinlikler } = await axios.get(
    "https://itu-ariyorum.vercel.app/api/etkinlikler"
  );
  return {
    props: {
      etkinlikler,
    },
  };
}
