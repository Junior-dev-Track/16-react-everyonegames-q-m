import { useState, useEffect } from "react";
import KEY from "../Api/key";

export default function Genre() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const genre = await fetch(
        `https://api.rawg.io/api/genres/{id}?key=${KEY}`,
      );
      console.log(genre);

      const jasonGenre = await genre.json();
      setData(jasonGenre);
      console.log();
    };

    fetchData();
  }, []);
}
