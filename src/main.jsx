import React, { StrictMode } from "react"; // Import StrictMode from react
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import ContextProvider from "./ReactHooksComp/UseContext/Context/ExContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
