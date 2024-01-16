import React from "react";
import "./styles/footerStyle.css";

import { ReactComponent as DiscordSVG } from "../../assets/images/discord.svg";
import { ReactComponent as GitHubLogoSVG } from "../../assets/images/github.svg";
import { ReactComponent as TwitterSVG } from "../../assets/images/twitter.svg";
import { ReactComponent as LinkedInSVG } from "../../assets/images/linkedin.svg";

export function Footer() {
  return (
    <nav className="footer-container">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://discord.gg/qSp2wBJt"
        className="footer-img-link"
      >
        <DiscordSVG className="footer-img" />
      </a>
    </nav>
  );
}
