import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ artCard, index, selectedDetailsId, setDetailsId }) => {
  const backgroundThumbnail = artCard.images.thumbnail;
  return (
    <React.Fragment>
      <NavLink to="/details" style={{ textDecoration: "none" }}>
        <div
          className="card"
          onClick={() => {
            setDetailsId(index);
            if (window.innerWidth <= 768) {
              window.scrollTo(0, 0);
            } else {
              window.scrollTo(0, 150);
            }
          }}
        >
          <img src={backgroundThumbnail} alt="" />
          <h3>{artCard.name}</h3>
          <h4>{artCard.artist.name}</h4>
        </div>
      </NavLink>
    </React.Fragment>
  );
};

export default Card;
