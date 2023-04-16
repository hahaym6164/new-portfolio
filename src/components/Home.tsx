import React from "react";
import NavBar from "./pages/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./Calculator/Calculator";
import Main from "./pages/Main";
import "./style.css";
import BookSearch from "./Features/BookSearch/BookSearch";
import Sidebar from "./pages/Sidebar/Sidebar";
import PokeDex from "./Features/PokeDex/PokeDex";
function Home() {
  return (
    <Router>
      <NavBar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cal" element={<Calculator />} />
          <Route path="/pokeDex" element={<PokeDex />} />

          <Route path="/bookSearch" element={<BookSearch />} />
        </Routes>
        <Sidebar />
      </div>
    </Router>
  );
}

export default Home;
