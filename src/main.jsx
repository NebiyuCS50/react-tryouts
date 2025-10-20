import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Conditional from "./Conditional";
import Person from "./UseState";
import Try from "./Try";
import SharedState from "./SharedState";
import SyncedInputs from "./CommonState";
import LiftingStateParent from "./LiftingStateParent";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <SyncedInputs /> */}
    {/* <SharedState /> */}
    {/* <App /> */}
    {/* <Conditional /> */}
    {/* <Person /> */}
    {/* <Try /> */}
    <LiftingStateParent />
  </StrictMode>
);
