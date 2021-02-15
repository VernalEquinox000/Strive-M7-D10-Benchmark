import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UpperPart from "./components/UpperPart";
import Search from "./components/Search";
require("dotenv").config();
function App() {
  return (
    <Router>
      <div className="App">
        <UpperPart title="Weather today" />
        <Route path="/" exact render={(props) => <Search {...props} />} />
      </div>
    </Router>
  );
}

export default App;
