import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import './index.css'
import App from "./App.jsx";
import Canvas from "./Canvas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Canvas height="1000" width="1000" />
  </StrictMode>
);
