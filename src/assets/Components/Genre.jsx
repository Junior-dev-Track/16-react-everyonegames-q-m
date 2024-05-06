import { useState, useEffect } from "react";
import API from "../Api/api";

export default function Genre() {
  const [data, setData] = useState([]);
  const KEY = import.meta.env.VITE_KEY;
  const URL = `https://api.rawg.io/api/genres/{id}?key=${KEY}`;

  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);
      setData(request);
    };
  }, []);
}
