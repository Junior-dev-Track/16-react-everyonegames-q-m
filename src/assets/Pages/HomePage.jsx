import React from "react";
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
    </>
  );
}
/*<Genre />
<ScreeShots />
<DetailsGames />
<Platforms />*/
