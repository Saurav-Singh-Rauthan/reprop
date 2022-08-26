import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import Rent from "./components/pages/Rent/Rent";
import Buy from "./components/pages/Buy/Buy";

function App() {
  return (
    <Router>
      <React.Fragment>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/rent" element={<Rent />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
