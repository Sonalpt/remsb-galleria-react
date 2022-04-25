import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useState, useEffect } from "react";
import Details from "./pages/Details";
import Home from "./pages/Home";
import "./styles/style.scss";
import artData from "./data.json";

const App = () => {
  const [selectedDetailsId, setDetailsId] = useState(0);
  return (
    <React.Fragment>
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  artData={artData}
                  selectedDetailsId={selectedDetailsId}
                  setDetailsId={setDetailsId}
                />
              }
            />
            <Route
              path="/details"
              element={
                <Details
                  artData={artData}
                  selectedDetailsId={selectedDetailsId}
                  setDetailsId={setDetailsId}
                />
              }
            />
            <Route
              path="/*"
              element={
                <Home
                  artData={artData}
                  selectedDetailsId={selectedDetailsId}
                  setDetailsId={setDetailsId}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </main>
    </React.Fragment>
  );
};

export default App;
