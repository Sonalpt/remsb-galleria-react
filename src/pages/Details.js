import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMaximize,
  faForwardStep,
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";

const Details = ({ artData, selectedDetailsId, setDetailsId }) => {
  const backgroundGallery = artData[selectedDetailsId].images.gallery;
  const backgroundArtistPhoto = artData[selectedDetailsId].artist.image;

  const slideshowForward = () => {
    if (selectedDetailsId === 14) {
      setDetailsId(14);
      window.scrollTo(0, 150);
    } else {
      setDetailsId(selectedDetailsId + 1);
      window.scrollTo(0, 150);
    }
  };
  const slideshowBackward = () => {
    if (selectedDetailsId === 0) {
      setDetailsId(0);
      window.scrollTo(0, 150);
    } else {
      setDetailsId(selectedDetailsId - 1);
      window.scrollTo(0, 150);
    }
  };

  const [visibility, setVisibility] = useState(false);

  return (
    <React.Fragment>
      <div className={visibility ? "galleryScreen" : "hidden"}>
        <div
          className="galleryScreen__image"
          style={{
            backgroundImage: `url("${backgroundGallery}")`,
          }}
        ></div>
        <span
          className="galleryScreen__close"
          onClick={() => setVisibility(false)}
        >
          CLOSE
        </span>
      </div>
      <Navigation
        selectedDetailsId={selectedDetailsId}
        setDetailsId={setDetailsId}
      />
      <article>
        <div className="detailsPictures">
          <div className="detailsPictures__title">
            <h3>{artData[selectedDetailsId].name}</h3>
            <h4>{artData[selectedDetailsId].artist.name}</h4>
          </div>
          <div
            className="detailsPictures__gallery"
            style={{
              backgroundImage: `url("${backgroundGallery}")`,
            }}
          >
            <div
              className="detailsPictures__gallery__artistPhoto"
              style={{
                backgroundImage: `url("${backgroundArtistPhoto}")`,
              }}
            ></div>
            <div
              className="detailsPictures__gallery__button"
              onClick={() => setVisibility(true)}
            >
              <FontAwesomeIcon className="arrowsIcon" icon={faMaximize} />
              <span>VIEW IMAGE</span>
            </div>
          </div>
        </div>
        <div className="detailsText">
          <div className="detailsText__year">
            {artData[selectedDetailsId].year}
          </div>
          <div className="detailsText__mainText">
            {artData[selectedDetailsId].description}
          </div>
          <a href={artData[selectedDetailsId].source}>GO TO SOURCE</a>
        </div>
      </article>
      <div className="slideshow">
        <div className="slideshowBar"></div>
        <div className="slideshowContent">
          <div className="slideshowText">
            <span className="slideshowText__title">
              {artData[selectedDetailsId].name}
            </span>
            <span className="slideshowText__artist">
              {artData[selectedDetailsId].artist.name}
            </span>
          </div>
          <div className="slideshowArrows">
            <FontAwesomeIcon
              className="backward"
              icon={faBackwardStep}
              onClick={slideshowBackward}
            />
            <FontAwesomeIcon
              className="forward"
              icon={faForwardStep}
              onClick={slideshowForward}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
