import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import { GlobalStyle } from "./utils/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter basename="/test_goit/">
      <GlobalStyle />
      <App />
    </BrowserRouter>
// </React.StrictMode>
);
