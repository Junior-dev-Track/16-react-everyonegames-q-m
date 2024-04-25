import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import API_KEY from "./apikey";

import "./App.css";

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={} />
          <Route path="" element={} />
          <Route path="" element={} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
