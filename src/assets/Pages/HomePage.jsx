import React from "react";
import { Link } from "react-router-dom";
import Games from "../Components/Games";

export default function Home() {
  return (
    <>
      <h1>Home Page </h1>

      <Games />

      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="browse">
        <button>Browse</button>
      </Link>
      <Link to="store">
        <button>Stores</button>
      </Link>
      <Link to="genre">
        <button>Genres</button>
      </Link>
    </>
  );
}
