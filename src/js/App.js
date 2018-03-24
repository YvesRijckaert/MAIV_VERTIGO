import React from "react";
import ReactDOM from "react-dom";
import CoolComponent from "./CoolComponent.jsx";
const items = [`Amstel Gold Race`, `Ronde van Spanje`, `WK 1976`, `WK 1981`];
ReactDOM.render(
  <CoolComponent items={items} />,
  document.getElementById(`reactcontent`)
);
