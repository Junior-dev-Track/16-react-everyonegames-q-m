import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./assets/Pages/HomePage";
import Platforms from "./assets/Pages/PlatformsPage";
import StorePages from "./assets/Pages/StorePage";
import GenrePage from "./assets/Pages/GenrePage";
import CreatorsPage from "./assets/Pages/CreatorPage";
import Tags from "./assets/Pages/TagsPage";
import Developers from "./assets/Pages/DevelopersPage";
import Publisher from "./assets/Pages/PublisherPage";
import BestOfTheYears from "./assets/Pages/BestOfTheYearsPage";
import NewReleases from "./assets/Pages/NewReleasesPage";
import NextWeekReleases from "./assets/Pages/NextWeekReleasesPage";
import Game from "./assets/Pages/GamePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/store" element={<StorePages />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/publisher" element={<Publisher />} />
        <Route path="/creators" element={<CreatorsPage />} />
        <Route path="/bestoftheyears" element={<BestOfTheYears />} />
        <Route path="/newreleases" element={<NewReleases />} />
        <Route path="/nextweekreleases" element={<NextWeekReleases />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </Router>
  );
};

export default App;
