import React from "react";

const NavBar = ({ Logo }) => {
  return (
    <nav className="navbar bg-black-sheet bg-wine-filter fixed-top">
      <img className="logo" src={Logo} alt="[LOGO]" />
    </nav>
  );
};

export default NavBar;
