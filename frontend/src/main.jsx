import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";

// Get the root element
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
