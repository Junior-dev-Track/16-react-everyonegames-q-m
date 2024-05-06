import { useState, useEffect } from "react";
import API from "../../API";

export default function ScreeShots() {
  const [data, setData] = useState([]);
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/games/{game_pk}/screenshots?key=${KEY}`; // replace game_pk

  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);
      setData(request);
    };
  }, []);
}
