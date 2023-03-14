// Libraries
import React from "react";
import { BrowserRouter } from "react-router-dom";
// Components
import { AutoRoutes } from "./routes";

import "./styles";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AutoRoutes />
      </BrowserRouter>
    </div>
  );
};
