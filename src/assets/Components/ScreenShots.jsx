import { useState, useEffect } from "react";
import KEY from "../Api/key";

export default function ScreeShots() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const screenShots = await fetch(
        `https://api.rawg.io/api/games/{game_pk}/screenshots?key=${KEY}`,
      );
      const jsonScreenShots = await screenShots.json();
      setData(jsonScreenShots);
      console.log(jsonScreenShots);
    };

    fetchData();
  }, []);
}
