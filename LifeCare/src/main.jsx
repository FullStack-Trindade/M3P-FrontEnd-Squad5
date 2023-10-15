import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./global.style.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);
