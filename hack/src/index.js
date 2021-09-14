import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HackProvider } from "./util/context";
import "./styles/main.css";

ReactDOM.render(
  <React.StrictMode>
    <HackProvider>
        <App />
    </HackProvider>
  </React.StrictMode>,
  document.getElementById("root")
);