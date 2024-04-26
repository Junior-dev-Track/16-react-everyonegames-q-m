import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/HomePage";
import Browse from "./assets/Pages/BrowsePage";
import StorePages from "./assets/Pages/StorePage";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/store" element={<StorePages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
