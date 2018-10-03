import React from "react";
import { Link } from "react-router-dom";

const NavFooter = () => {
  return (
    <footer className="navbar fixed-bottom grey darken-4 pad-0">
      <Link to="/" className="btn btn-grey btn-md m-0 no-shadow transparent">
        <span className="fa fa-home grey-text" />
      </Link>
      <Link
        to="/catalogues"
        className="btn btn-grey btn-md m-0 no-shadow transparent"
      >
        <span className="fa fa-folder grey-text" />
      </Link>
    </footer>
  );
};

export default NavFooter;
