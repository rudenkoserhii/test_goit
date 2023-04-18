import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./components/App";
import { GlobalStyle } from "./utils/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
// </React.StrictMode>
);
