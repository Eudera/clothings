import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./container/App";

import "./index.css";
import "./styles/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
