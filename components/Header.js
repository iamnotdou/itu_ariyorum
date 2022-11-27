import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

function Header() {
  const [mounted, setMounted] = useState(false);
  const [pass, setPass] = useState(0);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const navLinks = [
    {
      title: "Anasayfa",
      path: "/",
    },
    {
      title: "Etkinlikler",
      path: "/etkinlikler",
    },
    {
      title: "Hakkımızda",
      path: "/hakkimizda",
    },
  ];
  return (
    <header id="header">
      {/* whenClicked is a property not an event, per se. */}

      <div id="header_inner" className="inner">
        <Logo />
        <nav id="nav">
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.path}
                onClick={() => {
                  router.push(link.path);
                }}
                className={router.pathname == link.path ? "active" : ""}
              >
                {link.title}
              </li>
            ))}
          </ul>
        </nav>
        <div className="side">
          <div id="archive">
            <a
              target="blank"
              href="https://drive.google.com/drive/u/1/folders/0B6NLY9PYvT-jcWs5dHk4ekRDZFU?resourcekey=0-bOuZc-62RKO63il3vHQMkg"
            >
              Arşiv
            </a>
          </div>
          <div id="contact">
            <a href="" target="blank">
              İletişim
            </a>
          </div>
          <button
            id="switch"
            aria-label="dark-mode"
            onClick={() => {
              setPass(pass + 1);
              if (pass == 61) {
                console.log(
                  "%c En büyük trabzon",
                  "color:maroon;background-color:blue"
                );
              }
              setTheme(theme == "light" ? "dark" : "light");
            }}
          >
            <div id="thumb">
              {theme == "light" ? <SunIcon /> : <MoonIcon />}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
