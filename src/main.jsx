import React from "react";
import ReactDOM from "react-dom/client";
import Info from "./Info";
import About from "./About";
import Interests from "./Interests";
import Footer from "./Footer";
import { App } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Info />
    <About />
    <Interests />
    <Footer />
    <App />
  </React.StrictMode>
);
