import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Router>
    <CssBaseline>
      <App />
    </CssBaseline>
  </Router>,
  document.getElementById("root")
);
