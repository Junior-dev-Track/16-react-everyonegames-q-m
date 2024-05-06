import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import API_KEY from "../Api/apikey";
import Games from "../Components/Games";
import Platforms from "../Components/Platforms";
import DetailsGames from "../Components/DetailsGames";
import ScreeShots from "../Components/ScreenShots";
import Genre from "../Components/Genre";

export default function Home() {
  return (
    <>
      <h1>Home Page </h1>

      <Games />
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
/*<Genre />
<ScreeShots />
<DetailsGames />
<Platforms />*/
