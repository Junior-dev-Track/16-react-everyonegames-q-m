import React from "react";
import { Link } from "react-router-dom";
import Creators from "../Components/Creators";

export default function CreatorsPage() {
  return (
    <>
      <h1>Creators</h1>
      <Creators />

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
      <Link to="creators">
        <button>Creators</button>
      </Link>
    </>
  );
}
