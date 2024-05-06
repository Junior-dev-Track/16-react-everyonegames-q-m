import React from "react";
import { useState, useEffect } from "react";
import API from "../Api/api";

export default function Stores() {
  const [data, setData] = useState([]);
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/stores?key=${KEY}`;

  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);
      setData(request);
    };
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
