import API from "../../API";
import { useState, useEffect } from "react";

const NewReleases = () => {
  const KEY = import.meta.env.VITE_KEY;
  const URL = `=${KEY}`;

  const [data, setData] = useState();
  useEffect(() => {
    return async () => {
      const request = await API(URL);
      console.table("Query result :", request);
      setData(request);
    };
  }, []);

  return (
    <main>
      <div className="container-main">
        <h1>New Releases</h1>
      </div>
    </main>
  );
};

export default NewReleases;
