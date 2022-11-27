import React from "react";
import { useRouter } from "next/router";
function Menu({ menu, navLinks }) {
  const router = useRouter();
  return (
    <div id="menu" className={menu ? "active" : ""}>
      <div id="menu_inner">
        <div id="menu_links">
          {navLinks.map((link) => (
            <div
              key={link.path}
              onClick={() => {
                router.push(link.path);
              }}
              className="link"
            >
              {link.title}
            </div>
          ))}
        </div>
        <div id="menu_others">
          <div>İletişim</div>
        </div>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/show/4i1zq0gJ23WEdHXm9vSnCj?utm_source=generator&theme=0&t=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Menu;
