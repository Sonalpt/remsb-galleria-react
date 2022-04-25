import React from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import { XMasonry, XBlock } from "react-xmasonry";

const Home = ({ artData, selectedDetailsId, setDetailsId }) => {
  return (
    <React.Fragment>
      <Navigation
        selectedDetailsId={selectedDetailsId}
        setDetailsId={setDetailsId}
      />
      <XMasonry
        maxColumns={4}
        responsive={true}
        targetBlockWidth={500}
        smartUpdateCeil={1000}
      >
        {artData.map((artCard, index) => {
          return (
            <XBlock width={1}>
              <Card
                key={index}
                index={index}
                artCard={artCard}
                selectedDetailsId={selectedDetailsId}
                setDetailsId={setDetailsId}
              />
            </XBlock>
          );
        })}
      </XMasonry>
    </React.Fragment>
  );
};

export default Home;
