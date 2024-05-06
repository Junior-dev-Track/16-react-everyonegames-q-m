import { useState, useEffect } from "react";
import API from "../../API";

const BestOfTheYears = () => {
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

export default BestOfTheYears;
