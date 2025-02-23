import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
/>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
