import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage";
import Services from "./pages/services";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
