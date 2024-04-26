import React from "react";
import { useState, useEffect } from "react";
import API_KEY from "../Api/apikey";

export default function Stores() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stores = await fetch(
        `https://api.rawg.io/api/stores?key=${API_KEY}`
      );
      const jsonStore = await stores.json();
      setData(jsonStore);
    };

    fetchData();
  }, []);
  return (
    <div>
      {data &&
        data.results &&
        data.results.map((stores, index) => (
          <div key={index}>
            <h2>{stores.name}</h2>
            <p>{stores.description}</p>
          </div>
        ))}
    </div>
  );
}
