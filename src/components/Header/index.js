import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1>Welcome!</h1>
      <img className="mb-5" id="avatar" src="https://raw.githubusercontent.com/cnwanneka/bootstrap-portfolio/main/images/Chidi%20Nwanneka%20photo.jpg" alt="Chidi Nwanneka" />
    </header>
  );
}

export default Header;