import React from "react";
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./Calculator/Calculator";
import Main from "./pages/Main";
import "./style.css";

function Home() {
  return (
    <Router>
      <NavBar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cal" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Home;
