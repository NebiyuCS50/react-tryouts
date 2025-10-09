import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Conditional from "./Conditional";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <Conditional />
  </StrictMode>
);
