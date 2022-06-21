import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Display from "./Display";
import ClassCounter from "./ClassCounter";
import DisplayAgain from "./DisplayAgain";

import FunctionCounter from "./FunctionCounter";

import Counter from "./Counter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
