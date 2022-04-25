import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ selectedDetailsId, setDetailsId }) => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1>galleria.</h1>
          </NavLink>
          <NavLink
            to="/details"
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setDetailsId(0)}
          >
            <h2>START SLIDESHOW</h2>
          </NavLink>
        </nav>
        <div className="straightBar"></div>
      </header>
    </React.Fragment>
  );
};

export default Navigation;
