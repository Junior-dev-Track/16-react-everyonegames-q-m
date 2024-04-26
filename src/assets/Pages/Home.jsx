import React from "react";
import { useState, useEffect } from "react";
import API_KEY from "../Api/apikey";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const platforms = await fetch(
        `https://api.rawg.io/api/platforms?key=${API_KEY}`
      );
      const jsonPlatforms = await platforms.json();

      setData(jsonPlatforms);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Home Page </h1>
      <ul>{}</ul>
    </>
  );
}
