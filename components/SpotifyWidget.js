import React from "react";

function SpotifyWidget() {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/show/4i1zq0gJ23WEdHXm9vSnCj?utm_source=generator&theme=0&t=0"
      width="100%"
      height="152"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

export default SpotifyWidget;
