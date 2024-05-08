import API from "../../API";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailsGames = () => {
  const { id } = useParams();
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/games/${id}?key=${KEY}`;

  const [data, setData] = useState([]);
  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);

      setData(request);
      console.log(request);
    };
  }, []);

  return (
    <main>
      <div className="container-main">
        <h1>Details Games</h1>
      </div>
    </main>
  );
};

export default DetailsGames;
