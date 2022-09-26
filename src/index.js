import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";
import ContextProvider from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);