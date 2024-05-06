import { useState, useEffect } from "react";
import API from "./API";

export default NextWeekReleases = () => {
  const KEY = import.meta.env.VITE_KEY;
  const URL = `${KEY}`;
  const [data, setData] = useState();

  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);
      setData(request);
    };
  }, []);
};
