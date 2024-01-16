import React from "react";
import "./styles/navbarStyle.css";
import Logo from "../../assets/images/logo-green.png";

import { Link } from "react-router-dom";
import { ThemeToggler } from "./ThemeToggler";
import { SoundToggler } from "./SoundToggler";

export function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo-container">
        <Link className="navbar-logo" to="/">
          <img src={Logo} alt="logo" className="navbar-logo-img" />
        </Link>
      </div>
      <div className="settings-container"></div>
    </nav>
  );
}
