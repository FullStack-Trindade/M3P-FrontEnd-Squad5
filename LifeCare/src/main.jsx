import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Global.style.jsx";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import { HeaderProvider } from "./contexts/HeaderContext/Header.context.jsx";
import { ThemeProvider } from "./contexts/ThemeContext/Theme.context.jsx";
import { AuthProvider } from "./contexts/auth/auth.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <HeaderProvider>
          <GlobalStyle />
          <AppRoutes />
        </HeaderProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
