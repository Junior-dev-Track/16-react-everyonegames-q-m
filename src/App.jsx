import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./assets/Pages/HomePage";
import Browse from "./assets/Pages/BrowsePage";
import StorePages from "./assets/Pages/StorePage";
import GenrePage from "./assets/Pages/GenrePage";
import CreatorsPage from "./assets/Pages/CreatorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/store" element={<StorePages />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/creators" element={<CreatorsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
