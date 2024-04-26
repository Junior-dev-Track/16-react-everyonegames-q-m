import React from "react";
import { useState, useEffect } from "react";
import API_KEY from "../Api/apikey";
import Games from "../Components/Games";
import Platforms from "../Components/Platforms";
import DetailsGames from "../Components/DetailsGames";
import ScreeShots from "../Components/ScreenShots";

export default function Home() {
  return (
    <>
      <h1>Home Page </h1>
      <Platforms />
      <Games />
      <DetailsGames />
      <ScreeShots />
    </>
  );
}
