import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Conditional from "./Conditional";
import Person from "./UseState";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Conditional /> */}
    <Person />
  </StrictMode>
);
