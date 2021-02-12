import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Search from "./components/Search";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact render={(props) => <Search {...props} />} />
      </div>
    </Router>
  );
}

export default App;
