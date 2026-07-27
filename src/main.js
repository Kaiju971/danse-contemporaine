import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import { ColorModeProvider } from "../src/theme/colorModeContext";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ColorModeProvider, { children: _jsx(App, {}) }) }));
