import { useState, useEffect } from "react";
import API_KEY from "../Api/apikey";

export default function ScreeShots() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const screenShots = await fetch(
        `https://api.rawg.io/api/games/{game_pk}/screenshots?key=${API_KEY}`
      );
      const jsonScreenShots = await screenShots.json();
      setData(jsonScreenShots);
      console.log(jsonScreenShots);
    };

    fetchData();
  }, []);
}
