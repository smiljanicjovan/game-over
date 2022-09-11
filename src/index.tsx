// Core
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Global context
import { Store } from "./context/theme";

// Global styles
import GlobalStyle from "./styles/globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Store>
      <GlobalStyle />
      <App />
    </Store>
  </React.StrictMode>
);
