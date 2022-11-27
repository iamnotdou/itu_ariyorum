import React from "react";
import SpotifyWidget from "./SpotifyWidget";

function Sidebar({ tags, data, etkinlikler }) {
  return (
    <div id="sidebar">
      <div id="etkinlikler">
        <div id="etkinlikler_title">Etkinlikler</div>
        <div id="etkinlikler_content">
          {data.etkinlikler.map((etkinlik) => (
            <div className="etkinlik" key={etkinlik.id}>
              <div className="etkinlik_title">{etkinlik.title}</div>

              <div className="etkinlik_bottom">
                <div id="etkinlik_bottom_location">{etkinlik.location}</div>

                <div id="etkinlik_bottom_date">
                  {etkinlik.date.start
                    .split("T")[0]
                    .split("-")
                    .reverse()
                    .join(".")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="podcast">
        <div id="podcast_title">Podcast</div>
        <SpotifyWidget />
      </div>
    </div>
  );
}

export default Sidebar;
