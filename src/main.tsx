import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { ColorModeProvider } from "../src/theme/colorModeContext";
import "./index.css";

// 🟢 Initialisation propre du Root sans surcharger le thread principal
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </React.StrictMode>,
  );
}
