// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom"; // Importuojame Router komponentą

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router> {/* <--- Router komponentas apgaubia App komponentą čia */}
      <App />
    </Router>
  </React.StrictMode>
);